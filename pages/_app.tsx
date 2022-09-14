import { AppProps } from "next/app";
import "../styles/globals.scss";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default MyApp;
