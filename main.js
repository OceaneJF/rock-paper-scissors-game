let scoreP = 0;
let scoreC = 0;

const cards = document.querySelectorAll(".card img");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const message = document.querySelector(".scores>p")

function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

cards.forEach(card => {
    card.addEventListener('click', (event) => {
        let choice = event.target.id;
        const randomNumber = getRandomNumber();
        console.log(randomNumber);
        if (choice != randomNumber) {
            console.log(isNaN(choice));
            switch (choice) {
                case "1":
                    console.log("fgs");
                    if (randomNumber == 2) {
                        scoreC += 1;
                        console.log(scoreC);
                        message.textContent = "You lose, paper beats rock"
                    } else {
                        scoreP += 1;
                        console.log(scoreP);
                        message.textContent = "You win, rock beats scissors"
                    }
                    break;
                case "2":
                    if (randomNumber == 3) {
                        scoreC += 1;
                        message.textContent = "You lose, scissors beats paper"
                    } else {
                        scoreP += 1;
                        message.textContent = "You win, paper beats rock"
                    }
                    break;
                case "3":
                    if (randomNumber == 1) {
                        scoreC += 1;
                        message.textContent = "You lose, rock beats scissors"
                    } else {
                        scoreP += 1;
                        message.textContent = "You win, scissors beats paper"
                    }
                    break;
            }

        } else {
            message.textContent = "It's a tie!"
        }
        player.textContent = "" + scoreP;
        computer.textContent = "" + scoreC;

    });
});
