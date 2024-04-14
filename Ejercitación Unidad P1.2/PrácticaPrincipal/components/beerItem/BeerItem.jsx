/* Componente que sirve para mostrar por pantalla los datos de cada cerveza de manera individual */

import { PropTypes} from "prop-types";

const BeerItem = ({ beerId, beerName, beerStyle, beerPrice, isAvailable }) => {

    return (
      <>
        <p>Id: {beerId}</p>
        <p>Beer name: {beerName}</p>
        <p>Beer style: {beerStyle}</p>
        <p>Price: ${beerPrice * 1000}</p>
        <p>{isAvailable ? "Disponible" : "No disponible"}</p>
        <br />
      </>
    );
};

BeerItem.propTypes = {
    beerId: PropTypes.number,
    beerName: PropTypes.string,
    beerStyle: PropTypes.string,
    beerPrice: PropTypes.number,
    isAvailable: PropTypes.bool
}

export default BeerItem;