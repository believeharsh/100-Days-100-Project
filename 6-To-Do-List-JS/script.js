
const input_box = document.getElementById("input-box");
const list_container = document.getElementById("list-container");
function addtask() {
    if (input_box.value === '') {
        alert("You Must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input_box.value = '';
    savedata();



}

list_container.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

function savedata() {
    localStorage.setItem("data", list_container.innerHTML)
}
function showTask() {
    list_container.innerHTML = localStorage.getItem("data");
}
showTask();

