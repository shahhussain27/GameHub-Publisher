"use client";
import React, { useState } from "react";

const TextInput = ({
  labelText,
  placeholderText,
  defaultText,
  onChange,
}: any) => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <div>
      <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
        {labelText}
      </label>
      <input
        type="text"
        placeholder={placeholderText}
        value={!defaultText ? text : defaultText}
        onChange={handleChange}
        className="w-full rounded-[7px] border-[1.5px] border-primary bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary/90 active:border-primary/70 disabled:cursor-default dark:border-primary  dark:text-white dark:focus:border-primary"
      />
    </div>
  );
};

export default TextInput;
