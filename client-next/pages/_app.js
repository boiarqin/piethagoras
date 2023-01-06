const WebSocket = require("ws");
import { Provider } from "react-redux";
import Modal from "react-modal";
import {
  ApolloProvider,
  ApolloClient,
  split,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

import { store } from "../redux/store";
import "../styles/globals.css";

const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

const wsLink = process.browser
  ? new WebSocketLink({
      uri: `ws://localhost:4000/graphql`,
      options: {
        reconnect: true,
        // connectionParams: {
        //   authToken: localStorage.getItem(AUTH_TOKEN)
        // }
      },
    })
  : null;

// The split function takes three parameters:

// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink =
  process.browser && wsLink != null
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        wsLink,
        httpLink
      )
    : httpLink;

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

Modal.setAppElement("#__next");

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}
