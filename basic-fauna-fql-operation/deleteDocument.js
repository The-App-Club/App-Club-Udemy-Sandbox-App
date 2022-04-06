import { client, q } from './config';

(async () => {
  try {
    let response;
    response = await client.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('Rss'))),
        q.Lambda('X', q.Delete(q.Var('X')))
      )
    );
    // NG
    // response = await client.query(q.Delete(q.Documents(q.Collection('Rss'))));
    console.log(response);
  } catch (error) {
    console.log(error);
  }
})();
