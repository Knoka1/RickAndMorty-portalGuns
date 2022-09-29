import React from "react";

import { features } from "../constants";
import Button from "./Button";

import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }: any) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-black`}
      >
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppings font-semibold text-black text-[18px] leading-[23px]">
          {title}
        </h4>
        <p className="font-poppings font-normal text-black text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
};
const Business = () => {
  return (
    <section id="brands" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You have the brand, <br className="sm:block hidden" /> we have the
          operation.
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Together, we'll create a unique food delivery experience available
            to your customer through our partners accross the country.
          </p>
        </h2>
        <Button styles={`mt-10`} />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
