import React, { useRef, useEffect } from "react";
import "./Select.css";

const Select = ({ options, handleSelectedOptions }) => {
  const selectEnd = useRef(null);
  const scrollToBottom = () => {
    selectEnd.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, []);
  return (
    <div className="selector-container">
      <div className="selector-content">
        {options.map((op) => (
          <div
            onClick={(e) => {
              handleSelectedOptions(op.id);
            }}
            key={op.id}
            className="selector-options"
          >
            <label> {op.text}</label>
          </div>
        ))}
      </div>
      <div ref={selectEnd} />
    </div>
  );
};

export default Select;
