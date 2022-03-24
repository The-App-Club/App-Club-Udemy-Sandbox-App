import 'isomorphic-fetch';
import { getThumbnailImageURL } from './plugins/image';
import { getDescription } from './plugins/description';

// const feedURL = 'https://www.reddit.com/r/news/.rss';
const feedURL = 'https://www.reddit.com/r/react/.rss';
// const feedURL = 'https://tympanus.net/codrops/tag/locomotive-scroll/feed/';
// const feedURL = 'https://tympanus.net/codrops/tag/box-shadow/feed';

(async () => {
  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
      feedURL
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
  console.log(feedInfo);
})();
