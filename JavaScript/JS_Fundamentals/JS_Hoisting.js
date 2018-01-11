// Predict the output of each

// ======================
console.log(hello);
var hello = 'world';
// Prediction
// -> undefined

// ======================
var needle = 'haystack';
test();

function test(){
	var needle = 'magnet';
	console.log(needle);
}
// Prediction
// -> magnet

// ======================
var brendan = 'super blah';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
// Prediction
// -> super blah

// ======================
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
// Prediction
// -> chicken
// -> half-chicken

// ======================
// mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
// Prediction
// -> undefined (mean function never runs)   ACTUAL = gives a TypeError and breaks program - need to comment out to allow it to run
// -> chicken 
// -> chicken 

// ======================
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
// Prediction
// -> undefined
// -> rock
// -> r&b
// -> disco

// ======================
city = "detroit";
console.log(city);
learn();
function learn() {
	city = "dallas";
	console.log(city);
	var city = "austin";
	console.log(city);
}
console.log(city);
// Prediction
// -> detroit
// -> dallas
// -> austin
// -> detroit

