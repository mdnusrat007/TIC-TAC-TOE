let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno=true;
let count=0;    
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetgame=()=>{
    turno=true;
    count=0;
    enableboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turno){
            box.innerText="o";
            box.style.color="blue";
            turno=false;
        } else {
            box.innerText="x";
            box.style.color="red";
            turno=true;
        }
        box.disabled=true;
        count++;

        let isWinner = checkwinner();
    
        if (count === 9 && !isWinner) {
          gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disableboxes();
  };

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showwinner=(winner)=>{
    msg.innerText=`congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide")
    disableboxes();
};

const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!=""  && pos3val!=""){
            if (pos1val===pos2val && pos2val===pos3val){
                showwinner(pos1val);
                return true;
            }
        }
    }
};



resetbtn.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);

