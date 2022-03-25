import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './DisplyProduct.css'

const DisplyProdyct = ({product,removeItem}) => {
    const {img,name} = product;
    return (
        <div>
            <div className="item">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <FontAwesomeIcon onClick={()=>removeItem(product)} className='icon' icon={faTrash}></FontAwesomeIcon>                
            </div>
        </div>
    );
};

export default DisplyProdyct;