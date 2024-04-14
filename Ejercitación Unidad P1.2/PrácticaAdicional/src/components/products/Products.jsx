import PropTypes from "prop-types";
import Product from "../product/Product";

const Products = (props) => {
  
    return (
        <>
            <h3>1) Listar productos del arreglo:</h3>
            {props.productArray.map(prod => {
                return <Product
                    key={props.productArray.indexOf(prod)}
                    name={prod}
                    position={props.productArray.indexOf(prod)}/>
                })
            }
        </>
    );
};

Products.propTypes = {
    productArray: PropTypes.array
};

export default Products;