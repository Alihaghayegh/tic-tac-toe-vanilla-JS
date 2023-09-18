const App = {
  // All of HTML elements
  $: {
    menu: document.querySelector("[data-id='menu']"),
    menuItem: document.querySelector("[data-id='menu-items']"),
    resetBtn: document.querySelector("[data-id='reset-btn']"),
    newRoundBtn: document.querySelector("[data-id='new-round-btn']"),
  },

  init() {
    App.$.menu.addEventListener("click", (event) => {
      App.$.menuItem.classList.toggle("hidden");
    });
  },
};

window.addEventListener('load', App.init)