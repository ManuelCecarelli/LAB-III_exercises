import { Form } from "react-bootstrap";
import { useState } from "react";

const BookSearch = () => {

    const [searchInput,setSearchInput] = useState("");

    const onChangeHandler = (event) => {
        setSearchInput(event.target.value);
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

export default BookSearch;