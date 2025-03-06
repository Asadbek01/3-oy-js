// let dfgdfg = 8;

// ['str', true, 34534, {}, [], null, undefined, dfgdfg];

// ['bsdkjksjd', 4234234, {}, true, [], null, undefined];

// let arr = [['Hobbies', 'Interests'], { emails: ['gmail1', 'gmail2'] }, true];

// console.log(arr[1].emails[1]);

// funksiya

// let x = 10;

// x = 11;

// console.log(x);

let ismlar = ['Shamshodbek', 'MuhammadAkbar', 'MuhammadAziz', 'Abdulloh'];
let raqamlar = ['2', 2, '4', 4];

function logNames() {
	// if (ismlar[0] == 'Shamshodbek') {
	// 	console.log('Ha teng');
	// } else {
	// 	console.log('Teng emas');
	// }

	ismlar[0] == 'Shamshodbek'
		? console.log('Ha teng')
		: console.log('Teng emas');
}
// logNames();

function checkNumbers() {
	// if (raqamlar[0] === 2) {
	// 	console.log('Teng');
	// } else {
	// 	console.log('Teng emas');
	// }

	raqamlar[0] === 2 ? console.log('Ha teng') : console.log('teng emas');
}

// checkNumbers();

const obj1 = {
	name: 'Asadbek',
	age: '23',
};

function checkAge() {
	// if (obj1.age == 23) {
	// 	console.log('Teng');
	// } else {
	// 	console.log('Teng emas');
	// }

	obj1.age === 23 ? console.log('Ha teng') : console.log('Teng emas');
}

// checkAge();

// Vazifalar:

// 1)  2 ta o'zgaruvchi yasang va ularga qiymat bering. Va qiymatlarni bir biriga qo'shib alohida o'zgaruvchiga oling. Va natijani consolega oling.
// 2)  Tepadagi yaratilgan 2 ta o'zgaruvchini if else bilan tenglang agar teng bo'lsa teng bo'lmasa teng emas.
// 3) 2 savolni ternary bilan qiling.

// 4) getName nomli funksiya yarating va funksiyadan tashqarida name nomli o'zgaruvchi ochib unga qiymat berib va uni getName nomli functionda consolega oling.

// 5) object yarating va unga name, email, address, nomlar va ularga qiymat bering.

// 6)  array yarating va ichiga 6 ta element joylang, misol uchun (mevalar)

// 7) 5 savolda yaratilgan objectdan addressni consolega oling.
// 8) 6 savoldagi yaratilgan arraydan oxirgi elemntni .lenghth bilan oling.
// 9) checkMeva nomli funksiya yarating va uni ichida 6 savoldagi yaratilgan mevalarnini 3-indexini tekshiring. If elsedan foydalaning.
