// Create a Ninja class with name, health (default of 100), speed (private / default of 3), and strength (private / default of 3) attributes 
// Also add sayName (log name), showStats (log strength/speed/health), and drinkSake (add 10 health) methods

function Ninja(name){

	let speed = 3;
	let strength = 3;
	this.name = name;
	this.health = 100;

	this.sayName = function(){
		console.log(this.name);
	}

	this.showStats = function(){
		console.log(`Name: ${this.name}, Health: ${this.health}, Strength: ${strength}, Speed: ${speed}`);
	}

	this.drinkSake = function(){
		this.health += 10;
		return this;
	}

}

const ninja1 = new Ninja("Shinobi");
ninja1.sayName();  // => Shinobi
ninja1.showStats(); // => Name: Shinobi, Health: 100, Strength: 3, Speed: 3