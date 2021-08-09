using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToDoList.Infrastructure.Models;
using ToDoList.Models;
using ToDoList.Domain;
using ToDoList.Domain.Interfaces;
using ToDoList.Domain.Models;

namespace ToDoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ToDoesController : ControllerBase
    {
        private readonly IToDoListSerivce _toDoListSerivce;

        public ToDoesController(IToDoListSerivce toDoListSerivce)
        {
            _toDoListSerivce = toDoListSerivce;
        }

        // GET: api/ToDoes
        [HttpGet]
        public async Task<IActionResult> GetToDos()
        {
            var result = await _toDoListSerivce.GetToDoList();
            return Ok(result);
        }

        // GET: api/ToDoes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetToDo(int id)
        {
            var result = await _toDoListSerivce.GetToDo(id);
            return Ok(result);
        }

        // PUT: api/ToDoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutToDo([FromRoute] int id, ToDoDto toDo)
        {
            toDo.Id = id;
            await _toDoListSerivce.Update(toDo);
            return Ok(204);
        }

        // POST: api/ToDoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<IActionResult> PostToDo(CreateToDoDTO toDo)
        {
            await _toDoListSerivce.Create(toDo);
            return Ok(201);
        }

        //// DELETE: api/ToDoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteToDo(int id)
        {
            await _toDoListSerivce.Delete(id);
            return Ok(204);
        }
    }
}
