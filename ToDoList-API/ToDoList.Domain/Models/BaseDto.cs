using System;
using System.Collections.Generic;
using System.Text;

namespace ToDoList.Domain.Models
{
    public class BaseDTO
    {
        public string ToDoName { get; set; }

        public bool Checked { get; set; }
    }
}