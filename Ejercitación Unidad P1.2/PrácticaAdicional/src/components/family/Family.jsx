import PropTypes from "prop-types";
import FamilyMember from "../familyMember/FamilyMember";

const Family = (props) => {

    const sortedPersons = props.personsArray.sort((a,b) => b.age - a.age);

    return (
        <>
            <h2>3) Family Members:</h2>
            {sortedPersons.map(person => {
                return <FamilyMember 
                    key={sortedPersons.indexOf(person)}
                    name={person.name}
                    age={person.age}
                />
                })
            }
        </>
        
    );
};

Family.propTypes = {
    personsArray: PropTypes.array
};

export default Family;