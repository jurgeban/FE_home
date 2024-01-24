function c(param1, param2, param3, param4, param5) {
	if (param1 != undefined && param2 == undefined && param3 == undefined && param4 == undefined && param5 == undefined) {console.log(param1)
 } else if (param1 != undefined && param2 != undefined && param3 == undefined && param4 == undefined && param5 == undefined) {console.log(param1, param2)
 } else if (param1 != undefined && param2 != undefined && param3 != undefined && param4 == undefined && param5 == undefined) {console.log(param1, param2, param3) 
 } else if (param1 != undefined && param2 != undefined && param3 != undefined && param4 != undefined && param5 == undefined) {console.log(param1, param2. param3, param4)
 } else {console.log(param1, param2, param3, param4, param5, 'wertyu');}
}

//---------------------------------
function solution(number){
	let sum = 0;
	if (number > 0) {
	  for (var i = 0; i < number; i++) {
	  	if(i % 3 == 0 || i % 5 == 0) {
	  		sum += i;
	  	}
	  }
	} else {
		return 0;
	}
	return sum;
}
// c(solution(10))
//------------------------------------------
var uniqueInOrder=function(iterable){
	let newArr = [];
	if(iterable.length != 0) {
		for (var i = 0; i < iterable.length; i++) {
     if (i != iterable.length-1 && iterable[i] != iterable[i + 1]) {
       newArr.push(iterable[i]);
      }
   }
  newArr.push(iterable[iterable.length-1]);
 } else {
 	return [];
 } 
 return newArr;
}
c(uniqueInOrder([]))
//-------------------------------------------
