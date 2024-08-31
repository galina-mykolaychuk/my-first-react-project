// src/components/Product.jsx

import PropTypes from "prop-types";

export default function Product({ name, imgUrl, price }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <img src={imgUrl} alt={name} width="480" />
      <p>Price: {price} credits</p>
    </div>
  );
}

// Опис типів пропсів компонента
Product.propTypes = {
  name: PropTypes.string.isRequired, // name має бути рядком і є обов'язковим
  imgUrl: PropTypes.string, // imgUrl має бути рядком, але не є обов'язковим
  price: PropTypes.number.isRequired, // price має бути числом і є обов'язковим
};
