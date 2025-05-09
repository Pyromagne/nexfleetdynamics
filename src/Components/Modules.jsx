import HumanResourceI from "../assets/svgs/Resume-folder-cuate.svg";
import CoreI from "../assets/svgs/Visual-data-amico.svg";
import AdminI from "../assets/svgs/Admin-cuate.svg";
import Finance from "../assets/svgs/Revenue-amico.svg";
import LogisticsI from "../assets/svgs/Logistics-amico.svg";

import Bus from "../assets/svgs/city-bus-rafiki.svg";

export const modules = [
  {
    name: "Human Resources",
    desc: "Manage drivers and staff profiles, attendance, payroll, and roles",
    illustration: HumanResourceI,
    links: [
      "https://hr1.nexfleetdynamics.com",
      "https://hr2.nexfleetdynamics.com",
      "https://hr3.nexfleetdynamics.com",
      "https://hr4.nexfleetdynamics.com",
    ]
  },
  {
    name: "Administration",
    desc: "System users, access controls, and configuration",
    illustration: AdminI,
    links: [
      "https://admin.nexfleetdynamics.com",
    ]
  },
  {
    name: "Finance",
    desc: "Fares, revenue reports, invoicing, budgeting, and financial dashboards",
    illustration: Finance,
    links: [
      "https://finance.nexfleetdynamics.com",
    ]
  },
  {
    name: "Logistics",
    desc: "Inventory and Warehousing, Facility Management, and reverse logistics",
    illustration: LogisticsI,
    links: [
      "https://lgstc1.nexfleetdynamics.com",
      "https://lgstc2.nexfleetdynamics.com",
    ]
  },
  {
    name: "Core Operations",
    desc: "Trip scheduling, live bus tracking, ticketing, maintenance, and route planning",
    illustration: CoreI,
    links: [
      "https://core1.nexfleetdynamics.com",
      "https://core2.nexfleetdynamics.com",
    ]
  },
];

const Modules = () => {
  return (
    <>
      {modules.map((module, index) => {
        return (
          <div key={index} className="group flex flex-row even:flex-row-reverse w-full">
            <div className="w-1/2 flex justify-center">
              <img
                src={module.illustration}
                alt={module.name}
                className="w-56 duration-200 group-hover:drop-shadow-[0_4px_8px_#003b6d] group-hover:scale-105"
              />
            </div>
            <div className="w-1/2">
              <div className="cursor-pointer overflow-hidden relative flex flex-col items-center px-20 py-10 border-[#003b6d] border-b-4 shadow border-2 p-4 m-6 rounded-3xl group-hover:shadow-[#01619d]/30 group-hover:shadow-xl duration-200">
                <img src={Bus} alt={module.name} className="absolute -bottom-6 -left-8 z-0 w-2/3 opacity-0 group-hover:opacity-20 duration-200" />
                <p className="text-2xl font-semibold z-10">{module.name}</p>
                <p className="mt-10 text-center z-10">{module.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Modules;
