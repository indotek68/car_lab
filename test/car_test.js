var Car = require("../src/car.js"),
  expect = require("chai").expect;

  describe("honda", function(){

  	describe("#sale", function(){
  		var honda = new Car("honda", "civic", "2014", "grey");
  		honda.sale("Angga");

  		it("should push current owner to previous array", function () {
  			expect(honda.previousOwners).to.eql(["manufacturer"])
  		});
  		it("should set new current owner", function () {
  			expect(honda.currentOwner).to.eql("Angga");
  		});
  	})

  	describe("#paint", function(){
  		var honda = new Car("honda", "civic", "2014", "grey");
  		honda.paint("blue")

  		it("should change color to blue", function(){
  			expect(honda.color).to.eql("blue");
  		});
  	})

  	describe("#start", function(){
  		var honda = new Car("honda", "civic", "2014", "grey");
  		honda.start("on")

  		it("should change state of car to on", function(){
  			expect(honda.state).to.eql("on");
  		});
  	})

  	describe("#off", function(){
  		var honda = new Car("honda", "civic", "2014", "grey");
  		honda.off("off")

  		it("should change state of car to off", function(){
  			expect(honda.state).to.eql("off");
  		});
  	})

  	describe("#driveTo", function(){
  		var honda = new Car("honda", "civic", "2014", "grey");
  		honda.start();
  		honda.driveTo("Tahoe")

  		it("should have a destination of Tahoe", function(){
  			expect(honda.destination).to.eql("Tahoe");
  		});
  	})

  	describe("#park", function(){
  		var honda = new Car("honda", "civic", "2014", "grey");
  		honda.park()

  		it("should be parked", function(){
  			expect(honda.state).to.eql("off");
  		});
  	})

  	describe("#pickUp", function(){
  		var honda = new Car("honda", "civic", "2014", "grey");
  		honda.start();
  		honda.pickUp("Mary", "John", "Jane")

  		it("the passengers array should include Mary", function(){
  			expect(honda.passengers).to.eql(["Mary", "John", "Jane"]);
  		});
  	})

  	describe("#dropOff", function(){
  		var honda = new Car("honda", "civic", "2014", "grey");
  		honda.start();
  		honda.pickUp("Mary", "John", "Jane");
  		honda.dropOff("John")

  		it("the dropOff function should remove Mary from the array", function(){
  			expect(honda.passengers).to.eql(["Mary", "Jane"]);
  		});
  	})
  })








