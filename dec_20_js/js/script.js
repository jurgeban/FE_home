// - Вчера 20 декабря вечером только начал делать эти задачки,
// - думал они будут попроще и успею их за вечер сделать, но они оказались сложнее,
// - сейчас вот утром перед занатиями отправляю, все успел сделать кроме двух (4) и (8)
// - сегодня после занятий постараюсь те 2 задания доделать
// ------------- 1 --------------------
function greet(name){
  return `Hello, ${name} how are you doing today?`;
}
// ------------- 2 --------------------
function sayHello( name, city, state ) {
  let entireName = '';
  for (var i = 0; i < name.length; i++) {
  	entireName += name[i];
  	if (i != name.length-1) entireName += ' ';
  }
  return `Hello, ${entireName}! Welcome to ${city}, ${state}!`;
}
// ------------- 3 --------------------
function digits(n) {
	let str = n + '';
   return str.length;
}
// ------------- 4 --------------------
// ------------- 5 --------------------
function solution(str){
   let arr = [];
   for (var i = 0; i < str.length; i+=2) {
   	if (str[i + 1] == undefined) {
   	  arr.push(str[i] + '_');
   	} else {
   	 arr.push(str[i] + str[i + 1]);
   	}
   }
   return arr;
}
// ------------- 6 --------------------
function kebabize(str) {
let newStr = '';
  str = str.replace(/\d/g, '');
  for (var i = 0; i < str.length; i++) {
     if (str[i] == str[i].toLowerCase()) {
	   newStr += str[i];
	  	} else if(i != 0) {
	  		newStr += '-' + str[i].toLowerCase();
	  	} else {
	  		newStr += str[i].toLowerCase();
	  	}
  }
  return newStr;
}
// ------------- 7 --------------------

function checkRoot(string){
  let arr = string.split(',');
  if (arr.length != 4) return 'incorrect input';
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
  	if (/[^0-9]/.test(arr[i]) == true) {
        return 'incorrect input';
  	} else {
  		arr[i] = Number(arr[i]);
  		if (i != 0 ) {
  		   if (arr[i] - arr[i-1] != 1) return 'not consecutive';
  		}
  	}
  }
  //---
  sum = arr[0] * arr[1] * arr[2] * arr[3] + 1;
  console.log(sum)
  return sum ** 0.5;
}
checkRoot('4,5,6,7')

// ------------- 8 --------------------

// ------------- 9 --------------------
const areaOrPerimeter = function(l , w) {
  if (l == w) {
    return l * w;
  } else {
    return 2 * (l + w);
  }
}
areaOrPerimeter(3, 3);
// ------------- 10 --------------------
function seatsInTheater(nCols, nRows, col, row) {
  let all = nCols * nRows;
  let out = (col - 1) * row;
  let minusCols = (col - 1) * nRows;
  let minusRows = row * nCols;
  let minusTogether = minusRows + minusCols - out;
  return all - minusTogether;
}
seatsInTheater(16, 11, 5, 3)
// ------------- 11 --------------------
function century(year) {
  let countCentury = 0;
  for (var i = 0; i < year; i+=100) {
    countCentury++;
  }
  return countCentury;
}
century(235);
// ------------- 12 --------------------
function getVolumeOfCuboid(length, width, height) {
    return length * width * height;
}
getVolumeOfCuboid(3, 3, 3);
// ------------- 13 --------------------
function nthEven(n){
  count = 0;
  for (var i = 0; count < n; i++) {
    if (i % 2 == 0) {
      count++;
    }
    if (count == n) {
      return i;
    }
  }
}
nthEven(100)
// ------------- 14 --------------------
function pointsPer48(ppg, mpg) {
  if (ppg == 0 || mpg == 0) {
    return 0;
  } else {
     let entireTime = ppg * (48 / mpg);
     return Number(entireTime.toFixed(1));
  }
}
pointsPer48(12, 20)
// ------------- 15 --------------------
function toBinary(n){
  let newNum = Number(n.toString(2));
  return newNum;
}
toBinary(5)