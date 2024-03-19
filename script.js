let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset");
let msg=document.querySelector(".msg");
let count=0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  let turnO=false;

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("clicked");
        if(turnO){
            turnO=false;
            box.innerText="O";
        }else{
            turnO=true;
            box.innerText="X";
        }
        box.disabled=true;
        count++;

        let isWinner = checkWinner();
        if(!checkWinner){
            disablebox();
        };

        if (count === 9 && !iskWinner) {
          gamedraw();
        };
});
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;

  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          console.log("Winner is---", pos1Val);
          showWinner(pos1Val);
          return true;
        }
      }
    }
    
};
  
const showWinner= (winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msg.classList.remove("hide");
}

const disablebox=()=>{
    for(let i in boxes){
        i.disabled=true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };

  const gamedraw=()=>{
    msg.innerText="Game was a draw";
    disablebox();
    msg.classList.remove(".hide");
    console.log("Draw");
  }

  const resetgame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msg.classList.add("hide");
  };

reset.addEventListener("click", resetgame);
