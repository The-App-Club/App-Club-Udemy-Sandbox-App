import { client, q } from './config';

// https://docs.fauna.com/fauna/current/learn/tutorials/fql/indexes/search
// https://docs.fauna.com/fauna/current/api/fql/functions/createindex?lang=javascript

(async () => {
  try {
    let response;
    response = await client.query(
      q.CreateIndex({
        name: 'all_Rss_by_title',
        source: q.Collection('Rss'),
        terms: [{ field: ['data', 'title'] }],
      })
    );
    console.log(response);
    response = await client.query(
      q.CreateIndex({
        name: 'all_Rss_by_categories',
        source: q.Collection('Rss'),
        terms: [{ field: ['data', 'categories'] }],
      })
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
})();
