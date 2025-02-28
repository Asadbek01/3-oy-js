// // Ma'lumot turlari

// // let va  const // es6

// // Strings:
// let ism = `212412`;

// //  Numbers:
// let num = 89;

// // Boolean:
// let isTrue = 'true';
// let isFalse = false;

// // Array object:
// let arr = [1, 2, 3, 4];
// // console.log(arr[3]);

// // Object:
// let compObj = {
// 	xotira: '512GB',
// 	nomi: 'LG',
// 	yili: 2025,
// 	yangimi: true,
// };

// // Date:
// let date = new Date();

// // console.log(typeof date);

// // Keywords:

// // data type:
// // string -> "", '', `` -> double quote, single quote, backtick
// // number -> 1,2,3,4,5
// // boolean -> true yoki false ni qiymat sifatida oladi.

// // array => [], elemntlarni index bo'ylab olamiz.
// // Object => {}, bunga biz property orqali bog'lanamiz.
// // eg: 1) compObj.nomi || 2) compObj["nomi"]
// // undefined -> topilmadi.
// // null -> null
// // Date:

// let bool = true; // boolean

// bool = ['ism', 'familya']; // array Object

// bool = {
// 	isTrue: true,
// 	nomi: 'boolean',
// }; // Object

// console.log(bool['isTrue']);
// console.log(bool.nomi);

// // --------------------------------------------------------------------------------------Vazifalar--------------------------------------------------------------------------------------

// // 1)  2 ta o'zgaruvchi yarating va ularni bo'linmasini alohida o'zgaruvchiga tenglab natijani consoleda ko'rsating.

// // 2)

// const arr4 = [1, 2, 3, 4];
// console.log(arr4[arr4.length - 1]);

const bb = 9;
const a = 9;

console.log(bb + a);

const bool = false;

let arr = [
	'banan',
	23,
	true,
	'olma',
	'uzum',
	'orange',
	{
		name: 'Shamshodbek',
		age: 24,
		isMarried: true,
		hobbies: ['football', 'tennis'],
	},
];
const uznligi1 = arr.length;
console.log(uznligi1); // uzunligi, nechta element borligi
console.log(arr[6].hobbies[0]);

let Asadbek = {
	name: 'Asadbek',
	age: 24,
	isMarried: true,
	hobbies: ['football', 'tennis'],
};

console.log(Asadbek.hobbies[1]);
