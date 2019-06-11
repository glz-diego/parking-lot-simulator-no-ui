var carsWaiting = [];
var parkingLot = [];
var carsGone = [];

const carsTotal = 100;
var MAX_SPACES = 10;

var interval = setInterval(function(){Valet()}, 1000);


function carInfo() {
	this.make = makeName();
	this.plate = plateID();
	this.hex = hexID();
	this.timerTime = timer();

	this.park = function(car){
		//console.log("parking car", car);
		// need to remove this car from the waiting cars array
		parkingLot.push(car);
		setTimeout(function(){ car.leave(car) }, car.timerTime);
	}

	this.leave = function(car){
		console.log(parkingLot.length);

		//console.log("leave");

		//console.log(car, 'this is the car')

		// find the car in the parking lot

		let carPosition;

		const carInParkingLot = parkingLot.filter((carInParkingLot, index) => {
		  if (carInParkingLot.hex === car.hex) {
		  	carPosition = index;

		  	return carInParkingLot;
		  }; 
		})

		parkingLot.splice(carPosition,1);

		//console.log(parkingLot.length);
		// slice or splice the car out of the parking lot based on the index of the cars

		// TODO: find cars position hint look up array.map and indexOf()
		//parkingLot.pop(carPosition);

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
}

// function clearInterval() {
// 	clearInterval(timerId);
// }

function Valet(){
	console.log("Calling the Valet!")
	let spacesOpen = MAX_SPACES - parkingLot.length;

	// Needs to check for open spaces
	// move a car into each open space

	console.log(carsWaiting)
	if(carsWaiting.length !== 0 && parkingLot.length !== MAX_SPACES){
		console.log("cars are waiting!", spacesOpen)
		for (var i = 0; i < spacesOpen; i++) {
			var car = carsWaiting.pop();
			car.park(car);
		}
	}




	if (carsWaiting.length === 0) {
		// stop parking
		clearInterval(interval)
		// give info on current state
		console.log('All Cars Parked')
		console.log(carsWaiting.length)
		console.log(parkingLot)
	}


	//console.log(parkingLot.length, 'cars in parkingLot')
	//console.log(carsWaiting.length, 'car waiting')
}
console.log("carsWaiting.length", carsWaiting.length);

carFactory();