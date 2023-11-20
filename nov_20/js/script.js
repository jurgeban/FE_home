// ----- 1 -------------------------
function compareNumbers(num1, num2) {
   if (num1 % 2 == 0 && num2 % 2 == 0) {
   	  return num1 * num2;
   } else if(num1 % 2 != 0 && num2 % 2 != 0) {
   	  return num1 + num2;
   } else if (num1 % 2 != 0) {
   	  return num1;
   } else return num2;
}

console.log(compareNumbers(2, 8));
console.log(compareNumbers(5, 9));
console.log(compareNumbers(2, 3));


// ----- 2 ----- Не от ChatGPT ------------------
function convertTime(seconds) {
	let days    = Math.floor(seconds / 60 / 60 / 24);
	let hours   = Math.floor(((seconds / 60 / 60 / 24) - days) * 24);
	let minutes = Math.floor(((((seconds / 60 / 60 / 24) - days) * 24) - hours) * 60);
	let secLast = Math.floor(((((((seconds / 60 / 60 / 24) - days) * 24) - hours) * 60) - minutes) * 60);
	return `Данное количество секунд соответствует:
${days} суток, ${hours} часов, ${minutes} минут и ${secLast + 1} секунд`;
}
console.log(convertTime(1234567));

//----------- 3 -----------------------------
function isPrime(num) {
  let bool = true;
  for (var i = 0; i < num; i++) {
  	  if (num % i == 0 && i != num && i != 1) {
         bool = false;
  	  }
  }
  //--
  return bool;
}

console.log(isPrime(4));

//----------- 4 -------------------------------
function getMin(num1, num2) {
  if (num1 < num2) {
  	console.log(num1);
  } else if(num1 > num2) {
  	console.log(num2);
  } else {
  	console.log('числа равны');
  }
}
getMin(10, 5);

//-------------- 5 ----------------------------------------
function getArray(num1, num2) {
	let arr = [];
  if (num1 < num2) {
     for (let i = num1; i < num2 + 1; i++) {
        arr.push(i);     
     } 
     return arr;
    } else if (num2 < num1){
        for (let i = num2; i < num1 + 1; i++) {
            arr.push(i);  
     }
     return arr;
  } else {
   return 0;
  }
}
console.log(getArray(2, 5));