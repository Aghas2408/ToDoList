using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Domain.Exceptions;
using ToDoList.Domain.Interfaces;
using ToDoList.Domain.Models;

namespace ToDoList.Domain.Services
{
    public class RegisterService : IRegisterService
    {
        private readonly IUserService _userService;
        private readonly IPasswordHasherService _passwordHasherService;

        public RegisterService(IUserService userService, IPasswordHasherService passwordHasherService)
        {
            _userService = userService;
            _passwordHasherService = passwordHasherService;
        }

        public async Task SignUp(SignUpDTO signUpDto)
        {
            if (signUpDto.Password != signUpDto.ConfirmPassword)
            {
                throw new PasswordConfirmation("password confirmation does not match");
            }

            string passowrdHash = _passwordHasherService.HashPassword(signUpDto.Password);
            UserDTO registrationUser = new UserDTO()
            {
                Email = signUpDto.Email,
                UserName = signUpDto.UserName,
                PasswordHash = passowrdHash
            };

            await _userService.Create(registrationUser);
        }
    }
}