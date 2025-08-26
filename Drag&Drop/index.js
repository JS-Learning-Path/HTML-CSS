const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".list");

for (const card of cards) {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
}
for (const list of lists) {
  list.addEventListener("dragover", dragOver);
  list.addEventListener("dragenter", dragEnter);
  list.addEventListener("dragleave", dragLeave);
  list.addEventListener("drop", dragDrop);
}
function dragStart(e) {
  e.dataTransfer.setData("text/plain", this.id);
}
function dragEnd() {
  console.log("Dragging ended");
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.classList.add("over");
}
function dragLeave(e) {
  this.classList.remove("over");
}
function dragDrop(e) {
  const id = e.dataTransfer.getData("text/plain");
  const card = document.getElementById(id);
  this.appendChild(card);
  this.classList.remove("over");
}
/*
Checkpoints:
1. Make sure each .card element has a unique id attribute.
2. Ensure each .card has draggable="true" in your HTML.
3. Make sure your .list elements exist and are valid drop targets.
4. If cards are not moving, check for errors in the browser console.
5. Your JS logic is correct for basic drag-and-drop.
*/
