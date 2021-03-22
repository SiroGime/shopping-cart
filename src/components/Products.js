import React from 'react';
import Product from './Product';
import './Products.css';

const Products = (props) => {
    const { listProducts, addCart, increaseQuantity,
    addAgainItem } = props;

    return(
        <div className="products__container">
            <h2 className="title">Items</h2>
            <div className="products">
                {
                    listProducts.map(product => (
                        <Product
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            image={product.img}
                            price={product.price}

                            addCart={addCart}
                            increaseQuantity={increaseQuantity}
                            addAgainItem={addAgainItem}
                        />               
                        ))
                }
            </div>
        </div>
    );
};

export default Products;
