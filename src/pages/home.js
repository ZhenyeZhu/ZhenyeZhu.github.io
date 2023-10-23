import Navbar from "../components/navbar";

function Home() {
  return (
    <div className="bg-slate-700 h-screen w-screen flex justify-items-center">
      <Navbar />
      <h1 className="text-3xl grow font-bold underline text-center text-indigo-600">
        Hello world!
      </h1>
    </div>
  );
}

export default Home;
