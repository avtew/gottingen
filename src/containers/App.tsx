'use client'

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Header } from '@/components/Header';
import { addUser } from '../app/lib/actions';

export function App() {
  const { status, data: session } = useSession();
  const [isAuth, setAuth] = useState(false);
  if (!isAuth) {
    if (status === 'authenticated') {
      setAuth(true);
      addUser(session.user?.name, session.user?.email)
    }
  }
  return (
    <Header isAuth={isAuth} data={session} />
  )
}