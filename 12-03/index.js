// data types -> string, number, boolean, object, array, null, undefined

console.log(obj);
var obj = {
	name: 'Asadbek',
	age: 23,
};

// function declaration
function getData(param, param2, param3) {
	console.log(param3);
}

// function expression
let getData2 = function () {
	console.log("I'm function expression");
};

const getData3 = function () {};

// arrow function
const getData4 = () => {};

// let result = ['olma', 'nok', 'kiwi', 'banan', 'cacos', 'ananas'];
let result = {
	name: 'Asadbek',
	age: 23,
	hobbies: ['footabal', 'tennis'],
};

let arr = [
	'olma',
	'nok',
	{
		name: 'Asadbek',
		age: 23,
		hobbies: ['footabal', 'tennis'],
	},
];
function sum(param) {
	console.log(param[2].hobbies[1]);
}
sum(arr);

// Vazifalar:

// 1) 2 ta o'zgaruvchi kk turi number bo'lsin. function ham yarating uni ichida ikkalasini qo'shib ikkiga bo'ling

// 2 ) array yarating u o'zini ichida 6 ta element qabul qilsin.

// 3)  object yaratamiz. u (name, age, email) propertylar olsin

// 4) funksiya yarating va u funksiya o'zida arrayni param sifati kutsin va consolega oling.  va huddi shuni obj da ham tekshiring.

// 5) Yaratilgan arrayni oxirgi indexini (.length bilan olishimiz kk)

// 6) hamma ma'lumot turlarini alohida o'zgaruvchiga oling.

let array = [
	'olma',
	'banan',
	'uzum',
	'lorem',
	'svfdsv',
	'sdbasdja',
	'dasdasda',
];
console.log(array.length);
console.log(array[array.length - 1]);
// console.log(array[5]);

// console.log()

function getArray(param) {
	console.log(param);
}
