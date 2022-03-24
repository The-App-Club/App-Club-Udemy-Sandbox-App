import { search } from '../fauna/search';

const searchFauna = async (request) => {
  const { params, query } = request;
  const rssInfoList = await search({ searchTerm: query.searchTerm });
  const body = JSON.stringify({
    status: 0,
    message: rssInfoList,
  });
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  };
  return new Response(body, { headers });
};

export { searchFauna };
