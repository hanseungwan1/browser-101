function updateWindowSize() {
  screen.innerHTML = `${window.screen.width}, ${window.screen.height}`;
  outer.innerHTML = `${window.outerWidth}, ${window.outerHeight}`;
  inner.innerHTML = `${window.innerWidth}, ${window.innerHeight}`;
  client_width.innerHTML = `${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`;
}

const screen = document.querySelector(".screen");
const outer = document.querySelector(".outer");
const inner = document.querySelector(".inner");
const client_width = document.querySelector(".client_width");
updateWindowSize();

window.addEventListener("resize", function () {
  updateWindowSize();
});
