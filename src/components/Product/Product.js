import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name,img,price,id} = props.product
    return (
        <div className='card'>
            <img src={img} alt="" srcset="" />
            <p>Price:<i>${price}</i></p>
            <hr />
            <div className="product-info">
                <h4>{name}</h4>
                <p className='nth'><i>Prodact id:</i> {id}</p>
            </div>
            <span onClick={() => props.addToSelect(props.product)} className='add-btn'>Select Produc <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span>
        </div>
    );
};

export default Product;