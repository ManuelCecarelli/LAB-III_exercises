import BeerItem from "../beerItem/BeerItem";
import ChangeDollar from "../changeDollar/ChangeDollar";
import { useState } from "react";

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
        }
    ];

    const [showChangeDollar, setShowChangeDollar] = useState(true);

    const [dollarPrice, setDollarPrice] = useState(1);

    const changePrice = (newPrice) => {
        setDollarPrice(newPrice);
    };

    const onClickHandler = () => {
        showChangeDollar
            ? setShowChangeDollar(false)
            : setShowChangeDollar(true)
    };

    return (
      <>
        <div className="flexible">
            <button className="show-button" onClick={onClickHandler}>{showChangeDollar ? "Ocultar Cotizador" : "Mostrar Cotozador"}</button>
            {showChangeDollar
                ? <ChangeDollar onChangePrice={changePrice}/>
                : ""
            }
        </div>
        <br/>
        {beers.map(beer => {
            return <BeerItem 
                key={beer.id}
                beerId={beer.id}
                beerName={beer.beerName}
                beerStyle={beer.beerStyle}
                beerPrice={beer.price * dollarPrice}
                beerAvailable={beer.available}
            />
        })}
      </>
    )
}

export default Beers;