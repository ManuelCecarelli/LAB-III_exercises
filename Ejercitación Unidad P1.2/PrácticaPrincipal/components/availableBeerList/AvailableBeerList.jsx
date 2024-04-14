/* Componente que luego de aplicar un filtro lista sólo las cervezas disponibles (que tengan propiedad 'available=true') */

import { PropTypes} from "prop-types";
import BeerItem from "../beerItem/BeerItem";

const AvailableBeerList = (props) => {

  return (
    <div>
      <h3>2) Lista de cervezas disponibles:</h3>
      {props.beerArray
        .filter(beer => beer.available == true)
        .map(beer => {
        return <BeerItem key={beer.id}
          beerId = {beer.id}
          beerName = {beer.beerName}
          beerStyle = {beer.beerStyle}
          beerPrice = {beer.price}
          isAvailable = {beer.available}
        />
        })
      }
    </div>
  );
};

AvailableBeerList.propTypes = {
  beerArray: PropTypes.array
}

export default AvailableBeerList;