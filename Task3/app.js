var ul = document.createElement('ul');
var li = document.createElement('li');
var span = document.createElement('span');
var button = document.createElement('button');
span.innerHTML = "Сделать задание #3 по web-программированию";
button.innerHTML = "Удалить";
button.id = "delete";
li.appendChild(span);
li.appendChild(button);
ul.appendChild(li);
document.getElementById("root").appendChild(ul);
var input = document.createElement('input');
input.id = "add_task_input";
var texts = document.createElement("button");
texts.id = "add_task";
texts.innerHTML = "Добавить";
document.getElementById("root").appendChild(input);
document.getElementById("root").appendChild(texts);
$('#delete').click(function() {
    li.remove(li);
});
$('#add_task').click(function (){
    var li = document.createElement("li");
    var span = document.createElement("span");
	var but = document.createElement("button");
    span.innerHTML = document.getElementById("add_task_input").value;   
    but.innerHTML = "Удалить";
    but.addEventListener("click", function() {
        li.remove(li);
    });
    li.appendChild(span);
    li.appendChild(but);
    ul.appendChild(li);
});