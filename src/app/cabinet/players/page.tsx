import { fetchPlayers } from "@/app/lib/data";
import Button from "@/components/Button";
import PlayersList from "@/components/PlayersList";

type ColPropsType = {
  key: string
  title:string
}

const columns = [
  { id: '1', title: 'FIDE ID'},
  { id: '2', title: 'Name'},
  { id: '3', title: 'Surname'},
  { id: '4', title: 'Birth Date'},
  { id: '5', title: 'Gender'},
  { id: '6', title: 'Country'},
  { id: '7', title: 'Rating'},
];

function Col(props: ColPropsType) {
  return (
    <span className="w-full">{props.title}</span> 
  )
}

export default async function PlayersPage() {
  const players = await fetchPlayers();
  return (
    <section>
      <div className="pb-4 border-b">
        <Button title={'Add player'} />
      </div>
      <div className="flex flex-col justify-between w-full">
        <div className="flex p-2 text-sm border-b">
          {columns.map(col => <Col key={col.id} title={col.title} />)}
        </div>
        <PlayersList players={players} />
      </div>
    </section>
  )
}
