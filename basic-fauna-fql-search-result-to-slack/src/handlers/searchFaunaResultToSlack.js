import { search } from '../fauna/search';
import { timeAgo, convertToJapanTime } from '../plugins/time';
import { dressUpNotifyTemplate } from '../plugins/format';

const searchFaunaResultToSlack = async (request) => {
  const { params, query } = request;
  const rssInfoList = await search({ searchTerm: query.searchTerm });
  const blockInfoList = [];

  blockInfoList.push({
    type: 'header',
    text: {
      type: 'plain_text',
      text: `${`📰Todays CowBoy Bebop News`}`,
      emoji: true,
    },
  });
  for (let index = 0; index < rssInfoList.length; index++) {
    const rssInfo = rssInfoList[index];
    const cacheedPublishedAt = rssInfo.publishedAt;

    Object.assign(rssInfo, {
      publishedAt: convertToJapanTime(rssInfo.publishedAt),
    });

    Object.assign(rssInfo, {
      ago: `${timeAgo(cacheedPublishedAt)} ago`,
    });
    blockInfoList.push(dressUpNotifyTemplate(rssInfo));
    blockInfoList.push({
      type: 'divider',
    });
  }

  const notifySlackMessage = {
    blocks: blockInfoList,
  };

  await fetch(SLACK_WEBHOOK_URL, {
    method: 'POST',
    body: JSON.stringify(notifySlackMessage),
  });

  const body = JSON.stringify({
    status: 0,
    message: `something ok`,
  });
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  };
  return new Response(body, { headers });
};

export { searchFaunaResultToSlack };
