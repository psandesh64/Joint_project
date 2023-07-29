import { teams,positions } from "../../../data/teams";
const PlayerInfo=({player})=>{
  const imgURL='https://fantasy.premierleague.com/dist/img/shirts/standard/'
  return (
  <div className='PlayerDetail'>
      <div className='PlayerShirtCcontainer'>
          <img className='PlayerShirt' src={imgURL+teams[player.team-1].shirt}/>
      </div>
      <div className='PlayerNameTeamPos'>
          <div className="PlayerSecondName">{player.second_name}</div>
          <div className='PlayerTeamPos'>
              <span>{teams[player.team-1].short_name}</span>&nbsp;&nbsp;
              <span>{positions[player.element_type-1]}</span>
          </div>
      </div>
  </div>
  )
}
export const columns=
    [
    { 
        header: "Second Name", 
        accessorKey: "second_name",
        cell: props => (<PlayerInfo player={props.row.original}/>)
    },     
    { header: "Form", accessorKey: "form" },
    { header: "Cost", accessorKey: "now_cost",cell:props=>props.getValue()/10 },
    { header: "Sel.", accessorKey: "selected_by_percent" },
    { header: "GWP", accessorKey: "event_points" },
    { header: "TP", accessorKey: "total_points" },
    { header: "ICT Index", accessorKey: "ict_index" },
    { header: "Influence", accessorKey: "influence" },
    { header: "Creativity", accessorKey: "creativity" },
    { header: "Threat", accessorKey: "threat" },
    { header: "Transfer In", accessorKey: "transfer_in_event" },
    { header: "Transfer Out", accessorKey: "transfer_out_event" },
    { header: "Bonus", accessorKey: "bonus" },
    ];

