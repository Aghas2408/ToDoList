using System.Collections.Generic;
using System.Threading.Tasks;
using ToDoList.Domain.Models;
using ToDoList.Models;

namespace ToDoList.Domain.Interfaces
{
    public interface IToDoListSerivce
    {
        Task<List<ToDoDTO>> GetToDoList(string id);

        Task<ToDoDTO> GetToDo(int id);

        Task Create(CreateToDoDTO toDo, string id);

        Task Delete(int id);

        Task<int> Update(ToDoDTO toDo);
    }
}
