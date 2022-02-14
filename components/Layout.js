import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />

      <div className="container">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}

Layout.defaultProps = {
  title: "Fundose | Start the quiz",
  description: "Become master of everything",
  keywords: "fundose, quiz game",
};


