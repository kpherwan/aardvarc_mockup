import React from "react";
import "./App.css";
import { ReactComponent as ExpandSvg } from "./expandDropdown.svg";

function Accordion(props: { children: React.ReactElement[]; title: string }) {
  const [isOpen, toggleIsOpen] = React.useState(true);

  const toggleDrawer = () => {
    toggleIsOpen((isOpen) => !isOpen);
  };

  if (isOpen) {
    return (
      <div className="Spacing">
        <div onClick={toggleDrawer} className="DropDownOption">
          <ExpandSvg className="DropdownUp" />
          {props.title}
        </div>
        <div className="DropDownContent">{props.children}</div>
      </div>
    );
  } else {
    return (
      <div onClick={toggleDrawer} className="DropDownOption Spacing">
        <ExpandSvg className="DropdownDown" />
        {props.title}
      </div>
    );
  }
}

export default Accordion;
