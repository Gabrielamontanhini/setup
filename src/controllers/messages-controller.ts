import { Request, Response } from 'express';
import { notFound } from '../errors';
import { getMessages } from '../services/messages-services';

export async function getAllMessages(req: Request, res: Response) {
  const messages = await getMessages();
  if (messages.length === 0) {
    throw notFound();
  }
  res.send(messages);
}
