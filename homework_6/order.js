var Rolls = localStorage.getItem("Rolls");

Rolls = Rolls ? JSON.parse(Rolls) : [
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

/* choose rolls */

let boxSelect = JSON.parse(localStorage.getItem("boxSelect")) 
boxSelect = boxSelect ? JSON.parse(localStorage.getItem("boxSelect"))  : {
    index: 0,
    num: 1
}
/*
    boxSelect = {
        index: 1,
        num: 4
    }
*/


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

let restNum = boxSelect ? boxSelect.num : null

function countRoll(index, flag){
    let count = Rolls[index].count;
    if (restNum == 0 && flag ==1) return;
    if(count == 0 && flag == -1) return;

    Rolls[index].count = Rolls[index].count + flag;

    let inputs = document.getElementsByClassName("input-number");
    inputs[index].value = Rolls[index].count

    if (flag == 1) {
        restNum--;

        box.innerHTML = box.innerHTML + `<div class="box-${boxSelect.index}-roll" type="${index}"><img class="box-roll-img" src="${Rolls[index].img}"></div>`
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

    localStorage.setItem("Rolls", JSON.stringify(Rolls))
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

    localStorage.setItem("Rolls", JSON.stringify(Rolls))
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

    initCart()
}

let showCart = false

function openCart(){
    let cartDom = document.getElementById("cart-button");
    let cart = document.getElementById("container");

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


// {
//     id: 0,
//     name: "Classic Roll",
//     img: "asset/menu1.png",
//     price: 3.25,
//     count: 0,
//     glazing: ""
// },


function initCart(){
    for(let i=0; i<Rolls.length; i++){
        let roll = Rolls[i]
        if (roll.count > 0){
            addRollToCart(roll)
        }
    }

    document.getElementById("boxType").innerText = `Box of ${boxSelect.num}`
    document.getElementById("price").innerText = `Total: $${3.25 * boxSelect.num}`
}

function addRollToCart(item){
    let cart = document.getElementById("cart");
    cart.innerHTML += `<li class="clearfix">
    <img class="cart-item-img" src="${item.img}"/>
    <div class="cart-text">
      <div class="li-top">
        <div class="top-l">
          <span class="item-name">${item.name}</span>
          <span class="glazing-name">${item.glazing}</span>
        </div>
        <span class="item-quantity">x ${item.count}</span>
      </div>

      <div class="li-bottom">
        <span class="item-price">$${item.price}</span>
      </div>
    </div>
  </li>`
}

function removeRolls(){
    document.getElementById("cart").innerHTML = "";
    localStorage.removeItem("Rolls")
    localStorage.removeItem("cartNum")

    document.getElementById("cart-num").style.display = "none"


    document.getElementById("boxType").innerText = `Box of 0`
    document.getElementById("price").innerText = `Total: $0`
}