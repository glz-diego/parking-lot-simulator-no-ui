var spaces = 10;
var carsTotal = 100;
var carsGone = 0;

	var make = "";
function makeName(){
	var brand = ["Ford", "Mustang", "Nissan", "Jeep", "Toyota", "Honda", "Porsche", "Volvo", "Subaru", "Chevrolet"];
	make = brand[Math.floor(Math.random() * 10)];
}

	var plate = "";
function plateID(){
	plate = "";
	var id = 'qwertyuiopasdfghjklzxcvbnm0123456789';
	for (var i = 0; i <= 6; i++) {
		plate += id.charAt(Math.floor(Math.random() * 36))
	}
}

	var hex = "";
function hexID(){
	hex = "";
	var colorID = '0123456789';
	for (var i = 0; i <= 5; i++) {
		hex += colorID.charAt(Math.floor(Math.random() * 10))
	}
}

	var timerTime = "";
// function timer() {
// 	timerTime = "";
// 	var possibleSec = '0123456789';
// 	for (var i = 0; i <= 1; i++) {
// 		timerTime += possibleSec.charAt(Math.floor(Math.random() * 5))
// 	}
// }

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

			carParked = "Car Parked: " + make + "; Plate ID: " + plate + "; Color: #" + hex + ";";
			console.log(carParked);

			console.log("Cars Waiting: " + carsWaiting);

			carsParked++;

		}

			// var possibleSec = '0123456789';
			timerTime = Math.floor(Math.random() * 5)
		var timerId;
		timerId = setInterval(timerTime, alert("hello"));
		// timer();
		console.log(timerId);


		// console.log("Spaces left: " + spaces);
		// console.log("Cars Parked: " + carsParked);
	}
}

function carLeaves(){

}





			// proxy.addEventListener("dogBarked", dogBarked);







		// function noMoreHonking() {
		// 	clearInterval(timerId);
		// }
		// function carLeaves() {
		// 	spaces++;
		// }

		// startHonking();