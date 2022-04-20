let number = 0;

function increment(){
     document.getElementById("number").innerHTML = ++number;
}

function decrement(){
     document.getElementById("number").innerHTML = --number;
}

function reset(){
     number = 0
     document.getElementById("number").innerHTML = number;
}
