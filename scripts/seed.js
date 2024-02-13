const { db } = require('@vercel/postgres');
const { 
  users,
  players
} = require('../src/app/lib/placeholder-data');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE
      );
    `;

    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        return client.sql`
        INSERT INTO users (id, name, email)
        VALUES (${user.id}, ${user.name}, ${user.email})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedPlayers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS players (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        fideid VARCHAR(255) UNIQUE,  
        name VARCHAR(255) NOT NULL,
        surname VARCHAR(255) NOT NULL,
        year VARCHAR(255) NOT NULL,
        gender VARCHAR(255) NOT NULL,
        country VARCHAR(255) NOT NULL,
        elo VARCHAR(255),
        owner VARCHAR(255) NOT NULL
      );
    `;

    const insertedPlayers = await Promise.all(
      players.map(async (player) => {
        return client.sql`
        INSERT INTO players (id, fideid, name, surname, year, gender, country, elo, owner)
        VALUES (${player.id}, ${player.fideid}, ${player.name}, ${player.surname}, ${player.year}, ${player.gender}, ${player.country}, ${player.elo}, ${player.owner})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    return {
      createTable,
      players: insertedPlayers,
    };
  } catch (error) {
    console.error('Error seeding players:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedUsers(client);
  await seedPlayers(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});