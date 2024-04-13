let text = "";

text = "How many page? "
let page = Number(prompt(text));
body.innerHTML += text + page + "<br>";
console.log(page);

let pagearray = [];
for (let i = 1; i <= page; i++) {
    text = "Page " + i + " name: ";
    pagearray[i-1] = prompt(text);
    body.innerHTML += text + pagearray[i-1] + "<br>";
}
body.innerHTML += "<br>";
console.log(pagearray);

text = "How many sequence? "
let sequence = Number(prompt(text));
body.innerHTML += text + sequence + "<br>";
console.log(sequence);

let sequencearray = [];
for (let i = 1; i <= sequence; i++) {
    text = "Sequence " + i + " name: ";
    sequencearray[i-1] = prompt(text);
    body.innerHTML += text + sequencearray[i-1] + "<br>";
}
body.innerHTML += "<br>";
console.log(sequencearray);

text = "How many frames? "
let frame = Number(prompt(text));
body.innerHTML += text + frame + "<br><br>";
console.log(frame);

body.innerHTML += "<table id='table'></table>";
let table = document.getElementById("table");

table.innerHTML +=  "<tr id='rowHead'></tr>";
let rowHead = document.getElementById("rowHead");

rowHead.innerHTML += "<th> </th>";
for (let i = 0; i < sequencearray.length; i++) {
    rowHead.innerHTML += "<th>" + sequencearray[i] + "</th>";
}

for (let i = 1; i <= frame; i++) {
    table.innerHTML +=  "<tr id='f" + i +"'>" + 
                            "<th> F"+ i +"</th>" + 
                        "</tr>";
}
