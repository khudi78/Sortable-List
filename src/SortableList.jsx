// src/SortableList.js
import React, { useState } from 'react';
import DraggableItem from './DraggableItem';

const SortableList = () => {
  const [items, setItems] = useState([
    'MongoDB',
    'Structured Query Language',
    'Arduino',
    'Raspberry',
    'MERN Stack'

  ]);

  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      {items.map((item, index) => (
        <DraggableItem
          key={index}
          index={index}
          item={item}
          moveItem={moveItem}
        />
      ))}
    </div>
  );
};

export default SortableList;
