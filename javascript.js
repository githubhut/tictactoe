var contact = document.getElementById("contact info");
    contact.addEventListener('click', function run(){
    alert('bhupenderchauhan8055@gmail.com');
});

var about = document.getElementById("about");
    about.addEventListener('click', function run(){
    alert('Bhupender Chauhan And Anubroto Maitra');

});

let turn = 'X';
let info = document.querySelector(".info");
info.innerText = "turn for "+ turn;
let isgameover = false;
let sc1 = 0;
let sc2 = 0;
let rest = 0;

function rst(){
    let boxtexts = document.querySelectorAll('.boxtext');
    turn = "X";
    isgameover = false;
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
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
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + "Won";
            isgameover = true;
            // console.log(isgameover);
            // removeEventListener('click', e);
            if(boxtext[e[0]].innerText === "X" && rest === 0){
                document.querySelector("#score1").innerText = ++sc1;
                rest = 1;
                // isgameover = false;
                // setTimeout(reset, 300);
                // reset();

            }
            else if (boxtext[e[0]].innerText === "0" && rest === 0){
                document.querySelector("#score2").innerText = ++sc2;
                rest = 1;
                // setTimeout(reset, 300);
                // reset();
            }
            
        }
    })
}




const changeTurn = ()=>{
    // return turn === 'X' ? '0' : 'X';
    // if(turn === "Chutiya") turn = "Chutiya";
    if(isgameover) turn = "";
    else{

            if(turn === 'X') {
                turn = '0';
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

//logic hamara
// if(isgameover) boxtext.removeEventListener("click", element.e());

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    function e(){
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            checkwin();
            changeTurn();
            // element.removeEventListener();
            // if(isgameover){
            //     element.removeEventListener("click", e);

                // let reset = confirm("Reset the match");
                // if(reset){
                //     let boxtexts = document.querySelectorAll('.boxtext');
                //     turn = "X";
                //     isgameover = false;
                //     Array.from(boxtexts).forEach(element => {
                //         element.innerText = ""
                //     });
                // }
                // else{
                //     // turn = "Chutiya";
                //     let boxtexts = document.querySelectorAll('.boxtext');
                //     // turn = "X";
                //     isgameover = false;
                //     Array.from(boxtexts).forEach(element => {
                //         element.innerText = ""
                //     });
                // }
            // }
        }
    }
    element.addEventListener('click', e)
    if(isgameover) console.log("bhenkaloda");
    // if(isgameover === true)element.removeEventListener("click", e);
    
    
    
})

