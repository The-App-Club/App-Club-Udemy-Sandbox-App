import { Router } from 'itty-router';

import { notifyToSlack } from './handlers/notifyToSlack';

const router = Router();

router
  .get('/', notifyToSlack)
  .get('*', () => new Response('Not found', { status: 404 }));

export const handleRequest = (request) => router.handle(request);
