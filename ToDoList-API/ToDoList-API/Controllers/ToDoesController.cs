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
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

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
        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetToDos()
        {
            var userId = HttpContext.User.FindFirst("Id").Value;
            var result = await _toDoListSerivce.GetToDoList(userId);
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
        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutToDo([FromRoute] int id, ToDoDTO toDo)
        {
            toDo.UserId = Int32.Parse(HttpContext.User.FindFirst("Id").Value);
            toDo.Id = id;
            await _toDoListSerivce.Update(toDo);
            return Ok(204);
        }

        // POST: api/ToDoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> PostToDo(CreateToDoDTO toDo)
        {
            var userId = HttpContext.User.FindFirst("Id").Value;
            await _toDoListSerivce.Create(toDo, userId);
            return Ok(toDo);
        }

        //// DELETE: api/ToDoes/5
                [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteToDo(int id)
        {
            await _toDoListSerivce.Delete(id);
            return Ok(id);
        }
    }
}
