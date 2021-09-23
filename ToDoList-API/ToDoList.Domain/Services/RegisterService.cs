using System;
using System.Threading.Tasks;
using Mapster;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Domain.Exceptions;
using ToDoList.Domain.Interfaces;
using ToDoList.Domain.Models;
using ToDoList.Infrastructure;
using ToDoList.Infrastructure.Models;

namespace ToDoList.Domain.Services
{
    public class RegisterService : IRegisterService
    {
        private readonly IUserService _userService;
        private readonly IPasswordHasherService _passwordHasherService;
        private readonly JWTHandler _jwtHandler;

        public RegisterService(IUserService userService, IPasswordHasherService passwordHasherService, JWTHandler jwtHandler)
        {
            _userService = userService;
            _passwordHasherService = passwordHasherService;
            _jwtHandler = jwtHandler;
        }

        public async Task<AuthResponseDTO> SignUp(SignUpDTO signUpDto)
        {
            if (signUpDto.Password != signUpDto.ConfirmPassword)
            {
                throw new PasswordConfirmationException("password confirmation does not match");
            }

            string passowrdHash = _passwordHasherService.HashPassword(signUpDto.Password);
            UserDTO registrationUser = new UserDTO()
            {
                Email = signUpDto.Email,
                UserName = signUpDto.UserName,
                PasswordHash = passowrdHash
            };

            await _userService.Create(registrationUser);
            var user = registrationUser.Adapt<User>();
            var responseDTO = await _jwtHandler.Authenticate(user);
            var response = responseDTO.Adapt<AuthResponseDTO>();

            return response;
        }
    }
}