import React, { useState } from 'react';
import '../css/ProductInput.css';

function ProductInput({image, name, price, onDataChange, onCreate}) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if(!image.trim()){
      newErrors.image = '이미지 파일명을 입력하세요.';
    } else if(!/\.(avif|jpg|jpeg|png|gif)$/i.test(image)){
      newErrors.image = '유효한 이미지 확장자를 입력하세요.';
    }

    if(!name.trim()){
      newErrors.name = '상품명을 입력하세요.';
    }

    if(!price.trim()){
      newErrors.price = '가격정보를 입력하세요.';
    } else if(!/^\d+$/.test(price)){
      newErrors.price = '정수값으로 입력하세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // 모두 통과하면 리턴
  }

  // 내용입력 버튼 클릭 시 함수 실행
  const handleClick = () => {
    if(validate()){ // 유효성 검사 통과 시 실행
      onCreate();
    }
  }

  return (
    <>
      <form name="" method="" action="">
        <legend>나이키 상품 입출력폼</legend>
        <div>
          <label htmlFor="filename">이미지 파일명 :</label><br />
          <input type="text" name='image' id='filename' onChange={onDataChange} value={image} placeholder='이미지 파일명을 입력하세요.' />
          {errors.image&&<p>{errors.image}</p>}
        </div>
        <div>
          <label htmlFor="productname">상품명 : </label><br />
          <input type="text" name='name' id='productname' onChange={onDataChange} value={name} placeholder='상품명을 입력하세요.' />
          {errors.name&&<p>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="priceinfo">가격정보 : </label><br />
          <input type="text" name='price' id='priceinfo' onChange={onDataChange} value={price} placeholder='가격정보를 입력하세요.' />
          {errors.price&&<p>{errors.price}</p>}
        </div>
        <div><input type="button" value='내용입력' onClick={handleClick} /></div>
      </form>
    </>
  );
}

export default ProductInput;