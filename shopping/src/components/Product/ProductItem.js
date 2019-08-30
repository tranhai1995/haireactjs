import React from 'react'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  NavLink,
  Button
} from "reactstrap";
function ProductItem(props) {
    const {image, currency, price, name, description, addToCart,
    } = props;
    return (
        <div className="mt-4">
        <Card>
        <NavLink>
        <Link to="/Detail">
          <CardImg top width="300px" height="200px" onClick={()=> console.log("you detail")}
           src={image} atl="" />
        </Link>
        </NavLink>
        <CardBody>
            <CardTitle>{name}</CardTitle>
            <p className="text-truncate">
            {description}
            </p>
            <CardText>Giá : {price}{currency}</CardText>
            <Button variant="primary" onClick={addToCart}>
            Buy
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
  
  ProductItem.propTypes = {
    image: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    addToCart: PropTypes.func.isRequired,
  };
export default ProductItem;