import fetcher from "./fetcher";

export const auth = (
  mode: "sigin" | "signup",
  body: { address: string; signature: string }
) => {
  return fetcher(`${mode}`, body);
};
