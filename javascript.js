var contact = document.getElementById("contact info");
    contact.addEventListener('click', function run(){
    alert('bhupenderchauhan8055@gmail.com anubroto3737@gmail.com');
});

var about = document.getElementById("about");
    about.addEventListener('click', function run(){
    alert('Bhupender Chauhan And Anubroto Maitra');

});

let turn = 'X';
let info = document.querySelector(".info");
info.innerText = "Turn for "+ turn;
let isgameover = false;
let sc1 = 0;
let sc2 = 0;
let rest = 0;
let btn_sound = new Audio("button.wav");
let rst_btn = new Audio("rst_button.mp3");

function rst(){
    rst_btn.play();
    let boxtexts = document.querySelectorAll('.boxtext');
    turn = "X";
    isgameover = false;
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
        
    });
    let box = document.querySelectorAll('.box');
    Array.from(box).forEach(e =>{
        e.style.background = "#3b6670";
    })
    info.innerText = "Turn for " + turn;
    rest = 0;
}

let checkwin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]
    win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText === boxtext[e[2]].innerText) && boxtext[e[0]].innerText !== ""){
            document.querySelector(".info").innerText = "!! "+boxtext[e[0]].innerText + " Won !!";
            isgameover = true;

            //changing box and boxtext colour upon win
            let box = document.getElementsByClassName("box");
            box[e[0]].style.background = '#db6c0f';
            box[e[1]].style.background = '#db6c0f';
            box[e[2]].style.background = '#db6c0f';

            if(boxtext[e[0]].innerText === "X" && rest === 0){
                document.querySelector("#score1").innerText = ++sc1;
                rest = 1;

            }
            else if (boxtext[e[0]].innerText === "O" && rest === 0){
                document.querySelector("#score2").innerText = ++sc2;
                rest = 1;
            }
            
        }
    })
}

let draw = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let box = document.getElementsByClassName("box");
    let everybox = [0,1,2,3,4,5,6,7,8];
    let count = 0;
    everybox.forEach(e =>{
        if(boxtext[e].innerText === "X" || boxtext[e].innerText === "O" && !isgameover) count++;
    })
    if(count === 9) {
        document.querySelector(".info").innerText = "!! Draw !!";
        everybox.forEach(e =>{
            box[e].style.background = 'gray';
        })
        // box[0].style.background = '#db6c0f';
    }
}




const changeTurn = ()=>{
    if(isgameover) turn = "";
    else{

            if(turn === 'X') {
                turn = 'O';
                info.innerText = "Turn for " + turn;
            }
            else {
                turn = 'X';
                info.innerText = "Turn for " + turn;
            }
    }
}


rbtn.addEventListener("click", rst);
newg.addEventListener("click",()=>{
    rst();
    sc1 = 0;
    sc2 = 0;
    document.querySelector("#score2").innerText = "";
    document.querySelector("#score1").innerText = "";
})



let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    function e(){
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            if(!isgameover)btn_sound.play();
            checkwin();
            changeTurn();
            draw();
            
        }
    }
    element.addEventListener('click', e);
    
})

