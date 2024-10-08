let userScore = 0;
let compScore = 0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice  = () => {
    const options =["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame =()=>{
    msg.innerText ="Game was  darw. play again.";
    msg.style.backgroundColor ="#081b31";
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++
        userScorePara.innerText = userScore;
        msg.innerText =`you win!  your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        compScore++
        compScorePara.innerText =compScore;
        msg.innerText = `you lose. ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor ="red";
    }
}
const playGame = (userChoice) =>{
    console.log("user choice=", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }else{
        let useWin =true;
        if(userChoice ==="rock"){
          //scissors,paper
          userWin =compChoice ==="paper"? false:true;
        } else if (userChoice==="paper"){
            //rock,scissors
             useWin=compChoice==="scisors"? false:true;
        }else{
            //rock,paper
            compChoice ==="rock"? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice)=>{
    console.log(choice);
    choice,addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});

