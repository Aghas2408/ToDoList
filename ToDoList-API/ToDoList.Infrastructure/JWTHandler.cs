using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using ToDoList.Domain.Models;
using ToDoList.Infrastructure.Models;

namespace ToDoList.Infrastructure
{
    public class JWTHandler
    {
        private readonly AuthenticationConfiguration _configuration;

        public JWTHandler(AuthenticationConfiguration configuration)
        {
            _configuration = configuration;
        }

        public Task<AuthResponse> Authenticate(User user)
        {
            string accessToken = GenerateAccessToken(user);
            string refreshToekn = GenerateRefreshToken();

            return  Task.FromResult(new AuthResponse()
            {
                AccessToken = accessToken,
                RefreshToken = refreshToekn
            });
        }
        public string GenerateAccessToken(User user)
        {
            List<Claim> claims = new List<Claim>()
            {
                new Claim("Id", user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Name, user.UserName),
            };

            return GenerateToken(
                _configuration.AccessTokenSecret,
                _configuration.Issuer,
                _configuration.Audience,
                _configuration.AccessTokenExpirationMinutes,
                claims);
        }

        public string GenerateRefreshToken()
        {
            return GenerateToken(
                _configuration.RefreshTokenSecret,
                _configuration.Issuer,
                _configuration.Audience,
                _configuration.RefreshTokenExpirationMinutes);
        }
        private string GenerateToken(string secretKey, string issuer, string audience, double expirationMinutes, IEnumerable<Claim> claims = null)
        {
            SecurityKey key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
            SigningCredentials credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            JwtSecurityToken token = new JwtSecurityToken(
                issuer,
                audience,
                claims,
                DateTime.UtcNow,
                DateTime.UtcNow.AddMinutes(expirationMinutes),
                credentials
                );

            return new JwtSecurityTokenHandler().WriteToken(token);

        }
    }
}
