function Phone(brand, price, color, memorySize, platform) {
	this.brand = brand;
	this.price = price;
	this.color = color;
  this.memorySize = memorySize;
  this.platform = platform;
};

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". This phone has " + this.memorySize + "GB and using " + this.platform + "system.");
};

var SamsungGalaxyS6 = new Phone("Samsung", 3250, "black", 32, "Android");
var iPhone6S = new Phone("Apple", 2250, "silver", 64, "iOS");
var OnePlusOne = new Phone("Apple", 2850, "white", 64, "Android");

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();