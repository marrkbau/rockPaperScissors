let elements = document.querySelectorAll(".btn");



elements.forEach( (btn) => {
    btn.addEventListener('click', (event) => {

        

        let computerChoice = decideFate();

        if(event.target.id === 'scissors'){
            if(computerChoice === 'scissors'){
                alert(`You chose ${event.target.id}, the computer chose ${computerChoice} it's a tie.`)
            }
            if(computerChoice === 'paper'){
                alert(`You chose ${event.target.id}, the computer chose ${computerChoice} you win!`)
            }
            if(computerChoice === 'rock'){
                alert(`You chose ${event.target.id}, the computer chose ${computerChoice} you lose.`)
            }
        }
        if(event.target.id === 'rock'){
            if(computerChoice === 'rock'){
                alert(`You chose ${event.target.id}, the computer chose ${computerChoice} it's a tie.`)
            }
            if(computerChoice === 'scissors'){
                alert(`You chose ${event.target.id}, the computer chose ${computerChoice} you win!`)
            }
            if(computerChoice === 'paper'){
                alert(`You chose ${event.target.id}, the computer chose ${computerChoice} you lose.`)
            }
        }
        if(event.target.id === 'paper'){
            if(computerChoice === 'paper'){
                alert(`You chose ${event.target.id}, the computer chose ${computerChoice} it's a tie.`)
            }
            if(computerChoice === 'rock'){
                alert(`You chose ${event.target.id}, the computer chose ${computerChoice} you win!`)
            }
            if(computerChoice === 'scissors'){
                alert(`You chose ${event.target.id}, the computer chose ${computerChoice} you lose.`)
            }
        }
        // const resultParagraph = document.createElement('p');
        // resultParagraph.textContent = 'Computer Choice: ' + computerChoice;
        // document.body.appendChild(resultParagraph);
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
