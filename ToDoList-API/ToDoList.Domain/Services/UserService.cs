using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Mapster;
using ToDoList.Domain.Interfaces;
using ToDoList.Domain.Models;
using ToDoList.Infrastructure.Models;

namespace ToDoList.Domain.Services
{
    public class UserService : IUserService
    {
        private readonly IRepository<User> _userRepository;

        public UserService(IRepository<User> userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task Create(UserDTO user)
        {
            var _user = user.Adapt<User>();
            await _userRepository.Create(_user);
        }

        public async Task<List<UserDTO>> GetAll()
        {
            var users = await _userRepository.GetAll();
            var usersDto = users.Adapt<List<UserDTO>>();

            return usersDto;
        }

        public async Task<UserDTO> GetById(int userId)
        {
            var user = await _userRepository.GetById(userId);
            var userDTO = user.Adapt<UserDTO>();
            return userDTO;
        }
    }
}