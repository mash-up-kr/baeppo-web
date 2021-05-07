import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: "new", text: "최신순", value: "new" },
  { key: "save", text: "별점순", value: "save" },
];

const FilterDropDown = () => (
  <Dropdown floating options={options} text='최신순' />
);

export default FilterDropDown;
