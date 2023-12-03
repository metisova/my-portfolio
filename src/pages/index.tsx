import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import Home from '@/components/Home';

export const getServerSideProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

export default function Index() {
  return (
    <>
      <Head>
        <title>Anna Kopylova | Front-end developer</title>
        <meta
          content="Passionate front-end developer with a keen eye for design and a commitment to creating seamless, user-friendly experiences."
          name="description"
        />
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
      <Home />
    </>
  );
}
