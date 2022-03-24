import { Router } from 'itty-router';

import { storeSomethingInfoToFauna } from './handlers/storeSomethingInfoToFauna';

const router = Router();

router
  .get('/', storeSomethingInfoToFauna)
  .get('*', () => new Response('Not found', { status: 404 }));

export const handleRequest = (request) => router.handle(request);
