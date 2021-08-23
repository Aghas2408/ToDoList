using System;
using System.Collections.Generic;
using System.Text;

namespace ToDoList.Domain.Exceptions
{
    public class PasswordConfirmationException : Exception
    {
        public PasswordConfirmationException(string message)
            : base(message)
        { }
    }
}
