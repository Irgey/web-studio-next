import Layout from "@/components/Layout/Layout";
import "@/styles/main.scss";
import "aos/dist/aos.css";
const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
