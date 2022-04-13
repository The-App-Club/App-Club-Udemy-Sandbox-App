import { client, q } from './config';

// Bonus
// https://docs.fauna.com/fauna/current/api/fql/functions/paginate?lang=javascript
const niceDelete = async (response) => {
  if (response.data) {
    await client.query(
      q.Map(response.data, q.Lambda('X', q.Delete(q.Var('X'))))
    );
  }
};
const paginateDelete = async (response) => {
  if (!response.after) {
    await niceDelete(response); // do remain delete. this is teardown.
    return;
  }
  await niceDelete(response); // do current delete
  response = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('Rss')), {
        after: response.after,
      }),
      q.Lambda('X', q.Var('X'))
    )
  );
  return paginateDelete(response);
};

(async () => {
  try {
    let response;
    response = await client.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('Rss'))),
        q.Lambda('X', q.Delete(q.Var('X')))
      )
    );
    console.log(response);

    // Paginate Delete
    // response = await client.query(
    //   q.Map(
    //     q.Paginate(q.Documents(q.Collection('Rss'))),
    //     q.Lambda('X', q.Var('X'))
    //   )
    // );
    // await paginateDelete(response);
    // console.log(response);

    // NG
    // response = await client.query(q.Delete(q.Documents(q.Collection('Rss'))));
    // console.log(response);
  } catch (error) {
    console.log(error);
  }
})();
