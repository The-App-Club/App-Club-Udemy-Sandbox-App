import { client, q } from './config';

// https://docs.fauna.com/fauna/v3/api/fql/functions/merge?lang=javascript
// https://docs.fauna.com/fauna/v3/api/fql/functions/distinct?lang=javascript
// https://docs.fauna.com/fauna/v3/api/fql/functions/append?lang=javascript
// https://docs.fauna.com/fauna/v3/api/fql/functions/update?lang=javascript
// https://docs.fauna.com/fauna/v3/api/fql/functions/select?lang=javascript

(async () => {
  try {
    let response;
    response = await client.query(
      q.Map(
        q.Paginate(q.Match(q.Index('all_Rss_by_title_split'), 'Shopify')),
        q.Lambda(
          'X',
          q.Update(
            q.Select(['ref'], q.Get(q.Var('X'))),
            q.Merge(q.Get(q.Var('X')), {
              data: {
                categories: q.Distinct(
                  q.Append(
                    q.Select(['data', 'categories'], q.Get(q.Var('X'))),
                    ['Shopify']
                  )
                ),
              },
            })
          )
        )
      )
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
})();
