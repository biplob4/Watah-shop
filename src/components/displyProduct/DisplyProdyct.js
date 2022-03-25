import React from 'react';

const DisplyProdyct = ({product}) => {
    console.log(product);
    return (
        <div>
            <h3>BIPLOB HOSSEN:{product.name} </h3>
        </div>
    );
};

export default DisplyProdyct;