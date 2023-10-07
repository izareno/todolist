const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const dueDate = document.getElementById("dueDate");
const urgency = document.getElementById("urgency");
const importance = document.getElementById("importance");


function addTask(){
    if(inputBox.value === ''){
        alert("Enter text");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let urg = document.createElement("urg");
        urg.innerHTML = urgency.value;
        var urgy=document.getElementById("urg");
        if (urg.innerHTML === "urgent") {
            urg.style.backgroundColor="red";
        }
        else {urg.style.backgroundColor="green";}
        li.appendChild(urg);
        let imp = document.createElement("imp");
        imp.innerHTML = importance.value;
        var impo=document.getElementById("imp");
        if (imp.innerHTML === "important") {
            imp.style.backgroundColor="red";
        }
        else {imp.style.backgroundColor="green";}
        li.appendChild(imp);
        let dd = document.createElement("dd");
        dd.innerHTML = dueDate.value;
        li.appendChild(dd);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    dueDate.value = "";
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        if(e.target.className == "checked") {
            alert("Woo!");
        }
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);