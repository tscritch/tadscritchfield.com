import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full bg-slate-900 flex flex-col items-center justify-center">
      <Head>
        <title>Tad Scritchfield</title>
        <meta name="description" content="Indie Dev & Musician" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@400&f[]=panchang@800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="font-bold text-[18rem] text-center leading-[0.9]">TAD</h1>
      <p className="text-xs">Indie Dev & Musician</p>
    </div>
  );
}
