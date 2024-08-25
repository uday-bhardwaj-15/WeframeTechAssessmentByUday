import type { NextPage } from "next";

export type Button2Type = {
  className?: string;
};

const Button2: NextPage<Button2Type> = ({ className = "" }) => {
  return (
    <div
      className={`rounded-tl-3xl rounded-tr-none rounded-br-3xl rounded-bl-none bg-yellow flex flex-row items-start justify-start pt-[7px] px-[18px] pb-2 text-left text-sm text-black2 font-captions ${className}`}
    >
      <a className="[text-decoration:none] relative tracking-[0.01em] text-[inherit] inline-block min-w-[74px]">
        Anmelden
      </a>
    </div>
  );
};

export default Button2;
