const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("**********Est-ce que tous les livres ont été au moins empruntés une fois ?");

let allBooksRentedOnce = books.every(objet => objet.rented > 0)

if (allBooksRentedOnce) {
  console.log("Oui")
}
else {
  console.log("Non")
};

//Méthode pour un check individuel de chaque livre :
// books.forEach(objet => {
//   if (objet.rented > 1) {
//     console.log(`Oui, le livre "${objet.title}" a été emprunté plus d'une fois`);
//   } else {
//     console.log(`Non, le livre "${objet.title}" n'a pas été emprunté plus d'une fois`);
//   }
// });


//Quel est livre le plus emprunté ?
console.log("**********Quel est livre le plus emprunté ?");
let booksSortedFromMostRented = books.sort((a,b) => b.rented - a.rented);
console.log(booksSortedFromMostRented[0])


//Quel est le livre le moins emprunté ?
console.log("**********Quel est le livre le moins emprunté ?");
let booksSortedFromLessRented = books.sort((a,b)=> a.rented - b.rented);
console.log(booksSortedFromLessRented[0])


//Trouve le livre avec l'ID: 873495 ;
console.log("**********Trouve le livre avec l'ID: 873495 ;");
let thisBook = books.find(objet => objet.id === 873495);
console.log(thisBook)



// //Supprime le livre avec l'ID: 133712 ;
// console.log("**********Supprime le livre avec l'ID: 133712 ;");


// //Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
// console.log("**********Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).");