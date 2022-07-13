const words = [];
var index = 0;

document.getElementById("add").onclick = function() {
    var text = document.getElementById("input").value; 
    if (!(words.includes(text)) && text != "") {
        var li = "<li>" + text + "</li>";
        document.getElementById("list").innerHTML += li;
        document.getElementById("input").value = ""; 
        words[index] = text;
        +index;
    }
}

document.getElementById("Search").onclick = function() {
    var text = document.getElementById("input").value;
    if (words.indexOf(text) !== -1) {
        alert("Word exists!");
    } else {
        alert("Word does not exist!");
    }
}