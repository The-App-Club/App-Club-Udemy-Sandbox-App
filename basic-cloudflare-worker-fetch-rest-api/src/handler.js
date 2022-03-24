import { Router } from 'itty-router';

import { fetchRssInfo } from './handlers/fetchRssInfo';

const router = Router();

router
  .get('/api/fetch-rss-info', fetchRssInfo)
  .get('*', () => new Response('Not found', { status: 404 }));

export const handleRequest = (request) => router.handle(request);
