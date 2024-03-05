const saved = document.getElementById("saved-value");
const input = document.getElementById("name");
const saveButton = document.getElementById("save");
const resetButton = document.getElementById("reset");

saveButton.addEventListener("click", function () {
  const insertedValue = input.value;
  localStorage.setItem("saved-name", insertedValue);
  saved.innerText = insertedValue;
  input.value = "";
  alert("salvato!");
});

resetButton.addEventListener("click", function () {
  input.value = "";
  localStorage.removeItem("saved-name");
  saved.innerText = "";
  alert("rimosso!");
});

const loadValueOnPageLoad = function () {
  const savedValue = localStorage.getItem("saved-name");

  if (savedValue) {
    saved.innerText = savedValue;
  }
};

loadValueOnPageLoad();
