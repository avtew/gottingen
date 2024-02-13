'use server'

import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchPlayers() {
  noStore();
  try {
    const data = await sql`SELECT * FROM players`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch players data.');
  }
}