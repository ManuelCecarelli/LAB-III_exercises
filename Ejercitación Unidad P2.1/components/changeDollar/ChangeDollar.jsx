import PropTypes from "prop-types";
import { useState } from "react";

const ChangeDollar = ({ onChangePrice }) => {

    const [newPrice, setNewPrice] = useState("");

    const onChangeHandler = (event) => {
        let inputValue = event.target.value;
        setNewPrice(inputValue);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        onChangePrice(newPrice);
        setNewPrice("");
    };

    return (
        <>
            <form className="flexible" onSubmit={onSubmitHandler}>
                <label htmlFor="dollar-cotization"> {"=>"} Dollar cotization:</label>
                <input
                    type="text"
                    name="dollar-cotization"
                    id="dollar-cotization"
                    placeholder="Ingrese cotización..."
                    value={newPrice}
                    required
                    onChange={onChangeHandler}
                />
                <button type="submit">Aplicar</button>
            </form>
            <br />
        </>
    )
}

ChangeDollar.propTypes = {
    onChangePrice: PropTypes.func
};

export default ChangeDollar;