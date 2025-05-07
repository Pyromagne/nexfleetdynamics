import Logo from "./Components/Logo";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Module from "./Components/Module";

import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="py-4 px-10 flex items-center gradient drop-shadow-xl border-b-2 border-white sticky top-0">
        <div className="w-56">
          <Logo color="white" />
        </div>
        <div className="ml-auto flex text-white items-baseline gap-4">
          {navLinks.map((nav, index) => (
            <NavLink
              key={index}
              to={nav.link}
              className={({ isActive }) => isActive ? "navlinkStyle font-semibold " : "navlinkStyle text-white/75"}
            >
              {nav.name}
            </NavLink>
          ))}
          <Link to="/signup" className="py-2 px-4 rounded-full bg-white text-[#00446b] font-medium ml-2">Sign in</Link>
        </div>
      </nav>

      <main className="min-h-[34rem] mb-8">
        <div className="px-20 py-16 text-white gradient2">
          <h1 className="text-5xl noto-serif">A Complete Platform for Managing Modern Bus Transportation Systems</h1>
          <h2 className="text-2xl noto-serif mt-10">Manage routes, bookings, staff, and live tracking — all from one easy-to-use dashboard.</h2>

          <div className="flex justify-center gap-8 text-black mt-20">
            <Link to="/features" className="text-xl bg-white py-4 px-6 rounded-full font-medium text-[#00446b]">See Features</Link>
            <Link to="/demo" className="text-xl text-white py-4 px-6 rounded-full font-medium gradient outline">Request a Demo</Link>
          </div>
        </div>


        <div className="my-12 flex flex-col items-center px-40">
          <h3 className="italic text-center text-lg">Designed for bus transit companies — our system simplifies operations, improves efficiency, and reduces costs.</h3>

          <h1 className="font-bold text-3xl mt-10 text-center">Modules</h1>
          <div className="flex mt-6 flex-wrap gap-28 gap-y-12 justify-center">
            {modules.map((module, index) => <Module key={index} name={module.name} desc={module.desc} />)}
          </div>
        </div>
      </main>

      <footer className="h-48 text-center p-4 border-t gradient flex flex-col text-white">
        <div className="grid grid-cols-2">
          <div className="w-72">
            <Logo color="white"/>
          </div>
          <div>
            <ul className="text-white text-right">
              <li><a href="mailto:nexfleetdynamics@gmail.com">nexfleetdynamics@gmail.com</a></li>
              <li><a href="sms:+639123456789?body=Please%20contact%20me.">0912 345 6789</a></li>
              <li>Quezon City - Main Ofiice</li>
            </ul>
          </div>
        </div>
        <div className="border-t py-4 mt-auto flex">
          <div className="flex gap-4 items-end">
            <p className="mt-auto">© 2025 NexFleet Dynamics - All Rights Reserved.</p>
            <Link className="hover:underline">Privacy Policy</Link>
            <Link className="hover:underline">Term of Use</Link>
          </div>
          <div className="ml-auto flex gap-4">
            <SiFacebook size={28} className="hover:cursor-pointer"/>
            <SiInstagram size={28} className="hover:cursor-pointer"/>
            <SiX size={28} className="hover:cursor-pointer"/>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

const modules = [
  {
    name: "Human Resources",
    desc: "Manage drivers and staff profiles, attendance, payroll, and roles"
  },
  {
    name: "Administration",
    desc: "System users, access controls, and configuration"
  },
  {
    name: "Finance",
    desc: "Fares, revenue reports, invoicing, budgeting, and financial dashboards"
  },
  {
    name: "Logistics",
    desc: "Inventory and Warehousing, Facility Management, and reverse logistics"
  },
  {
    name: "Core Operations",
    desc: "Trip scheduling, live bus tracking, ticketing, maintenance, and route planning"
  },
];

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Features",
    link: "/features",
  },
  {
    name: "Pricing",
    link: "/pricing",
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Contacts",
    link: "/contacts",
  },
  {
    name: "Resources",
    link: "/resources",
  },
];
