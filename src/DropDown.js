import React, { Fragment, useState } from "react";
import "./styles.css";

export const Dropdown = () => {
  const values = [
    { value: "United States", id: 1 },
    { value: "Canada", id: 2 },
    { value: "Mexico", id: 3 },
    { value: "Japan", id: 4 }
  ];
  const [items, setItems] = useState(values);
  const [selectedItem, setSelectedItems] = useState(items[0].value);
  const [show, setShow] = useState(false);
  const showDropDown = () => {
    // console.log("ddd", prevValue);
    setShow(!show);
    console.log("show", show);
  };
  const selectItem = (item) => {
    setSelectedItems(item.value);
    setShow(!show);
    console.log("selectedItem", selectedItem);
  };

  return (
    <Fragment>
      <div className="flexContainer">
        <div className="flexChild">{selectedItem}</div>
        <button onClick={showDropDown}>ShowMore</button>
      </div>
      {show &&
        items.map((item) => {
          return (
            <div className="flexChild" onClick={() => selectItem(item)}>
              {item.value}
            </div>
          );
        })}
    </Fragment>
  );
};
