import GitHub from "@/components/GitHub";
import { MajorButton } from "@/components/MajorButton";
import { Article } from "@/templates/Article";
import OneSection from "@/templates/OneSection";

import ProjectsSection from "./ProjectsSection";

export const ProjectPage = ({ data, relatedData, relatedType }) => (
  <div className="w-full">
    <Article>
      {data.github_link && <GitHub url={data.github_link} />}
      <article className="prose prose-zinc w-full dark:prose-invert ">
        <h3> {data.description} </h3>
        <div
          dangerouslySetInnerHTML={{ __html: data.contentHtml }}
          className="dark:text-slate-100"
        />
      </article>
    </Article>

    <OneSection title="  ">
      <div className="flex w-full flex-col items-start justify-start px-12">
        <p className="mb-2">
          Interested in {data.title} or similar projects/topics?
          <br />
          <b>Get in touch with us:</b>
        </p>
        <div className="-ml-2">
          <MajorButton text="Speak with us" link="/speak" primary={false} />
        </div>
      </div>
    </OneSection>
    {relatedData.length > 0 && (
      <OneSection title={`related ${relatedType} 👇`}>
        <ProjectsSection allPostsData={relatedData} baseUrl={relatedType} all />
      </OneSection>
    )}
    <div className="h-14" />
  </div>
);
