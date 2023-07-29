import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchmanager, removeManager } from "./managerSlice";
import { json } from "react-router-dom";
import ManagerInfo from "./ManagerInfo";
import JoinedLeagueTable from "./JoinedLeagueTable";



export const ManagerView = () => {
  const [managerid,setManagerid]=useState(1449447);
  const manager = useSelector((state) => state.manager);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchmanager(managerid))
    return () => {
        dispatch(removeManager())
      
    };
  }, [managerid]);
  const columns = [
    { header: "Rank", accessorKey: "rank" },
    { header: "Name", accessorKey: "name" },
  ];

  return (
    <div> 
      {manager.loading && <div>Loading...</div>}
      {!manager.loading && manager.error ? (
        <div>Error: {manager.error}</div>
      ) : null}
      {!manager.loading && (manager.manager.leagues!=undefined)&& (manager.manager.leagues.classic!=undefined)? (
        <div>
            <ManagerInfo manager={manager.manager}/>                         
        </div>
      ) : null}
      
     
    </div>
  );
};
