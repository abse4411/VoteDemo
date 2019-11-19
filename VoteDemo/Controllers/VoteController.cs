using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VoteDemo.Models;

namespace VoteDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VoteController : Controller
    {
        // GET: api/Vote
        [HttpGet]
        public IActionResult Get()
        {
            List<VoteInfo> voteInfos=new List<VoteInfo>();
            voteInfos.Add(new VoteInfo
            {
                TeamName = "ABC",
                Votes = 12
            });
            voteInfos.Add(new VoteInfo
            {
                TeamName = "QWE",
                Votes = 40
            });
            voteInfos.Add(new VoteInfo
            {
                TeamName = "ASD",
                Votes = 1
            });
            voteInfos.Add(new VoteInfo
            {
                TeamName = "FGH",
                Votes = 5
            });
            return Json(voteInfos);
        }

        // GET: api/Vote/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Vote
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Vote/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
