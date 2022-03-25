import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import SelectToAdd from '../SelectToAdd/SelectToAdd';
import './Shope.css'

const Shope = () => {
    const [products, setProducts] = useState([]);
    const [selectItem, setSelectItem] = useState([]);

    const addToSelect = (selectedProduct) => {
       setSelectItem([...selectItem, selectedProduct]);
    }

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const removeItem =(id)=>{
        const products = selectItem.filter(product => product.id !== id);
        setSelectItem([...products])       
    }

    return (
        <div className='shope'>

            <div className="cart">
            <div className='selectItem'>
               <h2 style={{color:"blue"}}>Your Selected Item</h2>
           </div>
             {
                 selectItem.map(products => <SelectToAdd key={products.id} cart={products} removeItem={removeItem}></SelectToAdd>)
             }
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