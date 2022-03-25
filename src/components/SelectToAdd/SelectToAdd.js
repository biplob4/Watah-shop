import React from 'react';
import DisplyProdyct from '../displyProduct/DisplyProdyct';
import './SelectToAdd.css'
const SelectToAdd = ({cart}) => {
    return (
        <div className='selectItem'>
            <h2>Your Selected Item</h2>
            {
                cart.map(product => <DisplyProdyct product={product}></DisplyProdyct>)
            }
        </div>
    );
};

export default SelectToAdd;