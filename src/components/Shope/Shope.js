import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import SelectToAdd from '../SelectToAdd/SelectToAdd';
import './Shope.css'

const Shope = () => {
    const [products, setProducts] = useState([]);
    const [selectItem, setSelectItem] = useState([]);


    const addToSelect = (selectedProduct) => {
        const newProduct = setSelectItem([...selectItem, selectedProduct]);
    }


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='shope'>
            <div className="cart">
            <SelectToAdd cart={selectItem}></SelectToAdd>
            </div>
            <div className="product">
                {
                    products.map(product => <Product key={product.id} product={product} addToSelect={addToSelect}></Product>)
                }
            </div>
        </div>
    );
};

export default Shope;