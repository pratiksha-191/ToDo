
var addBtn = document.getElementById('add-item');
var listContainer = document.getElementById('todo-list');





// console.log(newListElement);


addBtn.addEventListener('click' , function(){
    var newListElement = document.createElement('li');
    var listcount = listContainer.childElementCount + 1;
    var txtNode = document.createTextNode('List Item ' + listcount); 
    
    newListElement.appendChild(txtNode);
    newListElement.id = "item" + listcount;
    listContainer.appendChild(newListElement);
});
