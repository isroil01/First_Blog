import "@/styles/globals.css";
import Main  from "../../components/main/Main";

export default function App({ Component, pageProps }) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  );
}
