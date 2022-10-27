/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {    
};

Calculator.prototype.sum = function(a, b) {
    console.log(a + b);
};

Calculator.prototype.subtraction = function(a, b) {
    console.log(a - b);
};

Calculator.prototype.multiplication = function(a, b) {
    console.log(a * b);
};

Calculator.prototype.division = function(a, b) {
    console.log(a / b);
};

const calc1 = new Calculator();

calc1.sum(4, 2);
calc1.subtraction(10, 6);
calc1.multiplication(7, 3);
calc1.division(3, 3);