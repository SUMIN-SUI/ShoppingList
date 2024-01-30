let footerInput = document.querySelector(".footer_input");
const items = document.querySelector(".items");

function createItemRow(item) {
  const itemRow = document.createElement("div");
  itemRow.setAttribute("class", "item_row");
  itemRow.innerHTML = `
  <div class="item">
    <div>
        <input type="checkbox" id="item_name" />
        <label for="item_name">${item}</label>
    </div>
    <button class="item_delete">
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

footerInput.addEventListener("keydown", list);
