using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FuncJuncAPI.Models
{
    public class LoginCredentials
    {
        public string username { get; set; }
        public string password { get; set; }
        public string email { get; set; }
    }

    public class SaveLoadCredentials
    {
        public string email { get; set; }
        public string xml { get; set; }
    }
}
