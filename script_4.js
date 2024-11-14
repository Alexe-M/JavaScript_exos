const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


//Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;

console.log("**********Voici les entrepreneurs qui sont nés dans les années 70:")

let entrepreneur70s = [];

entrepreneurs.forEach(objet => {
  if (objet.year >= 1970 && objet.year < 1980) {
  entrepreneur70s.push(objet)
  }
});

console.log(entrepreneur70s);



//Sors une array qui contient le prénom et le nom des entrepreneurs ;
console.log("**********Voici le nom et prénom des entrepreneurs dans un array grâce à la méthode forEach :")
let entrepreneursName1 = [];
entrepreneurs.forEach(objet => {
  entrepreneursName1.push({first: objet.first, last: objet.last})
});

console.log(entrepreneursName1)


console.log("**********Voici le nom et prénom des entrepreneurs dans un array grâce à la méthode map :")

let entrepreneursName2 = entrepreneurs.map(objet => {
  return { first: objet.first, last: objet.last };
});

console.log(entrepreneursName2)


console.log("**********Voici le nom et prénom des entrepreneurs dans un array grâce à la méthode for...of :")

let entrepreneursName3 = [];

for (let objet of entrepreneurs) {
  entrepreneursName3.push({ first: objet.first, last: objet.last });
}

console.log(entrepreneursName3)


//Quel âge aurait chaque inventeur aujourd'hui ?
console.log("**********Voici l'array des entrepreneurs avec leur age :")

entrepreneurs.forEach(objet => {
  objet.age = 2024 - objet.year;
});

console.log(entrepreneurs)


//Même chose mais avec la méthode map:
// let entrepreneursWithAge = entrepreneurs.map(objet => {
//   return {
//     first: objet.first,
//     last: objet.last,
//     year: objet.year,
//     age: 2024 - objet.year // Calculer l'âge ici
//   };
// });



//Trie les entrepreneurs par ordre alphabétique du nom de famille.
console.log("**********Voici l'array des entrepreneurs par ordre alphabétique du nom de famille :")
let entrepreneursOrdered = entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));
console.log(entrepreneursOrdered)


