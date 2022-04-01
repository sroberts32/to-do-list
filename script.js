let newItem = document.getElementById('box')
let button = document.getElementById("button")
let list = document.querySelector("ul")

//add list item
button.addEventListener("click",
function addItem() {
  let item = document.createElement('li');
  item.innerText = newItem.value
  list.appendChild(item);
  newItem.value = "";
  console.log(newItem.value);
})
//delete list item
let listItems = list.children
list.addEventListener('click', 
function(del) {
  let temp = del.target
  temp.remove()
});
// let loop = list.childNodes
// loop.forEach((item) => item.addEventListner('click', (e) => setTimeout(function() {
//   e.target.style.display = "none")
// }, 1000));

