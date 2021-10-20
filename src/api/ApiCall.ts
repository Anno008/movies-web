import { apiKey, apiUrl } from "~/constants/Config";

export interface FetchConfig {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: BodyInit;
}

export const getJSON = <T>({ url, body, method }: FetchConfig): Promise<T> =>
  fetch(`${apiUrl}/${url}${url.includes("?") ? "&" : "?"}api_key=${apiKey}`, {
    body,
    headers: createHeader(),
    method: method || "GET"
  }).then(response => response.json());

const createHeader = (): HeadersInit => ({
  "Content-Type": "application/json",
  Accept: "*/*"
});
