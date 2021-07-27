MathObj = function () {
};
MathObj.prototype.getFactorial = function (number) {
    if (number < 0) {
        throw new Error("There is no factorial for negative numbers");
    }
    else if (number == 1 || number == 0) {
        return 1;
    } else {
        return number * this.getFactorial(number - 1);
    }
}




//Test


var test_array = [1];
var negative_test_array = [];





fact = 1


function get_factorial(num) {

	for (var i = 1; i <= num; i++){
	test_array.push(i);
	//console.log(test_array)
	}

	for (var i = 0; i <= num; i++) {

		fact *= test_array[i]
		console.log(fact)
			}
	return fact
}



function test_positive_numbers(num) {
	test_value = get_factorial(num)
	func_value = MathObj.prototype.getFactorial(num)

	if (test_value === func_value) {
		console.log("Test Pass")
	}else{
		console.log("Test Failed")
	}

}



function test_negative_numbers(num) {

		console.log(MathObj.prototype.getFactorial(num) == Error)

}


//ERROR TEST
try{
test_negative_numbers(0)
test_negative_numbers(-1)
}catch(e){
	console.log(e.name + ': ' + e.message);
}



test_positive_numbers(8)
