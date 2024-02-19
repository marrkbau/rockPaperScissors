const buttons = document.querySelectorAll(".btn");
const wins = document.querySelector(".wins");
const loses = document.querySelector(".loses");
const ties = document.querySelector(".ties");
const answertxt = document.querySelector(".answertxt");
const answer = document.querySelector(".answer"); 

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
                numTiesAct++;
                answertxt.textContent = "it's a tie! The computer chose:";
                answer.textContent = "✌️";
            }
            if(computerChoice === 'paper'){
                numWinsAct++;
                answertxt.textContent = "You win! The computer chose:";
                answer.textContent = "✋";
            }   
            if(computerChoice === 'rock'){
                numLosesAct++; 
                answertxt.textContent = "You lose! The computer chose:";
                answer.textContent = "✊";
            }
        }
        if(event.target.id === 'rock'){
            if(computerChoice === 'rock'){
                numTiesAct++;
                answertxt.textContent = "it's a tie! The computer chose:";
                answer.textContent = "✊";
            }
            if(computerChoice === 'scissors'){  
                numWinsAct++;
                answertxt.textContent = "You win! The computer chose:";
                answer.textContent = "✌️";
                
            }
            if(computerChoice === 'paper'){
                numLosesAct++;
                answertxt.textContent = "You lose! The computer chose:";
                answer.textContent = "✋";
            }
        }
        if(event.target.id === 'paper'){
            if(computerChoice === 'paper'){
                numTiesAct++;
                answertxt.textContent = "it's a tie! The computer chose:";
                answer.textContent = "✋";
                
            }
            if(computerChoice === 'rock'){

                numWinsAct++;
                answertxt.textContent = "You win! The computer chose:";
                answer.textContent = "✊";
             
            }
            if(computerChoice === 'scissors'){
                numLosesAct++;
                answertxt.textContent = "You lose! The computer chose:";
                answer.textContent = "✌️";
               
            }

           
        }

        if (answertxt.hasAttribute("hidden")) {
            answertxt.removeAttribute("hidden");
        }
        if(answer.hasAttribute("hidden")){
            answer.removeAttribute("hidden");
        }
        // const resultParagraph = document.createElement('p');
        // resultParagraph.textContent = 'Computer Choice: ' + computerChoice;
        // document.body.appendChild(resultParagraph);

        wins.textContent = numWinsAct.toString();
        loses.textContent = numLosesAct.toString();
        ties.textContent = numTiesAct.toString();
        setTimeout(hideItms, 3000);
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

const hideItms = () => {
    answer.setAttribute("hidden", "true");
    answertxt.setAttribute("hidden", "true");
}

