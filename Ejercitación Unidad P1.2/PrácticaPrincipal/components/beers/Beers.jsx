/* Componente que contiene el arreglo con los datos de las cervezas. Luego de 'App' es el componente principal, ya que es utilizado como base para pasar el arreglo como props a los demás componentes según la consigna */

import GeneralBeerList from "../generalBeerList/GeneralBeerList";
import AvailableBeerList from "../availableBeerList/AvailableBeerList";
import CountRedAndIpa from "../countRedAndIpa/CountRedAndIpa";

const Beers = () => {

    const beers = [
        {
            id: 1,
            beerName: "American",
            beerStyle: "IPA",
            price: 3,
            available: true,
        },
        {
            id: 2,
            beerName: "Argenta",
            beerStyle: "IPA",
            price: 4,
            available: false,
        },
        {
            id: 3,
            beerName: "Irish",
            beerStyle: "Red",
            price: 4,
            available: true,
        },
        {
            id: 4,
            beerName: "Scotish",
            beerStyle: "Red",
            price: 3,
            available: true,
        },
        {
            id: 5,
            beerName: "DeEssoCiTratta",
            beerStyle: "APA",
            price: 3,
            available: true,
        },
        {
            id: 6,
            beerName: "Santa APA",
            beerStyle: "APA",
            price: 3,
            available: true,
        },
        {
            id: 7,
            beerName: "German",
            beerStyle: "Pilsen",
            price: 1,
            available: true,
        },
        {
            id: 8,
            beerName: "London Porter",
            beerStyle: "Porter",
            price: 2,
            available: false,
        },
        {
            id: 9,
            beerName: "Scotish ALE",
            beerStyle: "Red",
            price: 5,
            available: false,
        },
    ];

    return (
      <>
        <GeneralBeerList beerArray = {beers}/>
        <AvailableBeerList beerArray = {beers}/>
        <CountRedAndIpa beerArray = {beers}/>
      </>
    );
  };
  
  export default Beers;