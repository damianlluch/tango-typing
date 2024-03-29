const GitHub = ({
  url,
  background_full,
}: {
  url: string;
  background_full?: boolean;
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`z-10 m-0 flex flex-none items-start justify-center self-start bg-white p-1 hover:border hover:border-yellow-400 hover:bg-yellow-400 hover:!fill-white group-hover:border group-hover:border-yellow-400 group-hover:fill-yellow-400 group-hover:p-[3px] dark:bg-slate-900 dark:fill-slate-200 dark:hover:bg-yellow-300 dark:hover:!fill-slate-800  ${
      background_full ? "bg-transparent" : "bg-white"
    }`}
    onPointerOver={(e) => e.stopPropagation()}
  >
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[calc(1rem+1px)] w-[calc(1rem+1px)] fill-inherit"
    >
      <path
        className="fill-inherit"
        // fill="green"
        // fill="inherit"
        d="M9.5 0C4.25379 0 0 4.36406 0 9.74174C0 14.0464 2.72277 17.6937 6.49732 18.983C6.55026 18.9945 6.6043 19.0002 6.65848 19C7.01049 19 7.1462 18.7413 7.1462 18.5165C7.1462 18.2833 7.13772 17.6725 7.13348 16.8583C6.81924 16.9319 6.49776 16.9703 6.175 16.9728C4.3471 16.9728 3.93147 15.552 3.93147 15.552C3.49888 14.4281 2.87545 14.127 2.87545 14.127C2.04844 13.546 2.87121 13.529 2.93482 13.529H2.93906C3.8933 13.6138 4.39375 14.5384 4.39375 14.5384C4.86875 15.3696 5.50491 15.6029 6.07321 15.6029C6.44899 15.5954 6.81895 15.5087 7.15893 15.3484C7.24375 14.7208 7.48973 14.2924 7.76116 14.0464C5.65335 13.8004 3.43527 12.965 3.43527 9.23281C3.43527 8.1683 3.80424 7.29888 4.41071 6.62031C4.31317 6.37433 3.98661 5.38192 4.50402 4.04174C4.57342 4.02513 4.64475 4.018 4.71607 4.02053C5.0596 4.02053 5.83571 4.15201 7.11652 5.04263C8.6728 4.60721 10.3187 4.60721 11.875 5.04263C13.1558 4.15201 13.9319 4.02053 14.2754 4.02053C14.3468 4.018 14.4181 4.02513 14.4875 4.04174C15.0049 5.38192 14.6783 6.37433 14.5808 6.62031C15.1873 7.30312 15.5562 8.17254 15.5562 9.23281C15.5562 12.9734 13.3339 13.7962 11.2176 14.0379C11.5569 14.3391 11.8623 14.9328 11.8623 15.8404C11.8623 17.1424 11.8496 18.1942 11.8496 18.5123C11.8496 18.7413 11.981 19 12.333 19C12.39 19.0002 12.4469 18.9946 12.5027 18.983C16.2815 17.6937 19 14.0422 19 9.74174C19 4.36406 14.7462 0 9.5 0Z"
      />
    </svg>

    {/* <img
      src={imgSource}
      alt="Nextjs starter banner"
      className="h-[calc(1rem+1px)] w-[calc(1rem+1px)] fill-white"
    /> */}
  </a>
);

export default GitHub;
