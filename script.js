let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","green","purple"];       //to choose random indx--> btn[idx]

let started= false;
let level=0;
let h2= document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started = true;

       levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("gameFlash");    
    setTimeout(function(){
        btn.classList.remove("gameFlash")
    },300)
}

function userFlash(btn){
    btn.classList.add("userFlash");    
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },300)
}

function levelUp(){
    userSeq=[];                 //Major change to reset the userSequence
    level++;                            //1: lvl up after the game is started
    h2.innerText=`Level ${level}`       //2: levl update in h2 heading to the user
    
    let randIdx = (Math.floor(Math.random()*3));
    let randColor =  btns[randIdx];             //random btn choose
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);


    // console.log(randBtn);
    // console.log(randColor);
    // console.log(randIdx);

    gameFlash(randBtn);                        //3: repetition of falsh ---> in js make function of that repetition
}                                    
                                         

//
// 1. Start game
// 2. levelUp & innerTExt update to level 1
// 3. button flash to the user



//4. Adding Event Listener to the buttons to match that of Game sequence.

function checkAns(idx){
    // console.log("current level: ", level);
    // let idx= level-1;
    if(userSeq[idx]=== gameSeq[idx]){
        // console.log("Same Value");
        if(userSeq.length == gameSeq.length){
            // levelUp();
            setTimeout(levelUp,1000)
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press key to restart.`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },150)
        reset();
    }
    

}


function btnPress(){
    // console.log("Button was pressed");
  let btn=this;
  console.log(btn);
  userFlash(btn);
  userColor=btn.getAttribute("id");   //User color through it's id
//   console.log(userColor);
  userSeq.push(userColor);   // check here is this equal to game Sequence
  checkAns(userSeq.length-1 );
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[]
    level=0;
}

let Tap=document.querySelector(".Tap");
Tap.addEventListener("click",function(){
    started=true;
    levelUp();
})
