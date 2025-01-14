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
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

const checkwinner = () => {
    for (let i in winnerlist) {
        let idx1 = btns[winnerlist[i][0]].innerText;
        let idx2 = btns[winnerlist[i][1]].innerText;
        let idx3 = btns[winnerlist[i][2]].innerText;
        if (idx1 != "" && idx2 != "" && idx3 != "") {
            if (idx1 == idx2 && idx2 == idx3) {
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

