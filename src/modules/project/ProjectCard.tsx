import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  desc: string;
};

const ProjectCard = ({ title, desc }: Props) => {
  return (
    <div className="flex overflow-hidden w-full max-w-[80%] h-[300px] bg-gray-800 rounded-xl hover:shadow-md hover:shadow-cyan-500">
      <div className="w-[50%] h-full overflow-hidden">
        <img
          src="../../src/assets/crownfunding.png"
          alt=""
          className="object-cover object-center w-full h-full transition-all hover:scale-110"
        />
      </div>
      <div className="p-6 font-mono w-[50%]">
        <h1 className="mb-5 text-2xl font-semibold text-white">{title}</h1>
        <p className="mb-5">{desc}</p>
        <Link
          to="/project/crownfunding"
          className="inline-flex items-center px-5 py-2 text-lg text-white transition-all border-2 gap-x-2 group border-primary2 hover:bg-primary2 hover:border-none"
        >
          Xem thêm
          <ArrowRight className="transition-all group-hover:translate-x-2"></ArrowRight>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
