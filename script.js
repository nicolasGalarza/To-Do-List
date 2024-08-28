const inputBox = document.getElementById("new-task");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Necesitas introducir una tarea!");
  } else {
    let li = document.createElement("li");
    let spanText = document.createElement("span");
    spanText.innerHTML = inputBox.value;
    li.appendChild(spanText);
    const img = new Image(40, 40);
    img.src = "img/icons8-borrar-para-siempre-100.png";
    img.classList.add("delete-btn");
    li.appendChild(img);
    listContainer.appendChild(li);
    spanText.setAttribute("onclick", "terminar(this)");
    img.addEventListener("click", function () {
      li.remove();
    });
  }
  inputBox.value = "";
}

function terminar(element) {
  if (element.style.textDecoration === "line-through") {
    element.style.textDecoration = "";
    element.style.color = "black";
  } else {
    element.style.textDecoration = "line-through";
    element.style.color = "orange";
  }
}
