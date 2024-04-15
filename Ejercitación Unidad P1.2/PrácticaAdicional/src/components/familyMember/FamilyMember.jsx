import PropTypes from "prop-types";

const FamilyMember = ({ name, age }) => {

    return (
        <>
            <h3>Nombre: {name}</h3>
            <p>Edad: {age}</p>
        </>
    );
};

FamilyMember.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};

export default FamilyMember;