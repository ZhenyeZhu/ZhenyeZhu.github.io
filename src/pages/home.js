import Navbar from "../components/navbar";

function Home() {
  return (
    <div className="bg-sky-50 h-screen w-screen flex justify-items-center">
      <Navbar />
      <h1 className="text-3xl grow font-bold underline text-center text-black self-center">
        Hello world!
      </h1>
    </div>
  );
}

export default Home;
