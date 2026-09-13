import { Client } from "discord.js-selfbot-v13";

let client;

export async function signIn(token) {
  client = new Client();

  await client.login(token.trim());

  return client;
}

export async function signOut() {
  await client.logout();
}

export function getClient() {
  return client;
}
