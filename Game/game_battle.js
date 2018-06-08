console.log("");
console.log("Консольная битва");
console.log("");

var myHp = 20, rHp = 20;
var damage;
var z;
var t = 1;

var m = ["1. Ударить в голову", "2. Ударить по телу", "3. Ударить по ногам"];
var n = ["1. Защитить голову", "2. Защитить тело", "3. Защитить ноги"];

var ManiacAction = function(){};
var PlayerAction = function(){};

console.log("На вас напал маньяк. Ваши действия:");
console.log("");

for(var i = 0; i < m.length; i++){
    console.log(m[i]);
}

var readline = require('readline');
rl = readline.createInterface(process.stdin, process.stdout);

rl.prompt();

rl.on('line', function(line) {

    if(t > 0){

    z = Math.floor(Math.random() * 3 + 1);

    ManiacAction = function() {
        var k = line.trim();
        if(z == k){
            console.log("");
            console.log("Маньяк блокировал удар.");
            console.log("Его здоровье " + rHp);
        }
        else{
            damage = Math.floor(Math.random() * 5 + 1);
            rHp = rHp - damage;
            console.log("");
            console.log("Вы ударили маньяка.");
            console.log("Сила удара " + damage);
            console.log("Здоровье маньяка " + rHp);
            if(rHp <= 0){
                console.log("");
                console.log("Вы победили.");
                console.log('Игра оконченна.');
                process.exit(0);
            }
        }
    };

        if(line.trim() == '1' || '2' || '3'){
            ManiacAction();
        }  
  

        for(var i = 0; i < n.length; i++){
            console.log(n[i]);
        }
        t *= -1;
    }

    else{

    z = Math.floor(Math.random() * 3 + 1);

    PlayerAction = function() {
        var k = line.trim();
        if(z == k){
            console.log("");
            console.log("Вы заблокировали удар.");
            console.log("Ваше здоровье " + myHp);
        }
        else{
            damage = Math.floor(Math.random() * 5 + 1);
            myHp = myHp - damage;
            console.log("");
            console.log("Вас ударили.");
            console.log("Сила удара " + damage);
            console.log("Ваше здоровье " + myHp);
            if(myHp <= 0){
                console.log("");
                console.log("Вы проиграли.");
                console.log('Игра оконченна.');
                process.exit(0);
            }
        }
    };
    
        if(line.trim() == '1' || '2' || '3'){
            PlayerAction();
        }
    
        for(var j = 0; j < m.length; j++){
            console.log(m[j]);
        }
        t *= -1;
    }

rl.prompt();
});