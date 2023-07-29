import React from 'react';
import Fixture from './Fixture';
import MatchDate from './MatchDate';
import './fixture.css'

const FixtureList = ({fixtures,teams}) => {    
    var matchdatetemp=0; 
    const getHHMMTime=(fullDate)=>{
        const tempdate=new Date(fullDate)
        return tempdate.getHours()+":"+tempdate.getMinutes();
    }
   
    return (
        <div>
           {fixtures.map((fixture,index)=>{
            const matchFullDate=new Date(fixture.kickoff_time)
            const matchdate=matchFullDate.getDate()
            const thisfixture={
                team_h:teams[fixture.team_h-1].name,
                team_a:teams[fixture.team_a-1].name,
                kickoff_time:getHHMMTime(fixture.kickoff_time),
                badge_h:teams[fixture.team_h-1].badge,
                badge_a:teams[fixture.team_a-1].badge                 
            }
            if(matchdate===matchdatetemp){
                return (
                    <div className='fixture-wrapper' key={index}>
                        <Fixture fixture={thisfixture}/>                    
                    </div>
                )                
            }
            matchdatetemp=matchdate
            return(
                <div className='fixture-wrapper' key={index}>
                        <MatchDate matchFullDate={matchFullDate}/>
                        <Fixture fixture={thisfixture}/>                    
                </div>                
            )
            
          })}
        </div>
    );
};

export default FixtureList;