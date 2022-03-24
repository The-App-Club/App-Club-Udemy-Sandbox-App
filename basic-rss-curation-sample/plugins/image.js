import cheerio from 'cheerio';

const defaultThumbnailImageURL = `https://media4.giphy.com/media/10VjiVoa9rWC4M/giphy.gif`;

const getDomText = ({ item }) => {
  if (item['content:encoded']) {
    return item['content:encoded'];
  }
  return item.content;
};

const getThumbnailImageURL = ({ item }) => {
  const domText = getDomText({ item });
  if (domText) {
    const $ = cheerio.load(domText);
    if ($(`img`).attr('src')) {
      return $(`img`).attr('src');
    }
    return defaultThumbnailImageURL;
  }
  return defaultThumbnailImageURL;
};

export { getThumbnailImageURL };
