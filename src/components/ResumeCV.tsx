import React from "react";
import {
  ReactIcon,
  NextjsIcon,
  Html5Icon,
  Css3Icon,
  JavaScriptIcon,
  TypeScriptIcon,
  NodejsIcon,
  ExpressIcon,
  TailwindIcon,
  MongoDBIcon,
  PostgreSQLIcon,
  GithubIcon,
  VercelIcon,
  PostmanIcon,
} from "./skillicons";
import { GraduationCap, Briefcase, Book } from "lucide-react";

export function ResumeCV() {
  const educationDetails = [
    {
      title: "Full Stack Software Developer Bootcamp",
      institute: "TechUp Thailand",
      date: "Sep 2024 - Jan 2025",
      description:
        "Intensive 4-months full-stack software development bootcamp, equipping participants with hands-on experience in modern web technologies, backend systems, and real-world project development",
    },
    {
      title: "Bachelor of Business Administration International Program",
      institute: "Thammasat University",
      date: "Aug 2013- June 2017",
      description:
        "A prestigious institution known for its excellence in business education, innovation, and leadership development",
    },
    {
      title: "Thai Chinese International School",
      institute: "Primary and Secondary School",
      date: "Aug 2001 - June 2013",
      description:
        "An international school offering an American cirriculum with a strong emphasis on Mandarin Chinese, fostering global perspectives and bilingual proficiency.",
    },
  ];

  const workExperiences = [
    {
      title: "Senior Associate, Campaign Flash Sales Operation",
      company: "Lazada Thailand",
      date: "Sep 2019 - Oct 2021",
      description:
        "Managed all aspects of flash sales operations, driving strategic product analysis to optimize sales performance and ensure maximum profitability.",
    },
    {
      title: "Associate, Marketing New User Incubation",
      company: "Lazada Thailand",
      date: "Mar 2019 - Aug 2019",
      description:
        "ed initiatives aimed at improving the new customer experience, driving focus group research to identify opportunities and optimize the overall customer journey.",
    },
    {
      title: "Associate, Commercial Sales and Planning",
      company: "Lazada Thailand",
      date: "Sep 2018 - Feb 2019",
      description:
        "Created clear visibility into monthly targets while conducting sales and demand forecasting to streamline warehouse operations and optimize inventory management.",
    },
    {
      title: "Senior Analyst, Seller Incubation",
      company: "Lazada Thailand",
      date: "Feb 2018 - Aug 2018",
      description:
        "Recruited, managed, and led a team of contract staff, driving the onboarding and incubation process for new sellers on the platform, ensuring a smooth integration and growth.",
    },
    {
      title: "Senior Analyst, Regional Marketing Solution",
      company: "Lazada Thailand",
      date: "Aug 2017 - Jan 2018",
      description:
        "Supported the negotiation and management of multiple brand launches on the Lazada platform, overseeing successful integrations across all six ventures to drive brand visibility and growth.",
    },
    {
      title: "Lazada Management Associate Program",
      company: "Lazada Thailand",
      date: "Aug 2017 - Aug 2019",
      description:
        "A comprehensive 2-year program designed to help candidates gain in-depth expertise across various functions within the e-commerce industry, fostering a well-rounded skill set for success.",
    },
  ];

  const frontendSkills = [
    { name: "HTML", icon: <Html5Icon key="html5" /> },
    { name: "CSS", icon: <Css3Icon key="css3" /> },
    { name: "Tailwind", icon: <TailwindIcon key="tailwind" /> },
    { name: "JavaScript", icon: <JavaScriptIcon key="javascript" /> },
    { name: "TypeScript", icon: <TypeScriptIcon key="typescript" /> },
    { name: "React", icon: <ReactIcon key="react" /> },
    { name: "Next.js", icon: <NextjsIcon key="nextjs" /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <NodejsIcon key="nodejs" /> },
    { name: "Express.js", icon: <ExpressIcon key="express" /> },
    { name: "MongoDB", icon: <MongoDBIcon key="mongodb" /> },
    { name: "PostgreSQL", icon: <PostgreSQLIcon key="postgresql" /> },
  ];

  const otherTools = [
    { name: "GitHub", icon: <GithubIcon key="github" /> },
    { name: "Vercel", icon: <VercelIcon key="vercel" /> },
    { name: "Postman", icon: <PostmanIcon key="postman" /> },
  ];
  return (
    <>
      {/* BIG DIV */}
      <div className="bg-gray-900 min-h-screen">
        <div className="flex flex-col items-center mx-4 pb-24">
          {/* Full Resume Button */}
          <div className="flex justify-end lg:w-[1000px]">
            <button
              className="my-8 mt-20 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300 cursor-pointer"
              onClick={() =>
                window.open("/Pumthad_Kaewmongkolsri.pdf", "_blank")
              }
            >
              View Full Resume
            </button>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-blue-400 neon-text">
            My Resume
          </h1>
          {/* Education Section */}
          <div className="lg:w-[1000px]">
            <h2 className="text-2xl font-semibold mb-4 text-blue-300 ml-2 flex items-center gap-2">
              <GraduationCap className="w-6 h-6" /> Education
            </h2>
            {educationDetails.map((education) => (
              <div className="bg-gray-800 p-4 rounded-lg mt-6 lg:mt-4" key={education.title}>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">
                    {education.title}
                  </h3>
                  <h4 className="text-white">{education.institute}</h4>
                  <p className="text-gray-400">{education.date}</p>
                </div>
                <p className="text-gray-300 mt-2">{education.description}</p>
              </div>
            ))}
          </div>
          <div className="lg:w-[1000px] mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-300 ml-2 flex items-center gap-2">
              <Briefcase className="w-6 h-6" /> Work Experience
            </h2>
            {workExperiences.map((work) => (
              <div className="bg-gray-800 p-4 rounded-lg mt-6 lg:mt-4" key={work.title}>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">
                    {work.title}
                  </h3>
                  <h4 className="text-white">{work.company}</h4>
                  <p className="text-gray-400">{work.date}</p>
                </div>
                <p className="text-gray-300 mt-2">{work.description}</p>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-[1000px] mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-300 ml-2 flex items-center gap-2">
              <Book className="w-6 h-6" /> Skills
            </h2>

            <div className="bg-gray-800 p-4 rounded-lg mt-6 lg:mt-4 ">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Frontend Development
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {frontendSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 text-blue-300 hover:text-blue-400 transition-colors duration-300 mr-2"
                  >
                    {skill.icon}
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg mt-6 lg:mt-4">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Backend Development
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {backendSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 text-blue-300 hover:text-blue-400 transition-colors duration-300 mr-2"
                  >
                    {skill.icon}
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg mt-6 lg:mt-4">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Tools & Others
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {otherTools.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 text-blue-300 hover:text-blue-400 transition-colors duration-300 mr-2"
                  >
                    {skill.icon}
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
