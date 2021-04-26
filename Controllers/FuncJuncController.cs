using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FuncJuncAPI.Models;

namespace FuncJuncAPI.Controllers
{
    [Route("fjapi/[controller]")]
    [ApiController]
    public class FuncJuncController : ControllerBase
    {
        [HttpPost]
        public JsonResult Login(LoginCredentials loginCredentials)
        {
            Console.WriteLine($"username: {loginCredentials.username}, password: {loginCredentials.password}");
            if (loginCredentials.username.Equals("jay") &&
                loginCredentials.password.Equals("123"))
            {
                return new JsonResult("{\"result\": \"ok\"}");
            }
            return new JsonResult("{\"result\": \"login not found\"}");
        }
    }
}
