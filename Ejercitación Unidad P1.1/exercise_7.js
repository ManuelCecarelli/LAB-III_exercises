const person = {
    name: "Manuel",
    age: 32,
    nationality: "argentinian"
};

function objectToArray(obj) {
    let objectKeys = Object.keys(obj);
    let objectValues = Object.values(obj);
    let newArray = [];

    for (let i = 0; i < objectKeys.length; i++) {
        newArray.push([objectKeys[i], objectValues[i]]);
    }

    return newArray;
};

console.log(objectToArray(person));