import Link from "next/link";

import { MajorButton } from "@/components/MajorButton";
import { Meta } from "@/layouts/Meta";
import { getSortedPackagesData } from "@/lib/packages";
import { getSortedTopicsData } from "@/lib/topics";
import { Article } from "@/templates/Article";
import { Main } from "@/templates/Main";

/* eslint-disable react/display-name */
const getPosts = (githubBadge: boolean) => (allPostsData, baseUrl) =>
  (
    <div className="flex h-full flex-col md:flex-row">
      {allPostsData.map(
        (e, i) =>
          i < 4 &&
          (githubBadge ? (
            <div key={i}>
              <Link
                href={`https://github.com/dream-faster/${e.id}`}
                className="whitespace-nowrap border-none no-underline"
              >
                <div>
                  <img
                    src={`https://img.shields.io/static/v1?label=GitHub&message=${e.title}&color=grey?style=for-the-badge&logo=github&size=lg`}
                    alt={`${e.title} GitHub Link`}
                    className="cursor-pointer pr-4"
                  />
                </div>
              </Link>
              <br />
            </div>
          ) : (
            <div key={i}>
              <Link
                href={`/${baseUrl}/${e.id}`}
                className="whitespace-nowrap border-none no-underline"
              >
                {e.title}
              </Link>
              ,&nbsp;
            </div>
          ))
      )}
    </div>
  );

const standardOptions =
  "%0D%0D%0D%0D(optional) Deadline:%0D%0D(optional) Budget/Investment (with currency):%0D%0D(optional) Website:%0D%0D(optional) Alternate contact:";

const welcome = "Hi Dream Faster Studio,%0D%0D ";
const goodbye = "Best Regards,%0D%0D ";

const projectDescription = "%0D%0D⎯⎯⎯%0D%0D%0D%0D%0D⎯⎯⎯%0D%0D%0D";

const collaborationOptions = [
  {
    name: "In a need of accurate short and mid-term forecasts?",
    title: "",
    description: `Interested in developing an internal forecasting/nowcasting system? Would you like to integrate Composite Models and Continous Cross-Validation to your existing pipeline? <br/><br/> Our team can assist you in creating cutting-edge proof-of-concepts and minimum viable products. We leverage our customized tooling to simplify your processes and enhance your capabilities, including:  `,
    emailSubject: "Proof of Concept inquiry - [ Project Name ] - [ Pitch ]",
    emailBody: `${welcome}We are interested in collaborating with you!%0D%0D Here is the short pitch on the project we need help with:${projectDescription}${goodbye}${standardOptions}`,
    interactive: getPosts(true),
    baseUrl: "packages",
  },
  {
    name: "Thinking of auditing existing Time Series ML pipelines?",
    title: "",
    description:
      "By working with us, you can ensure that your Time Series ML pipelines are performing optimally and producing accurate forecasts. Contact us now to discuss how we can assist you in auditing your existing pipelines and optimizing your forecasting capabilities. <br/><br/> Our team can provide valuable technical advice in the following domains:",
    emailSubject: "Technical Auditing Inquiry - [ Project Name ]",
    emailBody: `${welcome}We are interested in getting a second opinion from you!%0D%0D Here is the short introduction to the project we need help with:${projectDescription}${goodbye}${standardOptions}`,
    interactive: getPosts(false),
    baseUrl: "topics",
  },
  // {
  //   name: "Angel Investment",
  //   title: "Are you looking for investors that understand challenges in R&D?",
  //   description:
  //     "We leverage our network to connect startups to angel investors, and potentially, co-investing.",
  //   emailSubject: "Angel Investment inquiry - [ Project Name ]",
  //   emailBody: `${welcome}We are currently raising money!%0D%0D Here is the short introduction to our product:${projectDescription}${goodbye}${standardOptions}`,
  //   interactive: () => null,
  // },
];

const Collaborate = ({
  allPackagesData,
  // allProjectsData,
  allTopicsData,
}: {
  allPackagesData: [string, string, string, string];
  // allProjectsData: [string, string, string, string];
  allTopicsData: [string, string, string, string];
}): JSX.Element => (
  <Main
    wide={true}
    meta={
      <Meta
        title="Collaborate - Dream Faster | ML Research"
        description="Speak with us"
        social_card_ending="speak"
      />
    }
  >
    {collaborationOptions.map((option, i) => (
      <div key={i} className="h-full w-full">
        <Article nobreadcrumb={i !== 0} key={i}>
          <article className="prose prose-zinc w-full dark:prose-invert ">
            <h2 className="text-yellow-500">{option.name}</h2>
            <h3>{option.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: option.description }} />
            <p>
              {option.interactive(
                option.baseUrl === "packages"
                  ? allPackagesData.slice(0, 3)
                  : allTopicsData,
                option.baseUrl
              )}
            </p>
            <MajorButton
              solo
              primary
              external
              text="Book a meeting"
              link={"https://calendly.com/mark-szulyovszky/consultation"}
            />
            <MajorButton
              solo
              external
              text="Send an email"
              link={`mailto:nowcasting@dreamfaster.ai?subject=${option.emailSubject}&body=${option.emailBody}`}
            />
            <MajorButton
              solo
              external
              text="Download slides"
              link={
                "https://drive.google.com/file/d/1HGBYWXBT6LncEyZvVYP8lvWyRuIxIAk0/view?usp=sharing"
              }
            />
          </article>
        </Article>
        <div className="h-12" />
      </div>
    ))}
    <div className="h-24" />
  </Main>
);

export default Collaborate;

export async function getStaticProps() {
  const allPackagesData = getSortedPackagesData();
  // const allProjectsData = getSortedProjectsData();
  const allTopicsData = getSortedTopicsData();
  return {
    props: {
      allPackagesData,
      // allProjectsData,
      allTopicsData,
    },
  };
}
