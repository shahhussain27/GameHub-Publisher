"use client";
import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const MultiSelectInput = ({ placeholder, options, onChange }: any) => {
  const animatedComponents = makeAnimated();
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
  
  const handleChange = (selected: any) => {
    setSelectedOptions(selected);

    if (onChange) {
      onChange(selected);
    }
  };

  const customStyles = {
    control: (provided: any, state: { isFocused: any }) => ({
      ...provided,
      backgroundColor: "#020D1A",
      color: "#9CA3AF",

      borderColor: state.isFocused ? "#5750F1" : "#5750F1",
      borderRadius: state.isFocused ? "7px" : "7px",
      boxShadow: state.isFocused ? "0 0 0 1px #3b82f6" : "none",
      padding: state.isFocused ? "5px" : "5px",
      "&:hover": {
        borderColor: "#5750F1",
      },
    }),
    option: (provided: any, state: { isSelected: any; isFocused: any }) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#3b82f6"
        : state.isFocused
          ? "#e0e7ff"
          : "#ffffff",
      color: state.isSelected ? "#ffffff" : "#000000",

      "&:hover": {
        backgroundColor: "#e0e7ff",
      },
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: "#0f172a",
      color: "white",
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: "#black",
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      color: "white",
      "&:hover": {
        backgroundColor: "#020617",
        color: "white",
      },
    }),
    input: (provided: any) => ({
      ...provided,

      color: "#9CA3AF",
    }),
  };

  return (
    <div>
      <Select
        defaultValue={[options[0], options[1]]}
        isMulti
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        placeholder={placeholder}
        styles={customStyles}
        components={animatedComponents}
      />
    </div>
  );
};

export default MultiSelectInput;
