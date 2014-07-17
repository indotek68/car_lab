require('locus');

var Car = function (make, model, year, color){	
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	
	this.state = "off";
	this.previousOwners = [];
	this.currentOwner = "manufacturer";
	this.passengers = [];
	this.destination = "";
	//this.destinationGo = false;
};

Car.prototype.sale = function(newOwner){
	this.previousOwners.push(this.currentOwner);
	this.currentOwner = newOwner;
}

Car.prototype.paint = function(newColor){
	this.color = newColor;
}

Car.prototype.start = function(){
	this.state = "on";
}

Car.prototype.off = function() {
	this.state = "off";
}

Car.prototype.driveTo = function(destination){
	if(this.state === "on"){
		this.destination = destination
		console.log("I am driving to " + this.destination);
		//this.destinationGo = true;
	}
}

Car.prototype.park = function() {
	if(this.state === "off"){
		console.log("parked");
	}
}

Car.prototype.pickUp = function(name1, name2, name3) {
	if(this.state === "on"){
		console.log("I am driving to pick up " + name1 + " & " + name2 + " + " + name3);
		this.passengers.push(name1, name2, name3);
	}
}

Car.prototype.dropOff = function(name) {
	if(this.state === "on" && this.passengers !== null){
		for (var i = 0; i < this.passengers.length; i++) {
			if(this.passengers[i] === name){
				this.passengers.splice(i, 1);
			}
		}
	}
	//console.log(this.passengers)
}



var honda = new Car("honda", "civic", "2014", "grey");
var audi = new Car("audi", "a4", "2008", "black");
var bmw = new Car("bmw", "325.i", "2011", "red");

module.exports = Car;

//eval(locus);