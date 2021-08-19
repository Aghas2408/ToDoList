using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ToDoList.Domain.Models;

namespace ToDoList.Domain.Interfaces
{
    public interface IAuthService
    {
        Task<AuthResponseDTO> SignIn(SignInDTO signInDto);
    }
}
