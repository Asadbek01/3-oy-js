// o'zgaruvchilar -> var, let const.

// funksiya ->

// checkMeva nomli funksiya yarating va uni ichida 6 savoldagi yaratilgan mevalarnini 3-indexini tekshiring.
//  If elsedan foydalaning.

const meva = ['olma', 'nok', 'kiwi', 'banan', 'cacos', 'ananas'];

const arg = 'Asadbek';
const num1 = 90;
const num2 = 10;

function checkMeva(son1, son2, son3) {
	// console.log(arg + 'ning' + ' ' + 'yoshi' + ' ' + num2 + 'da');
	console.log(`${son3}`);
	console.log(`${arg}ning yoshi ${num2}`);

	let name = 'Asadbek';
	// console.log(name);
}
// console.log(name);

checkMeva(num1, num1, 50);

//keywords

// funksiyaga argument junatdik
// o'zgaruvchilarga funksiya ichida bog'landik.
// agar o'zgaruvchu block ichida yaratilsa demak unga tashqarida bog'lana olmaymiz.
// Stringlarni bir biriga qo'shtik.  (Concatination)
// Bactickni jarayonda ko'rdik.

let ism = 'Asadbekk';

function getName(arg) {
	console.log(`${arg} Azamjonov`);
}
getName(ism);

// 2 ta o'zgaruvchi kk
// funksiya kk 2ta argumentli bu ikkala argumentni bir biriga qo'shib logda chiqaramiz

// -------------Vazifalar -------------

// 1) function  kk o'zida bitta argument kutsin va arg son bo'lishligi kk.

// 2) 2 ta o'zgaruvchi kk turi number bo'lsin. function ham yarating uni ichida ikkalasini qo'shib ikkiga bo'ling

// 3)  Function kk va 3 ta o'zgaruvchini arg sifatida qabul qilsin va 3lasini qo'shsin. Backtickdan foydalanib.  (ota-aka-uka)

let x = 5;
let b = 5;
let natija = x + b;

natija == 10 ? console.log('True') : console.log('false');

function funkisya_nomi(l, k) {
	// lniBolinmasi o'zgaruvchi kk l ni 2 ga bo'linmsini sqalasin
	let lniBolinmasi = l / 2;

	// (lniBolinmasi natijasi) hozir 50 ni 2 ga bolinmasi 25 ga teng

	//  conso
	// console.log(`50 ni 2 ga bolinmasi 25 ga teng`);
	console.log(
		`${lniBolinmasi} ni ${k} ga bolinmasi ${lniBolinmasi / k} ga teng`
	);
}
funkisya_nomi(100, 2);

// Uyga vazifa:
// funksiya kk textCreation nomli. Keyingi misollar hammasi shuni ichida bajarilishligi kk

// Tepadagi funksiya o'zida 1 ta param qabul qilishligi kk va uni consoleda olib ko'rsating.

// Paramni 2 ga ko'paytmasini alohida o'zgaruvchiga oling.

// console.log() da  bactick yordamida Paramni 2 ga ko'paytmasi biron-bir teng bo'lishligi kk

// funksiyani ichida  obj yaratishimiz kk va o'zida name, age, email

// keywords
// o'zgaruvchi
// ternary
// funksiya
// concatination
// funksiyalarga param junatdik
// o'zgaruvchilar -> var, let const.
// data types -> string, number, boolean, object, array, null, undefined

let result = ['olma', 'nok', 'kiwi', 'banan', 'cacos', 'ananas'];
function sum(param) {
	console.log(param);
}
sum(result);
