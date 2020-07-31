import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

const SidebarItem = ({ label, items, depthStep = 10, depth = 0, ...rest }) => {
  return (
    <>
      <ListItem button dense {...rest} style={{fontSize:'32px'}}>
        <ListItemText style={{ fontSize:'24px' }}>
          <span>{label}</span>
        </ListItemText>
      </ListItem>
      {Array.isArray(items) ? (
        <List disablePadding dense>
          {items.map(subItem => (
            <SidebarItem
              key={subItem.name}
              depth={depth + 1}
              depthStep={depthStep}
              {...subItem}
            />
          ))}
        </List>
      ) : null}
    </>
  );
};

export default SidebarItem;
