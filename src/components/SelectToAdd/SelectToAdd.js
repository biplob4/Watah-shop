import React from 'react';
import DisplyProdyct from '../displyProduct/DisplyProdyct';
import './SelectToAdd.css'
const SelectToAdd = ({cart}) => {

    const removeItem = (props) => {
        const bip = cart.filter(ca => ca.id !== props.id);
        cart(bip);
        
    }

    return (
        <div className='selectItem'>
            <h2 style={{color:"blue"}}>Your Selected Item</h2>
            {
                cart.map(product => <DisplyProdyct key={product.id} product={product} removeItem={removeItem}></DisplyProdyct>)
            }
        </div>
    );
};

export default SelectToAdd;