var spaces = 10;
var carsTotal = 100;
var carsGone = 0;

function CarInfo() {
	this.make = makeName();
	this.plate = plateID();
	this.hex = hexID();
	this.timerId = timer();
}


function makeName(){
	var brand = ["Ford", "Mustang", "Nissan", "Jeep", "Toyota", "Honda", "Porsche", "Volvo", "Subaru", "Chevrolet"];
	return brand[Math.floor(Math.random() * 10)];
}

function plateID(){
	var plate = "";
	var id = 'qwertyuiopasdfghjklzxcvbnm0123456789';
	for (var i = 0; i <= 6; i++) {
		plate += id.charAt(Math.floor(Math.random() * 36))
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
	var timerId = timeOut(timerTime, );
	return timerId;
}

function clearInterval() {
	clearInterval(timerId);
}

function park(){
	var carsWaiting = carsTotal;
	console.log("Spaces left: " + spaces);
	// console.log("Cars Waiting: " + carsWaiting);
	var carParked = "";
	var carsParked = 0;
	console.log("Cars Parked: " + carsParked);
	while(spaces != 0){
		for(spaces = 10; spaces != 0; spaces--){
			makeName();
			plateID();
			hexID();

			carsWaiting--;

			// carParked = "Car Parked: " + make + "; Plate ID: " + plate + "; Color: #" + hex + ";";
			// console.log(carParked);

			console.log(carInfo());

			console.log("Cars Waiting: " + carsWaiting);

			carsParked++;

		}

		// console.log("Spaces left: " + spaces);
		// console.log("Cars Parked: " + carsParked);
	}
}