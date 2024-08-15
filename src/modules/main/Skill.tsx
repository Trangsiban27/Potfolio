import React from "react";

const skill: {
  name: string;
  icon: string;
}[] = [
  {
    name: "Html",
    icon: "html.png",
  },
  {
    name: "Css",
    icon: "css.png",
  },
  {
    name: "Javascript",
    icon: "javascript.png",
  },
  {
    name: "NextJs",
    icon: "nextjs.png",
  },
  {
    name: "Redux",
    icon: "redux.png",
  },
  {
    name: "Typescript",
    icon: "typescript.png",
  },
  {
    name: "Figma",
    icon: "figma.png",
  },
  {
    name: "ReactJs",
    icon: "react.png",
  },
  {
    name: "Photoshop",
    icon: "photoshop.png",
  },
  {
    name: "Tailwindcss",
    icon: "tailwind.png",
  },
  {
    name: "vsCode",
    icon: "vscode.png",
  },
  {
    name: "GitHub",
    icon: "github.png",
  },
];

const Skill = () => {
  return (
    <div className="flex flex-wrap items-center text-gray-300 gap-x-[100px] gap-y-[80px]">
      {skill.map((item) => (
        <div className="flex flex-col items-center skill">
          <img
            src={`../../src/assets/${item.icon}`}
            alt=""
            className="mb-5 w-14 h-14 img-skill"
          />
          <p className="font-semibold name-skill">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Skill;
