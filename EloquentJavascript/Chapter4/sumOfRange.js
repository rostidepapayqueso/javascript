let rangeOfNumbers =[];

/*const range = (start, end ) => {
  
  for (let number = start; number <= end; number ++) {
    rangeOfNumbers.push (number);
  }
return rangeOfNumbers;
  
}*/

const range = (start, end, step) => {
  if (start > end){
    for (let number = start; number >= end; number --) {
    rangeOfNumbers.push (number);
    }

  } else {
      for (let number = start; number <= end; number ++) {
         rangeOfNumbers.push (number);
      }
    }
  
return rangeOfNumbers;
  
}

console.log(range(5,2,-1));

const sum = (array) =>{
  let suma = 0;
  for(let init = 0; init < array.length; init++) {
    suma = suma + array[init];
    
  }
  return suma;
}

console.log(sum(rangeOfNumbers));