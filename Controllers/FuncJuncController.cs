using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FuncJuncAPI.Models;
using Microsoft.Data.SqlClient;
using System.Data;

namespace FuncJuncAPI.Controllers
{
    //[Route("fjapi/[controller]")]
    [ApiController]
    public class FuncJuncController : ControllerBase
    {

        SqlConnection con;
        SqlCommand cmd;

        [Route("fjapi/Login")]
        [HttpPost]
        public async Task<IActionResult> PostLogin(LoginCredentials loginCredentials)
        {
            Console.WriteLine($"username: {loginCredentials.username}, password: {loginCredentials.password}");
           
            con = new SqlConnection("Data Source=desktop-4j9pqo1\\jayserver;Initial Catalog=funcjunc;Integrated Security=True");
            con.Open();
            cmd = new SqlCommand("Select username,password from dbo.LoginTable where username='" 
                + loginCredentials.username + "'and password='" + loginCredentials.password + "'", con);
            await Task.FromResult("Done");
            var da = new SqlDataAdapter(cmd);
            var dt = new DataTable();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                dt.Clear();
                da.Fill(dt);
                con.Close();
                return Ok();
            }
            return Unauthorized();
        }

        //[Route("fjapi/Save")]
        //[HttpPost]
        //public async Task<IActionResult> SaveToDB(LoginCredentials loginCredentials)
        //{
        //    con = new SqlConnection("Data Source=desktop-4j9pqo1\\jayserver;Initial Catalog=funcjunc;Integrated Security=True");
        //    con.Open();
        //    con.Open();

        //    var cmd = new SqlCommand("update dbo.CloudData set filedata='" + XamlWriter.Save(CanvasArea) + "', datetime=GETDATE() where username='" + Username + "'", con);
        //    var da = new SqlDataAdapter(cmd);
        //    var dt = new DataTable();
        //    da.Fill(dt);
        //    return Unauthorized();
        //}

        [Route("fjapi/Test")]
        [HttpGet]
        public async Task<IActionResult> GetTest()
        {
            await Task.FromResult("Done");
            return Ok("This is a test");
        }
    }
}
