import Head from 'next/head';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const response = await import(`../locales/en.json`);

  return {
    props: {
      content: response.default,
    },
  };
};

export default function Index({
  content,
}: {
  content: typeof import('../locales/en.json');
}) {
  const { title, description } = content;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta
          content="portfolio, personal website, web developer"
          name="keywords"
        />
        <meta content="English" name="language" />
        <meta content="Anna Kopylova" name="author" />
        <link href="/favicon.ico" rel="icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <p>Hello!</p>
    </>
  );
}
