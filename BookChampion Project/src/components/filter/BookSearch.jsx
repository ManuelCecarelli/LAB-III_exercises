import { Form } from "react-bootstrap";
import { useState } from "react";
import { PropTypes } from "prop-types";

const BookSearch = ({ onLinkValue }) => {

    const [searchInput,setSearchInput] = useState("");

    const onChangeHandler = (event) => {
        setSearchInput(event.target.value);
        let auxiliarSearchInput = event.target.value.toLowerCase();
        onLinkValue(auxiliarSearchInput);
    };

    return (
        <Form.Group className="mb-3 w-25" controlId="searchBook">
            <Form.Control
                type="text"
                placeholder="Buscar libro..."
                value={searchInput}
                onChange={onChangeHandler}
            />
        </Form.Group>
    );
};

BookSearch.propTypes = {
    onLinkValue: PropTypes.func
};

export default BookSearch;