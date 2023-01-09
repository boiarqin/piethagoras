import Head from "next/head";

interface Props {
  title?: string;
}

const GlobalHead = ({ title = "Order Now" }: Props) => {
  const globalTitle = `Piethagoras Pizza | ${title}`;

  return (
    <Head>
      <title>{globalTitle}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default GlobalHead;
