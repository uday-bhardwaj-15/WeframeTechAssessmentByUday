import type { NextPage } from "next";

export type CheckboxType = {
  className?: string;
};

const Checkbox: NextPage<CheckboxType> = ({ className = "" }) => {
  return (
    <div className={`h-4 w-4 relative ${className}`}>
      <input className="m-0 h-4 w-4 relative" type="checkbox" />
    </div>
  );
};

export default Checkbox;
