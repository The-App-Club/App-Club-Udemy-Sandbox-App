import { client, q } from './config';

// https://docs.fauna.com/fauna/current/api/fql/functions/createcollection?lang=javascript
(async () => {
  try {
    let response;
    response = await client.query(q.CreateCollection({ name: 'Rss' }));
    console.log(response);
  } catch (error) {
    console.log(error);
  }
})();
