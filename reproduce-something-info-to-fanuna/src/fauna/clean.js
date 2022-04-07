import { client, q } from './config';

// https://docs.fauna.com/fauna/current/api/fql/functions/exists?lang=javascript
// https://docs.fauna.com/fauna/current/api/fql/functions/if?lang=javascript

const clean = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await client.query(
        q.If(
          q.Exists(q.Index('all_Rss_by_title')),
          q.Delete(q.Index('all_Rss_by_title')),
          'not exists, not delete'
        )
      );
      await client.query(
        q.If(
          q.Exists(q.Index('all_Rss_by_categories')),
          q.Delete(q.Index('all_Rss_by_categories')),
          'not exists, not delete'
        )
      );
      await client.query(
        q.If(
          q.Exists(q.Collection('Rss')),
          q.Delete(q.Collection('Rss')),
          'not exists, not delete'
        )
      );
      await client.query(
        q.If(
          q.Exists(q.Function('UpdateCategory')),
          q.Delete(q.Function('UpdateCategory')),
          'not exists, not delete'
        )
      );
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export { clean };
