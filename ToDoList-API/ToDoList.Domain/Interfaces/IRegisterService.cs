using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Domain.Models;

namespace ToDoList.Domain.Interfaces
{
    public interface IRegisterService
    {
        Task SignUp(SignUpDTO signInDto);
    }
}