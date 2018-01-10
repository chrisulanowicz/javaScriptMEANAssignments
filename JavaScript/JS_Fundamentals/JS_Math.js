// Complete challenges using the Math object

// Challenge I
//	- Create function (noNegatives) that takes an array and returns true/false on if it contains No Negative Numbers
function noNegatives(arr){
	let result = true;
	for(let i = 0; i < arr.length; i++){
		if(arr[i] < 0){
			return false;
		}
	}
	return result;
}
// test I
console.log(noNegatives([1, 2, 3, 4])); // => true
console.log(noNegatives([1, -2, 3, 5])); // => false


// Challenge II
//	- Create function (isEven) that takes a number and returns true/false if its even
function isEven(num){
	return num % 2 === 0 ? true:false;
}
//test II
console.log(isEven(2)); // => true;
console.log(isEven(3)); // => false;


// Challenge III
//	- Create function (howManyEven) that takes an array and returns how many elements are even
function howManyEven(arr){
	let evenCount = 0;
	for(let i = 0; i < arr.length; i++){
		if(isEven(arr[i])){
			evenCount++;
		}
	}
	return evenCount;
}
// test III
console.log(howManyEven([1,3,5])); // => 0
console.log(howManyEven([2,4,6])); // => 3
console.log(howManyEven([1,4,5])); // => 1


// Challenge IV
//	- Create function (createDummyArray) that takes a number (n) and returns an array containining n elements that are random numbers
function createDummyArray(n){
	let dummyArray = [];
	while(n){
		dummyArray.push(Math.floor((Math.random() * 10) + 1 ));
		n--;
	}
	return dummyArray;
}
// test IV
console.log(createDummyArray(3)); // => [ #, #, #]


// Challenge V
//	- Create function (randomChoice) that takes an array and returns a random element from that array 
function randomChoice(arr){
	let arrLen = arr.length;
	let randIdx = Math.floor(Math.random() * arrLen);
	return arr[randIdx];
}
// test V
console.log(randomChoice([2,4,6,8]));







