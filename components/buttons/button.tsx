import type { NextPage } from "next";

export type ButtonType = {
  className?: string;
};

const Button: NextPage<ButtonType> = ({ className = "" }) => {
  return (
    <div
      className={`rounded-tl-3xl rounded-tr-none rounded-br-3xl rounded-bl-none bg-yellow flex flex-row items-center justify-center pt-[7px] px-[18px] pb-2 whitespace-nowrap text-left text-sm text-secondary-text font-captions ${className}`}
    >
      <div className="relative tracking-[0.01em] inline-block min-w-[128px]">
        in den Warenkorb
      </div>
    </div>
  );
};

export default Button;
