import { useState } from "react";
import PropTypes from "prop-types";

const NewBeer = ({ onAddNewBeer }) => {

    const [beerName, setBeerName] = useState("");
    const [beerStyle, setBeerStyle] = useState("");
    const [beerPrice, setBeerPrice] = useState("");
    const [isAvailableYes, setIsAvailableYes] = useState(false);
    const [isAvailableNo, setIsAvailableNo] = useState(false);

    const onChangeNameHandler = (event) => {
        let newBeerName = event.target.value;
        setBeerName(newBeerName);
    };

    const onChangeStyleHandler = (event) => {
        let newStyleName = event.target.value;
        setBeerStyle(newStyleName);
    };

    const onChangePriceHandler = (event) => {
        let newPriceName = event.target.value;
        setBeerPrice(newPriceName);
    };

    const CheckedYesHandler = () => {
        setIsAvailableYes(true);
        setIsAvailableNo(false);
    };

    const CheckedNoHandler = () => {
        setIsAvailableNo(true);
        setIsAvailableYes(false);
    };

    const verifyRadioButtons = () => {
        if (isAvailableYes === false && isAvailableNo === false) {
            return true;          
        } else {
            return false;
        }
    };

    const onSubmitHandler = (event) => {
        event.preventDefault()

        if (verifyRadioButtons()) {
            alert("Debe seleccionar una disponibilidad")
        } else {
            let newBeer = {
                beerName,
                beerStyle,
                price: beerPrice,
                available: isAvailableYes ? true : false
            }
            console.log(newBeer);
            onAddNewBeer(newBeer)
    
            setBeerName("");
            setBeerStyle("");
            setBeerPrice("");
            setIsAvailableYes(false);
            setIsAvailableNo(false);
        }
    };

    return (
        <form className="flexible myForm" onSubmit={onSubmitHandler}>
            <label htmlFor="beerName">Beer Name: </label>
            <input
                required
                className="input"
                type="text" 
                name="beerName" 
                id="beerName" 
                placeholder="Input beer name..."
                value={beerName}
                onChange={onChangeNameHandler}
            />
            <label htmlFor="beerStyle">Beer Style: </label>
            <input
                required
                className="input"
                type="text"
                name="beerStyle"
                id="beerStyle"
                placeholder="Input beer style..."
                value={beerStyle}
                onChange={onChangeStyleHandler}
            />
            <label htmlFor="beerPrice">Beer Price: </label>
            <input
                required
                className="input"
                type="text" 
                name="beerPrice" 
                id="beerPrice" 
                placeholder="Input beer price..."
                value={beerPrice}
                onChange={onChangePriceHandler}
            />
            <div className="flexible radioButtons">
                <div>Available:</div>
                <div>
                    Yes
                    <input 
                        type="radio" 
                        name="radioAv" 
                        id="radioA"
                        checked={isAvailableYes}
                        onChange={CheckedYesHandler}
                    />
                </div>
                <div>
                    No
                    <input 
                        type="radio"
                        name="radioAv" 
                        id="radioB"
                        checked={isAvailableNo}
                        onChange={CheckedNoHandler}
                    />
                </div>
            </div>
            <button type="submit">Add new beer</button>
        </form>
    )
}

NewBeer.propTypes = {
    onAddNewBeer: PropTypes.func
}

export default NewBeer;