const person = {
	name: 'LG',
};

// console.log(person['name']);

let bool = true;

bool = {
	name: 'boolean',
	age: '22',
};

bool = [2, 3, 4, true, 'hey'];

const a = 5;
const b = 8;
const natija = a + b;
// console.log(natija);

// if (natija == 10) {
// 	console.log('Ha teng');
// } else {
// 	console.log('Teng Emas');
// }

// natija == 11 ? console.log('teng') : console.log('teng emas'); // ternary

// if (natija == 10) {
// 	console.log('Ha teng');
// } else if (natija == 11) {
// 	console.log('Natija 11 ga teng');
// } else {
// 	console.log('Teng Emas');
// }

// keywords -> kalit so'zlar
// ma'lumot turlari
// if else  tushunchasi
// ternary
// o'zgaruvchi

//----------------------------------------Vazifalar------------------------------------

// 1)  1 ta firstName nomli o'zgaruvchi yarating. Va qiymatiga ismingizni bering uni consolega oling.

let firstName = 'Shamshodbek';
console.log(firstName);

// 2) 2ta o'zgaruvchi yarating nomlari num1 va num2 bo'lsin va yig'indisini alohida natija nomli o'zgaruvchiga oling.

let num1 = 10;
let num2 = 20;

let natija1 = num1 + num2;
// console.log(natija1);

// 3) 2ta o'zgaruvchi kerak nomini o'zingiz bering. Va ularni yig'indisini yarmini topishingiz kk.

let aa = 20;
let bb = 40;

console.log((aa + bb) / 2);

// 4) Ikkinchi savoldagi natijani 10ga tenglang agar teng bo'lsa teng deb consele oling. Yoki teng emas.

if (natija1 == 10) {
	console.log('teng');
} else {
	console.log('Teng emas');
}

// 5 To'rtinchi savolni ternary bilan yeching

let arr = {
	name: 'Bilodin',
	surname: 'Abdulhamidov',
	age: [23, 28],
};

console.log(arr);
