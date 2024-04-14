/* Componente que lista los estilos de cerveza existentes sin repetirlos */

import { PropTypes} from "prop-types";

const ShowStyles = (props) => {

  const onlyStyles = props.beerArray.map(beer => beer.beerStyle); //mapeamos y obtenemos sólo los estilos
  const setStyles = new Set(onlyStyles); //cremos un conjunto del array filtrado, lo que evita la repetición de elementos y los reduce
  const noRepeatedStyles = Array.from(setStyles); //creamos un array a partir del conjunto obtenido para poder mapearlo
  
  return (
    <>
      <h3>4) Lista de estilos de cerveza:</h3>
      {noRepeatedStyles.map(style => {
        return <p key={style}>- {style}</p>
      })}
    </>
  );
};

ShowStyles.propTypes = {
  beerArray: PropTypes.array
}

export default ShowStyles;