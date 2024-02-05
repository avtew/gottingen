'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import Avatar from './Avatar';

export default function SignInBtn() {
  return (
    <div>
      <button
        className='flex gap-2 justify-center items-center w-28 py-1.5 text-sm border rounded text-white bg-red-500 hover:text-white hover:bg-red-600 outline-none'
        onClick={() => signIn('google')}>
        <Image src='/google-logo.png' width='16' height='16' alt='Google' />
        <span>|</span>
        <span>Sign In</span>
      </button>
    </div>
  )
}

export function Header() {
  const { status, data: session } = useSession();
  return (
    <header className='flex justify-between items-center gap-8 h-12 p-2 border-b'>
      <Link href="/">
        <Image src='/logo-long.png' width='116' height='26' alt='Logo' />
      </Link>
      <Link href={'/cabinet'}>
        {status === 'authenticated'
          ? <Avatar data={session} />
          : <SignInBtn />
        }
      </Link>
    </header >
  )
}