using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ToDoList.Domain.Models;

namespace ToDoList.Domain.Interfaces
{
    public interface IUserService
    {
        Task<List<UserDTO>> GetAll();

        Task Create(UserDTO user);

        Task<UserDTO> GetById(int userId);
    }
}