using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VoteDemo.Models;
using VoteDemo.XML;

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
            TeamService service=new TeamService();
            IList<VoteInfo> voteInfos = service.GetTeamVoteInfos();
            return Json(voteInfos);
        }

        // GET: api/Vote/5
        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(int id)
        {
            TeamService service = new TeamService();
            if (service.Vote(id))
            {
                return Json("success");
            }
            else
            {
                return Json("failed");
            }
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
