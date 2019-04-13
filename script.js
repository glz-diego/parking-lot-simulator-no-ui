var carsWaiting = [];
var parkingLot = [];
var carsGone = [];

const carsTotal = 20;
var MAX_SPACES = 10;

var spacesOpen = MAX_SPACES - parkingLot.length;

// var interval = setInterval(function(){Valet()}, 1000);


function carInfo() {
	this.make = makeName();
	this.plate = plateID();
	this.hex = hexID();
	this.timerTime = timer();

	this.park = function(car){
		console.log("parking car", car);
		parkingLot.push(car);
		setTimeout(function(){ car.leave(car) }, car.timerTime);
	}

	this.leave = function(car){
		console.log("leave", car);
		// TODO: find cars position hint look up array.map and indexOf()
		// parkingLot.pop(carPosition);
	}
}

function carFactory(){
	for (var i = 0; i < carsTotal; i++) {
		var car = new carInfo();
		carsWaiting.push(car);
	}
	// console.log(carsWaiting)
	return carsWaiting;
}

function makeName(){
	var brand = ["Ford", "Mustang", "Nissan", "Jeep", "Toyota", "Honda", "Porsche", "Volvo", "Subaru", "Chevrolet"];
	return brand[Math.floor(Math.random() * 10)];
}

function plateID(){
	var plate = "";
	var possibleId = "0123456789qwertyuiopasdfghjklzxcvbnm";
	for (var i = 0; i <= 6; i++) {
		plate += possibleId.charAt(Math.floor(Math.random() * 36));
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
	return Math.random() * (5000 - 1000) + 1000;
}

function popCar(){
	var car = carsWaiting.pop();
	car.park(car);
	console.log(carsWaiting);
}

// function clearInterval() {
// 	clearInterval(timerId);
// }

function Valet(){
	console.log("Calling the Valet!")

	if(carsWaiting.length !== 0){
		console.log("cars are waiting!", spacesOpen)
		for (var i = 0; i < spacesOpen; i++) {
			var car = carsWaiting.pop();
			car.park(car);
		}
	} else {
		clearInterval(interval)
	}
}
console.log("carsWaiting.length", carsWaiting.length);

carFactory();