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
