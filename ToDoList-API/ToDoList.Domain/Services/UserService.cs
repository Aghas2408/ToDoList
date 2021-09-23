using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Mapster;
using Microsoft.AspNetCore.Http;
using ToDoList.Domain.Exceptions;
using ToDoList.Domain.Interfaces;
using ToDoList.Domain.Models;
using ToDoList.Infrastructure.Models;

namespace ToDoList.Domain.Services
{
    public class UserService : IUserService
    {
        private readonly IRepository<User> _userRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;


        public UserService(IRepository<User> userRepository, IHttpContextAccessor httpContextAccessor)
        {
            _userRepository = userRepository;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task Create(UserDTO user)
        {
            var _user = user.Adapt<User>();
            await _userRepository.Create(_user);
        }

        public async Task<UserDTO> GetById(int userId)
        {
            var user = await _userRepository.GetById(userId);
            var userDTO = user.Adapt<UserDTO>();
            return userDTO;
        }

        public int GetUserId()
        {
            var id = _httpContextAccessor.HttpContext.User.FindFirst("Id").Value;
            if (id != null)
            {
                return Int32.Parse(id);
            }
            else
            {
                throw new UserNotFoudException("User Id in HttpContext not found");
            }
        }
    }
}