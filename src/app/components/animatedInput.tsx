import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const InputWithAnimatedLabel = ({
  label,
  placeholder,
  name,
  onChange,
    values,
  type,
    ...rest
}: any) => {

  return (
    <div className={`relative w-full `}>
      <p className="text-[#000]">{label}</p>
      <input
        type={type === "number" ? "number" : "text"}
        placeholder={`Enter ${placeholder}`}
        onChange={({ currentTarget }) => {
          onChange({ ...values, [name]: currentTarget.value });
        }}
        value={values[name]}
        {...rest}
        className="form-input input-shadow relative"
      />
    </div>
  );
};

export default InputWithAnimatedLabel;
