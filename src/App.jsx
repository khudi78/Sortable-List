// src/App.js
import React from 'react';
import DnDProviderWrapper from './DndProvider';
import SortableList from './SortableList';
import './index.css';

const App = () => {
  return (
    <DnDProviderWrapper>
      <div className="App lg:ml-[550px] lg:mt-[-50px] md:ml-[200px] sm:ml-[70px]  ">
        <header className=" font-serif font-bold text-white p-4 px-24 w-[500px] ">
         <h1 className="text-4xl top ">Sortable List</h1>
        </header>
        <main className="p-4">
          <SortableList />
        </main>
      </div>
    </DnDProviderWrapper>
  );
};

export default App;
