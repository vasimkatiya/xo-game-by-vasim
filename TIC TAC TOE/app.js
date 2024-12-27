let boxes = document.querySelectorAll(".box");
let rbtn = document.querySelector("#rbtn");
let newBtn = document.querySelector("#newbtn");
let woncon = document.querySelector("won-con");
let msg = document.querySelector(".msg")

let turn = true;//player-x or player-y

let reset = () => {
    turn = true;
    enableboxes();
    msg.classList.add("hide")

}


const winParttan = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [2, 4, 6],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked!")
        if (turn) {
            box.innerText = "O";
            turn = false;
        }
        else {
            box.innerText = "X"
            turn = true;
        }
        box.disabled = true;


        checkWinner();
    })
})
const disabled = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}

const enableboxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `congratulation ! winner is ${winner}`;
    msg.classList.remove("hide");
    disabled();
}

const checkWinner = () => {
    for (let pattarn of winParttan) {
        console.log(pattarn)
        let pos1 = boxes[pattarn[0]].innerText;
        let pos2 = boxes[pattarn[1]].innerText;
        let pos3 = boxes[pattarn[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 == pos3) {
                console.log("winner is defined");
                showWinner(pos1);
            }
        }
    }
}

rbtn.addEventListener("click", () => {
    reset();
})
newBtn.addEventListener("click", () => {
    reset();

})