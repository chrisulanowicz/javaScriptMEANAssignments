// Building off of Ninja_Class_I, add new method 'punch' that takes another Ninja instance and reduces that Ninja's health by 5
// also add a similar 'kick' method that reduces the target Ninja's health by 15
// include console messages in each describing the action
// validate that the object being passed in is of the Ninja class

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

	this.punch = function(target){
		if(target instanceof Ninja){
			target.health -= 5;
			console.log(`${target.name} was punched by ${this.name} and health is down to ${target.health}`);
		}
		else{
			console.log(`You can't punch a ${target.constructor.name}`);
		}
	}

	this.kick = function(target){
		if(target instanceof Ninja){
			target.health -= 15;
			console.log(`${target.name} was kicked by ${this.name} and health is down to ${target.health}`);
		}
		else{
			console.log(`You can't kick a ${target.constructor.name}`);
		}
	}

}

const ninja1 = new Ninja("Shinobi");
const ninja2 = new Ninja("Ryu");
ninja1.punch(ninja2); // Ryu was punched by Shinobi and health is down to 95
ninja1.punch("string object"); // You can't punch a String
ninja2.kick(ninja1); // Shinobi was kicked by Ryu and health is down to 85

