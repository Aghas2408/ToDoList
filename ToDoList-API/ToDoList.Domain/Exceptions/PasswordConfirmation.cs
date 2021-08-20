using System;
using System.Collections.Generic;
using System.Text;

namespace ToDoList.Domain.Exceptions
{
    public class PasswordConfirmation : Exception
    {
        public PasswordConfirmation(string message)
            : base(message)
        { }
    }
}
