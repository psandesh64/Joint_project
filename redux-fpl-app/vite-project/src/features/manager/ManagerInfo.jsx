import React from "react";
import JoinedLeagueTable from "./JoinedLeagueTable";

const ManagerInfo = ({ manager }) => {
    const columns = [
        { header: "Rank", accessorKey: "rank" },
        { header: "Name", accessorKey: "name" },
      ];

  return (
      <div>
        <p>
          {manager.player_first_name} {manager.player_last_name}
        </p>
        <p>{manager.name}</p>
        <div>Overall Points {manager.summary_overall_points}</div>
        <div>Overall Rank {manager.summary_overall_rank}</div>
        <div>Gameweek Points {manager.summary_overall_points}</div>
        <div>Leagues</div>
        <div>
            <p>Classic Leagues</p>
            <JoinedLeagueTable columns={columns} data={manager.leagues.classic}/>
        </div>
        
      </div> 
  );
};

export default ManagerInfo;
