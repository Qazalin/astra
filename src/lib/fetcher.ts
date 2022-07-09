/**
 * Wrapper for abstracting API requests
 * @param url - URL to fetch
 * @param data - Data to send with requests
 * @returns Promise with response data
 */
export default async function fetcher<T>(
  url: string,
  data = undefined
): Promise<T> {
  return fetch(`${window.location.origin}/api/${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status > 399 || res.status < 500) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}
