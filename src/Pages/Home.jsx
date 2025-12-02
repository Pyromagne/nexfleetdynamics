import { Link } from "react-router-dom";
import Modules from "../Components/Modules.jsx";
import City from "../assets/svgs/City-skyline-cuate.svg";

const Home = () => {
  return (
    <>
      <img src={City} alt="city-bg" className="fixed z-0 top-0 opacity-65" />
      <div className="px-20 py-16 text-white gradient2">
        <h1 className="text-5xl noto-serif relative">
          A Complete Platform for Managing Modern Bus Transportation Systems
        </h1>
        <h2 className="text-2xl noto-serif mt-10 relative">
          Manage routes, bookings, staff, and live tracking — all from one
          easy-to-use dashboard.
        </h2>

        <div className="flex justify-center gap-8 text-black mt-20 relative">
          <Link
            to="/features"
            className="text-xl bg-white py-4 px-6 rounded-full font-medium text-[#00446b]"
          >
            See Features
          </Link>
          <Link
            to="/demo"
            className="text-xl text-white py-4 px-6 rounded-full font-medium gradient outline"
          >
            Request a Demo
          </Link>
        </div>
      </div>

      <div className="py-12 flex flex-col items-center px-64 bg-white relative">
        <h1 className="font-semibold text-6xl my-4 text-center">
          Core Modules
        </h1>
        <h3 className="italic text-center text-lg mb-8">
          Designed for bus transit companies — our system simplifies operations,
          improves efficiency, and reduces costs.
        </h3>
        <Modules />
      </div>
    </>
  );
};

export default Home;
