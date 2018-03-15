
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var cls = document.getElementsByClassName("close");
for (var i = 0; i < cls.length; i++) {
    cls[i].addEventListener("click", func);
}
function func() {
    p = this.parentNode;
    p.parentNode.removeChild(p);
}
var li = document.getElementsByTagName("li");
for (var i = 0; i < li.length; i++) {
    li[i].onclick = function () {
        this.classList.toggle('checked');
    }
}
var btn = document.getElementsByClassName("addBtn");
btn[0].onclick = function () {

    createLi();
}
function createLi() {
    var li = document.createElement("li");
    var input = document.getElementById("myInput").value;
    var node = document.createTextNode(input);
    if (input === "") alert("invalid input");
    else {
        li.appendChild(node);
        var ul = document.getElementById("myUL");
        ul.appendChild(li);
    }
    document.getElementById("myInput").value = "";


    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    var cls = document.getElementsByClassName("close");
    for (var i = 0; i < cls.length; i++) {
        cls[i].addEventListener("click", func);
    }
    li.onclick = function () {
        this.classList.toggle('checked');
    }
    
}




