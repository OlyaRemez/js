console.log('');
console.log('Консольная битва');
console.log('');

let myHp = 20, maniacHp = 20;
let switching = 1;

const attackTactic = ['1. Ударить в голову', '2. Ударить по телу', '3. Ударить по ногам'];
const protectionTactic = ['1. Защитить голову', '2. Защитить тело', '3. Защитить ноги'];

console.log('На вас напал маньяк. Ваши действия:');
console.log('');

attackTactic.forEach(function(element){
    console.log(element);
})

const readline = require('readline');
rl = readline.createInterface(process.stdin, process.stdout);

function ifManiacProtect() {
    console.log('');
    console.log('Маньяк блокировал удар.');
    console.log('Его здоровье ' + maniacHp);
};

function ifManiacDontProtect(){
    let damage = Math.floor(Math.random() * 5 + 1); // генерируем число в диапазоне от 1 до 5 (прибавляем единицу для того, чтобы диапазон не был от 0 до 4)
    maniacHp = maniacHp - damage;
    console.log('');
    console.log('Вы ударили маньяка.');
    console.log('Сила удара ' + damage);
    console.log('Здоровье маньяка ' + maniacHp);
    if (maniacHp <= 0) {
        console.log('');
        console.log('Вы победили.');
        console.log('Игра оконченна.');
        process.exit(0);
    }
};

function AttackActions(){
    switching *= -1;
    let blockGeneration = Math.floor(Math.random() * 3 + 1); // генерируем число в диапазоне от 1 до 3 (прибавляем единицу для того, чтобы диапазон не был от 0 до 2)

    ((blockGeneration == '3') ? ifManiacProtect() : ifManiacDontProtect());

    protectionTactic.forEach(function(element){
        console.log(element);
    });
};

function ifPlayerProtect() {
    console.log('');
    console.log('Вы заблокировали удар.');
    console.log('Ваше здоровье ' + myHp);
};

function ifPlayerDontProtect(){
    let damage = Math.floor(Math.random() * 5 + 1); // генерируем число в диапазоне от 1 до 5 (прибавляем единицу для того, чтобы диапазон не был от 0 до 4)
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
};

function ProtectActions() {
    switching *= -1;
    let blockGeneration = Math.floor(Math.random() * 3 + 1); // генерируем число в диапазоне от 1 до 3 (прибавляем единицу для того, чтобы диапазон не был от 0 до 2)
 
    ((blockGeneration == '3') ? ifPlayerProtect() : ifPlayerDontProtect());

    attackTactic.forEach(function(element){
        console.log(element);
    });
};

rl.on('line', function(line) {

    let selectedNumber = line.trim();
   
    if (switching > 0) {
        if (selectedNumber == '1' || selectedNumber == '2' || selectedNumber == '3') {
            AttackActions();
        }  
    } else {  
        if (selectedNumber == '1' || selectedNumber == '2' || selectedNumber == '3')  {
            ProtectActions();
        }
    }

});