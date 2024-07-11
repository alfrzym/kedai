// Toggle class active
const navabarNav = document.querySelector(`.navbar-nav`);
// ketika menu di klik
document.querySelector(`#menu`).onclick = () => {
  navabarNav.classList.toggle(`active`);
};

// click di luar sidebar untuk menghilangkan nav
const menu = document.querySelector(`#menu`);

document.addEventListener(click, function (e) {
  if (!menu.contains(e.target) && !navabarNav.contains(e.target)) {
    navabarNav.classList.remove(`active`);
  }
});
