let rounds5 = document.getElementById('rounds5_input');
let rounds10 = document.getElementById('rounds10_input');
let rounds15 = document.getElementById('rounds15_input');
let rounds20 = document.getElementById('rounds20_input');
let stone = document.getElementById('stone_input');
let scissor = document.getElementById('scissor_input');
let paper = document.getElementById('paper_input');
let echse = document.getElementById('echse_input');
let spock = document.getElementById('spock_input');
let resultHuman = 0;
let resultComputer = 0;
let resultHumanInput = document.getElementById('resultHuman_input');
let resultComputerInput = document.getElementById('resultComputer_input');
let gameRounds = 0;

//wenn man sich eine Runde aussucht, kommt diese Anzahl in der Konsole raus
let submit = (choice) => {
    //math.random(), eine random Zahl von 1-3 ausspucken
    let randomComputerChoice = Math.floor(Math.random() * 5);
    //Stein = 0, Schere = 1, Papier = 2, Echse = 3, Spock = 4
    if (choice == stone){
        switch(randomComputerChoice) {
            case 0:
                h3.innerHTML = "Stein vs Stein, es herrscht Gleichstand!";
                gameRounds += 1;
            break;
            case 1:
                resultHuman++;
                resultHumanInput.innerHTML = resultHuman;
                h3.innerHTML = "Stein gegen Schere. Du hast gewonnen!";
                gameRounds += 1;
            break;
            case 2:
                resultComputer++;
                resultComputerInput.innerHTML = resultComputer;
                h3.innerHTML = "Papier umwickelt Stein. Der Computer hat gewonnen!";
                gameRounds += 1;
            break;
            case 3:
                resultHuman++;
                resultHumanInput.innerHTML = resultHuman;
                h3.innerHTML = "Stein zerquetscht Echse. Du hast gewonnen!";
                gameRounds += 1;
            break;
            case 4:
                resultComputer++;
                resultComputerInput.innerHTML = resultComputer;
                h3.innerHTML = "Spock verdampft Stein. Der Computer hat gewonnen!";
                gameRounds += 1;
            break;
        }
    } else if (choice == scissor){
        switch(randomComputerChoice) {
            case 0:
                resultComputer++;
                resultComputerInput.innerHTML = resultComputer;
                h3.innerHTML = "Stein schlägt Schere. Der Computer hat gewonnen!";
                gameRounds += 1;
            break;
            case 1:
                h3.innerHTML = "Schere gegen Schere - Gleichstand!";
                gameRounds += 1;
            break;
            case 2:
                resultHuman++;
                resultHumanInput.innerHTML = resultHuman;
                h3.innerHTML = "Schere schneidet Papier. Du hast gewonnen!";
                gameRounds += 1;
            break;
            case 3:
                resultHuman++;
                resultHumanInput.innerHTML = resultHuman;
                h3.innerHTML = "Schere köpft Echse. Du hast gewonnen!";
                gameRounds += 1;
            break;
            case 4:
                resultComputer++;
                resultComputerInput.innerHTML = resultComputer;
                h3.innerHTML = "Spock zertrümmert Schere. Der Computer hat gewonnen!";
                gameRounds += 1;
            break;
        }
    } else if (choice == paper){
        switch(randomComputerChoice) {
            case 0:
                resultHuman++;
                resultHumanInput.innerHTML = resultHuman;
                h3.innerHTML = "Papier schlägt Stein. Du hast gewonnen!";
                gameRounds += 1;
            break;
            case 1:
                resultComputer++;
                resultComputerInput.innerHTML = resultComputer;
                h3.innerHTML = "Schere schneidet Papier. Der Computer hat gewonnen!";
                gameRounds += 1;
            break;
            case 2:
                h3.innerHTML = "Paper gegen Papier - Gleichstand!";
                gameRounds += 1;
            break;
            case 3:
                resultComputer++;
                resultComputerInput.innerHTML = resultComputer;
                h3.innerHTML = "Echse frisst Papier. Der Computer hat gewonnen!";
                gameRounds += 1;
            break;
            case 4:
                resultHuman++;
                resultHumanInput.innerHTML = resultHuman;
                h3.innerHTML = "Papier widerlegt Spock. Du hast gewonnen!";
                gameRounds += 1;
            break;
        }
    } else if (choice == echse){
        switch(randomComputerChoice) {
            case 0:
                resultComputer++;
                resultComputerInput.innerHTML = resultComputer;
                h3.innerHTML = "Stein zerquetscht Echse. Der Computer hat gewonnen!";
                gameRounds += 1;
            break;
            case 1:
                resultComputer++;
                resultComputerInput.innerHTML = resultComputer;
                h3.innerHTML = "Schere köpft Echse. Der Computer hat gewonnen!";
                gameRounds += 1;
            break;
            case 2:
                resultHuman++;
                resultHumanInput.innerHTML = resultHuman;
                h3.innerHTML = "Echse frisst Papier. Du hast gewonnen";
                gameRounds += 1;
            break;
            case 3:
                h3.innerHTML = "🦎 vs 🦎 - Es herrscht Gleichstand!";
                gameRounds += 1;
            break;
            case 4:
                resultHuman++;
                resultHumanInput.innerHTML = resultHuman;
                h3.innerHTML = "Echse vergiftet Spock. Du hast gewonnen!";
                gameRounds += 1;
            break;
        }
    } else if (choice == spock){
        switch(randomComputerChoice) {
            case 0:
                resultHuman++;
                resultHumanInput.innerHTML = resultHuman;
                h3.innerHTML = "Spock verdampft Stein. Du hast gewonnen!";
                gameRounds += 1;
            break;
            case 1:
                resultHuman++;
                resultHumanInput.innerHTML = resultHuman;
                h3.innerHTML = "Spock zertrümmert Schere. Du hast gewonnen!";
                gameRounds += 1;
            break;
            case 2:
                resultComputer++;
                resultComputerInput.innerHTML = resultComputer;
                h3.innerHTML = "Papier widerlegt Spock. Der Computer hat gewonnen!";
                gameRounds += 1;
            break;
            case 3:
                resultComputer++;
                resultComputerInput.innerHTML = resultComputer;
                h3.innerHTML = "Echse vergiftet Spock. Der Computer hat gewonnen!";
                gameRounds += 1;
            break;
            case 4:
                h3.innerHTML = "Spock gegen Spock 🖖🏼 Gleichstand!";
                gameRounds += 1;
            break;
        }
    }
}

//sobald RESTART geklickt wird, soll die Funktion ausgeführt werden, die die Results zurückstellen
let restart = () => {
    resultComputer = 0;
    resultComputerInput.innerHTML = resultComputer;
    resultHuman = 0;
    resultHumanInput.innerHTML = resultHuman;
    gameRounds = 0;
    h3.innerHTML = "";
}

let gameRound = () => {
    if (rounds5.checked) {
        if (gameRounds >= 5) {
            restart();
        }
    } if (rounds10.checked) {
        if (gameRounds >= 10) {
            restart();
        }
    } if (rounds15.checked) {
        if (gameRounds >= 15) {
            restart();
    } if (rounds20.checked) {
        if (gameRounds >= 20) {
            restart();
            }
        }
    }
}