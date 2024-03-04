import { fetchPlayers } from "@/app/lib/data";
import PlayersPage from "@/containers/PlayersPage";

export default async function PlayersPageContainer() {
  const players = await fetchPlayers();
  return (
    <PlayersPage players={players} />
  )
}
