let gameSeq = [];
let userSeq = [];

 
let btns = ['yellow', 'purple', 'red', 'green'];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
   if(started==false) {
   console.log("game started");
   started=true;

   levelUp();
}
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 400);
}


function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 200);
}

function levelUp() {
    userSeq = [];
    level++
    h2.innerText = `level ${level}`;
   

    //random btn choose
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randbtn);
}

function CheckAns(idx) {
    // console.log("curr level =", level);
    // let idx = level-1;
    if (userSeq[idx] == gameSeq[idx]) {
       if (userSeq.length == gameSeq.length) {
        levelUp();
        setTimeout(levelUp, 1000);
       }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level} </b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function() {
            document.querySelector("body").style.backgroundColor = "white"
        }, 150);
        reset();
    }
}

function btnPress () {
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   CheckAns(userSeq.length - 1);
}

// function btnPress() {
//     console.log(this);
//     let btn = this;
//     userColor(btn);
// }



let Allbtns = document.querySelectorAll(".btn")
for (btn of Allbtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}




