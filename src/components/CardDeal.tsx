import React from "react";

import Button from "./Button";
import { rick_fan } from "../assets";

import styles, { layout } from "../style";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Sign the fan club and get free shipping.{" "}
          <br className="sm:block hidden" />
          Get fast delivery in Milky way.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Don't fall behind. Add a new operation to you business. Add a Ghost
          Kitchen.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={rick_fan} alt="card" className="w-[80%] h-[80%]" />
      </div>
    </section>
  );
};

export default CardDeal;
