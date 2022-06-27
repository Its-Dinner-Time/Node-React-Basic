export function makeQueryString(url, query = {}) {
  let str = '';
  for (const [key, value] of Object.entries(query)) {
    if (str === '') str += '?';
    else str += '&';

    str += `${key}=${value}`;
  }

  return `${url}${str}`;
}
