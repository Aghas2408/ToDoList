using System;
using System.Collections.Generic;
using System.Text;

namespace ToDoList.Domain.Models
{
    public class AuthResponse
    {
        public string AccessToken { get; set; }

        public string RefreshToken { get; set; }
    }
}
