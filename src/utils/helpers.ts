export const changeQueryStringToJSON = (qs: string): any => {
  if (!qs) {
    return {};
  }
  const pairs = qs.split('&');

  const result = {};
  pairs.forEach((item) => {
    const pair = item.split('=');
    result[pair[0]] = decodeURIComponent(pair[1] || '');
  });

  return JSON.parse(JSON.stringify(result));
};
