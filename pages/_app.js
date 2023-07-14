import '@/styles/globals.css';
import '../styles/compox-trim.webflow.css';
import '../styles/webflow.css';
import '../styles/normalize.css';
import '../styles/builder.scss';
import { QueryClientProvider, QueryClient } from 'react-query';
import { SessionProvider } from 'next-auth/react';
const queryClient = new QueryClient();

export default function App({ Component, pageProps: { session, ...pageProps }}) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </QueryClientProvider>
    </>
  );
}
