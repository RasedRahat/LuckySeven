function play() {
    var startingBet = document.getElementById('starting-bet').value;
    if (startingBet[0] === '$') {
        startingBet = startingBet.replace('$', '');
    }
    startingBet = parseFloat(startingBet);
    if (isNaN(startingBet)) {
        alert('Please enter a valid number');
    } else if (startingBet <= 0) {
        alert('Please enter a positive value');
    } else {
        startingBet = Math.floor(startingBet * 100)/100;
        startGame(startingBet);
    }
}

function rollDice() {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    return dice1 + dice2;
}

function startGame(gameMoney) {
    var startingBet = gameMoney;
    var rolls = 0;
    var maxMoney = gameMoney;
    var rollsAtMaxMoney = 0;
    while (gameMoney > 0) {
        var total = rollDice();
        if (total === 7) {
            gameMoney += 4;
        } else {
            gameMoney--;
        }
        rolls++;
        if (gameMoney > maxMoney) {
            maxMoney = gameMoney;
            rollsAtMaxMoney = rolls;
        }
    }
    document.getElementById('result1').innerText = startingBet;
    document.getElementById('result2').innerText = rolls;
    document.getElementById('result3').innerText = maxMoney;
    document.getElementById('result4').innerText = rollsAtMaxMoney;
    document.getElementById('results-div').classList.remove('invisible');
}