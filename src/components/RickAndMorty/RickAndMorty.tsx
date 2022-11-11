import React from "react";
import { useCallback, useEffect, useState } from "react";
import { rick_morty } from "../../assets";

import eyesStyle from "./eyesStyle";

function RickAndMorty({ deg, setAnchorAxis }: any) {
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlow(!glow);
      console.log("works");
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const measuredImage = useCallback((image: any) => {
    if (image !== null) {
      const rekt = image.getBoundingClientRect();
      setAnchorAxis({
        anchorX: rekt.left + rekt.width / 2,
        anchorY: rekt.top + rekt.height / 2,
      });
    }
  }, []);

  return (
    <div className="bg-slate-200 z-[2]">
      <h2>deg: {deg}</h2>

      <img
        ref={measuredImage}
        src={rick_morty}
        className="w-[100%] h-[100%] relative z-[1]"
      />

      <div id="eventyes">
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: 16,
            backgroundColor: "black",
            transform: `rotate(${90 + deg}deg)`,
            transformOrigin: "bottom center",
            boxShadow: glow ? "0 0 20px 2px rgb(255, 0, 0)" : "unset",
          }}
          className={`${eyesStyle.eyes} ${eyesStyle.transformOrigin} bottom-[772px] left-[424px]`}
        />
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: 16,
            backgroundColor: "black",
            transform: `rotate(${90 + deg}deg)`,
            transformOrigin: " bottom center",
          }}
          className={`${eyesStyle.eyes} ${eyesStyle.transformOrigin} bottom-[779px] left-[371px]`}
        />
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: 16,
            backgroundColor: "black",
            transform: `rotate(${90 + deg}deg)`,
            transformOrigin: " bottom center",
          }}
          className={`${eyesStyle.eyes} ${eyesStyle.transformOrigin} bottom-[670px] left-[300px]`}
        />
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: 16,
            backgroundColor: "black",
            transform: `rotate(${90 + deg}deg)`,
            transformOrigin: " bottom center",
          }}
          className={`${eyesStyle.eyes} ${eyesStyle.transformOrigin} bottom-[669px] left-[233px]`}
        />
      </div>
    </div>
  );
}

export default RickAndMorty;
