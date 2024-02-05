import React from 'react';
import Link from 'next/link'
// import Avatar from './Avatar';

type LinkPropsType = {
  key: string
  title: string
  href: string
}

const links = [
  { id: '1', title: 'Tournaments', href: '/cabinet/tournaments', },
  { id: '2', title: 'Games', href: '/cabinet/games' },
  { id: '3', title: 'Players', href: '/cabinet/players' },
];

function NavLink(props: LinkPropsType) {
  return <Link className='p-1.5 text-sm rounded hover:bg-red-50' href={props.href}>{props.title}</Link>
}

export default function Aside() {
  return (
    <nav className='flex flex-col gap-2 p-4 pr-5 border-r'>
      {links.map(link => <NavLink key={link.id} title={link.title} href={link.href} />)}
    </nav>
  )
}