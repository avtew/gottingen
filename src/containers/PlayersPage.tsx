'use client'

import { useState } from "react";
import Button from "@/components/Button";
import Column from "@/components/Column";
import ModalForm from "@/components/ModalForm";
import PlayersList from "@/components/PlayersList";

type PlayersPagePropsType = {
  players: any
}

const columns = [
  { id: '1', icon:'info', title: 'FIDE ID' },
  { id: '2', icon:'info', title: 'Name' },
  { id: '3', icon:'info', title: 'Surname' },
  { id: '4', icon:'info', title: 'Birth Date' },
  { id: '5', icon:'info', title: 'Gender' },
  { id: '6', icon:'info', title: 'Country' },
  { id: '7', icon:'info', title: 'Rating' },
];

export default function PlayersPage(props: PlayersPagePropsType) {
  const [isOpen, setOpen] = useState(false);
  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }
  return (
    <section className="flex items-center w-full">
      {isOpen
        ? <ModalForm isOpen={isOpen} onClick={closeModal} />
        : <div className="w-full">
            <div className="pb-4 border-b">
              <Button type={'button'} title={'Add player'} icon={'add'} onClick={openModal} />
            </div>
            <div className="flex flex-col justify-between w-ful">
              <div className="flex p-2 text-slate-700 text-sm font-bold border-b">
                {columns.map(col => <Column key={col.id} icon={col.icon} title={col.title} />)}
              </div>
              <PlayersList players={props.players} />
            </div>
          </div>}
    </section>
  )
}