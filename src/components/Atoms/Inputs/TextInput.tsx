"use client"
import React, { useState } from "react";

const TextInput = ({ labelText, placeholderText, defaultText }: any) => {
  const [text, setText] = useState("");
  return (
    <div>
      <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
        {labelText}
      </label>
      <input
        type="text"
        placeholder={placeholderText}
        value={!defaultText ? text : defaultText}
        onChange={(e) => setText(e.target.value)}
        className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
      />
    </div>
  );
};

export default TextInput;
