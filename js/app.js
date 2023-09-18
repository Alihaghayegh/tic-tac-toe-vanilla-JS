const App = {
  // All of HTML elements
  $: {
    menu: document.querySelector(".menu"),
    menuItem: document.querySelector(".items"),
  },

  init() {
    App.$.menu.addEventListener("click", (event) => {
      App.$.menuItem.classList.toggle("hidden");
    });
  },
};

window.addEventListener('load', () => App.init())