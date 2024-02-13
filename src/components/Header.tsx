'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { signIn } from 'next-auth/react';
import Avatar from './Avatar';

type HeaderPropsType = {
  isAuth: boolean
  data: any
}

export default function SignInBtn() {
  return (
    <div>
      <button
        className='flex gap-2 justify-center items-center w-24 py-1.5 text-sm border rounded hover:text-white hover:bg-red-500 outline-none'
        onClick={() => signIn('google')}>
        <span>Sign In</span>
      </button>
    </div>
  )
}

export function Header(props: HeaderPropsType) {
  return (
    <header className='flex justify-between items-center gap-8 h-12 px-4 py-2 border-b'>
      <Link href="/">
        <Image src='/logo-long.png' width='116' height='26' alt='Logo' />
      </Link>
      <Link href={'/cabinet'}>
        {props.isAuth
          ? <Avatar image={props.data.user.image} />
          : <SignInBtn />
        }
      </Link>
    </header >
  )
}