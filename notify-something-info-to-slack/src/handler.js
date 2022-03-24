import { Router } from 'itty-router';

import { notifySomethingInfoToSlack } from './handlers/notifySomethingInfoToSlack';

const router = Router();

router
  .get('/', notifySomethingInfoToSlack)
  .get('*', () => new Response('Not found', { status: 404 }));

export const handleRequest = (request) => router.handle(request);
