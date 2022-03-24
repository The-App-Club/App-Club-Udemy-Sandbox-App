import { client, q } from './config';

(async () => {
  try {
    let response;
    response = await client.query(q.Delete(q.Index('all_Rss_by_title')));
    console.log(response);
    response = await client.query(q.Delete(q.Index('all_Rss_by_categories')));
    console.log(response);
    response = await client.query(q.Delete(q.Index('all_Rss_by_title_split')));
    console.log(response);
  } catch (error) {
    console.log(error);
  }
})();
