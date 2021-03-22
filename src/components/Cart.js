import React, { useState } from 'react';
import './Cart.css';
import ItemCart from './ItemCart';

const Cart = (props) => {    
    const {items, increaseQuantityUpdateItems, deleteItem} = props;
    const [ total, setTotal ] = useState(0);
    let array__subTotal = [];
    let countingSubTotal = 0;
    
    const calculateTotal = (calculateSubTotal) => {
        array__subTotal.push(calculateSubTotal);
        array__subTotal.forEach(total => { 
            countingSubTotal += total;
        });
        setTotal(countingSubTotal);
        countingSubTotal = 0;
    };

    return(
        <div className="cart__container">
            <h2 className="title">Cart</h2>
            <table className="cart">
                <thead className="head__cart">
                    <tr>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody className="body__cart">
                    {   
                        (items.length === 0) ?
                            null
                        : (
                            items.map( item => (
                                <ItemCart 
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    image={item.image}
                                    price={item.price}
                                    quantity={item.quantity}
                                    items={items}

                                    increaseQuantityUpdateItems={increaseQuantityUpdateItems}
                                    calculateTotal={calculateTotal}
                                    deleteItem={deleteItem}
                                />
                            ))
                        )
                        
                    }
                </tbody>
            </table>
            {
                (items.length === 0) ? 
                    <div className="empty__cart">
                        <span>
                            Empty
                        </span>
                    </div>
                : 
                    <div className="total__container">
                        <span className="total">TOTAL</span>
                        <span className="price">${total}</span>
                    </div>
            }
        </div>
    );
};

export default Cart