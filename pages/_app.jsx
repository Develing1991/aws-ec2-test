import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  // const client = ApolloClient({
  //   uri: "https://backendonline.codebootcamp.co.kr/graphql",
  //   cache: new InMemoryCache(),
  // });
  return (
    // <ApolloProvider client={client}>

    // </ApolloProvider>
    <Component {...pageProps} />
  );
}
