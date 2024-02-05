'use client'

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

type ProviderProps = {
  children: ReactNode;
}

export const NextAuthProvider = ({children, ...props}: ProviderProps) => {
  return <SessionProvider {...props}>{children}</SessionProvider>
}