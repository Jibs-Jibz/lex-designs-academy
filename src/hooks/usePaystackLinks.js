import useEnvironment from "./useEnvironment";

const LINKS = {
  production: {
    uiux: "https://paystack.com/buy/uiux-design-etoakj",
    webdev: "https://paystack.com/buy/web-dev-fmbwwt",
  },
  dev: {
    uiux: "https://paystack.com/buy/uiux-design-dlrkre",
    webdev: "https://paystack.com/buy/web-dev-obokyb",
  },
};

export function usePaystackLinks() {
  const env = useEnvironment();
  return LINKS[env] ?? LINKS.dev;
}
