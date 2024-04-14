import PropTypes from "prop-types";
import Person from "../person/Person";

const Persons = (props) => {
    
    const filteredNames = props.namesArray.filter(name => name[0] == "P");

    return (
        <>
            <h3>2) Personas cuyo nombre comience con "P":</h3>
            {filteredNames.map(name => {
                return <Person 
                    key={filteredNames.indexOf(name)}
                    name={name}
                    />
                })
            }
        </>
    );
};

Persons.propTypes = {
    namesArray: PropTypes.array
};

export default Persons;