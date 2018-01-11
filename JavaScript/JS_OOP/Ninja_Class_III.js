// Recreate Ninja_Class_I using ES6 syntax
// Add a Sensei class that inherits from Ninja with increased default stats, new attribute for wisdom
// also give the Sensei a speakWisdom method that logs a message and also calls on the drinkSake parent method

class Ninja {

	constructor(name){
		this._speed = 3;
		this._strength = 3;
		this.name = name;
		this.health = 100;
	}

	get speed(){
		return this._speed;
	}

	get strength(){
		return this._strength;
	}

	sayName(){
		console.log(this.name);
	}

	showStats(){
		console.log(`Name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`);
	}

	drinkSake(){
		this.health += 10;
		return this;
	}


}


class Sensei extends Ninja {

	constructor(name){
		super(name);
		this.health = 200;
		this._speed = 10;
		this._strength = 10;
	}

	speakWisdom(){
		console.log("Never trust a fortune cookie");
		super.drinkSake();
	}

}

// tests
const ninja1 = new Ninja("Raphael");
ninja1.sayName();  // => Raphael
ninja1.showStats(); // => Name: Raphael, Health: 100, Strength: 3, Speed: 3

const sensei1 = new Sensei("Splinter");
sensei1.speakWisdom(); // 
sensei1.showStats(); // => Name: Splinter, Health: 210, Strength: 10, Speed: 10

