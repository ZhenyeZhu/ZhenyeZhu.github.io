import Navbar from "../components/navbar";
import { Timeline } from "@material-tailwind/react";

import React from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import ExperienceTimelineItem from "../components/experienceRecord";

import uoft from "../images/experiences/uoft.jpg";
import cbm from "../images/experiences/clearbridge.png";
import cgi from "../images/experiences/cgi.jpg";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function Experience() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="bg-gray-50 h-screen w-screen flex justify-items-center">
      <Navbar />
      <div className="flex flex-1 flex-col gap-8 p-8 overflow-auto scrollbar-hide items-center">
        <h1 className="text-3xl h-fit font-bold text-black ">My Experience:</h1>

        <div className="w-fit md:w-2/3">
          <Timeline>
            <ExperienceTimelineItem
              title="University Student"
              img={uoft}
              alt="uoft"
              time="2019.9"
            >
              <span className="font-bold ">University:{"\t"}</span>
              University of Toronto Scarborough
              <br />
              <span className="font-bold ">Program:{"\t"}</span>
              Computer Science Coop
              <br />
              <span className="font-bold ">Specialization:{"\t"}</span>
              Software Engineering
              <br />
              "This is where I started my post-secondary education."
            </ExperienceTimelineItem>
            <ExperienceTimelineItem
              title="Software QA Analyst"
              img={cbm}
              alt="Clearbridge Mobile"
              time="2021.5-2021.12"
            >
              <span className="font-bold ">Company:{"\t"}</span>
              Clearbridge Mobile
              <br />
              <span className="font-bold ">Location:{"\t"}</span>
              Vaughan, ON, Canada
              <Accordion
                open={open === 1}
                className=""
                icon={<Icon id={1} open={open} />}
              >
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="justify-start border-b-0 font-bold text-md text-gray-600 p-0"
                >
                  Details
                </AccordionHeader>
                <AccordionBody className="p-1">
                  • Tested every user story of the software based on the
                  business rules and the documents from the client ensuring the
                  stability and accuracy of the software build
                  <br />
                  • Reported and discussed bugs and defects with the project
                  team, helping the developer to target the problematic code and
                  figuring the possible solution
                  <br />
                  • Attending every agile development process meeting from daily
                  scrum and backlog grooming to sprint planning and internal
                  demo, ensuring the critical problem is reported and resolved
                  <br />• Learned and implemented automation test for the mobile
                  application with other QA members, reduce regression testing
                  time for the QA team by at least 50%
                </AccordionBody>
              </Accordion>
              "My first 8-month coop jobs gives me a great introduction about
              today's IT industry."
            </ExperienceTimelineItem>
            <ExperienceTimelineItem
              title="Software Developer"
              img={cgi}
              alt="CGI"
              time="2022.5-2022.12"
            >
              <span className="font-bold ">Company:{"\t"}</span>
              CGI Inc.
              <br />
              <span className="font-bold ">Location:{"\t"}</span>
              Toronto, ON, Canada
              <Accordion
                open={open === 2}
                className=""
                icon={<Icon id={2} open={open} />}
              >
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="justify-start border-b-0 font-bold text-md text-gray-600 p-0"
                >
                  Details
                </AccordionHeader>
                <AccordionBody className="p-1">
                  • Designed and implemented new technical solutions for the
                  deprecated services used by the client product to enhance user
                  experiences without losing old functionalities
                  <br />
                  • Cleaned and redistribute existing cloud services on Azure
                  used by the product so that product’s cost is reduced by
                  $1500/month
                  <br />
                  • Maintained and upgraded (e.g., dockization) automation test
                  suite, decreasing the complexity of running the tests and
                  increasing the efficiency of the testing team by 20%
                  <br />• Play a key role in the development phase of external
                  projects through preparing SDS (Software/system design
                  specification) documents and hosting client review sessions
                </AccordionBody>
              </Accordion>
              "This is my second 8-month coop jobs, which gives me a better
              insight on today's IT industry, especially for developer roles."
            </ExperienceTimelineItem>
            <ExperienceTimelineItem
              title="University Graduate"
              img={uoft}
              alt="uoft"
              time="2023.9"
            >
              <span className="font-bold ">University:{"\t"}</span>
              University of Toronto Scarborough
              <br />
              <span className="font-bold ">Degree:{"\t"}</span>
              Honours Bachelor of Science (HBSc)
              <br />
              <span className="font-bold ">cGPA:{"\t"}</span>
              3.77/4.0
              <br />
              <span className="font-bold ">Program:{"\t"}</span>
              Computer Science Coop
              <br />
              <span className="font-bold ">Awards:{"\t"}</span>
              University of Toronto Scarborough Dean's List for 2020, 2021, 2022
              and 2023
              <br />
              "I successfully graduated after 4 years study at University of
              Toronto"
            </ExperienceTimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
}

export default Experience;
