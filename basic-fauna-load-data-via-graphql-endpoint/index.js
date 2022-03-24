import 'isomorphic-fetch';
import dotenv from 'dotenv';

dotenv.config();

const query = `
mutation addItem($data: NotifyInput!) {
  createNotify(data: $data) {
    title
    description
    rssInfoList {
      description
      publicURL
      publishedAt
      thumbnail
      title
      categories
    }
  }
}
`;

const doQuery = ({ willLoadedData }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('https://graphql.fauna.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          authorization: `Bearer ${process.env.FAUNA_DB_SERVER_KEY}`,
        },
        body: JSON.stringify({
          query,
          variables: {
            data: willLoadedData,
          },
        }),
      });
      const json = await response.json();
      resolve(json);
    } catch (error) {
      reject(error);
    }
  });
};

(async () => {
  const data = {
    title: 'something title',
    description: 'this is description',
    rssInfoList: [
      {
        categories: ['a', 'b'],
        description: 'nothing description',
        publicURL:
          'https://tympanus.net/codrops/2022/01/26/background-shift-animation-with-css-blend-modes/',
        publishedAt: '2022-01-26 13:45:01',
        thumbnail: 'https://media1.giphy.com/media/3TACspcXhhQPK/giphy.gif',
        title: 'Background Shift Animation with CSS Blend Modes',
      },
    ],
  };
  const response = await doQuery({ willLoadedData: data });
  console.log(JSON.stringify(response));
})();
