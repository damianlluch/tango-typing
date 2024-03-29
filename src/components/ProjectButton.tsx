import { useRouter } from "next/router";
import type { ReactNode } from "react";

import GitHub from "./GitHub";

const ProjectButton = ({
  title,
  subtitle,
  url,
  linkto,
  date,
  decorator,
  background_full,
}: {
  title: string;
  subtitle: string;
  url: string;
  linkto: string;
  date: string;
  decorator: ReactNode;
  background_full?: boolean;
}) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(linkto);
  };

  return (
    <div className="group my-2 mb-8 flex min-h-[5rem] w-screen flex-row items-start justify-between px-2   md:w-[calc(100%+24px)] md:p-0">
      <a
        href={linkto}
        onClick={handleClick}
        className="  flex w-full items-start justify-center hover:border-none"
      >
        {decorator}
        <div className="m-0 flex h-full w-full flex-col justify-center px-4">
          <div
            className={`flex h-full items-start py-1 ${
              background_full
                ? "group-hover:bg-white dark:group-hover:bg-slate-800"
                : "group-hover:bg-yellow-400"
            }`}
          >
            <h1
              className={` flex h-[calc(1rem+1px)] w-full items-center pl-4 align-middle font-mono text-[calc(1rem+1px)] font-bold text-black ${
                background_full
                  ? "dark:text-black dark:group-hover:bg-slate-800 dark:group-hover:text-white"
                  : "dark:text-slate-200 dark:group-hover:text-slate-800"
              }`}
            >
              {" "}
              {title}
            </h1>
          </div>
          <h2
            className={`mt-2 pr-12 pl-4 font-mono text-sm text-gray-700 ${
              background_full ? "dark:text-slate-700" : "dark:text-slate-400"
            }`}
          >
            {" "}
            {subtitle}{" "}
          </h2>
          <p className="absolute hidden">{date}</p>
        </div>
      </a>
      {url === "" ? null : <GitHub url={url} />}
    </div>
  );
};

export default ProjectButton;
