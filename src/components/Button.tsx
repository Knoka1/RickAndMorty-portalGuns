import React from "react";

const Button = ({ styles, text }: any) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-green-gradient font-poppins font-medium text-[18px] text-white bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    >
      {text ? text : "GetStarted"}
    </button>
  );
};

export default Button;
