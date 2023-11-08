import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

function ProjectCard({ img, title, summary, skills, link }) {
  return (
    <Card className="mt-6 w-96 h-fit">
      <CardHeader
        color="blue-gray"
        className="relative h-56 flex place-content-center place-items-center bg-gray-100"
      >
        <img src={img} alt="Food ResQ" className="h-fit w-fit" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>

        <Typography className="line-clamp-5 hover:line-clamp-none ">
          {summary}
        </Typography>
        <Typography className="font-bold mt-2">Skills: {skills}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href={link} target="_blank" rel="noreferrer">
          <Button>Learn More</Button>{" "}
        </a>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
