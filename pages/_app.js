import React from 'react';
import './global.css';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import { Provider } from "../context";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [queryClient] = React.useState(() => new QueryClient());
  return (
  <QueryClientProvider client={queryClient}>
      <Provider>
        <Navbar route = {router.route}/>
        <Component {...pageProps} />
      </Provider>
  </QueryClientProvider>
  )
}

export default MyApp
