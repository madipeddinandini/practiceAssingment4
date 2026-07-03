// Task 1: Keyboard Events (keydown)

const chatInput = document.getElementById("chat-input");
const chatmessage = document.getElementById("chat-messages");

chatInput.addEventListener("keydown", function (e) {
    if(e.key === "Enter") {
        const li = document.createElement("li");
        li.textContent = chatInput.value;
       
        chatmessage.appendChild(li);
        chatInput.value = "";
    }
});

//Task 2: Timers (setTimeout & setInterval)

const alertbtn = document.getElementById("alert-btn");
const alertmsg = document.getElementById("alert-msg");

alertbtn.addEventListener("click", function () {
    alertmsg.style.display = "block"
    setTimeout(function () {
        alertmsg.style.display = "none"
    }, 2000);
});

const start = document.getElementById("start-btn");
const stop = document.getElementById("stop-btn");
const counter = document.getElementById("counter-display");

let count = "";
let timerId = "";

start.addEventListener("click", function () {
    clearInterval(timerId);

    timerId=setInterval(function () {
        count++;
        counter.textContent = count;
    }, 1000);
});

stop.addEventListener("click", function () {
    clearInterval(timerId)
});


//Task 3: Local Storage (localStorage)

const nameInput = document.getElementById("name-input");
const saveBtn = document.getElementById("save-btn");
const greetingName = document.getElementById("greeting-name");

const savedName = localStorage.getItem("savedName");

if (savedName) {
    greetingName.textContent = savedName;
}

saveBtn.addEventListener("click", function () {
    const value = nameInput.value;

    localStorage.setItem("savedName", value);

    greetingName.textContent = value;
});

//Task 4: Event Delegation

const delegationList = document.getElementById("delegation-list");

delegationList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
    }
});