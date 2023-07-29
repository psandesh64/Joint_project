const baseURL = "https://fantasy.premierleague.com/api/";
const proxyURL = "https://corsproxy.io/?";
/**
 * reqArgs={
 * type,
 * eventid,
 * elementid,
 * managerid,
 * leagueid,
 * pagenum, 
 * }
 * 
 
 */

const getURL = (reqArgs) => {
  var url = "";
  switch (reqArgs.type) {
    case "BOOTSTRAP":
      url = "bootstrap-static/";
      break;
    case "FIXTURES":
      url = "fixtures/?event=" + reqArgs.eventid;
      break;
    case "ELEMENT_SUMMARY":
      url = "element-summary/" + reqArgs.elementid + "/";
      break;
    case "GAMEWEEK":
      url = "event/" + reqArgs.eventid + "/live/";
      break;
    case "MANAGER":
      url = "entry/" + reqArgs.managerid + "/";
      break;
    case "MANAGER_HISTORY":
      url = "entry/" + reqArgs.managerid + "/history/";
      break;
      CLASSIC_LEAGUE_STANDINGS;
    case "CLASSIC_LEAGUE_STANDINGS":
      url =
        "leagues-classic/" +
        reqArgs.leagueid +
        "/standings/?page_standings=" +
        reqArgs.pagenum;
      break;
    case "TEAMS_BY_GAMEWEEK":
      url = "entry/" + reqArgs.managerid + "/event/" + reqArgs.eventid + "/";
      break;
  }
  return proxyURL + encodeURIComponent(baseURL + url);
};
export default getURL;
