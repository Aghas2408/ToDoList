using System;
using System.Collections.Generic;
using System.Text;

namespace ToDoList.Domain.Exceptions
{
    public class UserNotFoudException : Exception
    {
        public UserNotFoudException(string message)
            : base(message)
        { }
    }
}
