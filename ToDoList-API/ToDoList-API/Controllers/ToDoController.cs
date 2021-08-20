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
    public class ToDoController : ControllerBase
    {
        private readonly IToDoListSerivce _toDoListSerivce;
        private readonly IUserService _userService;

        public ToDoController(IToDoListSerivce toDoListSerivce, IUserService userService)
        {
            _toDoListSerivce = toDoListSerivce;
            _userService = userService;
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetToDos()
        {
            var userId = _userService.GetUserId();
            var result = await _toDoListSerivce.GetToDoList(userId);
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetToDo(int id)
        {
            var result = await _toDoListSerivce.GetToDo(id);
            return Ok(result);
        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutToDo([FromRoute] int id, ToDoDTO toDo)
        {
            toDo.UserId = _userService.GetUserId();
            toDo.Id = id;
            await _toDoListSerivce.Update(toDo);
            return NoContent();
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> PostToDo(CreateToDoDTO toDo)
        {
            var userId = _userService.GetUserId();
            await _toDoListSerivce.Create(toDo, userId);
            return Ok(toDo);
        }

        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteToDo(int id)
        {
            await _toDoListSerivce.Delete(id);
            return Ok(id);
        }
    }
}