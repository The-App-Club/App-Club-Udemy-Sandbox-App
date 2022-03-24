const notifyToSlack = async (request) => {
  const blockInfoList = [];

  blockInfoList.push({
    type: 'header',
    text: {
      type: 'plain_text',
      text: `${`📰Todays CowBoy Bebop News`}`,
      emoji: true,
    },
  });

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

export { notifyToSlack };
