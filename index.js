//Counter for number of attacks
let attackCounter = 0;

//Counter for number of special attacks
let specialAttackCounter = 0;

function attack() 
{
    //Increase no. of attacks
    attackCounter++;

    //Get the bar of the monster's health
    const bar1 = document.getElementById("bar1");
    
    //Get its computed style
    const monsterHealth = getComputedStyle(bar1);

    //Get  its width, parse it to float since getPropertyValue() returns a string
    const width = parseInt(monsterHealth.getPropertyValue('--width'));

    //Randomly decreases monster's health by 2 to 22
    bar1.style.setProperty('--width', width- parseInt((0.1+Math.random())*20));

    //Get the bar of user's health and do the same as for the monster
    const bar2 = document.getElementById("bar2");
    const userHealth= getComputedStyle(bar2);
    const width2 = parseInt(userHealth.getPropertyValue('--width'));
    bar2.style.setProperty('--width', width2- parseInt((0.1+Math.random())*20));
}

function specialAttack() 
{   
    
    if(attackCounter >=2 && specialAttackCounter < 2)
    {   
        //Decrease monster's health
        const bar1 = document.getElementById("bar1");
        const monsterHealth= getComputedStyle(bar1);
        const width = parseFloat(monsterHealth.getPropertyValue('--width'));
        
        //Randomly decreases monster's health by 20 to 40
        bar1.style.setProperty('--width', width- parseInt((1+Math.random())*20));

        specialAttackCounter++;
    }
}

function heal()
{
    if(attackCounter >= 4) {
        const bar2 = document.getElementById("bar2");
        const userHealth= getComputedStyle(bar2);
        const width2 = parseFloat(userHealth.getPropertyValue('--width'));
        bar2.style.setProperty('--width', width2 + parseInt((0.1+Math.random())*20));
    }
}

function giveUp() 
{
    
}

function lossOrWin()
{   
    
    if (parseInt(userHealth.getPropertyValue('--width')) == 0 )
    {
    }

    if (width2 == userHealth || width2 < 0 )
    {
    }
}

lossOrWin();
