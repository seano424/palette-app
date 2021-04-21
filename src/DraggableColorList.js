import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";

const DraggableColorList = SortableContainer(({ colors, removeColor }) => {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((color, idx) => (
        <DraggableColorBox
          index={idx}
          removeColor={removeColor}
          key={color.name}
          color={color.color}
          name={color.name}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
