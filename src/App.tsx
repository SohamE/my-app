import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import ShoppingList from './components/ShoppingList';
import Item from "./models/item";
import './App.css';
import ShoppingListForm from './components/ShoppingListForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const additem = (product: string, amount: number) => {
    setItems([
      ...items,
      { id: uuidv4(), product, quantity: amount }
    ]);
  };

  return (
    <div className="App">
      <ShoppingList items={items} />
      <ShoppingListForm addItem={additem} />
    </div>
  );
}

export default App;
