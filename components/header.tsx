import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-center my-4">
      <div>
        <Link
          href="/work"
          className="px-4 py-1 z-10 text-sm font-normal hover:backdrop-blur-md border-slate-100 bg-slate-50 bg-opacity-20 border rounded-full rounded-r-none border-r-0 border-opacity-30 transition-all hover:bg-opacity-90 hover:text-slate-800"
        >
          Work
        </Link>
        <Link
          href="https://tools.tadscritchfield.com"
          className="px-4 py-1 z-10 text-sm font-normal hover:backdrop-blur-md border-slate-100 bg-slate-50 bg-opacity-20 border rounded-full rounded-l-none rounded-r-none border-r-0 border-opacity-30 transition-all hover:bg-opacity-90 hover:text-slate-800"
        >
          Tools
        </Link>
        <Link
          href="https://fieldcollective.us/blog"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-1 z-10 text-sm font-normal hover:backdrop-blur-md border-slate-100 bg-slate-50 bg-opacity-20 border rounded-full rounded-l-none rounded-r-none border-r-0 border-opacity-30 transition-all hover:bg-opacity-90 hover:text-slate-800"
        >
          Blog
        </Link>
        <Link
          href="/inspiration"
          className="px-4 py-1 z-10 text-sm font-normal hover:backdrop-blur-md border-slate-100 bg-slate-50 bg-opacity-20 border rounded-full rounded-l-none border-opacity-30 transition-all hover:bg-opacity-90 hover:text-slate-800"
        >
          Inspiration
        </Link>
      </div>
    </div>
  );
};
