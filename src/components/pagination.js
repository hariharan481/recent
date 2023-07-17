import React from "react";
import "../styles/Pagination.css";
export const Pagin = () => {
  const items = [
    "0-9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <div>
      <div class="center">
        <div class="pagination">
          {" "}
          {items.map((item, index) => (
            <a key={index}>{item}</a>
          ))}
        </div>
      </div>
    </div>
  );
};
