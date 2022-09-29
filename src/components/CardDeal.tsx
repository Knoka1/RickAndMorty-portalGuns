import React from "react";

import Button from "./Button";
import { ghostkitchen_icon } from "../assets";

import styles, { layout } from "../style";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find the ideal product for your <br className="sm:block hidden" />
          kitchen in a few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Don't fall behind. Add a new operation to you business. Add a Ghost
          Kitchen.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={ghostkitchen_icon} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
