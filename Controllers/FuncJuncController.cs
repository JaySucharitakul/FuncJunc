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

        [Route("fjapi/Save")]
        [HttpPut]
        public async Task<IActionResult> SaveToDB(SaveLoadCredentials saveLoadCredentials)
        {
            var xmlDecoded = Base64Decode(saveLoadCredentials.xml);
            Console.WriteLine($"username: {saveLoadCredentials.username}, xml: {xmlDecoded}");

            con = new SqlConnection("Data Source=desktop-4j9pqo1\\jayserver;Initial Catalog=funcjunc;Integrated Security=True");
            con.Open();
            var cmd = new SqlCommand("update dbo.SaveData set savedata='" + xmlDecoded
                + "', datetime=GETDATE() where username='" + saveLoadCredentials.username + "'", con);
            await Task.FromResult("Done");
            var da = new SqlDataAdapter(cmd);
            var dt = new DataTable();
            da.Fill(dt);
            return Ok();
        }

        [Route("fjapi/Load")]
        [HttpPost]
        public async Task<IActionResult> LoadFromDB(SaveLoadCredentials saveLoadCredentials)
        {
            con = new SqlConnection("Data Source=desktop-4j9pqo1\\jayserver;Initial Catalog=funcjunc;Integrated Security=True");
            con.Open();
            var cmd = new SqlCommand(
                "Select savedata from dbo.SaveData where username='" +
                saveLoadCredentials.username + "'", con);
            await Task.FromResult("Done");
            var da = new SqlDataAdapter(cmd);
            var dt = new DataTable();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {   
                dt.Clear();
                da.Fill(dt);
                con.Close();
                return Ok(Base64Encode(dt.Rows[0][0].ToString()));
            }
            return Unauthorized();
        }

        [Route("fjapi/Test")]
        [HttpGet]
        public async Task<IActionResult> GetTest()
        {
            await Task.FromResult("Done");
            return Ok("This is a test");
        }

        private static string Base64Encode(string plainText)
        {
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(plainText);
            return System.Convert.ToBase64String(plainTextBytes);
        }

        private static string Base64Decode(string base64EncodedData)
        {
            var base64EncodedBytes = System.Convert.FromBase64String(base64EncodedData);
            return System.Text.Encoding.UTF8.GetString(base64EncodedBytes);
        }
    }
}
