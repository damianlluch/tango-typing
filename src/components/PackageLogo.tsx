import IconWrapper from "./IconWrapper";

const PackageLogo = ({
  svg,
  background_full,
}: {
  svg: string;
  background_full?: boolean;
}) => (
  <IconWrapper background_full={background_full}>
    <img
      src={svg}
      alt="Logo of Package"
      className=" md:h-[calc(1rem+1px)] md:w-[calc(1rem+1px)]"
    />
  </IconWrapper>
);

export default PackageLogo;

// className="z-50 -ml-2 rounded-sm bg-white p-3 drop-shadow-lg dark:bg-slate-800">
