// String -> "", '', ``
// Number -> Sonlar 123456

// Boolean true yoki false

// Array -> []

// Object  -> {}
// null va undefined

// --------------------------- O'zgaruvchilar  ---------------------------

// var let const -> kalit so'zlar

let str = 'hey';
console.log(`Bu string: ${str}`);
const num = 1246126;
console.log(`Bu son: ${num} `);

let bool = false;
console.log(`Bu boolean: ${bool}`);

let comp = {
	xotira: '128GB',
	nomi: 'LG',
}; // nom va qiymat juftlik
console.log(`Bu object: ${comp}`);

let arr = ['olma', 'banan', 'uzum'];
console.log(`Bu array: ${arr}`);

let nul = null;
console.log(`Bu null: ${nul}`);

let und = undefined;
console.log(`Bu undefined: ${und}`);

// ------------------------------------Functions------------------------------------

let functDec = 'function declaration';
// // function declaration
// function getName() {
// 	console.log(`Bu mening birinchi: ${functDec}nim`);
// }
// getName();

// //arrow function
// let getFuncExp = () => {
// 	console.log(`Bu mening ikkinchi: ${functExp}`);
// };
// let functExp = 'function expression nomli funksiyam';
// getFuncExp();

// ------------------------------------Parametrli Functions------------------------------------

// Vazifalar

// 1) Hamma ma'lumot turlarini alohida o'zgaruvchiga oling.

// 2) ikkita o'zgaruvchi yaratamiz va qiymatiga number beramiz ularni yig'indisini alohida o'zgaruvchiga olamiz.

// 3) Bo'sh bolgan arrayni bitta o'zgaruvchiga saqlaymiz.

// 4) To'ldirilgan elemntlarni oxirgisini console.log oling.  (.length bn)

// 5) getArray nomli funksiya yarating va u o'zida yaratilgan array param sifatida olsin.

// 6) 2 ta param qabul qiladigan funksiya yarating.

// 7)  num nomli o'zgaruvchi yarating va uni console.log ga backtick bilan oling oldida bir text bo'lsin.

// 8)  2 ta o'zgaruvchi yaratib nomiga num1 va num2  va uni console.log ga backtick bilan yig'ondi natijasini oling oldida bir text bo'lsin
// let yoki const

// boolean
let son1 = 'Asadbek';
let son2 = 'Azamjonov';

// let fullName = `${son1} ${son2}`;
// console.log(fullName);

let arr3 = [];

arr3.push('olma');
arr3.push('banan');

// console.log('Bosh bolgan array', arr3);
// console.log(arr3[arr3.length - 1]);

let getArray = param => {
	console.log('funksiyadagi log: ', param);
};
getArray(arr3);

let str1 = 'Biloldin';
let str2 = 'Abdulhamidov';
// function dec
function getAlert(param1, param2) {
	// console.log(param1 + ' ' + param2);
	console.log(`${param1}  ${param2}`);
}
getAlert(str1, str2);

let num3 = 25;

console.log(`Bu son: ${num3}`);

let num1 = 20;
let num2 = 30;

console.log(`Yig'indi: ${num1 + num2}`);
