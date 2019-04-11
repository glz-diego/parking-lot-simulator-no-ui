var MAX_SPACES = 10;
const carsTotal = 5;

var carsWaiting = [];
var parkingLot = [];
var carsGone = [];

function CarInfo() {
	this.make = makeName();
	this.plate = plateID();
	this.hex = hexID();
	this.timerId = timer();

	this.park = function(car){
		console.log(car);
		parkinglot.push(car);
	}
}

function carFactory(){
	for (var i = carsTotal; i >= 0; i++) {
		var car = new CarInfo();
		carsWaiting.push(car);
	}
	console.log(carsWaiting)
	return carsWaiting;
}

function makeName(){
	var brand = ["Ford", "Mustang", "Nissan", "Jeep", "Toyota", "Honda", "Porsche", "Volvo", "Subaru", "Chevrolet"];
	return brand[Math.floor(Math.random() * 10)];
}

function plateID(){
	var plate = "";
	var id = '0123456789';
	for (var i = 0; i <= 6; i++) {
		plate = id.charAt(Math.floor(Math.random() * 36))
	}
	return plate;
}

function hexID(){
	var hex = "";
	var colorID = '0123456789';
	for (var i = 0; i <= 5; i++) {
		hex += colorID.charAt(Math.floor(Math.random() * 10))
	}
	return hex;
}

function timer() {
	var possibleSec = '012345';
	var timerTime = possibleSec.charAt(Math.floor(Math.random() * 5000));
	// var timerId = timeOut(timerTime, );
	return timerTime;
}

// function clearInterval() {
// 	clearInterval(timerId);
// }

function Valet(){
	// TODO: check if parkinglot length is less than max spaces 
	if (parkingLot.length <= MAX_SPACES) {
		for (var i = 0; i <= MAX_SPACES; i++) {
			var car = carsWaiting.pop();
			car.park(car);
		}
	}
	// TODO: loop until max spaces is hit
	// TODO: pop a car off of the cars waiting array and set to a variable
	// TODO: call park function passing car through 
}

carFactory();
console.log(carsWaiting);