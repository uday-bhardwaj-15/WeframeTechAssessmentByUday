import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type CardComponentType = {
  className?: string;
  genetik?: string;
  indica?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const CardComponent: NextPage<CardComponentType> = ({
  className = "",
  genetik,
  indica,
  propMinWidth,
}) => {
  const indicaStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-row items-baseline justify-start gap-2 text-left text-base text-secondary-text font-captions ${className}`}
    >
      <div className="relative inline-block min-w-[65px]">{genetik}</div>
      <div className="h-px flex-1 relative border-secondary-30 border-t-[1px] border-dashed box-border" />
      <div className="relative inline-block min-w-[56px]" style={indicaStyle}>
        {indica}
      </div>
    </div>
  );
};

export default CardComponent;
