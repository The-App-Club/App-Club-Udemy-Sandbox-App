import { client, q } from './config';

// https://docs.fauna.com/fauna/current/api/fql/functions/function?lang=javascript
// https://docs.fauna.com/fauna/current/api/fql/functions/call?lang=javascript

(async () => {
  try {
    let response;
    response = await client.query(
      q.Call(q.Function('UpdateCategory'), 'React')
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
})();
