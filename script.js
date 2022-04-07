var text;
console.log(text);
const container =document.createElement("div");
container.setAttribute('class',"container");

const f = document.createElement("form");
f.setAttribute('method', "post");
f.setAttribute('action', "");

const heading = document.createElement("h1");
heading.innerHTML = "Search A Topic on YOUTUBE";

const i = document.createElement("input");
i.setAttribute('type', "text");
i.setAttribute('name', "username");
i.setAttribute('class',"input1")

const s = document.createElement("input");
s.setAttribute('type', "submit");
s.setAttribute('value', "Submit");
s.setAttribute('class',"submit-btn")

const imp = document.createElement("table");
imp.setAttribute('id',"important");
var row = imp.insertRow(0);
var cell1 = row.insertCell(0);
cell1.setAttribute("id","tableHeading");
var cell2 = row.insertCell(1);
cell2.setAttribute("id","tableHeading");
var cell3 = row.insertCell(2);
cell3.setAttribute("id","tableHeading");
var cell4 = row.insertCell(3);
cell4.setAttribute("id","tableHeading");
var cell5 = row.insertCell(4);
cell5.setAttribute("id","tableHeading");

cell1.innerHTML = "LINK"
cell2.innerHTML = "TITLE"
cell3.innerHTML = "CHANNEL NAME"
cell4.innerHTML = "Publish At"
cell5.innerHTML = "Thumbnail"

f.appendChild(heading);
f.appendChild(i);
f.appendChild(s);
// f.appendChild(imp);

container.appendChild(f);

document.body.appendChild(container);
document.body.appendChild(imp);

function onAddForm(e) {
    e.preventDefault();
    text = i.value;
    console.log(text);
    if(text === ""){
        alert("Please Enter Topic Before Submitting.");
        return false;
    }
    fetchingFromAPI();
}
f.addEventListener("submit", onAddForm);
