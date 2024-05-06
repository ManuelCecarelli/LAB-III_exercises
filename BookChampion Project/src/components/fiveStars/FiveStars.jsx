import { PropTypes } from "prop-types";
import { Star, StarFill } from "react-bootstrap-icons";

const FiveStars = ({ scoreArray }) => {

    let starsAmount = scoreArray.length;

    const idGenerator = () => Math.random().toString();

    const drawFilledStars = () => {
        return (
            <div className="ms-1">
                {scoreArray.map(star => {
                    return <StarFill key={idGenerator()} color="gold" size={19}/>
                })}
            </div>
        )
    };
    
    const drawUnfilledStars = (amount) => {
        let starsUnfilledAmount = Array(5 - starsAmount).fill("*"); 
        return (
            <div>
                {starsUnfilledAmount.map(star => {
                    return <Star key={idGenerator()} color="gold" size={19}/>
                })}
            </div>
        );
    };

    return (
        <div className="d-flex">
            <div>Puntaje:</div>
            {drawFilledStars()}
            {starsAmount < 5
                ? drawUnfilledStars()
                : ""
            }
        </div>
    );
};

FiveStars.propTypes = {
    scoreArray: PropTypes.array
};

export default FiveStars;