import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import SelectToAdd from '../SelectToAdd/SelectToAdd';
import './Shope.css'

const Shope = () => {
    const [products, setProducts] = useState([]);
    const [selectItem, setSelectItem] = useState([]);

    const addToSelect = (selectedProduct) => {
       const exists = selectItem.find(product => product.id === selectedProduct.id);
        if(exists){
            alert('alrady addded');
            return;
        }
       if(selectItem.length < 4){
        setSelectItem([...selectItem, selectedProduct]);
       }
       else{
           alert("you alrady added 4 product")
       }
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
    const removeAllItem =(id)=>{
        setSelectItem([])       
    }
    const chooseItem =()=>{
        const num = parseInt( Math.random()*6);
        const choose = selectItem[num];
       if(choose){
           alert(choose.name)
       }
    }

    return (
        <div className='shope'>
            <div className="cart">
            <div className='selectItem'>
               <h2 style={{color:"blue",textAlign:"center"}}>Your Selected Item</h2>
           </div>
             {
                 selectItem.map(products => <SelectToAdd key={products.id} cart={products} removeItem={removeItem}></SelectToAdd>)
             }
             <a onClick={removeAllItem}>Choose-agin</a>
             <a onClick={chooseItem}>Select-Product</a>
            </div>

            <div className="product">
            <h1 style={{color:'green',textAlign:'center'}}>Onlin Watch Store</h1>
                {
                  products.map(product => <Product key={product.id} product={product} addToSelect={addToSelect}></Product>)
                }
            </div>

        </div>
    );
};

export default Shope;