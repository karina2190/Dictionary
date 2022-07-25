const words = [];
var index = 0;

document.getElementById("add").onclick = function() {
    document.getElementById("doesYourWordExist").innerHTML = "";
    var text = document.getElementById("input").value; 
    if (!(words.includes(text)) && text != "") {
        var li = "<li>" + text + "</li>";
        document.getElementById("list").innerHTML += li;
        document.getElementById("input").value = ""; 
        words[index] = text;
        ++index;
    }
}

document.getElementById("Search").onclick = function() {
    var text = document.getElementById("input").value;
    if (words.indexOf(text) !== -1) {
        document.getElementById("doesYourWordExist").innerHTML = 'This word already exists!';
    } else {
        document.getElementById("doesYourWordExist").innerHTML = 'This word does not exist!';
    }
}