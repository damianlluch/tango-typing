import BreadcrumbSection from "@/components/BreadcrumbSection";
import ProjectsSection from "@/components/ProjectsSection";
import Seperator from "@/components/Seperator";
import { Meta } from "@/layouts/Meta";
import { getSortedProjectsData } from "@/lib/projects";
import { Main } from "@/templates/Main";
import OneSection from "@/templates/OneSection";

export default function Index({
  allPostsData,
}: {
  allPostsData: [string, string, string, string];
}): JSX.Element {
  // const router = useRouter();

  return (
    <Main
      wide={true}
      meta={
        <Meta
          title="Projects >> Dream Faster AI Studio"
          description="ML Studio specialized in Forecasting/Nowcasting."
          social_card_ending="projects"
        />
      }
    >
      <OneSection title="projects 👇">
        <div className="w-full px-12">
          <BreadcrumbSection />
        </div>
        <ProjectsSection allPostsData={allPostsData} baseUrl="projects" all />
      </OneSection>
      <Seperator />
    </Main>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedProjectsData();
  return {
    props: {
      allPostsData,
    },
  };
}
