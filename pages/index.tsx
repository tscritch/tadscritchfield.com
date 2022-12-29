import Head from "next/head";

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center z-10">
      <Head>
        <title>Tad Scritchfield</title>
        <meta name="description" content="Indie Dev & Musician" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div />

      <h1 className="font-bold text-6xl md:text-[12rem] lg:text-[18rem] text-center leading-[0.9] z-10">
        TAD
      </h1>
      <p className="text-[0.5rem] md:text-xs z-10">Indie Dev & Musician</p>

      <div />
    </div>
  );
}
