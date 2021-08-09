using System.Collections.Generic;
using System.Threading.Tasks;
using Mapster;
using ToDoList.Domain.Interfaces;
using ToDoList.Domain.Models;
using ToDoList.Infrastructure.Models;
using ToDoList.Models;

namespace ToDoList.Domain.Services
{
    public class ToDoListService : IToDoListSerivce
    {
        private readonly IRepository<ToDo> _todoRepository;

        public ToDoListService(IRepository<ToDo> todoRepository)
        {
            _todoRepository = todoRepository;
        }

        public async Task Create(CreateToDoDTO createToDo)
        {
            var toDo = createToDo.Adapt<ToDo>();
            await _todoRepository.Create(toDo);
        }

        public async Task Delete(int id)
        {
            await _todoRepository.Delete(id);
        }

        public async Task<ToDoDto> GetToDo(int id)
        {
            var todo = await _todoRepository.GetById(id);
            var todoDto = todo.Adapt<ToDoDto>();
            return todoDto;
        }

        public async Task<List<ToDoDto>> GetToDoList()
        {
            var todoList = await _todoRepository.GetAll();
            var todoListDto = todoList.Adapt<List<ToDoDto>>();

            return todoListDto;
        }

        public async Task<int> Update(ToDoDto updateToDo)
        {
            var ToDo = updateToDo.Adapt<ToDo>();
            return await _todoRepository.Update(ToDo);
        }
    }
}
