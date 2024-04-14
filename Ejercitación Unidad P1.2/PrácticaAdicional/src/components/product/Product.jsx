import PropTypes from "prop-types";

const Product = ({ name, position }) => {
  
    return <div>* Producto N°{position+1}: {name}</div>;
};

Product.propTypes = {
    name: PropTypes.string,
    position: PropTypes.number
};

export default Product;