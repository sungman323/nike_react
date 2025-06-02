import React, {useState, useRef} from 'react';
import dummy from '../db/products.json';
import Product from './Product';
import ProductInput from './ProductInput';
import '../css/ProductList.css';

function ProductList(props) {

  const [products, setProducts] = useState(dummy);
  const [inputs, setInputs] = useState({image:'',name:'',price:''})
  const nextId = useRef(products.length+1);

  const {image, name, price} = inputs;

  const onDataChange = (e) => {
    const {name, value} = e.target;

    // state값 변경
    setInputs({
      ...inputs, // 기존 배열에 추가
      [name]:value
    });
  }

  const onCreate = () => {
    const product = {
      id: nextId,
      image,
      name,
      price:parseInt(price, 10)
    }

    setProducts([...products, product]);
    setInputs({
      image:'', name:'', price:''
    })

    nextId.current += 1;
  }

  const onRemove = (id => {
    setProducts(products.filter((product)=>product.id!==id));
  });

  return (
    <>
      <ProductInput image={image} name={name} price={price} onCreate={onCreate} onDataChange={onDataChange} />
      <div className='ProductWrap'>
        {products.map(product => (
          <Product product={product} key={product.id} onRemove={onRemove} />
        ))}
      </div>
    </>
  );
}

export default ProductList;