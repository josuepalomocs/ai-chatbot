import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Bot</title>
        <meta
          name="description"
          content="A web application that leverages OpenAI's GPT API to provide users with versatile chat templates."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
