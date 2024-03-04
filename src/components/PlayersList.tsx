type PlayerPropsType = {
  id: string
  fideid: string
  name: string
  surname: string
  year: string
  gender: string
  country: string
  elo: string
}

type PlayersListPropsType = {
  players: any
}

function Player(props: PlayerPropsType) {
  return (
    <div className="flex justify-between w-full p-2 text-sm border-b border-slate-100 hover:bg-yellow-50 cursor-pointer">
      <span className="w-full">{props.fideid}</span>
      <span className="w-full">{props.name}</span>
      <span className="w-full">{props.surname}</span>
      <span className="w-full">{props.year}</span>
      <span className="w-full">{props.gender}</span>
      <span className="w-full">{props.country}</span>
      <span className="w-full">{props.elo}</span>
    </div> 
  )
}

export default function PlayersList(props: PlayersListPropsType) {
  return (
    <div className="flex flex-col">
      {props.players.map((player: PlayerPropsType ) => <Player key={player.id} id={player.id} fideid={player.fideid} name={player.name} surname={player.surname} year={player.year} gender={player.gender} country={player.country} elo={player.elo} />)}
    </div> 
  )
}