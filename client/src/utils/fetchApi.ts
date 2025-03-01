import qs from 'qs';

const API_URL = 'http://localhost:1337';
export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {},
) {
  try {
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 0 },
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    console.log(queryString);
    const requestUrl = `${API_URL}/api${path}${queryString ? `?${queryString}` : ''}`;

    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch {}
}