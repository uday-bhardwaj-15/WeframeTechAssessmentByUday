import type { NextPage } from "next";
import Button2 from "./button2";

export type ButtonPrimary1Type = {
  className?: string;
};

const ButtonPrimary1: NextPage<ButtonPrimary1Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start text-left text-sm text-black2 font-captions ${className}`}
    >
      <Button2 />
    </div>
  );
};

export default ButtonPrimary1;
