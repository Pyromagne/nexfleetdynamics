const Module = ({ name, desc }) => {
  return (
    <div className="rounded-2xl overflow-hidden w-64 shadow-2xl border-2 border-[#00446b]">
      <p className="bg-white p-6 text-center text-xl font-light">{name}</p>
      <p className="bg-[#00446b] p-4 text-white text-center text-sm italic h-32 font-light">{desc}</p>
    </div>
  );
};

export default Module;
