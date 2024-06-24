// src/DraggableItem.js
import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemType = 'ITEM';

const DraggableItem = ({ item, index, moveItem }) => {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover(draggedItem) {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`p-4  sm:p-5 md:p-6 lg:p-7 xl:p-8 text-center cursor-pointer mb-2 bg-[#6ec2d5] text-black rounded shadow  max-[450px]:w-[300px]  max-[450px]:ml-[30px] ${
        isDragging ? 'opacity-50' : 'opacity-100'
      } transition-opacity duration-200`}
      style={{ cursor: 'move' }}
    >
      {item}
    </div>
  );
};

export default DraggableItem;
