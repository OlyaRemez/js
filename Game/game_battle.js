console.log('');
console.log('Консольная битва');
console.log('');

let myHp = 20, rHp = 20;
let t = 1;

const m = ['1. Ударить в голову', '2. Ударить по телу', '3. Ударить по ногам'];
const n = ['1. Защитить голову', '2. Защитить тело', '3. Защитить ноги'];

let ManiacAction;
let PlayerAction;

console.log('На вас напал маньяк. Ваши действия:');
console.log('');

for (let i = 0; i < m.length; i++) {
    console.log(m[i]);
}

let readline = require('readline');
rl = readline.createInterface(process.stdin, process.stdout);


rl.on('line', function(line) {

    let k = line.trim();
    let z = Math.floor(Math.random() * 3 + 1);
    let damage = Math.floor(Math.random() * 5 + 1);

    ManiacAction = function() {
        t *= -1;
        if (z == k) {
            console.log('');
            console.log('Маньяк блокировал удар.');
            console.log('Его здоровье ' + rHp);
        } else {
            rHp = rHp - damage;
            console.log('');
            console.log('Вы ударили маньяка.');
            console.log('Сила удара ' + damage);
            console.log('Здоровье маньяка ' + rHp);
            if (rHp <= 0) {
                console.log('');
                console.log('Вы победили.');
                console.log('Игра оконченна.');
                process.exit(0);
            }
        }
        for (let i = 0; i < n.length; i++) {
            console.log(n[i]);
        }
    };

    PlayerAction = function() {
        t *= -1;
        if (z == k) {
            console.log('');
            console.log('Вы заблокировали удар.');
            console.log('Ваше здоровье ' + myHp);
        } else {
            myHp = myHp - damage;
            console.log('');
            console.log('Вас ударили.');
            console.log('Сила удара ' + damage);
            console.log('Ваше здоровье ' + myHp);
            if (myHp <= 0) {
                console.log('');
                console.log('Вы проиграли.');
                console.log('Игра оконченна.');
                process.exit(0);
            }
        }
        for (let j = 0; j < m.length; j++) {
            console.log(m[j]);
        }
    };

    if (t > 0) {
        if (line.trim() == '1' || line.trim() == '2' || line.trim() == '3') {
            ManiacAction();
        }  
    } else {  
        if (line.trim() == '1' || line.trim() == '2' || line.trim() == '3') {
            PlayerAction();
        }
    }

});