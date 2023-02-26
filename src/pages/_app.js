import "@/styles/globals.css";
import Main  from "../../components/main/Main";
import {SessionProvider} from 'next-auth/react';

export default function App({ Component, pageProps:{session,...pageProps} }) {
  return (
    <SessionProvider session={session}>
    <Main>
      <Component {...pageProps} />
    </Main>
    </SessionProvider>
  );
}
