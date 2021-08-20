using System;
using System.Collections.Generic;
using System.Text;

namespace ToDoList.Domain.Models
{
    public class SignUpDTO
    {
        public string Email { get; set; }

        public string UserName { get; set; }

        public string Password { get; set; }

        public string ConfirmPassword { get; set; }
    }
}