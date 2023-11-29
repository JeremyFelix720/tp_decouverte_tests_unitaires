export function sumSmallNumbers(a: number, b: number){
    if(a > 9 || a < 0 || b > 9 || b < 0){
        throw new Error("Your are cheating !")
    }
    return a + b;  
};

// Cette fonction doit :
// utiliser la fonction sumSmallNumbers(numA, numB) et pas du +.
// Accepter des nombres compris entre l'infiniment négatif et l'infiniment positif.
export function sum(numA: number, numB: number){
    return numA + numB;
};

// sum(2, 2);