$(document).ready(function() {


//problem one
function problemOne() {

	var sum = 0;
	for (i = 0; i < 1000; i++) {
		if ((i % 3 == 0) || (i % 5 == 0)) { //if divisible by 3 or 5 add to sum
			sum += i;
		}
	};
	showAnswer(sum);
}

//problem two
function problemTwo() {

	var sum = 0;
	var seq = [1, 1, 2];

	while (seq[2] <= 4000000) {

		if (seq[2] % 2 == 0) {
			sum += seq[2];
		};

		seq[2] = seq[0] + seq[1]; //setup fibonacci sequence
		seq[0] = seq[1];
		seq[1] = seq[2];
	};
	showAnswer(sum);
}

//problem three
function problemThree() {

	var sum = 0;
	var factors = [];
	var divisor = 2;
	var num = 600851475143;

	while (num > 1) {
		while (num % divisor === 0) {
			factors.push(divisor);
			num /= divisor;
		};
		divisor += 1;
	};
	sum = factors[factors.length-1]; //answer is last/largest prime in factors
	showAnswer(sum);
}

//show answer function
function showAnswer(answer) {
	alert('The answer is' + " " + answer);
}

//button event handlers
$("#problem-one").on('click', problemOne);
$("#problem-two").on('click', problemTwo);
$("#problem-three").on('click', problemThree);

});