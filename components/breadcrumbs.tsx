import type { NextPage } from "next";

export type BreadcrumbsType = {
  className?: string;
};

const Breadcrumbs: NextPage<BreadcrumbsType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-5 text-left text-base cursor-pointer text-primary font-captions mq900:flex-wrap ${className}`}
    >
      <a className="[text-decoration:none] relative text-[inherit] inline-block hover:text-black  min-w-[49px]">
        Home
      </a>
      <img
        className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
        loading="lazy"
        alt=""
        src="/checkboxiconarrowright.svg"
      />
      <div className="relative inline-block min-w-[99px] hover:text-black">
        Livebestand
      </div>
      <img
        className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
        alt=""
        src="/checkboxiconarrowright.svg"
      />
      <b className="relative text-black2">Cannabis Blüten</b>
    </div>
  );
};

export default Breadcrumbs;
