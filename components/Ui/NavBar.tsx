"use client";
import type { NextPage } from "next";
import Point from "../point";
import IconCart from "../icon-cart";
import ButtonPrimary1 from "../buttons/button-primary1";
import { useState } from "react";

export type NavBarType = {
  className?: string;
};

const NavBar: NextPage<NavBarType> = ({ className = "" }) => {
  return (
    <div className="self-stretch  rounded-3xl overflow-hidden   flex flex-row items-start justify-start gap-[30px] max-w-full text-left text-base text-primary font-captions ">
      <img
        className="h-11 w-[107.7px] relative overflow-hidden shrink-0 hidden"
        alt=""
        src="/logo.svg"
      />
      <div className="flex-1 flex flex-row items-start justify-start gap-[30px] max-w-full">
        <div className="flex-1 rounded-11xl bg-azure flex flex-row items-start justify-between pt-1.5 px-4 pb-2 box-border max-w-full gap-5">
          <input
            type="text"
            placeholder="Suchen"
            className="text-[#62C3C6] placeholder:text-[#62C3C6] text-base inline-block min-w-[62px] bg-transparent border-none outline-none flex-1 text-left p-1"
          />
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            alt="Search Icon"
            src="/iconsearch.svg"
          />
        </div>

        <div className="flex flex-row items-start justify-start gap-[50px] max-w-full text-xs text-accent-blue font-sf-pro-display mq450:gap-[25px]">
          <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0 box-border max-w-full">
            <div className="flex flex-row items-start justify-start gap-[30px]">
              <Point
                propBackgroundColor="#28e3e9"
                bestellprozess="Rezept einlösen"
                propColor="#045a5c"
                propDisplay="unset"
                propMinWidth="unset"
                propTextDecoration="none"
                propFontWeight="700"
              />
              <Point
                propBackgroundColor="rgba(98, 195, 198, 0.3)"
                bestellprozess="Live Bestand"
                propColor="#045a5c"
                propDisplay="inline-block"
                propMinWidth="103px"
                propTextDecoration="none"
                propFontWeight="unset"
              />
              <Point
                propBackgroundColor="rgba(98, 195, 198, 0.3)"
                bestellprozess="Videosprechstunde"
                propColor="#045a5c"
                propDisplay="unset"
                propMinWidth="unset"
                propTextDecoration="none"
                propFontWeight="unset"
              />
              <Point
                propBackgroundColor="rgba(98, 195, 198, 0.3)"
                bestellprozess="FAQs"
                propColor="#045a5c"
                propDisplay="inline-block"
                propMinWidth="43px"
                propTextDecoration="none"
                propFontWeight="unset"
              />
              <Point
                propBackgroundColor="rgba(98, 195, 198, 0.3)"
                bestellprozess="Kontakt"
                propColor="#045a5c"
                propDisplay="inline-block"
                propMinWidth="64px"
                propTextDecoration="none"
                propFontWeight="unset"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-4">
            <div className="w-9 flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
              <IconCart />
            </div>
            <ButtonPrimary1 className="hover:opacity-50  hover:text-black1 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
