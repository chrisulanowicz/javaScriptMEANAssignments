// Challenge I
//	- Create function amperString that takes a number and returns a string of that many "&"
function amperString(num){
	return "&".repeat(num);
}
// test I
console.log(amperString(8)); // => &&&&&&&&

// Challenge II
//	- Create function drawAmpers that takes an array of numbers and for each element prints that numbers worth of "&"
function drawAmpers(arr){
	for(let i = 0; i < arr.length; i++){
		console.log("&".repeat(Math.abs(arr[i])));
	}
}
// test II
drawAmpers([2,4,6,8]);
drawAmpers([3, -2]);


// Challenge III
//	- Change the drawAmpers function to allow strings inside the array
//	- When an element is a string print the first letter of it same number of times as the length of that string and in lowercase
function drawAmpersModded(arr){
	for(let i = 0; i < arr.length; i++){
		if(typeof(arr[i]) == "string"){
			console.log(arr[i][0].repeat(arr[i].length).toLowerCase());
		}
		else{
			console.log("&".repeat(Math.abs(arr[i])));
		}
	}
}
// test III
drawAmpersModded([2,"Dodge",4,"plymouth",6,"Chrysler"]);