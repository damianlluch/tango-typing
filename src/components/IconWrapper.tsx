import type { ReactNode } from "react";

const IconWrapper = ({
  children,
  background_full,
  no_bg,
}: {
  children: ReactNode;
  background_full?: boolean;
  no_bg?: boolean;
}) => (
  <div
    className={`${
      no_bg
        ? "bg-none"
        : background_full
        ? "bg-white dark:bg-slate-900 group-hover:dark:bg-slate-900"
        : "bg-white group-hover:bg-yellow-400 dark:bg-slate-900"
    } z-10 m-0 flex flex-none flex-col justify-center p-1  `}
  >
    <div className="m-0 h-[calc(1rem+1px)] w-[calc(1rem+1px)] flex-none p-0">
      {children}
    </div>
  </div>
);

export default IconWrapper;
