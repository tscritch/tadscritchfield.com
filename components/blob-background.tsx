import Head from "next/head";
import { DribbbleIcon } from "components/icons/Dribbble";
import { TwitterIcon } from "components/icons/Twitter";
import { YouTubeIcon } from "components/icons/YouTube";
import styles from "../styles/blob.module.css";

export default function BlobBackground({ children }: any) {
  return (
    <div className="h-full bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden">
      <NoiseBackground />
      <div className={styles.shapeBlob} />
      <div className={styles.shapeBlob2} />
      <div className={styles.shapeBlob3} />
      <div className={styles.shapeBlob4} />
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

const NoiseBackground = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      // xmlns:svgjs="http://svgjs.dev/svgjs"
      viewBox="0 0 100% 100%"
      width="100%"
      height="100%"
      opacity="1"
      className="absolute top-0 left-0 z-10 opacity-5"
    >
      <defs>
        <filter
          id="nnnoise-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          color-interpolation-filters="linearRGB"
        >
          <feTurbulence
            type="turbulence"
            // baseFrequency="0.167"
            baseFrequency="0.1"
            numOctaves="4"
            seed="15"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          ></feTurbulence>
          <feSpecularLighting
            surfaceScale="15"
            specularConstant="3"
            specularExponent="20"
            lighting-color="#fff"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="turbulence"
            result="specularLighting"
          >
            <feDistantLight azimuth="3" elevation="141"></feDistantLight>
          </feSpecularLighting>
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="transparent"></rect>
      <rect
        width="100%"
        height="100%"
        fill="#fff"
        filter="url(#nnnoise-filter)"
      ></rect>
    </svg>
  );
};
