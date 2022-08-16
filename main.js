let form1 = document.querySelector("#form-1");
let ul = document.querySelector("ul");
let textBox = document.querySelector("#textBlock");
let addButton = document.querySelector("#sub-add");
let removeButton = document.querySelector("#sub-remove-all");
let removeCompleted = document.querySelector("#sub-remove-1");

form1.addEventListener('submit', function(event){
    event.preventDefault();

    let listItem = document.createElement("li");

    // set the text of the new element
    listItem.innerText = textBox.value;


    // let deleteButton = document.createElement("button");
    // deleteButton.innerText = "Delete";

    // deleteButton.addEventListener('click', function(){
    //     listItem.remove();
    // })

    // listItem.appendChild(deleteButton)

    // let editButton = document.createElement("button");
    // editButton.innerText = "Edit";

    // editButton.addEventListener('click', function(){
    //     listItem.remove();
    // })

    // listItem.appendChild(editButton)

    // add item to ul
    ul.appendChild(listItem);

    textBox.value = "";
})

removeButton.addEventListener('click', function(){
    let theList = document.querySelectorAll("ul li");
    theList.remove();
})

// removeCompleted.addEventListener('click', function(){
//     let listAll = document.querySelectorAll("ul li");
//     if (listAll.length !== 0){
//         for (let item of listAll){
//             if (item.style.textDecoration === "line-through"){
//                 item.remove();
//             }
//         }
//     }
// })



