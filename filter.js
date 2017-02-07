bears = [
	{
		name: "Shelly",
		color: "Brown",
		age: 3,
	},
	{
		name: "Delila",
		color: "Brown",
		age: 20,
	},
	{
		name: "Snickerdoodle",
		color: "Black",
		age: 39,
	},
	{
		name: "Fluffington",
		color: "White",
		age: 27,
	},
]

// function sort(compareFunction){
// 	compareFunction(a,b);
// 	logic to sort them depending on the return;
// }

var sortedBears = bears.sort(function(beara, bearb){
	return bearb.age / beara.age;
})


var coolBears = bears.filter(function(bear){	
	if (bear.age > 20) {
		return bear;
	}
})
// console.log(bears)
console.log(sortedBears);