'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { signIn } from 'next-auth/react';
import Avatar from './Avatar';
import Button from './Button';

type HeaderPropsType = {
  isAuth: boolean
  data: any
}

function onClick() {
  signIn('google');
}

export function Header(props: HeaderPropsType) {
  return (
    <header className='flex justify-between items-center gap-8 h-12 px-4 py-2 border-b'>
      <Link href="/">
        <Image src='/logo.png' width='120' height='26' alt='Logo' />
      </Link>
      <Link href={'/cabinet'}>
        {props.isAuth
          ? <Avatar image={props.data.user.image} />
          : <Button type='button' title={'Sign In'} icon={'login'} onClick={onClick} />
        }
      </Link>
    </header >
  )
}