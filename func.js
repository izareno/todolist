const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const dueDate = document.getElementById("dueDate");
const urgency = document.getElementById("urgency");
const importance = document.getElementById("importance");

// add color change depending on the value of urg and imp


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
        li.appendChild(urg);
        let imp = document.createElement("imp");
        imp.innerHTML = importance.value;
        li.appendChild(imp);
        let dd = document.createElement("dd");
        dd.innerHTML = dueDate.value;
        li.appendChild(dd);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

// add subtasks



// add celebration effect

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);