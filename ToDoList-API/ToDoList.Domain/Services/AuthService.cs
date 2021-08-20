using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Mapster;
using ToDoList.Domain.Exceptions;
using ToDoList.Domain.Interfaces;
using ToDoList.Domain.Models;
using ToDoList.Infrastructure;
using ToDoList.Infrastructure.Models;

namespace ToDoList.Domain.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUserService _userService;
        private readonly IPasswordHasherService _passwordHasherService;
        private readonly JWTHandler _jwtHandler;

        public AuthService(IUserService userService, IPasswordHasherService passwordHasherService, JWTHandler jwtHandler)
        {
            _userService = userService;
            _passwordHasherService = passwordHasherService;
            _jwtHandler = jwtHandler;
        }

        public async Task<AuthResponseDTO> SignIn(SignInDTO signInDto)
        {
            var users = await _userService.GetAll();
            var userDTO = users.Find(o => o.UserName == signInDto.UserName);
            if (userDTO == null)
            {
                throw new UserNotFoud("User with this username not found");
            }

            bool isCorrectPassword = _passwordHasherService.VerifyPassword(signInDto.Password, userDTO.PasswordHash);
            if (!isCorrectPassword)
            {
                throw new PasswordConfirmation("password confirmation does not match");
            }

            var user = userDTO.Adapt<User>();
            var responseDTO = await _jwtHandler.Authenticate(user);
            var response = responseDTO.Adapt<AuthResponseDTO>();

            return response;
        }
    }
}