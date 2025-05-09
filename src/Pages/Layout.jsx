import { NavLink, Link, Outlet, Navigate } from "react-router-dom";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

import Logo from "../Components/Logo.jsx"
import Bus from "../assets/svgs/city-bus-rafiki.svg";


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="py-4 px-10 flex items-center gradient drop-shadow-xl border-b-2 border-white sticky top-0 z-50">
        <div className="w-56">
          <Logo color="white" />
        </div>
        <div className="ml-auto flex text-white items-baseline gap-4">
          {navLinks.map((nav, index) => (
            <NavLink
              key={index}
              to={nav.link}
              className={({ isActive }) =>
                isActive
                  ? "navlinkStyle font-semibold "
                  : "navlinkStyle text-white/75"
              }
            >
              {nav.name}
            </NavLink>
          ))}
          <Link
            to="/signin"
            className="py-2 px-4 rounded-full bg-white text-[#00446b] font-medium ml-2"
          >
            Sign in
          </Link>
        </div>
      </nav>

      <main className="min-h-[34rem]">
        <Outlet />
      </main>

      <footer className="text-center p-4 border-t gradient flex flex-col text-white pt-6 relative overflow-hidden">
        <div className="w-full h-full absolute marquee-container -bottom-6 left-0">
          <img src={Bus} alt="Bus" className="w-64 z-0 marquee-item" />
        </div>
        <div className="grid grid-cols-2 z-10 pb-4">
          <div className="w-72">
            <Logo color="white" />
          </div>
          <div>
            <ul className="text-white text-right">
              <li>
                <a href="mailto:nexfleetdynamics@gmail.com">
                  nexfleetdynamics@gmail.com
                </a>
              </li>
              <li>
                <a href="sms:+639123456789?body=Please%20contact%20me.">
                  +63 9123456789
                </a>
              </li>
              <li>Quezon City - Main Ofiice</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/50 py-4 mt-auto flex z-10">
          <div className="flex gap-4 items-end">
            <p className="mt-auto">
              © 2025 NexFleet Dynamics - All Rights Reserved.
            </p>
            <Link className="hover:underline">Privacy Policy</Link>
            <Link className="hover:underline">Term of Use</Link>
          </div>
          <div className="ml-auto flex gap-4">
            <SiFacebook size={28} className="hover:cursor-pointer" />
            <SiInstagram size={28} className="hover:cursor-pointer" />
            <SiX size={28} className="hover:cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

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
