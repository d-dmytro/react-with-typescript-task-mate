import App, { Container } from 'next/app';
import React from 'react';
import withApolloClient from '../lib/with-apollo-client';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';

export interface MyAppProps {
  apolloClient: ApolloClient<any>;
}

export class MyApp extends App<MyAppProps> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
