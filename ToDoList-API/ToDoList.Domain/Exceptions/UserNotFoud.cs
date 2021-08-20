using System;
using System.Collections.Generic;
using System.Text;

namespace ToDoList.Domain.Exceptions
{
    public class UserNotFoud : Exception
    {
        public UserNotFoud(string message)
            : base(message)
        { }
    }
}
