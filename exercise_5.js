const studentNeeded = 5;
const arrivalRecord = [-1, 0, -5, -10, 0, 1, 3, -1];

function validateStart() {
    presentFiltered = arrivalRecord.filter(present => present >= 0);
    
    if (presentFiltered.length >= studentNeeded) {
        console.log("Yes, class begins");
    } else {
        console.log("No, class doesn't start");
    }
}

validateStart();