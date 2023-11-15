import Navbar from "../components/navbar";

import ProjectCard from "../components/projectCard";

import FoodResQ from "../images/projects/FoodResQ.png";
import SmartHomeHub from "../images/projects/SmartHomeHub.png";
import ProfilePhoto from "../images/ProfilePhoto.png";
import EntreE from "../images/projects/EntreE.png";
import UnixSimulator from "../images/projects/UnixSimulator.jpg";

function Projects() {
  return (
    <div className="bg-gray-50 h-screen w-screen flex justify-items-center">
      <Navbar />
      <div className="flex flex-1 flex-col gap-8 p-8 overflow-auto scrollbar-hide">
        <h1 className="text-3xl h-fit font-bold text-center text-black ">
          My Projects:
        </h1>
        <div className="flex flex-wrap gap-6 place-content-center">
          <ProjectCard
            img={FoodResQ}
            title="Food ResQ"
            summary="Food ResQ won 6th place out of 80 team from a 36 hours hackathon event called &quot;Hack The Valley&quot;. It keeps track of the food in user's fridge and generate delicious recipes using AI. When the user wants a food recipe recommendation, our app will help our user finish off their food waste in the fridge while considering user's customization requests. Using the power of chatGPT, our app is super flexable, such that all the unknown food and food that you are too lazy to measure the weight of can be quickly put into a flexible and delicious recipe."
            skills="React, Bootstrap, Flask, MongoDB, Open AI, Figma, Time Management"
            link="https://devpost.com/software/food-resq-ai-recommended-recipes-to-reduce-food-waste?ref_content=my-projects-tab&ref_feature=my_projects"
          ></ProjectCard>
          <ProjectCard
            img={SmartHomeHub}
            title="Smart Home Hub"
            summary="Smart Home Hub is currently a web based project that aims to make you home smart! Image all the equipments (thermal system, light, curtain...) at your home are smart enough to do what you says and automated as needed. That's what we want to achieve in the future. The project is still in progress as a 2D web based smart home application, and we plan to imnplement embedded system and IoT for the devices to make Smart Home Hub come true!"
            skills="React, Tailwind CSS, Spring, MYSQL, Docker"
            link="https://github.com/FC-Open-to-Work/Smart-Home-Hub"
          ></ProjectCard>
          <ProjectCard
            img={ProfilePhoto}
            title="Personal Website"
            summary="This is Zhenye's personal website project that you are currently visiting."
            skills="React, Tailwind CSS, Website Deployment"
            link="https://github.com/ZhenyeZhu/ZhenyeZhu.github.io"
          ></ProjectCard>
          <ProjectCard
            img={EntreE}
            title="EntreE"
            summary="EntreE is an African Entrepreneurs’ Community and E-Learning Platform that my teammate and I build on CSCC01 course at UTSC. It's a web application for a virtual platform that mainly focuses on the community and E-Learning features for African entrepreneurs"
            skills="React, Flask, MongoDB, PostgreSQL, Git, Agile"
            link="https://github.com/UTSCCSCC01/project-ez4-0"
          ></ProjectCard>
          <ProjectCard
            img={UnixSimulator}
            title="Unix Shell Simulator in Java"
            summary="This is a project my teamamte and I made on CSCB07 course at UTSC. Together we built a Unix shell using Java, ensured the code worked like a basic Unix shell."
            skills="Linux System, Java, Junit, Git, Scrum"
            link="https://github.com/archie-lhd/mock-unix-shell"
          ></ProjectCard>
        </div>
      </div>
    </div>
  );
}

export default Projects;
