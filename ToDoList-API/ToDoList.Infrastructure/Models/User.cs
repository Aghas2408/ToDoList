using System;
using System.Collections.Generic;
using System.Text;
using ToDoList.Models;

namespace ToDoList.Infrastructure.Models
{
    public class User : BaseEntity
    {
        public User()
        {
            ToDos = new HashSet<ToDo>();
        }
        public string Email { get; set; }

        public string UserName { get; set; }

        public string PasswordHash { get; set; }

        public ICollection<ToDo> ToDos { get; set; }
    }
}
