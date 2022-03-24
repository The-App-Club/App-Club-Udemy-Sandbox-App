import 'isomorphic-fetch';
import { getThumbnailImageURL } from '../plugins/image';
import { getDescription } from '../plugins/description';

const fetchRssInfo = async (request) => {
  // https://github.com/kwhitley/itty-router/blob/v2.x/README.md#3-handle-incoming-requests
  const { params, query } = request;

  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
      query.feedURL
    )}`
  );
  const feed = await response.json();
  const feedInfo = {
    rssInfoList: feed.items.map((item) => {
      return {
        title: item.title,
        publishedAt: item.pubDate,
        publicURL: item.link,
        categories: item.categories ? item.categories : [],
        description: getDescription({ item }),
        thumbnail: getThumbnailImageURL({ item }),
      };
    }),
    title: feed.title || `Todays CowBoy Bebop News`,
    description:
      feed.description || `Broadcast Nice Web Tips And Tech Info etc...`,
  };
  const body = JSON.stringify({
    status: 0,
    message: feedInfo,
  });
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  };
  return new Response(body, { headers });
};

export { fetchRssInfo };
