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
        private const string FileName = "./wwwroot/xml/teams.xml";
        public IList<VoteInfo> GetTeamVoteInfos()
        {
            IList<VoteInfo> voteInfos=new List<VoteInfo>();
            try
            {
                //XDocument document = XDocument.LoadAsync("asdas");
                XmlDocument document =new  XmlDocument();
                document.Load(FileName);
                var teams = document.GetElementsByTagName("team");
                foreach (XmlNode team in teams)
                {
                    string name= team["name"].InnerText;
                    if (Int32.TryParse(team["vote"].InnerText, out var vote) && Int32.TryParse(team.Attributes["id"].Value,out var id))
                    {
                        voteInfos.Add(new VoteInfo
                        {
                            TeamName = name,
                            Id=id,
                            Votes = vote
                        });
                    }
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return voteInfos;
        }

        public bool Vote(int id)
        {
            bool result = false;
            try
            {
                //XDocument document = XDocument.LoadAsync("asdas");
                XmlDocument document = new XmlDocument();
                document.Load(FileName);
                var node = document.SelectSingleNode($"/teams/team[@id='{id}']");
                if (node != null)
                {
                    if (Int32.TryParse(node["vote"].InnerText, out var vote))
                    {
                        node["vote"].InnerText = (vote + 1).ToString();
                        document.Save(FileName);
                        result = true;
                    }
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }


            return result;
        }

    }
}
