let form1 = document.querySelector("#form-1");
let form2 = document.querySelector("#form-2");
let ul = document.querySelector("ul");
let listItems = document.querySelector("li");
let textBox = document.querySelector("#textBlock");
let addButton = document.querySelector("#sub-add");
let removeButton = document.querySelector("#sub-remove-all");
let removeCompleted = document.querySelector("#sub-remove-1");
let liLine = document.querySelectorAll("#ul li")

form1.addEventListener('submit', function(event){
    event.preventDefault();

    // create new element
    let listItem = document.createElement("li");

    // set the text of the new element
    listItem.innerText = textBox.value;

    // add item to ul
    ul.appendChild(listItem);

    textBox.value = "";
})

for (let i = 0; i < liLine.length; i++)
    liLine[i].addEventListener('click', function(){
        if (liLine[i].style.textDecoration !== "line-through"){
            liLine[i].style.textDecoration = "line-through";
        } else {
            liLine[i].style.textDecoration = "";
        }
})

removeButton.addEventListener('submit', function(){
    listItems.remove();
})

removeCompleted.addEventListener('submit', function(){
    
})



