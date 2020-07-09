import { navigate } from "@reach/router";

export const onRedirectCallback = async appState => {
  console.log('on-redirect-callback', appState);
  navigate(
    appState && appState.targetUrl
      ? appState.targetUrl
      : (typeof window !== "undefined" && "/")
  );
};
  
export const auth0Config = {
    domain: 'dogger.eu.auth0.com',
    clientId: 'lgtxnFKrO2Z4dGAXBOhw29qfkESBZrQB',
    audience: 'https://dogger.io/api'
};