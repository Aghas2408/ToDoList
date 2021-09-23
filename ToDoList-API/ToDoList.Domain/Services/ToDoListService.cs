using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task Create(CreateToDoDTO createToDo, int id)
        {
            createToDo.UserId = id;
            var toDo = createToDo.Adapt<ToDo>();
            await _todoRepository.Create(toDo);
        }

        public async Task Delete(int id)
        {
            await _todoRepository.Delete(id);
        }

        public async Task<ToDoDTO> GetToDo(int id)
        {
            var todo = await _todoRepository.GetById(id);
            var todoDto = todo.Adapt<ToDoDTO>();
            return todoDto;
        }

        public async Task<List<ToDoDTO>> GetToDoList(int id)
        {
            var todoList = await _todoRepository.GetAll(i => i.UserId == id);
            var todoListDto = todoList.Adapt<List<ToDoDTO>>();

            return todoListDto;
        }

        public async Task<int> Update(ToDoDTO updateToDo)
        {
            var ToDo = updateToDo.Adapt<ToDo>();
            return await _todoRepository.Update(ToDo);
        }
    }
}