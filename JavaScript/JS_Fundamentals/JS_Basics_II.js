// Complete the superMultiply function to pass all given tests

function superMultiply(x, y){

	// enter code here
	if(typeof(y) != "number"){
		// I could now check if it's a String to get the exact error message but why.  Anything but a number shouldn't work
		return "Error: Can not multiply by anything but a number";
	}
	let xType = typeof(x);
	switch(xType){
		case "number":
			if(x === 0 && y === 0){
				return "All inputs 0";
			}
			else{
				x *= y;
			}
			break;
		case "string":
			x = x.repeat(y);
			break;
		case "object":
			if(Array.isArray(x)){
				for(let i=0;i<x.length;i++){
					x[i] *= y;
				}
			}
			else{
				return "Error: x must be a number, string, or an Array of Numbers";
			}
			break;
		default:
			break;
	}

	// end custom code

	return x;
}


// Test I
let test1 = superMultiply(5, 2);
console.log(test1); // => 10

// Test II
let test2 = superMultiply(0, 0);
console.log(test2); // => "All inputs 0"

// Test III
let test3 = superMultiply([1,2,3], 2);
console.log(test3); // => [2,4,6]

// Test IV
let test4 = superMultiply(7, "three");
console.log(test4); // => "Error: Can not multiply by string"

// Test V
let test5 = superMultiply("Dart", 4);
console.log(test5); // => "DartDartDartDart"
