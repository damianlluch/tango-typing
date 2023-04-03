import BreadcrumbSection from "@/components/BreadcrumbSection";
import ProjectsSection from "@/components/ProjectsSection";
import Seperator from "@/components/Seperator";
import { Meta } from "@/layouts/Meta";
import { getSortedPackagesData } from "@/lib/packages";
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
          title="Packages >> Dream Faster AI Studio"
          description="ML Studio specialized in Forecasting/Nowcasting."
          social_card_ending="packages"
        />
      }
    >
      <OneSection title="packages 👇">
        <div className="w-full px-12">
          <BreadcrumbSection />
        </div>
        <ProjectsSection allPostsData={allPostsData} baseUrl="packages" all />
      </OneSection>
      <Seperator />
    </Main>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPackagesData();
  return {
    props: {
      allPostsData,
    },
  };
}
