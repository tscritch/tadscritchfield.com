import Head from "next/head";
import { DribbbleIcon } from "components/icons/Dribbble";
import { TwitterIcon } from "components/icons/Twitter";
import { YouTubeIcon } from "components/icons/YouTube";
import styles from "../styles/blob.module.css";

export default function BlobBackground({ children }: any) {
  return (
    <div className="h-full bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden">
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@400&f[]=panchang@800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.shapeBlob} />
      <div className={styles.shapeBlob2} />
      <div className={styles.shapeBlob3} />
      <div className={styles.blobC} />

      <div className="flex-grow z-10">{children}</div>

      <div className="z-10 flex space-x-8 items-center mb-8">
        <a
          href="https://twitter.com/tadscritch"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.youtube.com/@tadscritchfield"
          target="_blank"
          rel="noreferrer"
        >
          <YouTubeIcon />
        </a>
        <a
          href="https://dribbble.com/tscritch"
          target="_blank"
          rel="noreferrer"
        >
          <DribbbleIcon />
        </a>
      </div>
    </div>
  );
}
