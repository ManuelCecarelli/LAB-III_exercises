/* Componente que cuenta la cantidad de cervezas de estilo 'Red' y también las de estilo 'IPA' */

import { PropTypes} from "prop-types";

const CountRedAndIpa = (props) => {

  const redBeer = props.beerArray.filter(beer => beer.beerStyle == "Red");
  const IpaBeer = props.beerArray.filter(beer => beer.beerStyle == "IPA");

  return (
    <>
      <h3>3) Conteo de cervezas:</h3>
      <p>Cantidad de Red: {redBeer.length}</p>
      <p>Cantidad de IPA: {IpaBeer.length}</p>
      <br/>
    </>
  );
};

CountRedAndIpa.propTypes = {
  beerArray: PropTypes.array
}

export default CountRedAndIpa;