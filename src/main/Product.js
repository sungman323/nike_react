import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function Product({product, onRemove}) {
  return (
    <>
      <div className='ProductItem'>
        <img src={`${process.env.PUBLIC_URL}/images/${product.image}`} alt={product.name} />
        <p><button className='del_btn' aria-label='삭제' onClick={()=>onRemove(product.id)}><FontAwesomeIcon icon={faTrashCan} /></button></p>
        <p className='ProductName'>{product.name}</p>
        <p className='PriceInfo'>{product.price.toLocaleString()}원</p>
      </div>
    </>
  );
}

export default Product;