// const inputBox = document.getElementById("input-box");
// const listcontainer = document.getElementById("list-container");

// function AddTask(){
//     if(inputBox.value ===''){
//         alert("you must write something")
//     }
//     else{
//         let li=document.createElement("li");
//         li.innerHTML=inputBox.value;
//         listcontainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML="\u00d7";
//         li.appendChild(span); 
//     }
//     inputBox.value='';
// } 
// listcontainer.addEventListener("click",function(e){
//     if(e.target.tagName==="LI"){
//         e.target.classList.toggle("checked");
//     }
//     else if(e.target.tagName==="span"){
//         e.target.parentElement.remove();
//     }
// },false);









const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something.");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value.trim();
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.textContent = "\u00d7"; 
        li.appendChild(span);

        inputBox.value = ''; 
        saveData();
    }
}

// listContainer.addEventListener("click", function (e) {
//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle("checked");
//     } else if (e.target.tagName === "SPAN") {
//         e.target.parentElement.remove();
//         saveData();
//     }
// }),false;

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
