import React from "react";

import { scientist } from "../assets";
import styles, { layout } from "../style";
const Billings = () => {
  return (
    <section id="alienamenities" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={scientist}
          alt="scientist"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Alien Amenities tested by the{" "}
          <span className="text-[#2bae66ff]">greatest scientists</span> in the
          galaxy. <br className="sm:block hidden" /> Scientist quality verified.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you ever wanted but could never do, cause you're too dumb.
        </p>
      </div>
    </section>
  );
};

export default Billings;
