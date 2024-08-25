import type { NextPage } from "next";
import Button from "./button";

export type ButtonPrimaryType = {
  className?: string;
};

const ButtonPrimary: NextPage<ButtonPrimaryType> = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start ${className}`}
    >
      <Button />
    </button>
  );
};

export default ButtonPrimary;
