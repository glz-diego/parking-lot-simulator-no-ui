const spaces = [];
const carsTotal = [];

function car(){
	function makeName(){
		var make = '';
		var brand = ["Ford", "Mustang", "Nissan", "Jeep", "Toyota", "Honda", "Porsche", "Volvo", "Subaru", "Chevrolet"];
		make = brand[Math.floor(Math.random() * 10)];
		console.log(make);
	}

	function plateID(){
		var plate = "";
		var id = 'qwertyuiopasdfghjklzxcvbnm0123456789';
		for (var i = 0; i <= 6; i++) {
			plate += id.charAt(Math.floor(Math.random() * 36))
		}
		console.log(plate);
	}

	function hexID(){
		var hex = "";
		var colorID = '0123456789';
		for (var i = 0; i <= 5; i++) {
			hex += colorID.charAt(Math.floor(Math.random() * 10))
		}
		console.log(hex);
	}

	function setUp(){
		makeName();
		plateID();
		hexID();
	}
	setUp();
}
car();
