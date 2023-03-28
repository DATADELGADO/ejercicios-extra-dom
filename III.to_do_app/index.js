const add = document.querySelector(".add");
const clear = document.querySelector(".clear");
const tarea = document.querySelector(".tarea");
const pendings = document.querySelector(".pendings");

add.addEventListener("click", () => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "Delete";
    button.style.marginLeft = "20px";
    button.addEventListener("click", (e) => {
        li.remove();
    })
    li.append(tarea.value, button);
    pendings.append(li);
    tarea.value = "";
});

clear.addEventListener("click", () => {
    let array = pendings.children.length;
    for (let i = 0; i < array; i++) {
        pendings.firstElementChild.remove();
    }
})
