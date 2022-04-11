import { client, q } from './config';

// https://docs.fauna.com/fauna/current/api/fql/functions/lowercase?lang=javascript
// https://docs.fauna.com/fauna/current/api/fql/functions/createfunction?lang=javascript

(async () => {
  try {
    let response;
    response = await client.query(
      q.CreateFunction({
        name: 'UpdateCategory',
        body: q.Query(
          q.Lambda(
            'categoryName',
            q.Map(
              q.Paginate(
                q.Match(
                  q.Index('all_Rss_by_title_split'),
                  q.Var('categoryName')
                )
              ),
              q.Lambda(
                'X',
                q.Update(
                  q.Select(['ref'], q.Get(q.Var('X'))),
                  q.Merge(q.Get(q.Var('X')), {
                    data: {
                      categories: q.Distinct(
                        q.Append(
                          q.Map(
                            q.Select(['data', 'categories'], q.Get(q.Var('X'))),
                            q.Lambda('category', q.LowerCase(q.Var('category')))
                          ),
                          [q.LowerCase(q.Var('categoryName'))]
                        )
                      ),
                    },
                  })
                )
              )
            )
          )
        ),
      })
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
})();
