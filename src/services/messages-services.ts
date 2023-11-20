import { findMany } from '../repositories/messages-repository';

export async function getMessages() {
  const messages = await findMany();
  return messages;
}
