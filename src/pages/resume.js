import Navbar from "../components/navbar";

function Resume() {
  return (
    <div className="bg-sky-50 h-screen w-screen flex justify-items-center">
      <Navbar />
      <h1 className="text-3xl grow font-bold underline text-center text-black self-center">
        My Resume
      </h1>
    </div>
  );
}

export default Resume;
