// Create a simple version of the underscore library with functions for map, reduce, find, filter and reject

var _ = {

	map: function(arr, callback){
		for(let i = 0; i < arr.length; i++){
			arr[i] = callback(arr[i]);
		}
		return arr;
	},

	reduce: function(arr, callback){
		let memo = arr[0];

		for(let i = 1; i < arr.length; i++){
			memo = callback(memo, arr[i]);
		}

		return memo;
	},

	find: function(arr, callback){
		for(let i = 0; i < arr.length; i++){
			if(callback(arr[i])){
				return arr[i];
			}
		}
		return false;
	},

	filter: function(arr, callback){
		let filteredArray = [];

		for(let i = 0; i < arr.length; i++){
			if(callback(arr[i])){
				filteredArray.push(arr[i]);
			}
		}

		return filteredArray;
	},

	reject: function(arr, callback){
		let nonRejectedArray = [];

		for(let i = 0; i < arr.length; i++){
			if(!callback(arr[i])){
				nonRejectedArray.push(arr[i]);
			}
		}

		return nonRejectedArray;
	}

}


// tests
var tripled = _.map([1,2,3,4,5,6],function(num){return num * 3;});
console.log(tripled); // => [3,6,9,12,15,18]
var reduced = _.reduce([1,2,3,4,5,6],function(memo,num){return memo + num;},0);
console.log(reduced); // => 21
var found = _.find([1,2,3,4,5,6],function(num){return num % 2 == 0;});
console.log(found); // => 2
var evens = _.filter([1,2,3,4,5,6],function(num){return num % 2 ==0; });
console.log(evens); // => [2,4,6]
var rejected = _.reject([1,2,3,4,5,6],function(num){return num % 2 ==0;});
console.log(rejected); // => [1,3,5]