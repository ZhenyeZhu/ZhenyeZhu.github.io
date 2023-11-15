import Navbar from "../components/navbar";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

import React from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import uoft from "../images/experiences/uoft.jpg";
import cbm from "../images/experiences/clearbridge.png";

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
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0.5">
                  <Avatar size="lg" src={uoft} alt="uoft" className="" />
                </TimelineIcon>
                <Typography variant="h5" color="blue-gray">
                  University Student
                </Typography>
                <Typography variant="p" color="blue-gray" className="">
                  2019.9
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography color="gary" className="font-normal text-gray-600">
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
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0.5">
                  <Avatar
                    size="lg"
                    src={cbm}
                    alt="clearbridge mobile"
                    className=""
                  />
                </TimelineIcon>
                <Typography variant="h5" color="blue-gray">
                  Software QA Analyst
                </Typography>
                <Typography variant="p" color="blue-gray" className="">
                  2021.5-2021.12
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography color="gary" className="font-normal text-gray-600">
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
                      business rules and the documents from the client ensuring
                      the stability and accuracy of the software build
                      <br />
                      • Reported and discussed bugs and defects with the project
                      team, helping the developer to target the problematic code
                      and figuring the possible solution
                      <br />
                      • Attending every agile development process meeting from
                      daily scrum and backlog grooming to sprint planning and
                      internal demo, ensuring the critical problem is reported
                      and resolved
                      <br />• Learned and implemented automation test for the
                      mobile application with other QA members, reduce
                      regression testing time for the QA team by at least 50%
                    </AccordionBody>
                  </Accordion>
                  "My first 8-month coop jobs gives me a great introduction
                  about today's IT industry."
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0.5">
                  <Avatar
                    size="lg"
                    src="https://docs.material-tailwind.com/img/team-2.jpg"
                    alt="user 2"
                  />
                </TimelineIcon>
                <Typography variant="h5" color="blue-gray">
                  University of Toronto
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography color="gary" className="font-normal text-gray-600">
                  The key to more success is to have a lot of pillows. Put it
                  this way, it took me twenty five years to get these plants,
                  twenty five years of blood sweat and tears, and I&apos;m never
                  giving up, I&apos;m just getting started. I&apos;m up to
                  something. Fan luv.
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineHeader>
                <TimelineIcon className="p-0.5">
                  <Avatar
                    size="lg"
                    src="https://docs.material-tailwind.com/img/team-3.jpg"
                    alt="user 3"
                  />
                </TimelineIcon>
                <Typography variant="h5" color="blue-gray">
                  Timeline Title Here.
                </Typography>
              </TimelineHeader>
              <TimelineBody>
                <Typography color="gary" className="font-normal text-gray-600">
                  The key to more success is to have a lot of pillows. Put it
                  this way, it took me twenty five years to get these plants,
                  twenty five years of blood sweat and tears, and I&apos;m never
                  giving up, I&apos;m just getting started. I&apos;m up to
                  something. Fan luv.
                </Typography>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
}

export default Experience;
