import React from 'react';
import Link from 'next/link'

type LinkPropsType = {
  key: string
  title: string
  icon: string
  href: string
}

const links = [
  { id: '1', title: 'Tournaments', icon: 'trophy', href: '/cabinet/tournaments', },
  { id: '2', title: 'Games', icon: 'handshake', href: '/cabinet/games' },
  { id: '3', title: 'Players', icon: 'badge', href: '/cabinet/players' },
];

function NavLink(props: LinkPropsType) {
  return (
    <Link className='flex items-center gap-3 p-1.5 px-3 text-slate-700 text-sm font-bold border-l-4 border-transparent hover:border-l-4 hover:border-yellow-300' href={props.href}>
      <span className="material-symbols-rounded">{props.icon}</span>
      {props.title}
    </Link>
  )
}

export default function Aside() {
  return (
    <div>
      <nav className='flex flex-col gap-1 h-full pr-5 border-r'>
        {links.map(link => <NavLink key={link.id} title={link.title} icon={link.icon} href={link.href} />)}
      </nav>
    </div>
  )
}