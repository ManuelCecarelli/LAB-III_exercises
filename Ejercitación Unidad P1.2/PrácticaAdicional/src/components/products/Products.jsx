import PropTypes from "prop-types";
import Product from "../product/Product";

const Products = (props) => {
  
    return (
        <>
            <h3>1) Listar productos del arreglo:</h3>
            {props.productsArray.map(prod => {
                return <Product
                    key={props.productsArray.indexOf(prod)}
                    name={prod}
                    position={props.productsArray.indexOf(prod)}/>
                })
            }
        </>
    );
};

Products.propTypes = {
    productsArray: PropTypes.array
};

export default Products;