import { sum } from './addition.ts'

export function multiplication(a: number, b: number){
  let res = a * b;
  if(res === -0){
    return 0
  }  
  else {
    return res
  }
};

// multiplication(2, 2);