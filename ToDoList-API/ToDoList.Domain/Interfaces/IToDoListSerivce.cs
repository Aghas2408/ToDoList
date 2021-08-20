using System.Collections.Generic;
using System.Threading.Tasks;
using ToDoList.Domain.Models;
using ToDoList.Models;

namespace ToDoList.Domain.Interfaces
{
    public interface IToDoListSerivce
    {
        Task<List<ToDoDTO>> GetToDoList(int id);

        Task<ToDoDTO> GetToDo(int id);

        Task Create(CreateToDoDTO toDo, int id);

        Task Delete(int id);

        Task<int> Update(ToDoDTO toDo);
    }
}