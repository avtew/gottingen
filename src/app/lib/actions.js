'use server'

import { sql } from '@vercel/postgres';

export async function addUser(name, email) {
  await sql`
    INSERT INTO users (name, email)
    VALUES (${name}, ${email})
    ON CONFLICT (email) DO NOTHING;
  `;
}

export async function addPlayer(fideid, name, surname, year, gender, country, elo, owner) {
  await sql`
    INSERT INTO players (name, email)
    VALUES (${fideid}, ${name}, ${surname} ${year}, ${gender}, ${country}, ${elo}, ${owner})
    ON CONFLICT (id) DO NOTHING;
  `;
}