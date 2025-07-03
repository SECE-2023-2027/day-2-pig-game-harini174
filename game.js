//1.Get all the nodes from html
const againBtn = document.querySelector(".again-btn")
const num = document.querySelector(".number")
const guess = document.querySelector(".guess")
const checkBtn = document.querySelector(".check")
const message = document.querySelector(".message")
const score = document.querySelector(".score")
const highscore = document.querySelector(".highscore")

//2.Generate a random Number and score
let random = Math.trunc(Math.random()*20)+1;
let scores = 20;


//3.checkButton Functionality
const checkFunc = ()=>{
      const guesss = Number(guess.value);
      
      //3.1 Check User has entered a number or not
      if(!guesss){
        message.textContent="No Value Entered";
      }

      //3.2 Check if random and guess value are equal
      if(guesss===random){
        message.textContent="You won !!!";
        num.textContent = guesss;
        document.querySelector("body").style.backgroundColor="green";
        highscore.textContent=scores;
      }

      //3.3 Check if guess is smaller than random
      if(guesss < random){
        message.textContent="Too Low";
        scores-=1;
        score.textContent = scores;
      }

      if(guesss > random){
        message.textContent="Too large";
        scores-=1;
        score.textContent=scores;
      }

}

checkBtn.addEventListener("click",checkFunc);

//Again Button Functionality
const againFunc = ()=>{
    document.querySelector("body").style.backgroundColor="black";
    message.textContent="Start Guessing ...";
    scores = 20;
    score.textContent=scores;
    guess.value="";
}

againBtn.addEventListener("click",againFunc)