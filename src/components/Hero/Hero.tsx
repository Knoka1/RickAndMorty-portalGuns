import React, { useState, useEffect, useCallback } from "react";
import { discount } from "../../assets";
import GetStarted from "../GetStarted";
import RickAndMorty from "../RickAndMorty/RickAndMorty";
import styles from "../../style";

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

const Hero = () => {
  const [globalMouseCoordinates, setGlobalMouseCoordinates] = useState({
    x: 0,
    y: 0,
  });
  const [anchorAxis, setAnchorAxis] = useState({
    anchorX: 0,
    anchorY: 0,
  });
  const [deg, setDeg] = useState(0);

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

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
      onMouseMove={handleMouseMove}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 bg-black">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 text-white`}>
            <span className="text-[#2bae66ff]">20% </span>
            Discount For <span className="text-[#2bae66ff]">1 Month </span>
            Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leadin-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient"> Generation </span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leadin-[100px] leading-[75px] w-full">
          of Intergalactic items.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
          Our team is focused on providing the greatest{" "}
          <span className="text-gradient">most exquisite</span> you have ever
          had. By partnering with{" "}
          <span className="text-gradient">well-know brands</span>, we create
          experiences like never seen before{" "}
          <span className="text-gradient">through delivery</span>.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <RickAndMorty deg={deg} setAnchorAxis={setAnchorAxis} />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient " />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient " />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient " />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
