import React, { useEffect, useState } from 'react';
import Product from '../Card/Product';
import Cart from '../Cart/Cart';
import './Shope.css'

const Sope = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCard] = useState([]);


    const addToCard = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => selectedProduct.id === product.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => selectedProduct.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCard(newCart)
    }


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='shope'>
            <div className="cart">
                <Cart card={cart}></Cart>
            </div>
            <div className="product">
                {
                    products.map(product => <Product key={product.id} product={product} addToCard={addToCard}></Product>)
                }
            </div>
        </div>
    );
};

export default Sope;