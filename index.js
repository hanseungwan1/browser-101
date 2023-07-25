function additem() {
  if (!text) return;
  const newItem = document.createElement("div");
  const newItemText = document.createElement("span");
  const newItemBtn = document.createElement("button");
  const newItemIcon = document.createElement("i");

  newItem.classList.add("shopping_item_box");
  newItemText.classList.add("item_text");
  newItemBtn.classList.add("delete_btn");
  newItemIcon.classList.add("fa-solid", "fa-trash-can");

  newItemText.textContent = text;
  newItemBtn.append(newItemIcon);
  newItem.append(newItemText, newItemBtn);
  list.append(newItem);

  text = "";
  input.value = "";
  list.scrollTop = list.scrollHeight;

  newItemBtn.addEventListener("click", () => {
    const deleteTarget = newItemBtn.parentElement;
    deleteTarget.remove();
  });
}

const btn = document.querySelector(".add_btn");
const input = document.querySelector(".add_list_input");
const list = document.querySelector(".list");

let text = "";

input.addEventListener("input", (e) => {
  text = e.target.value.trim();
});

btn.addEventListener("click", () => additem());

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") additem();
});
