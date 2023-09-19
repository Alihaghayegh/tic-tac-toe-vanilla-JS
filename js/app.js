const App = {
  // All of HTML elements
  $: {
    menu: document.querySelector("[data-id='menu']"),
    menuItem: document.querySelector("[data-id='menu-items']"),
    resetBtn: document.querySelector("[data-id='reset-btn']"),
    newRoundBtn: document.querySelector("[data-id='new-round-btn']"),
    squares: document.querySelectorAll("[data-id=square]"),
  },

  init() {
    App.$.menu.addEventListener("click", (event) => {
      App.$.menuItem.classList.toggle("hidden");
    });

    App.$.resetBtn.addEventListener("click", (event) => {
      console.log("Reset");
    });

    App.$.newRoundBtn.addEventListener("click", (event) => {
      console.log("New Round");
    });

    App.$.squares.forEach((square) => {
      square.addEventListener("click", (event) => {
        console.log(`Square with id ${event.target.id}`);
      });
    });
  },
};

window.addEventListener("load", App.init);
