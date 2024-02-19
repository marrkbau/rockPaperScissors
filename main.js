const buttons = document.querySelectorAll(".btn");
const wins = document.querySelector(".wins");
const loses = document.querySelector(".loses");
const ties = document.querySelector(".ties");

buttons.forEach( (btn) => {
    btn.addEventListener('click', (event) => {

        
        let txtWinsAct = wins.textContent;
        let txtLosesAct = loses.textContent;
        let txtTiesAct = ties.textContent;
        let numWinsAct = parseInt(txtWinsAct);
        let numLosesAct = parseInt(txtLosesAct);
        let numTiesAct = parseInt(txtTiesAct);

        let computerChoice = decideFate();

        if(event.target.id === 'scissors'){
            if(computerChoice === 'scissors'){
                alert(`You chose ${event.target.id}, the computer chose ${computerChoice} it's a tie.`)
                numTiesAct++;
            }
            if(computerChoice === 'paper'){
                alert(`You chose ${event.target.id}, the computer chose ${computerChoice} you win!`)
                numWinsAct++;
            }   
            if(computerChoice === 'rock'){
                alert(`You chose ${event.target.id}, the computer chose ${computerChoice} you lose.`)
                numLosesAct++;
            }
        }
        if(event.target.id === 'rock'){
            if(computerChoice === 'rock'){
                numTiesAct++;
                alert(`You chose ${event.target.id}, the computer chose ${computerChoice} it's a tie.`)
            }
            if(computerChoice === 'scissors'){
                alert(`You chose ${event.target.id}, the computer chose ${computerChoice} you win!`)
                numWinsAct++;
            }
            if(computerChoice === 'paper'){
                alert(`You chose ${event.target.id}, the computer chose ${computerChoice} you lose.`)
                numLosesAct++;
            }
        }
        if(event.target.id === 'paper'){
            if(computerChoice === 'paper'){
                numTiesAct++;
                alert(`You chose ${event.target.id}, the computer chose ${computerChoice} it's a tie.`)
            }
            if(computerChoice === 'rock'){
                alert(`You chose ${event.target.id}, the computer chose ${computerChoice} you win!`)
                numWinsAct++;
            }
            if(computerChoice === 'scissors'){
                alert(`You chose ${event.target.id}, the computer chose ${computerChoice} you lose.`)
                numLosesAct++;
            }

           
        }
        // const resultParagraph = document.createElement('p');
        // resultParagraph.textContent = 'Computer Choice: ' + computerChoice;
        // document.body.appendChild(resultParagraph);

        wins.textContent = numWinsAct.toString();
        loses.textContent = numLosesAct.toString();
        ties.textContent = numTiesAct.toString();
        })
})

const decideFate = () => {
    let computerChoice = '';
    let randomNumber = Math.random();
    if(randomNumber >= 0 && randomNumber < 1/3)
        computerChoice = 'rock';
    else if(randomNumber >= 1/3 && randomNumber < 2/3)
        computerChoice = 'paper'
    else if(randomNumber >= 2/3)
        computerChoice = 'scissors'

    return computerChoice;
}
