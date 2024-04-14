/* Componente que lista todas las cervezas que existen en el arreglo sin aplicar ningún filtro */

import { PropTypes} from "prop-types";
import BeerItem from "../beerItem/BeerItem";

const GeneralBeerList = (props) => {

  return (
    <>
      <h3>1) Lista general de cervezas:</h3>
      {props.beerArray.map(beer => {
        return <BeerItem key={beer.id}
          beerId = {beer.id}
          beerName = {beer.beerName}
          beerStyle = {beer.beerStyle}
          beerPrice = {beer.price}
          isAvailable = {beer.available}
        />
        })
      }
    </>
  );
};

GeneralBeerList.propTypes = {
  beerArray: PropTypes.array
}

export default GeneralBeerList;