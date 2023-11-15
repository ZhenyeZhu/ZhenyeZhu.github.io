import {
  Avatar,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from "@material-tailwind/react";

import React from "react";

function ExperienceTimelineItem(props) {
  return (
    <TimelineItem>
      {props.noConnector ? "" : <TimelineConnector />}
      <TimelineHeader>
        <TimelineIcon className="p-0.5">
          <Avatar size="lg" src={props.img} alt={props.alt} className="" />
        </TimelineIcon>
        <Typography variant="h5" color="blue-gray">
          {props.title}
        </Typography>
        <Typography variant="p" color="blue-gray" className="">
          {props.time}
        </Typography>
      </TimelineHeader>
      <TimelineBody className="pb-8">
        <Typography color="gary" className="font-normal text-gray-600">
          {props.children}
        </Typography>
      </TimelineBody>
    </TimelineItem>
  );
}

export default ExperienceTimelineItem;
