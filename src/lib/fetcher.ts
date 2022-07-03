/**
 * Wrapper for abstracting API requests
 * @param url - URL to fetch
 * @param data - Data to send with requests
 * @returns Promise with response data
 */
export default function fetcher(url: string, data = undefined) {
  return fetch(`${window.location.origin}/api/${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
