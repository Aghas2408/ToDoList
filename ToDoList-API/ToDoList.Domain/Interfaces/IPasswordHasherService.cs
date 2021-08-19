﻿using System;
using System.Collections.Generic;
using System.Text;

namespace ToDoList.Domain.Interfaces
{
    public interface IPasswordHasherService
    {
        string HashPassword(string password);

        bool VerifyPassword(string password, string passwordHash);
    }
}
