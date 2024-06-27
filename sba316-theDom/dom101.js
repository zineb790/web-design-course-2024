// linking variables
const form = document.getElementById("addForm");
const itemList = document.querySelector("#items");

//textContent
const title = document.getElementById("title1");
title.textContent = "create more items";

//style
title.style.color = "teal";
title.style.textTransform = "capitalize";

//setting attribute
myInput=document.getElementById("item")
myInput.setAttribute("placeHolder", "add items");

//looping
const items = document.getElementsByClassName("list-group-item");
for (let i = 0; i < items.length; i++){
         items[i].style.backgroundColor = "#eee";
}

//firstElementChild and lastElementChild
itemList.firstElementChild.style.fontWeight = "bold";
itemList.lastElementChild.style.color = "blue";

//form submit and delete events
form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);

//working on addItem function/////////////

function addItem(e) {
    e.preventDefault();
    
    //get input value
    const newItem = document.getElementById("item").value;

    //create a new li element
    const li = document.createElement("li");
    //add class
    li.className = "list-group-item";
    console.log(li);
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
     
    //create del button element
    const deleteBtn = document.createElement("button");
    //add classes to delete button
    deleteBtn.className = "btn-x";
    //append text node
    deleteBtn.appendChild(document.createTextNode("remove"));
    //append button to li
    li.appendChild(deleteBtn);

     //append li to list
    itemList.appendChild(li);
}

//reset when submitting form
function reset(){
     newItem= "";
};
form.addEventListener("submit", reset);


//remove item
function removeItem(e) {
    if (e.target.classList.contains("btn-x")) {
        if (confirm('are you sure?')) {
            const li = e.target.parentElement;
            itemList.removeChild(li);

       }
   }
}

