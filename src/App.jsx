import { useState } from "react";
import Logo from "./Components/Logo";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Module from "./Components/Module";

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
          <Link to="/signup" className="text py-2 px-4 rounded-full bg-white text-black font-medium ml-2">Sign in</Link>
        </div>
      </nav>

      <main className="min-h-[34rem] mb-8">
      <div className="px-20 py-16 text-white gradient2">
        <h1 className="text-5xl noto-serif">A Complete Platform for Managing Modern Bus Transportation Systems</h1>
        <h2 className="text-2xl noto-serif mt-10">Manage routes, bookings, staff, and live tracking — all from one easy-to-use dashboard.</h2>
        
        <div className="flex justify-center gap-8 text-black mt-20">
          <Link to="/features" className="text-xl bg-white py-4 px-6 rounded-full font-medium">See Features</Link>
          <Link to="/demo" className="text-xl bg-white py-4 px-6 rounded-full font-medium">Request a Demo</Link>
        </div>
      </div>
        

      <div className="mt-12 flex flex-col items-center">
        <h3 className="italic text-center text-lg">Designed for transit authorities, bus companies, and fleet operators — our system simplifies operations, improves efficiency, and reduces costs.</h3>
        
        <h1 className="font-bold text-3xl mt-10 text-center">Modules</h1>
        <div className="w-4/5 flex mt-6 flex-wrap gap-28 gap-y-12 justify-center">
          {modules.map((module, index)=><Module key={index} name={module.name} desc={module.desc}/>)}
        </div>
      </div>
      </main>

      <footer className="h-48 mt-auto text-center p-4 border-t">
        footer
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
