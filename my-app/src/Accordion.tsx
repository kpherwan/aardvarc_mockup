import React from "react";
import "./App.css";

function Accordion(props: { children: React.ReactElement; label: string }) {
  const [isOpen, toggleIsOpen] = React.useState(true);

  const toggleDrawer = () => {
    toggleIsOpen((isOpen) => !isOpen);
  };

  if (isOpen) {
    return (
    <div onClick={toggleDrawer}>
        {props.label}
        {props.children}
    </div>
    );
  } else {
    return <div onClick={toggleDrawer}>{props.label}</div>;
  }
}

export default Accordion;