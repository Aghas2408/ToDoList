using System;
using System.Collections.Generic;
using System.Text;

namespace ToDoList.Domain.Models
{
    public class CreateToDoDTO : BaseDTO
    {
        public int UserId { get; set; }
    }
}
