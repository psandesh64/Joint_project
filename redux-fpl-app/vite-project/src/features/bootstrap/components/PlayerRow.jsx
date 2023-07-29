import { teams } from "../../../data/teams";

const PlayerRow = ({player}) => {
    return (
        <tr className='PlayersRowContainer'>
            <td className='InfoIcon'>I</td>
            <td className='PlayerDetail'>
                <div className='PlayerShirtCcontainer'>
                    <img className='PlayerShirt' src={'https://fantasy.premierleague.com/dist/img/shirts/standard/'+teams[player.team-1].shirt}/>
                </div>
                <div className='PlayerNameTeamPos'>
                    <div className="PlayerSecondName">{player.second_name}</div>
                    <div><span>{teams[player.team-1].name}</span><span>{player.element_type}</span></div>
                </div>
            </td>
            <td className='PlayerStats'>{player.form}</td>
            <td className='PlayerStats'>{player.now_cost}</td>
            <td className='PlayerStats'>{player.selected_by_percent}</td>
            <td className='PlayerStats'>{player.event_points}</td>
            <td className='PlayerStats'>{player.total_points}</td>
            <td className='PlayerStats'>{player.ict_index}</td>
            <td className='PlayerStats'>{player.influence}</td>
            <td className='PlayerStats'>{player.creativity}</td>
            <td className='PlayerStats'>{player.threat}</td>
            <td className='PlayerStats'>{player.transfer_in_event}</td>
            <td className='PlayerStats'>{player.transfer_out_event}</td>
            <td className='PlayerStats'>{player.bonus}</td>                       
        </tr>
    );
};

export default PlayerRow;