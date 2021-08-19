using System;
using System.Collections.Generic;
using System.Text;

namespace ToDoList.Infrastructure
{
    public class AuthenticationConfiguration
    {
        public string AccessTokenSecret { get; set; }

        public int AccessTokenExpirationMinutes { get; set; }
         
        public string Issuer { get; set; }

        public string Audience { get; set; }

        public string RefreshTokenSecret { get; set; }

        public double RefreshTokenExpirationMinutes { get; set; }
    }
}
