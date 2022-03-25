import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './SelectToAdd.css'
const SelectToAdd = ({cart,removeItem}) => {
    const {img,name,id} = cart;

    return (
        <div className="item">
           <img src={img} alt="" />
           <h3>{name}</h3>
           <FontAwesomeIcon onClick={()=>removeItem(id)} className='icon' icon={faTrash}></FontAwesomeIcon>                
       </div>
    );
};

export default SelectToAdd;