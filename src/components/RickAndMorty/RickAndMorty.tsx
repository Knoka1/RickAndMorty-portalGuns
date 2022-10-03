import React, { createRef } from "react";
import { useEffect, useState, useCallback } from "react";
import { rick_morty, eye } from "../../assets";

import eyesStyle from "./eyesStyle";

const eyes = [
  {
    classname: "bottom-[677px] left-[371px]",
    key: 1,
  },
  {
    classname: "bottom-[677px]",
    key: 2,
  },
  {
    classname: "",
    key: 3,
  },
  {
    classname: "",

    key: 4,
  },
];

function angle(
  centerx: number,
  centery: number,
  eventx: number,
  eventy: number
) {
  const dy = eventy - centery;
  const dx = eventx - centerx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}

function RickAndMorty() {
  const [globalMouseCoordinates, setGlobalMouseCoordinates] = useState({
    x: 0,
    y: 0,
  });
  const [anchorAxis, setAnchorAxis] = useState({
    anchorX: 0,
    anchorY: 0,
  });
  const [deg, setDeg] = useState(0);
  const [eyeRefs, setEyeRefs] = useState([]);

  useEffect(() => {
    const handleWindowMouseMove = (event: any) => {
      setGlobalMouseCoordinates({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
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

  const measuredEyeAngle = useCallback((image: any) => {
    console.log(image);
    if (image !== null && image.length > 0) {
    }
  }, []);

  function handleMouseMove() {
    setDeg(
      angle(
        anchorAxis.anchorX,
        anchorAxis.anchorY,
        globalMouseCoordinates.x,
        globalMouseCoordinates.y
      )
    );
  }
  //to make global eye movement I should execute the onMouseMove handleMouseMove on a more global div in App.tsx?
  return (
    <div className="bg-slate-200 z-[2]" onMouseMove={handleMouseMove}>
      <h2>
        anchorAxis: {anchorAxis.anchorX} {anchorAxis.anchorY}
      </h2>
      <h2>deg: {deg}</h2>
      <img
        ref={measuredImage}
        src={rick_morty}
        className="w-[100%] h-[100%] relative z-[1]"
      />

      <div id="eventyes">
        {/* {eyes.map(({ classname, key }) => {
          return (
            <img
              key={key}
              ref={measuredEyeAngle}
              src={eye}
              className={`${eyesStyle.eyes} ${classname}}`}
            />
          );
        })}
        ; */}
        <img
          ref={eyeRefs[0]}
          src={eye}
          className={`${eyesStyle.eyes} bottom-[776px] left-[421px]`}
        />
        <img
          ref={eyeRefs[1]}
          src={eye}
          className={`${eyesStyle.eyes} bottom-[804px] left-[369px]`}
        />
        <img
          ref={eyeRefs[2]}
          src={eye}
          className={`${eyesStyle.eyes} bottom-[710px] left-[290px]`}
        />
        <img
          ref={eyeRefs[3]}
          src={eye}
          className={`${eyesStyle.eyes} bottom-[727px] left-[230px]`}
        />
        <h2>
          Global mouse coordinates: {globalMouseCoordinates.x}{" "}
          {globalMouseCoordinates.y}
        </h2>
      </div>
    </div>
  );
}

export default RickAndMorty;
