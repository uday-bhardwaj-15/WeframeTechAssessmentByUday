"use client";
import type { NextPage } from "next";
import { useState } from "react";

export type SwitchType = {
  className?: string;
};

const Switch: NextPage<SwitchType> = ({ className = "" }) => {
  return (
    <>
      <label className="relative inline-block">
        <input type="checkbox" className="peer invisible" />
        <span className="absolute top-0 left-0 w-6 h-3 cursor-pointer rounded-full bg-[#62C3C6] border border-slate-300 transition-all duration-100 peer-checked:bg-[#62C3C6] opacity-30"></span>
        <span className="absolute top-[2px] left-[2px] w-2 h-2 bg-[#62C3C6] rounded-full z-10 transition-all duration-100 peer-checked:translate-x-3"></span>
      </label>
    </>
  );
};

export default Switch;
