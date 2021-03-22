import React, { useState, useEffect } from 'react';
import './Product.css';

const Product = (props) => {
    const { name, image, price, id, addCart, increaseQuantity,
    addAgainItem } = props;
    const [ checkProduct, setCheckProduct ] = useState(false);
    const item = {id, name, image, price, quantity:1};
    
    useEffect(() => {
        setCheckProduct(false);
    }, [addAgainItem]);
    
    const handleCheckProduct = () => {
        if(!checkProduct) {
            pushInCart();
            setCheckProduct(true);
        }else{
            increaseQuantity(id);
        }
    };
    
    const pushInCart = () => {
        addCart(item);
    };

    return (
        <div className="product">
            <div className="image__container">
                <img src={image} alt={name} />
            </div>
            <div className="info__container">
                <span className="name">
                    {name}
                </span>
                <span className="price">
                    ${price}
                </span>
            </div>
            <button className="btn" onClick={handleCheckProduct}>
                Add
            </button>
        </div>
    );
};

export default Product;