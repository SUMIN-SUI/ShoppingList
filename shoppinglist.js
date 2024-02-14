let footerInput = document.querySelector(".footer_input");
const items = document.querySelector(".items");

function createItemRow(item) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item_row");
  itemRow.innerHTML = `
  <div class="item">
    <div>
        <input type="checkbox" id="item_name" onclick="checkList(this)" />
        <label for="item_name">${item}</label>
    </div>
    <button class="item_delete" onclick="deleteList(this)">
        <i class="fa-solid fa-xmark"></i>
    </button>
  </div>
  `;
  items.appendChild(itemRow);
}

function list(event) {
  if (event.keyCode == 13) {
    createItemRow(event.target.value);
    event.target.value = "";
  }
}

function checkList(checkbox) {
  const list = checkbox.parentElement.parentElement;
  const itemName = checkbox.nextElementSibling;
  if (itemName.style.textDecoration == "line-through") {
    itemName.style.textDecoration = "none";
    list.classList.remove("checked");
    return;
  }
  itemName.style.textDecoration = "line-through";
  list.classList.add("checked");
}

function deleteList(list) {
  const li = list.parentElement.parentElement;
  li.remove(li);
}

footerInput.addEventListener("keydown", list);

function addList() {
  createItemRow(footerInput.value);
  footerInput.value = "";
}
