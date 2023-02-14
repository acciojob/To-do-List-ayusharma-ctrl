//your code here
let btn=document.getElementById("addTodoBtn")
let input=document.getElementById("newTodoInput")
let todoList=document.getElementById("todoList")
btn.addEventListener("click",appendItem)
function appendItem(){
	if(input.value!=""){
	    let listItem = document.createElement("li")
	    listItem.innerText=input.value
        todoList.appendChild(listItem)
	}
    else alert("write something")
	input.value="";
}
