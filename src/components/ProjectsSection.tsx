import ProjectButton from "@/components/ProjectButton";

import PackageLogo from "./PackageLogo";
import Plus from "./Plus";

const ProjectsSection = ({
  allPostsData,
  baseUrl,
  all,
  decorator,
  background_full,
}: {
  allPostsData: Array<any>;
  baseUrl: string;
  all?: boolean;
  decorator?: string;
  background_full?: boolean;
}) => (
  <div className="flex w-full flex-col items-center justify-center">
    {allPostsData.map(
      ({ id, github_link, date, title, description, favorite, logo_link }) =>
        (favorite || all) && (
          <ProjectButton
            key={id}
            title={title}
            subtitle={description}
            date={date}
            url={github_link}
            linkto={`/${baseUrl}/${id}`}
            decorator={
              decorator == null || decorator === "plus" ? (
                <Plus />
              ) : (
                <PackageLogo
                  svg={logo_link}
                  background_full={background_full}
                />
              )
            }
            background_full={background_full}
          />
        )
    )}
  </div>
);

export default ProjectsSection;
