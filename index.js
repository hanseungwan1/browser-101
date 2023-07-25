const btn = document.querySelector(".add_btn");
const input = document.querySelector(".add_list_input");
const list = document.querySelector(".list");

btn.addEventListener("click", () => additem());

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") additem();
});

function additem() {
  if (!input.value.trim()) return;
  createElement();

  input.value = "";
  list.scrollTop = list.scrollHeight;
  input.focus();
}

function createElement() {
  const newItem = document.createElement("div");
  const newItemText = document.createElement("span");
  const newItemBtn = document.createElement("button");
  const newItemIcon = document.createElement("i");

  newItem.classList.add("shopping_item_box");
  newItemText.classList.add("item_text");
  newItemBtn.classList.add("delete_btn");
  newItemIcon.classList.add("fa-solid", "fa-trash-can");

  deleteElement(newItemBtn);

  newItemText.textContent = input.value;
  newItemBtn.append(newItemIcon);
  newItem.append(newItemText, newItemBtn);
  list.append(newItem);
}

function deleteElement(newItemBtn) {
  newItemBtn.addEventListener("click", () => {
    const deleteTarget = newItemBtn.parentElement;
    deleteTarget.remove();
  });
}
