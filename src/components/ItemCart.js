import React, { useState, useEffect } from 'react';
import './ItemCart.css';

const ItemCart = (props) => {
    const {id, name, image, price, quantity, items,
    increaseQuantityUpdateItems, calculateTotal, 
    deleteItem} = props;
    const [ quantity2, setQuantity2 ] = useState(quantity);
    const [ subTotal, setSubtotal ] = useState(price);

    useEffect(() => {
        calculateTotal(subTotal);
    })

    useEffect(() => {
        setSubtotal(subTotal => subTotal = price*quantity);
        setQuantity2(quantity);        
    }, [quantity, price])

    useEffect(()=> {
        setQuantity2(quantity2);
        items.forEach(x => {
            if(x.id === id) {
              x.quantity = quantity2;
            };     
        });
        increaseQuantityUpdateItems(items);        
    }, [quantity2]);


    const handleAdd = () => {
        setQuantity2(quantity2 => quantity2 += 1);
    };    

    const handleRemove = () => {
        if(quantity === 1){
            deleteItem(id);
        }else {
            setQuantity2(quantity2 => quantity2 -= 1);
        }
    };

    const handleDelete = () => {
        deleteItem(id);
    };

    return(
        <tr className="data">
            <td className="item__row">
                <div className="item">
                    <img src={image} alt={name} />
                    <span>{name}</span>
                </div>
            </td>
            <td className="price__row">
                <div className="price">
                    ${price}
                </div>
            </td>
            <td className="quantity__row">
                <div className="quantity">
                    <span>{quantity2}</span>
                    <div className="buttons">
                        <button onClick={handleAdd}>
                            <i className="fas fa-sort-up"></i>
                        </button>
                        <button onClick={handleRemove}>
                            <i className="fas fa-sort-down"></i>
                        </button>
                    </div>
                </div>
            </td>
            <td className="subtotal__row">
                <div className="subtotal">
                    ${String(subTotal)}
                </div>
            </td>
            <td className="delete__item" onClick={handleDelete}>
                <button className="btn__delete">
                    <i className="fas fa-times"></i>
                </button>
            </td>
        </tr>
    );
};

export default ItemCart;