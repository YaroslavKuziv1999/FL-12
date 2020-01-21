/* Your code goes here */
const full = 100;
class Fighter {
    constructor(fighter) {
        this.name=fighter.name;
        this.damage=fighter.damage;
        this.hp=fighter.hp;
        this.fullHp=this.hp;
        this.strength=fighter.strength;
        this.agility=fighter.agility;
        this.winCount=0;
        this.loseCount=0;
    }

    getName() {
        return this.name;
    }

    getDamage() {
        return this.damage;
    }

    getStrength() {
        return this.strength;
    }

    getAgility() {
        return this.agility;
    }

    getHealth() {
        return this.hp;
    }

    addWin() {
        this.winCount++;
    }

    addLose() {
        this.loseCount++;
    }

    logCombatHistory() {
        return `Name: ${this.name}, Wins: ${this.winCount}, Losses: ${this.loseCount}`;
    }

    attack(Fighter) {
        let procent = (full - (Fighter.strength + Fighter.agility))/full;
        let random = Math.random();
        if(random<procent) {
            this.dealDamage(Fighter.damage);
            return `${Fighter.name} makes ${Fighter.damage} damage to ${this.name}`;       
        } else {
            return `${Fighter.name} missed!`;
        }
    }

    dealDamage(howMuch) {
        if(this.hp-howMuch<=0) {
            this.hp = 0;
        } else {
            this.hp-=howMuch;
        }
    }

    heal(howMuch) {
        let healing = this.hp+howMuch;
        if(this.fullHp<healing) {
            this.hp = this.fullHp;
        }else {
            this.hp+=howMuch;
        }
    }
}

function battle() {
    let fighterOne = arguments[0];
    let fighterTwo = arguments[1];
    if(fighterOne.hp<=0) {
        console.log(fighterOne.name + ' is dead and can`t fight.');
    }else if(fighterTwo.hp<=0) {
        console.log(fighterTwo.name + ' is dead and can`t fight.');
    }else {
        for(;;) {
            console.log(fighterOne.attack(fighterTwo));
            console.log(fighterTwo.attack(fighterOne));
            if(fighterOne.hp<=0) {
                console.log(fighterTwo.name + ' has won!');
                fighterTwo.addWin();
                fighterOne.addLose();
                break;
            } else if(fighterTwo.hp<=0){
                console.log(fighterOne.name + ' has won!');
                fighterOne.addWin();
                fighterTwo.addLose();
                break;
            }
        }
    }
}

const fighterGod = new Fighter({name:'God',damage: 50,hp:100,strength:20,agility:30});
const fighterNoob = new Fighter({name: 'Devil',damage: 50,hp:100,strength:30, agility:20});
console.log(fighterGod.getHealth());
battle(fighterGod, fighterNoob);
battle(fighterGod, fighterNoob);
fighterGod.heal(full);
battle(fighterGod, fighterNoob);
console.log(fighterNoob.logCombatHistory());
console.log(fighterGod.logCombatHistory());