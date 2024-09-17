import React, { useState } from "react";

const Textarea = ({ labelText, defaultText, onChange }: any) => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <div className="w-full">
      <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
        {labelText}
      </label>
      <textarea
        rows={2}
        cols={90}
        placeholder={labelText}
        onChange={handleChange}
        className="w-full rounded-[7px] border-[1.5px] border-primary bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary/70 active:border-primary/90 disabled:cursor-default disabled:bg-gray-2  dark:text-white dark:focus:border-primary"
      ></textarea>
    </div>
  );
};

export default Textarea;
