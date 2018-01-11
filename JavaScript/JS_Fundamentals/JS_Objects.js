// Challenge I
//	- Print all of the vehicle models and their make 
//	- each one should appear as: Model: Charger, Make: Dodge
let cars = [
	{ model: "Charger", make: "Dodge" },
	{ model: "Fury", make: "Plymouth" },
	{ model: "300", make: "Chrysler" },
	{ model: "Avenger", make: "Dodge" },
	{ model: "'Cuda", make: "Plymouth" },
	{ model: "Challenger", make: "Dodge" }
]

for(let i = 0; i < cars.length; i++){
	let car = cars[i];
	let carString = "";
	for(let carInfo in car){
		carString += carInfo.charAt(0).toUpperCase() + carInfo.slice(1);
		carString += ": " + car[carInfo] + ", ";
	}
	console.log(carString);
}


// Challenge II

let vehicles = {
	cars: [
		{ model: "Charger", make: "Dodge" },
		{ model: "Fury", make: "Plymouth" },
		{ model: "300", make: "Chrysler" },
		{ model: "Avenger", make: "Dodge" },
		{ model: "'Cuda", make: "Plymouth" },
		{ model: "Challenger", make: "Dodge" }
	],
	trucks: [
		{ model: "1500", make: "Ram" },
		{ model: "Dakota", make: "Dodge"}
	]
};

// Print vehicles out in following format (number at end is length of make & model combined)
// CARS
// 1 - CHARGER, DODGE - 12
// 2 - FURY, PLYMOUTH - 12
// ...
// TRUCKS
// 1 - 1500, RAM - 7
// 2 - DAKOTA, DODGE - 11

for(let vehicleType in vehicles){
	console.log(vehicleType.toUpperCase());
	let carString;
	let carCount = 0;
	for(let i = 0; i < vehicles[vehicleType].length; i++){
		carCount++;
		carString = carCount + " - ";
		let vehicle = vehicles[vehicleType][i];
		let carCharCount = 0;
		for(let carInfo in vehicle){
			carString += vehicle[carInfo].toUpperCase();
			if(carInfo == "model"){
				carString += ", ";
			}
			carCharCount += vehicle[carInfo].length;
		}
		carString += " - " + carCharCount;
		console.log(carString);
	}
}



