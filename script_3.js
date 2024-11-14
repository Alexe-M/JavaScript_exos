let playerNumber = Number(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"))

for(let level = 0; level<playerNumber; level++){
  space = " ".repeat(playerNumber - level - 1)
  diez = "#".repeat(level + 1)
  console.log(space+diez)
}
