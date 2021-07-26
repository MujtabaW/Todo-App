var a = document.getElementById('main')
var b = document.getElementById('inp')

var text = document.getElementById('inp')

function inp() {
    if (b.value == "") {
        alert("Opps! Sorry! first write the Todo in input!");

    } else {
    var newElement = document.createElement("P")
    newElement.setAttribute('class','para')
    var value = b.value
    text = document.createTextNode(value)
    newElement.appendChild(text)
    a.appendChild(newElement)


    var edit = document.createElement("BUTTON")
    var edit_text = "Edit"
    // var edittext = document.createTextNode("edit")
    edit_text = document.createTextNode(edit_text)
    edit.appendChild(edit_text)
    edit.setAttribute('onclick','editTodo(this)')
    a.appendChild(edit)
    edit.setAttribute('class', 'editBtn')
    b.value = " ";
    newElement.appendChild(edit)


    var deltbtn = document.createElement('BUTTON')
    var deltbtntext = document.createTextNode('delete')
    deltbtn.appendChild(deltbtntext)
    deltbtn.setAttribute('onclick','deleteTodo(this)')
    newElement.appendChild(deltbtn)
    deltbtn.setAttribute('class', 'deltBtn')
    alert("You Are Added Todo! success");

    }
}

function deleteTodo(e){
    console.log(e.parentNode)
    e.parentNode.remove()
    alert("Your Todo Delete Succesfully!");
}

function editTodo(e){
    console.log(e.parentNode.firstChild)
    e.parentNode.firstChild.nodeValue = prompt("Enter new Value",e.parentNode.firstChild.nodeValue)
    alert("Your Todo Edited Succesfully!");
}

function deleteAll(){
    a.innerHTML = ' '
    alert("Your All Todo Delete Succesfully!");

}









