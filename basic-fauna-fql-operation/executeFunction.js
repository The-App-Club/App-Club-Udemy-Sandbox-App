import { client, q } from './config';

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
