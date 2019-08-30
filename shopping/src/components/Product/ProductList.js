import React from 'react'
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

function ProductList(props) {
  const { list, addToCart } = props;
  return (
    <div className="d-flex flex-wrap">
      {list.map (item => (
        <div key={item.id} className="col-md-4 col-xs-6">
          <ProductItem
            key={item.id}
            name={item.name}
            price={item.price}
            currency={item.currency}
            description={item.description}
            image={item.imageUrl}
            addToCart={() => addToCart(item)}
          />
        </div>
      ))}
    </div>
  );
}

ProductList.propTypes = {
    list: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired,
};

export default ProductList;
