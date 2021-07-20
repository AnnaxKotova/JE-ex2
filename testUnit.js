// a = prompt('Insérez le paramètre');
//         if (a){

// console.log(calculatrice(a));

let a;
function calculatrice(a) {
    return a*10;
}
console.log(calculatrice(2)); // 20
console.log(calculatrice(3)); //30
console.log(calculatrice(4.5)); //45
console.log(calculatrice("5")); //50, JS est vraiment permitif
console.log(calculatrice(true)); // 1
console.log(calculatrice(false)); //0
console.log(calculatrice("Bonjour"));  // 
console.log(calculatrice("12 billets"));  //
console.log(calculatrice(1+1)); //20
console.log(calculatrice(12^2)); // 1440 pourquoi 140 = parce que ^ est un operateur binaire _u exclusive en binaire
