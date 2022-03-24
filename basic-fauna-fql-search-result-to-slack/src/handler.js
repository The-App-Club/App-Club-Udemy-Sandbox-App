import { Router } from 'itty-router';

import { searchFaunaResultToSlack } from './handlers/searchFaunaResultToSlack';

const router = Router();

router
  .get('/', searchFaunaResultToSlack)
  .get('*', () => new Response('Not found', { status: 404 }));

export const handleRequest = (request) => router.handle(request);
