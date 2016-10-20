// Name: Matt Garner
// Date: 10/16/16
// Description: CS290 - Activity: JS Functions

console.log(sayHi());

function sayHi()
{
	return "Hi!";
}

//console.log(sayGoodbye());  // Does not work

var sayGoodbye = function(){
	return "Goodbye!";
}

console.log(sayGoodbye());  // Does Work