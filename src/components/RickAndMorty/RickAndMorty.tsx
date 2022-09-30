import React from "react";
import { rick_morty, eye } from "../../assets";

import eyesStyle from "./eyesStyle";
function RickAndMorty() {
  return (
    <div>
      <img
        id="anchor"
        src={rick_morty}
        className="w-[100%] h-[100%] relative z-[1]"
      />
      <div id="eyes">
        <img
          src={eye}
          className={`${eyesStyle.eyes} bottom-[776px] left-[421px]`}
        />
        <img
          src={eye}
          className={`${eyesStyle.eyes} bottom-[804px] left-[369px]`}
        />
        <img
          src={eye}
          className={`${eyesStyle.eyes} bottom-[710px] left-[290px]`}
        />
        <img
          src={eye}
          className={`${eyesStyle.eyes} bottom-[727px] left-[230px]`}
        />
      </div>
    </div>
  );
}

export default RickAndMorty;
