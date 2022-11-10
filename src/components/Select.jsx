import React from "react";
import Select from "react-select";

export default function SelectComponent({ options, value, onChange }) {
  return (
    // <select value={value} onChange={(event) => onChange(event.target.value)}>
    //   <option disabled value="">
    //     {defaultValue}
    //   </option>
    //   {options.map((option) => (
    //     <option key={option.value} value={option.value}>
    //       {option.name}
    //     </option>
    //   ))}
    // </select>
    <Select
      onChange={onChange}
      value={value}
      options={options}
      menuColor="red"
    />
  );
}
