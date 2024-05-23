document.addEventListener("DOMContentLoaded", () => {
    const inputBox = document.getElementById("input-box");
    const button = document.querySelector("button");
    const list = document.getElementById("list-container");

    function addTask() {
        if (inputBox.value.trim() === '') {
            alert("You must write something!");
            return;
        }

        const li = document.createElement("li");
        const circle = document.createElement("div");
        circle.className = "circle";
        li.appendChild(circle);

        const text = document.createElement("span");
        text.textContent = inputBox.value;
        li.appendChild(text);

        const deleteSpan = document.createElement("span");
        deleteSpan.textContent = "x";
        li.appendChild(deleteSpan);

        list.appendChild(li);

        inputBox.value = '';
        saveData();
    }

    list.addEventListener("click", (e) => {
        if (e.target.classList.contains("circle")) {
            e.target.parentElement.classList.toggle("checked");
        } else if (e.target.tagName === "SPAN" && e.target.textContent === "x") {
            e.target.parentElement.remove();
        }
        saveData();
    });

    button.addEventListener("click", addTask);

    function saveData() {
        localStorage.setItem("todoList", list.innerHTML);
    }

    function loadData() {
        const savedData = localStorage.getItem("todoList");
        if (savedData) {
            list.innerHTML = savedData;
        }
    }

    loadData();
});
