import React from "react";
import "./App.css";
import { ReactComponent as ExpandSvg } from "./expand.svg";
import Accordion from "./Accordion"

function Drawer() {
    const [isOpen, toggleIsOpen] = React.useState(false);

    const toggleDrawer = () => {
        toggleIsOpen(isOpen => !isOpen);
    };

    if (isOpen) {
        return (
            <div className="NavBarExpanded">
                <ExpandSvg className="DrawerButton Rotate" onClick={toggleDrawer}/>
                <Accordion children={<div>Hello</div>} label="Expand"/>
            </div>
        );
    }
    else {
        return (
            <div className="NavBar">
                <ExpandSvg className="DrawerButton" onClick={toggleDrawer}/>
            </div>
        );
    }
    
}

export default Drawer;