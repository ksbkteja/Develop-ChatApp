import React from "react";
import SidebarItem from "./SidebarItem";
import { List } from '@material-ui/core';

const SideBar = ({ items, depthStep, depth }) => {
  return (
    <List>
      {items.map((sidebarItem, index) => (
        <SidebarItem
          key={`${sidebarItem.name}${index}`}
          depthStep={depthStep}
          depth={depth}
          {...sidebarItem}
        />
        
      ))}
    </List>
  );
};

export default SideBar;
