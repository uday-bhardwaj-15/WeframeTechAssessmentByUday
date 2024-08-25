import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Button1Type = {
  className?: string;
  bestellprozess?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
};

const Button1: NextPage<Button1Type> = ({
  className = "",
  propBorder,
  bestellprozess,
}) => {
  const button2Style: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  return (
    <button
      className={`cursor-pointer border-yellow border-[2px] border-solid pt-1 px-[70px] pb-[5px] bg-[transparent] rounded-tl-3xl rounded-tr-none rounded-br-3xl rounded-bl-none flex flex-row items-center justify-center hover:bg-khaki-200 hover:border-khaki-100 hover:border-[2px] hover:border-solid hover:box-border ${className}`}
      style={button2Style}
    >
      <div className="relative text-sm tracking-[0.01em] font-captions text-black2 text-left inline-block min-w-[106px]">
        {bestellprozess}
      </div>
    </button>
  );
};

export default Button1;
