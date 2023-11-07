import Navbar from "../components/navbar";
import ME from "../images/me.jpg";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div className="bg-gray-50 h-screen w-screen flex justify-items-center">
      <Navbar />
      <div className="grow h-full shrink-0 self-center flex justify-center overflow-auto scrollbar-hide">
        <div className="flex grow shrink-0 flex-col-reverse justify-center lg:flex-row lg:gap-4 m-auto p-4 bg-gray-100 ">
          <div className="text-3xl w-56 md:w-2/3 lg:w-1/2 max-w-xl font-bold text-black self-center mt-2 lg:mt-0">
            Hi! My name is Zhenye, I'm a
            <TypeAnimation
              sequence={[
                " software developer.",
                2000,
                " CS new-grad from UTSC.",
                2000,
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
              className="text-4xl underline"
            />
            <br />
            <div className="text-lg font-normal">
              👉 Welcome to my page! Please Feel free to look around! 👍
            </div>
          </div>
          <img src={ME} className="self-center h-96 hidden sm:block" alt="Me" />
        </div>
      </div>
    </div>
  );
}

export default Home;
