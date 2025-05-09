import { modules } from "../Components/Modules";
import { useState } from "react";

const Signin = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-center mb-8">
        Select the module you want to log in to.
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {modules.map((module, index) => (
          <Card key={index} module={module} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ module }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="w-1/4 h-96 select-none cursor-pointer overflow-hidden relative p-10 border-[#003b6d] border-b-4 shadow border-2 rounded-3xl hover:shadow-[#01619d]/30 hover:shadow-xl duration-200 [perspective:1000px]"
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden flex flex-col items-center">
          <img src={module.illustration} alt={module.name} className="w-48" />
          <p className="text-2xl font-semibold text-center">{module.name}</p>
          <p className="text-center">{module.desc}</p>
        </div>

        <div className="absolute w-full h-full rotate-y-180 backface-hidden flex flex-col gap-4">
          {module.links.map((link, index) => (
            <a
              key={index}
              target="_blank"
              href={link}
              className="p-4 rounded-xl text-center font-medium text-white bg-[#01619d] shadow hover:bg-[#00558c] hover:scale-105 hover:shadow-[#01619d]/50 duration-200"
            >
              {module.name} {index + 1}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Signin;
