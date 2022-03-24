import { Router } from 'itty-router';

import { searchFauna } from './handlers/searchFauna';

const router = Router();

router
  .get('/', searchFauna)
  .get('*', () => new Response('Not found', { status: 404 }));

export const handleRequest = (request) => router.handle(request);
