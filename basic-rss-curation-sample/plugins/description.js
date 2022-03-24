import cheerio from 'cheerio';

const defaultDescription = `nothing description`;

const getDomText = ({ item }) => {
  if (item.description) {
    return item.description;
  }
  return item.contentSnippet;
};

const getDescription = ({ item }) => {
  const domText = getDomText({ item });
  if (domText) {
    const $ = cheerio.load(domText);
    if ($(`p`).text()) {
      return defaultDescription;
    }
    return defaultDescription;
  }
  return defaultDescription;
};

export { getDescription };
