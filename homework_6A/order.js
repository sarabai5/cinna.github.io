var Rolls = [
    {
        id: 0,
        name: "Classic Roll",
        img: "asset/menu1.png",
        price: 3.25,
        count: 0,
        glazing: ""
    },
    {
        id: 1,
        name: "Honey Pecan Roll",
        img: "asset/menu2.png",
        price: 3.25,
        count: 0,
        glazing: ""

    },
    {
        id: 2,
        name: "Berry Roll",
        img: "asset/menu3.png",
        price: 3.25,
        count: 0,
        glazing: ""
    },
    {
        id: 3,
        name: "Double Chocolate Roll",
        img: "asset/menu4.png",
        price: 3.25,
        count: 0,
        glazing: ""
    },  
    {
        id: 4,
        name: "Gluten-free Classic Roll",
        img: "asset/menu5.png",
        price: 3.25,
        count: 0,
        glazing: ""
    },
    {
        id: 5,
        name: "Pumpkin Spice Roll",
        img: "asset/menu6.png",
        price: 3.25,
        count: 0,
        glazing: ""
    }
]



/* choose numbers */
function selectNum(index, num){
    console.log(`User select rollNum is ${num}`) 
    localStorage.setItem("boxSelect", JSON.stringify({
        index: index,
        num: num
    }))

    var list = document.getElementsByClassName("roll-selection-box");
    for(let i = 0; i < list.length; i++){
        let classVal = list[i].getAttribute("class") // "roll-selection-box"
        if(index == i){
            classVal = classVal.concat(" roll-selection-box--selected"); // "roll-selection-box" => "roll-selection-box roll-selection-box--selected"
        }else{
            classVal = classVal.replace(" roll-selection-box--selected", ""); // "roll-selection-box roll-selection-box--selected" => "roll-selection-box"
        }
        list[i].setAttribute("class", classVal)
    }
}

/* choose rolls */

let boxSelect = JSON.parse(localStorage.getItem("boxSelect")) 
/*
    boxSelect = {
        index: 1,
        num: 4
    }
*/

let restNum = boxSelect ? boxSelect.num : null

function countRoll(index, flag){
    let count = Rolls[index].count;
    if (restNum == 0 && flag ==1) return;
    if(count == 0 && flag == -1) return;

    Rolls[index].count = Rolls[index].count + flag;

    let inputs = document.getElementsByClassName("input-number");
    inputs[index].value = Rolls[index].count

    // Rolls[index].img
    if (flag == 1) {
        restNum--;

        box.innerHTML = box.innerHTML + `<div class="box-${boxSelect.index}-roll" type="${index}"><img class="box-roll-img" src="${Rolls[index].img}"></div>`

        // let imgDom = document.createElement("img");
        // imgDom.setAttribute("class", `box-${boxSelect.index}-roll`)
        // imgDom.setAttribute("type", index)
        // imgDom.src = Rolls[index].img;
        // box.appendChild(imgDom);
    } else {
        restNum++;

        let children = box.childNodes // get all rolls in box
        for (let i = 0; i < children.length; i++){ // begin: let i = 0  i < 
            if(children[i].getAttribute("type") == `${index}`){
                box.removeChild(children[i])
                break;
            }

        }
    }
    let progressDom = document.getElementsByClassName("task-undone")
    if (restNum == 0) {
        progressDom[0].style.backgroundColor = "#FFD433"
    } else {
        progressDom[0].style.backgroundColor = "#FFFFFF"
    }
}

/* choose glazing */
// var selected = document.getElementsByClassName("add-glazing-button");
function addGlazing(index) {
    let dom = document.getElementsByClassName("add-glazing-button")[index]
    dom.style.backgroundColor = "#FFE274"; 

    let content = document.getElementsByClassName("glazings")[index]
    if (content.style.display == "flex") {
      content.style.display = "none";
      dom.style.backgroundColor = "#FFFFFF"; 
    } else {
      content.style.display = "flex";
    }
     
}


function glazing(){
    let list = document.getElementsByClassName("glz");
    for(let i in list){
        list[i].onclick = () => {
            selectGlz(i)
        }
    }
}

/* 
let dict = {
    boxSelect: 1
}

let arr = [1,2,3]
arr[0]
*/

let box = null;

function onload(){
    box = document.getElementsByClassName("box")[boxSelect.index]
    box.style.display = "flex";

    glazing();
    onloadMenu();
}

function selectGlz(index){
    let id = Math.floor(index / 3);
    let dom = document.getElementsByClassName("glz")[index]
    let progressDom = document.getElementsByClassName("task-undone")

    Rolls[id].glazing = dom.textContent

    for(let i = id * 3; i < id * 3 + 3; i++){
        let temp = document.getElementsByClassName("glz")[i]
        temp.style.backgroundColor = "#FFFFFF"
    }
    dom.style.backgroundColor = "#FFE274"
    progressDom[1].style.backgroundColor = "#FFD433"
}

function addCart(){
    if (restNum == 0) {
        let num = localStorage.getItem("cartNum") || 0
        num++;
        let dom = document.getElementById("cart-num")
        dom.style.display = "flex";
        dom.textContent = num
        localStorage.setItem("cartNum", num)
        window.location.href = "menu.html"
    } else return;
}

function onloadMenu() {
    let num = localStorage.getItem("cartNum") || 0
    let dom = document.getElementById("cart-num")
    dom.textContent = num
    if (num > 0) {
        dom.style.display = "inline";
    } else {
        dom.style.display = "none";
    }
}

let showCart = false

function openCart(){
    let cartDom = document.getElementById("cart-button");
    let cart = document.getElementById("container");
    console.log("1:", cart.style.display)

    if (!showCart) {
        cart.style.display = "flex";
        cartDom.style.backgroundColor = "#FFE274";

        showCart = true
    } else {
        cart.style.display = "none";
        cartDom.style.backgroundColor = null;

        showCart = false

    }

}