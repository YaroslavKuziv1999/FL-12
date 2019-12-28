/* eslint-disable max-len */
/* eslint-disable no-magic-numbers */
/* eslint-disable eqeqeq */
// Your code goes here
let qa=false;
let max = 13;
let coef = 2;
let qcr=false;
let newPrize=0;
let prizeOne=0;
let prizeTwo=0;
let prizeThree=0;
let ag = false;

let q = confirm('Do you want to play a game?');
// eslint-disable-next-line eqeqeq
if(q == false){
    alert('You did not become a billionaire, but can.');
}else{
    do{  
        let prize=0;
        // eslint-disable-next-line no-magic-numbers
        for(let i = 0; i<3; i++){
            // eslint-disable-next-line no-magic-numbers
            let randomNumber = Math.floor(Math.random()*9);
            let numberOfPocket = prompt('Please, enter a number of pocket');
            // eslint-disable-next-line eqeqeq
            if (i==0 && randomNumber==numberOfPocket){
                // eslint-disable-next-line no-magic-numbers
                prize+=100;
            }
            // eslint-disable-next-line eqeqeq
            if(i==1 && randomNumber==numberOfPocket){
                // eslint-disable-next-line no-magic-numbers
                prize+=50;
            }
            // eslint-disable-next-line eqeqeq
            if(i==1+1 && randomNumber==numberOfPocket){
                // eslint-disable-next-line no-magic-numbers
                prize+=25;
            }
        }
        // eslint-disable-next-line eqeqeq
        if(prize == 0){
            alert('Thank you for your participation. Your prize is: $' + prize);
            qa = confirm('Do you want to play again?');

        }else{
            alert('Congratulation, you won! Your prize is:'+prize);
            let qc = confirm('Do u want to continue?');
            do{
                // eslint-disable-next-line eqeqeq
                if(qc == true || ag == true){
                    // eslint-disable-next-line no-magic-numbers
                    // eslint-disable-next-line eqeqeq
                    for(let i = 3;; i--){
                        // eslint-disable-next-line eqeqeq
                        if(i==0){
                            break;
                        }
                        // eslint-disable-next-line no-magic-numbers
                        let randomNumber = Math.floor(Math.random()*max);
                        let numberOfPocket;
                        // eslint-disable-next-line no-magic-numbers
                        prizeOne = 100*coef;
                        prizeTwo = 50*coef;
                        prizeThree=25*coef;
                        if(i==3){
                            numberOfPocket = prompt('Choose a roulette pocket number from 0 to'+max+'\nAttempts letf: '+i+'\nTotal prize:'+newPrize+'$\nPossible prize on current attempt: '+prizeOne+'$');
                        }
                        if(i==2){
                            numberOfPocket = prompt('Choose a roulette pocket number from 0 to'+max+'\nAttempts letf: '+i+'\nTotal prize:'+newPrize+'$\nPossible prize on current attempt: '+prizeTwo+'$');
                        }
                        if(i==1){
                            numberOfPocket = prompt('Choose a roulette pocket number from 0 to'+max+'\nAttempts letf: '+i+'\nTotal prize:'+newPrize+'$\nPossible prize on current attempt: '+prizeThree+'$');
                        }
                       
                        // eslint-disable-next-line eqeqeq
                        if (i==3 && randomNumber==numberOfPocket){
                            // eslint-disable-next-line no-magic-numbers
                            newPrize+=prizeOne;
                        }
                        // eslint-disable-next-line eqeqeq
                        if(i==2 && randomNumber==numberOfPocket){
                            // eslint-disable-next-line no-magic-numbers
                            newPrize+=prizeTwo;
                        }
                        // eslint-disable-next-line eqeqeq
                        if(i==1 && randomNumber==numberOfPocket){
                            // eslint-disable-next-line no-magic-numbers
                            newPrize+=prizeThree;
                        }
                    }
                }else{
                    alert('Thank you for your participation. Your prize is: $' + prize);
                    qa = confirm('Do you want to play again?');
                    // eslint-disable-next-line eqeqeq
                    if(qa == false){
                        break;
                    }else{
                        ag = true;
                    }
                }
                // eslint-disable-next-line eqeqeq
                if(qa != false){
                    qcr = confirm('Do u want to continue?');
                    // eslint-disable-next-line eqeqeq
                    if(qcr == true){
                        // eslint-disable-next-line no-magic-numbers
                        coef*=2;
                        // eslint-disable-next-line no-magic-numbers
                        max+=4;
                    }else { 
                        // eslint-disable-next-line no-magic-numbers
                        coef = 2;
                        // eslint-disable-next-line no-magic-numbers
                        max = 9;
                        qa = false;
                        break;
                    }
                }    
            // eslint-disable-next-line eqeqeq
            }while(qcr==true)
        }
    // eslint-disable-next-line eqeqeq
    }while(qa != false && qcr == false)
}