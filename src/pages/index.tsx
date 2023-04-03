import { Hero } from "@/components/Hero";
import { MajorButton } from "@/components/MajorButton";
import { MinorButton } from "@/components/MinorButton";
import ProjectsSection from "@/components/ProjectsSection";
import Seperator from "@/components/Seperator";
import { Meta } from "@/layouts/Meta";
import { getSortedPackagesData } from "@/lib/packages";
import { getSortedTopicsData } from "@/lib/topics";
import { Main } from "@/templates/Main";
import OneSection from "@/templates/OneSection";

export default function Index({
  // allPostsData,
  allTopicsData,
  allPackagesData,
}: {
  // allPostsData: [string, string, string, string];
  allTopicsData: [string, string, string, string];
  allPackagesData: [string, string, string, string];
}): JSX.Element {
  return (
    <Main
      wide={true}
      meta={
        <Meta
          title="Dream Faster - ML Studio"
          description="ML Studio specialized in Forecasting/Nowcasting."
          social_card_ending="landing"
        />
      }
    >
      <OneSection>
        <Hero />
      </OneSection>
      <OneSection title="packages 👇" background_full>
        <ProjectsSection
          allPostsData={allPackagesData}
          baseUrl="packages"
          background_full
          decorator="logo"
        />
        <MinorButton to="/packages" text="All Packages" />
      </OneSection>
      {/* <OneSection title="projects 👇">
        <ProjectsSection
          allPostsData={allPostsData}
          baseUrl="projects"
          decorator="plus"
        />
        <MinorButton to="/projects" text="All Projects" />
      </OneSection> */}
      <OneSection title="links 👇">
        <div className="flex flex-col flex-wrap items-start justify-start px-8 md:flex-row">
          <MajorButton
            text="GitHub Organisation"
            link="https://github.com/dream-faster"
            external
          />
          <MajorButton
            text="Applied Exploration Blog"
            link="https://www.appliedexploration.com/"
            external
            primary
          />
        </div>
      </OneSection>
      <OneSection title="topics 👇">
        <ProjectsSection
          allPostsData={allTopicsData}
          baseUrl="topics"
          all
          decorator="plus"
        />
        <MinorButton to="/topics" text="All Topics" />
      </OneSection>
      <Seperator />
    </Main>
  );
}

export async function getStaticProps() {
  // const allPostsData = getSortedProjectsData();
  const allPackagesData = getSortedPackagesData();
  const allTopicsData = getSortedTopicsData();
  return {
    props: {
      // allPostsData,
      allTopicsData,
      allPackagesData,
    },
  };
}
