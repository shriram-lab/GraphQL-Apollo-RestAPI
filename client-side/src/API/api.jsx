import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import { WebSocketLink } from 'apollo-link-ws';
import { ApolloLink, split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore"
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all"
  }
};

const httpLink = new HttpLink({
  uri: "http://localhost:6500/graphql"
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: "ws://localhost:6500/graphql", // use wss for a secure endpoint
  options: {
    reconnect: true
  }
});

const links = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const linkSub = ApolloLink.from([links]);

export const client = new ApolloClient({
  link: linkSub,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions
});
