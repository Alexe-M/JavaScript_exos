
let maxValue = prompt("De quel nombre veux-tu calculer la factorielle ?"); //récupération du nombre à factoriser qui sera la condition max dans la boucle.
let result = 1; //déclaration de la variable result qui va initialiser à 1 et qui va stocker le produit de tous les nombres de 1 à 5.
for(let value = 1; value<=maxValue; value++){ //value est la variable de boucle utilisée pour parcourir chaque entier de 1 à 5 qu'on multiplie pour calculer la factorielle de 5. Elle agit comme un compteur que l'on démarre à 1 avec un maximum de 5. Ici on définit son initialisation; condition; incrémentation.
  result *= value //multiplication de result par value à chaque itération (result = result * value) pour accumuler le produit des nombres de 1 jusqu’à 5.
};
let statement = `Le résultat est de ${result}`;
console.log(statement)