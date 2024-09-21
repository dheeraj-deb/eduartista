// src/ApolloProvider.js
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://13.60.217.12/graphql', 
  cache: new InMemoryCache(),
});

const ApolloProviderComponent = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
};

export default ApolloProviderComponent;
