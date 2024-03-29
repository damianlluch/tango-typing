import { MajorButton } from "./MajorButton";
import {
  CommunityAvatarSection,
  ProfileCardSection,
} from "./ProfileCardSection";

export const Hero = () => (
  <div className="flex h-full w-full flex-col justify-between md:min-h-[calc(100vh-16rem)]">
    <div className="absolute z-10 ml-[18px] h-5 w-1 bg-black outline-2 outline-white dark:bg-white md:ml-[-2px] " />
    <div className="flex h-full w-full flex-col justify-between">
      <article className=" prose prose-zinc h-full w-full max-w-2xl px-12 font-mono text-sm text-black dark:prose-invert dark:text-slate-300">
        <h2>Welcome 👋</h2>
        {/* <p className="underline decoration-yellow-400 underline-offset-2"> */}
        <p>
          <b>
            We are a Machine Learning Studio, specialized in
            Nowcasting/Forecasting, based in Berlin.
          </b>
        </p>
      </article>

      <article className="prose prose-zinc h-full w-full max-w-3xl px-12 font-mono text-sm text-black opacity-60 dark:prose-invert dark:text-slate-300">
        <p className=" w-full whitespace-pre-line">
          {`\n`}We aspire to:{`\n`}
          <p className="ml-4">
            {[
              "Build the most usable, open-core Time-Series Machine Learning tools available.",
              "Bring speed, rigour and transparency to the field of Forecasting/Nowcasting.",
              "Work with experts to develop useful tools and solutions to real-world problems.",
              "Make state of the art Time-Series models accessible to everyone.",
            ].map((e) => `>> ${e}\n\n`)}
          </p>
        </p>
      </article>
    </div>
    <div>
      <div className="mt-6 flex flex-col px-12 md:flex-row">
        <ProfileCardSection />
        <CommunityAvatarSection />
      </div>
      <div className="-ml-2 px-12">
        <MajorButton text="Who we are" link="/about" />
        <MajorButton text="Speak with us" link="/speak" primary />
      </div>
    </div>
  </div>
);
