using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Domain.Interfaces;
using ToDoList.Domain.Models;
using ToDoList.Infrastructure;

namespace ToDoList_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authSerivce;
        private readonly IRegisterService _registerService;

        public AuthController(IAuthService authSerivce, IRegisterService registerService)
        {
            _authSerivce = authSerivce;
            _registerService = registerService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] SignInDTO loginRequest)
        {
            var loginResponse = await _authSerivce.SignIn(loginRequest);
            return Ok(loginResponse);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] SignUpDTO registerRequest)
        {
            await _registerService.SignUp(registerRequest);
            return Ok();
        }
    }
}