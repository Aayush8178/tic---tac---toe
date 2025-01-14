let btns = document.querySelectorAll(".box");
let winnertext = document.querySelector(".winnertxt");
let newgame = document.querySelector(".newgame");
let reset = document.querySelector(".reset");
let kata = true;

btns.forEach((box) => {
    box.addEventListener("click", () => {
        if (kata) {
            box.innerText = "X";
            kata = false;
        }
        else {
            box.innerText = "O";
            kata = true;
        }
        box.disabled = true;
        checkwinner();
        checkdraw() ;
    });
})

const winnerlist = [
    [0, 1, 2,3,4], [5,6,7,8,9], [10,11,12,13,14],
    [15,16,17,18,19], [20,21,22,23,24],
     [0,5,10,15,20],[1,6,11,16,21] , [2,7,12,17,22] ,[3,8,13,18,23], [4,9,14,19,24] , 
    [0, 6, 12,18,24] , [4,8,12,16,20]
]

const checkwinner = () => {
    for (let i in winnerlist) {
        let idx1 = btns[winnerlist[i][0]].innerText;
        let idx2 = btns[winnerlist[i][1]].innerText;
        let idx3 = btns[winnerlist[i][2]].innerText;
        let idx4  = btns[winnerlist[i][3]].innerText;
        let idx5  = btns[winnerlist[i][4]].innerText;
        if (idx1 != "" && idx2 != "" && idx3 != "" && idx4 !="" && idx5!=="") {
            if (idx1 == idx2 && idx2 == idx3 && idx3==idx4 && idx4==idx5) {
                winnertext.style.display = "block";
                newgame.style.display = "block";
                
                winnertext.innerText = idx1 + " IS THE WINNER!!!";
                btns.forEach((box) =>{
                    box.disabled = true;

                })
            }           
        }
    }
}

const checkdraw = () =>{
    let flag = true ;
    for (let i in btns) {
        if(btns[i].innerText==""){
            flag = false ;
        }
    }
    if(flag){
        winnertext.style.display = "block";
        winnertext.innerText = "GAME IS DRAW..";
        newgame.style.display = "block";
    }

}

reset.addEventListener("click", () => {
    btns.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
    kata = true;
    winnertext.style.display = "none";
    newgame.style.display = "none";
})

newgame.addEventListener("click", () => {
    btns.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
    kata = true;
    winnertext.style.display = "none";
    newgame.style.display = "none";
})

