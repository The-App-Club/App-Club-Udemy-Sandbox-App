import { client, q } from './config';

// https://docs.fauna.com/fauna/current/api/fql/functions/exists?lang=javascript
// https://docs.fauna.com/fauna/current/api/fql/functions/if?lang=javascript

// Bounus
const deleteAllCollections = async () => {
  return await client.query(
    q.Map(q.Paginate(q.Collections()), q.Lambda('ref', q.Delete(q.Var('ref'))))
  );
};

const deleteAllFunctions = async () => {
  return await client.query(
    q.Map(q.Paginate(q.Functions()), q.Lambda('ref', q.Delete(q.Var('ref'))))
  );
};

const deleteAllIndexes = async () => {
  return await client.query(
    q.Map(q.Paginate(q.Indexes()), q.Lambda('ref', q.Delete(q.Var('ref'))))
  );
};

const clean = () => {
  return new Promise(async (resolve, reject) => {
    try {
      // await deleteAllCollections()
      // await deleteAllFunctions();
      // await deleteAllIndexes();

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
          q.Exists(q.Index('all_Rss_by_title_split')),
          q.Delete(q.Index('all_Rss_by_title_split')),
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
