import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

export default function Layout({
  title,
  keywords,
  description,
  copyright,
  subject,
  generator,
  author,
  children,
  handleSound,
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="copyright" content={copyright} />
        <meta name="subject" content={subject} />
        <meta name="generator" content={generator} />
        <meta name="author" content={author} />
        <meta property="og:url" content={generator} />
        <meta property="og:type" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="article:publisher" content={title} />
        <meta property="service_page:tag" content={keywords} />
        <meta name="dc.source" CONTENT={generator} />
        <meta name="dc.relation" CONTENT={generator} />
        <meta name="dc.title" CONTENT={title} />
        <meta name="dc.keywords" CONTENT={keywords} />
        <meta name="dc.description" CONTENT={description} />
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
