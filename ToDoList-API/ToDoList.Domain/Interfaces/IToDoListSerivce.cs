using System.Collections.Generic;
using System.Threading.Tasks;
using ToDoList.Domain.Models;
using ToDoList.Models;

namespace ToDoList.Domain.Interfaces
{
    public interface IToDoListSerivce
    {
        Task<List<ToDoDto>> GetToDoList();

        Task<ToDoDto> GetToDo(int id);

        Task Create(CreateToDoDTO toDo);

        Task Delete(int id);

        Task<int> Update(ToDoDto toDo);
    }
}
