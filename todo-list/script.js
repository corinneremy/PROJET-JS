const addToDoButton = document.querySelector("#addToDo");
const toDoContainer = document.querySelector("#toDoContainer");
const inputField = document.querySelector("#inputField");

addToDoButton.onclick = function () {
  let paragraph = null;
  console.log(inputField.value);
  // check if input is not empty
  if (inputField.value != "") {
    // if input is not empty, create a paragraph
    paragraph = document.createElement("p");
  }
  //value this paragraph with input content
  paragraph.innerText = inputField.value;

  //paragraphe style
  paragraph.classList.add("paragraph_style");

  // insert paragraph into toDoContainer element
  toDoContainer.appendChild(paragraph);

  //empty input when paragraph is added
  inputField.value = "";

  //line-through paragraph when click
  paragraph.addEventListener("click", function () {
    paragraph.classList.toggle("paragraph_click");
  });

  //delete task when double click on it
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
};
