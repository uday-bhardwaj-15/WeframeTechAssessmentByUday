import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type CheckboxTagType = {
  className?: string;
  tHC24?: string;

  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
};

const CheckboxTag: NextPage<CheckboxTagType> = ({
  className = "",
  propFlex,
  tHC24,
  propMinWidth,
}) => {
  const checkboxTagStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const tHC24Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <button
      className={`cursor-pointer [border:none] py-1 px-5 bg-primary flex-1 rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkcyan-100 ${className}`}
      style={checkboxTagStyle}
    >
      <div
        className="relative text-base font-captions text-background text-left inline-block min-w-[70px]"
        style={tHC24Style}
      >
        {tHC24}
      </div>
    </button>
  );
};

export default CheckboxTag;
