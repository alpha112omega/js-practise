var user_score = 0;
var computer_score = 0;
let choices = ["rock", "scissors", "papper"]
function gami() {
    for (i = 1; i < 6; i++) {
        let user = window.prompt(`enter only rock,papper,scissors round${i}`, choices[Math.floor(Math.random() * 3)]).toLowerCase();
        let computer_choci = choices[Math.floor(Math.random() * 3)].toLowerCase()
        play(user, computer_choci)
        alert(`hello ${user_score},${computer_score}`)
    }
}
function play(user, computer_choci) {
    if (user === computer_choci) {
        return (alert("it's a draw!"))
    }
    else if (user === "rock" && computer_choci === "scissors" || user === "scissors" && computer_choci === "papper" || user === "rock" && computer_choci === "papper") {
        return (alert("you win"),
            user_score += 1

        )

    }
    else if (user === "papper" && computer_choci === "scissors" || user === "scissors" && computer_choci === "rock" || user === "papper" && computer_choci === "rock") {
        return (alert("you loose!"),
            computer_score += 1
        )
    };

}

