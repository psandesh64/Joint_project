const Fixture=({fixture})=>{
    return(
        <div className='fixture_rows'>
            <div className='fixture_team'>
                <div className='fixture_teamName team_home'>{fixture.team_h}</div>
                <div className='fixture_fixtureBadge'>
                    <img className='badge' src={"/image/"+fixture.badge_h}/>
                </div>
            </div>            
            <div className='fixture_fixtureKOTime'>{fixture.kickoff_time}</div>
            <div className='fixture_team'>
                <div className='fixture_fixtureBadge'>
                <img className='badge' src={"/image/"+fixture.badge_a}/>
                </div>
                <div className='fixture_teamName'>{fixture.team_a}</div>
            </div>

        </div>
    )
}
export default Fixture