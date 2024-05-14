import PropTypes from "prop-types";

const BeerItem = ({ beerId, beerName, beerStyle, beerPrice, beerAvailable }) => {

    return (
      <>
        <p>Id: {beerId}</p>
        <p>Beer name: {beerName}</p>
        <p>Beer Style: {beerStyle}</p>
        <p>Price: ${beerPrice}</p>
        <p>Available: {beerAvailable}</p>
        <br/>
      </>
    );
};
  
BeerItem.propTypes = {
    beerId: PropTypes.number,
    beerName: PropTypes.string,
    beerStyle: PropTypes.string,
    beerPrice: PropTypes.number,
    beerAvailable: PropTypes.bool
};

export default BeerItem;