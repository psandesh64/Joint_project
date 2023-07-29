import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFixtures,removeFixtures } from "./fixtureSlice";

import FixtureList from "./components/FixtureList";

export const FixtureView = () => {
  const [gameweek,setGameweek]=useState(1);
  const fixture = useSelector((state) => state.fixture);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFixtures(gameweek));
    return () => {
      dispatch(removeFixtures());
    };
  }, [gameweek]);

  const handleNextClick=()=>{
    if(gameweek<38){
      setGameweek(prevGameweek=>prevGameweek+1)
    }
  }
  const handlePreviousClick=()=>{
    if(gameweek>1){
      setGameweek(prevGameweek=>prevGameweek-1)
    }
  }

  return (
    <div>
      <div className="fixture-header">
      <div><h1>Fixtures</h1></div>
      <div className="fixture-gameweek">
        <div className="bcontainer"><button onClick={handlePreviousClick} className={gameweek>1?'button-8':'invisible'}>{"< "} Previous</button></div>
        <div className="fixture-gameweek-title">Gameweek {gameweek}</div>
        <div className="bcontainer rightbutton"><button onClick={handleNextClick} className={gameweek<38?'button-8':'invisible'}>Next {" >"}</button></div>
        
      </div>
      <div className="fixture-txt12">All times are shown in your local Time</div>
      </div>
      
      {fixture.loading && <div>Loading...</div>}
      {!fixture.loading && fixture.error ? (
        <div>Error: {fixture.error}</div>
      ) : null}
      {!fixture.loading &&
      fixture.fixtures.length  ? (
        <div>
          <FixtureList fixtures={fixture.fixtures} teams={fixture.teams}/>
        </div>
      ) : null}      
    </div>
  );
};
