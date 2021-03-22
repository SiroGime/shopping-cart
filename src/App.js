import React, { useState } from 'react';
import Cart from './components/Cart';
import Products from './components/Products';
import Header from './components/Header';
import data from './data';
import './App.css';

const App = () => {
  const [ item, setItem ] = useState([]);
  const [ addAgainItem, setAddAgainItem ] = useState(false);
  console.log(addAgainItem);

  const pushInCart = (infoItem) => {
    setItem([...item, infoItem]);   
  };
  
  const increaseQuantity = (id) => {
    item.forEach(x => {
      if(x.id === id) {
        x.quantity++;
      };     
    })
    setItem([...item]);
  };

  const increaseQuantityUpdateItems = (uptdateItems) => {
    setItem([...uptdateItems]);
  };

  const deleteItem = (id) => {
    setItem(item => item.filter(item => item.id !== id));
    setAddAgainItem(!addAgainItem);
  };

  return (
    <div className="app">
      <Header />
      <Cart 
        key={item.id}
        items={item}
        increaseQuantityUpdateItems={increaseQuantityUpdateItems}
        deleteItem={deleteItem}
      />
      <Products 
        listProducts={[...data]}
        addCart={pushInCart}
        increaseQuantity={increaseQuantity}
        addAgainItem={addAgainItem}
      />
    </div>
  )

};

export default App;
