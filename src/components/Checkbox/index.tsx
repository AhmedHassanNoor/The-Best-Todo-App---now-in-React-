import React from "react";
import "./style.css";

interface CheckboxProps {
  onCheckboxChange: () => void;
  checked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ onCheckboxChange, checked }) => {
  return <input type="checkbox" checked={checked} onChange={onCheckboxChange} />;
};

export default Checkbox;
