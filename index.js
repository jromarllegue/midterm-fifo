let text = "";
console.log("hello");


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
    text = "sequence " + i + " name: ";
    sequencearray[i-1] = prompt(text);
    body.innerHTML += text + sequencearray[i-1] + "<br>";
}
body.innerHTML += "<br>";
console.log(pagearray);
