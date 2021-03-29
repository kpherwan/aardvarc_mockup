import React from "react";
import { Link } from "react-router-dom";
import Accordion from "./Accordion";
import "./App.css";
import { ReactComponent as ExpandSvg } from "./expand.svg";
import { navBarCategories } from "./NavBarCategories";

function Drawer() {
  const [isOpen, toggleIsOpen] = React.useState(true);

  const toggleDrawer = () => {
    toggleIsOpen((isOpen) => !isOpen);
  };

  if (isOpen) {
    return (
      <div className="NavBarExpanded">
        <ExpandSvg className="DrawerButton Rotate" onClick={toggleDrawer} />
        {navBarCategories.map((category) => (
          <Accordion
            children={category.urls.map((urlMapping) => (
              <div className="Spacing">
                <Link
                  to={urlMapping.url}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {urlMapping.label}
                </Link>
              </div>
            ))}
            title={category.title}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="NavBar">
        <ExpandSvg className="DrawerButton" onClick={toggleDrawer} />
      </div>
    );
  }
}

export default Drawer;
