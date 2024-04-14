import PropTypes from "prop-types";

const Person = ({ name }) => {

    return <div>* {name}</div>;
};

Person.propTypes = {
    name: PropTypes.string
};

export default Person;