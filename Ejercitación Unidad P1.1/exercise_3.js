/*
Dado un arreglo de objetos de países que poseen dos propiedades: name y
population, ordenarlos de mayor a menor en cuanto a su población utilizando la
función de arreglo sort().
Ejemplo de un objeto del arreglo: { name: Argentina, population: 458100000}
*/

const countries = [
    {name: "Argentina", population: 45000000},
    {name: "China", population: 110000000},
    {name: "Mexico", population: 30000000},
    {name: "Canada", population: 65000000}
];

const sortedCountries = countries.sort((country1, country2) => country2.population - country1.population);

console.log(sortedCountries);