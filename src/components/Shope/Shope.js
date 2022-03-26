import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import SelectToAdd from '../SelectToAdd/SelectToAdd';
import './Shope.css'

const Shope = () => {
    const [products, setProducts] = useState([]);
    const [selectItem, setSelectItem] = useState([]);
    
    // product bnt click handeler
    const addToSelect = (selectedProduct) => {
       const exists = selectItem.find(product => product.id === selectedProduct.id);
        if(exists){
            alert('This is alrady addded');
            return;
        }
        // show only 4 product
       if(selectItem.length < 4){
        setSelectItem([...selectItem, selectedProduct]);
       }
       else{
           alert("You added 4 product dont added more product")
           return;
       }
    }
    // json data load and set
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // delet click handaler
    const removeItem =(id)=>{
        const products = selectItem.filter(product => product.id !== id);
        setSelectItem([...products])       
    }
    // all item remove btn handaler
    const removeAllItem =(id)=>{
        setSelectItem([])       
    }
    // automatic choose product
    const chooseItem =()=>{
        const num = parseInt( Math.random()*selectItem.length);
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
                  <hr />
               </div>
               {
                 selectItem.map(products => <SelectToAdd key={products.id} cart={products} removeItem={removeItem}></SelectToAdd>)
               }
               <a onClick={chooseItem}>Select-Product</a>
               <a onClick={removeAllItem}>Choose-agin</a>
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