// Complete following basic challenges

// ============================================================
// Challenge I
//	- Create new variable (x) as an empty array and log it
//	- Add 3 strings to the array
//	- Remove the last element in the array and log the final value of x

var x = [];
console.log(x); // => []
x.push("Dodge", "Plymouth", "Chrysler");
console.log(x); // => ["Dodge", "Plymouth", "Chrysler"]
x.pop();
console.log(x); // => ["Dodge", "Plymouth"]

// ============================================================
// Challenge 2
//	- Create new const (y) as an empty array and log it
//	- Push a random number into it and guess the result

const y = [];
y.push(77);
console.log(y); // [77]  (y is still an array so it hasn't technically been changed, only added a property/new index)
try{
	y =  "a string";  // this is trying to change the array so it should cause an error
}
catch(e){
	console.log(e.message);  // Assignment to constant variable
}

// ============================================================
// Challenge 3
//	- Create variable(z) as an array containing 7 random numbers
//	- Print each element in the array to the console
//	- Print each element in the array EXCEPT the last one

var z = [2,4,6,8,10,12,14];
// this will print 2  4  6  8  10  12  14
for(let i=0;i<z.length;i++){
	console.log(z[i]);
}
// this will print 2  4  6  8  10  12
for(let i=0;i<z.length-1;i++){
	console.log(z[i]);
}

// ============================================================
// Challenge 4
//	- Create variable (names) as an array containing 5 random names
//	- Print each name to the console
//	- Print only names longer than 5 characters

var names = ["Chris", "Dave", "John", "Bronn", "Charlie"];
// this will print Chris  Dave  John  Bronn  Charlie
for(let i=0;i<names.length;i++){
	console.log(names[i]);
}

// this will only print Charlie
for(let i=0;i<names.length;i++){
	if(names[i].length > 5){
		console.log(names[i]);
	}
}

// ===========================================================
// Challenge 5
//	- Create function (yell) that takes a string parameter and returns the string in all CAPS

function yell(word){
	return word.toUpperCase();
}

console.log(yell("scream")); // => SCREAM
























