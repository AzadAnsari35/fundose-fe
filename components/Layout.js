import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

export default function Layout({
  title,
  keywords,
  description,
  children,
  handleSound,
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Loader />
      <Header handleSound={handleSound} />
      <div className="container">{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Fundose | Start the quiz",
  description: "Become master of everything",
  keywords: "fundose, quiz game",
};
