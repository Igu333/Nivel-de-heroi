let nome = "Criulislei Jonson"
let XP = 5001
let i = 0
const mNome = "O Impiedoso Herói "
const mNivel = ", atingiu o nível "

console.log("Rei da Quadra Derrotado +2000XP")

do {
    i += 400;
    console.log(XP + i);
  } while (i < (2000));

console.log("XP Atual:" + (XP + 2000))

if(XP < 1000){
    console.log(mNome + nome + mNivel + "Ferro")
}else if(XP >= 1001 && XP <= 2000){
    console.log(mNome + nome + mNivel + "Bronze")
}else if(XP >= 2001 && XP <= 5000){
    console.log(mNome + nome + mNivel + "Prata")
}else if(XP >= 5001 && XP <= 7000){
    console.log(mNome + nome + mNivel + "Ouro")
}else if(XP >= 7001 && XP <= 8000){
    console.log(mNome + nome + mNivel + "Platina")
}else if(XP >= 8001 && XP <= 9000){
    console.log(mNome + nome + mNivel + "Ascendente")
}else if(XP >= 9001 && XP <= 20000){
    console.log(mNome + nome + mNivel + "Imortal")
}else{
    console.log(mNome + nome + mNivel + "Radiante")
}
 