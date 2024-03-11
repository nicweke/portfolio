"use client";

import { ArrowDown } from "@/components/icons";

const Scroll = () => {
  return (
    <div className="flex my-10 items-center justify-center">
      <div className="my-10 flex animate-bounce flex-col items-center justify-center md:my-20">
        <p>Scroll Down</p>
        <span>
          <ArrowDown className="mt-2 size-5 animate-bounce " />
        </span>
      </div>
    </div>
  );
};

export default Scroll;
