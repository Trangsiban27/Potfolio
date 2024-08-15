import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: string;
  className?: string;
  to: string;
};

const ButtonPrimary = ({ children, className, to }: Props) => {
  return (
    <Link
      to={to}
      className={`px-10 text-lg font-semibold text-white bg-transparent py-4 ${className}`}
    >
      {children}
    </Link>
  );
};

export default ButtonPrimary;
