using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Linq;
using VoteDemo.Models;

namespace VoteDemo.XML
{
    public class TeamService
    {
        public async Task<IList<VoteInfo>> GetTeamVoteInfosAsync()
        {
            IList<VoteInfo> voteInfos=new List<VoteInfo>();
            try
            {
                //XDocument document = XDocument.LoadAsync("asdas");
                XmlDocument document =new  XmlDocument();
                document.Load("./wwwroot");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return voteInfos;
        }


    }
}
