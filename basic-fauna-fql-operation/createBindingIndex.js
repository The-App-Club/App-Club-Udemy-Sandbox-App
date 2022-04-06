import { client, q } from './config';
// https://fauna.com/blog/applying-test-driven-development-to-your-database
// https://docs.fauna.com/fauna/current/api/fql/functions/findstrregex?lang=javascript
// https://docs.fauna.com/fauna/current/api/fql/functions/concat?lang=javascript
// https://docs.fauna.com/fauna/current/api/fql/functions/select?lang=javascript
// https://stedolan.github.io/jq/manual/ path(path_expression)
// https://docs.fauna.com/fauna/current/api/fql/functions/query?lang=javascript

function Split(str, sep) {
  return q.Map(
    q.FindStrRegex(str, q.Concat(['[^\\', sep, ']+'])),
    q.Lambda('X', q.Select(['data'], q.Var('X')))
  );
}

(async () => {
  try {
    let response;
    response = await client.query(
      q.CreateIndex({
        name: 'all_Rss_by_title_split',
        source: {
          collection: q.Collection('Rss'),
          fields: {
            qDex: q.Query(
              q.Lambda(
                'doc',
                Split(q.Select(['data', 'title'], q.Var('doc')), ' ')
              )
            ),
          },
        },
        terms: [{ binding: 'qDex' }],
      })
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
})();
