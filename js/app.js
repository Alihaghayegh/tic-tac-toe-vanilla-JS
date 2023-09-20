const App = {
  // All of HTML elements
  $: {
    menu: document.querySelector("[data-id='menu']"),
    menuItem: document.querySelector("[data-id='menu-items']"),
    resetBtn: document.querySelector("[data-id='reset-btn']"),
    newRoundBtn: document.querySelector("[data-id='new-round-btn']"),
    squares: document.querySelectorAll("[data-id=square]"),
  },

  state: {
    currentPlayer: 1,
  },

  init() {
    App.registerEventListeners();
  },
  // DONE
  registerEventListeners() {
    App.$.menu.addEventListener("click", (event) => {
      App.$.menuItem.classList.toggle("hidden");
    });

    // TODO
    App.$.resetBtn.addEventListener("click", (event) => {
      console.log("Reset");
    });

    // TODO
    App.$.newRoundBtn.addEventListener("click", (event) => {
      console.log("New Round");
    });

    // TODO
    App.$.squares.forEach((square) => {
      square.addEventListener("click", (event) => {
        console.log(`Square with id ${event.target.id}`);
        console.log(` current player is ${App.state.currentPlayer}`)

        const currentPlayer = App.$.currentPlayer
        const icon = document.createElement("i");

        if (currentPlayer === 1) {
          icon.classList.add("fa-solid", "fa-x", "yellow");
        } else {
          icon.classList.add("fa-solid", "fa-o", "turquoise");
        }

        App.state.currentPlayer = App.state.currentPlayer === 1 ? 2 :1

        event.target.replaceChildren(icon);
      });
    });
  },
};

window.addEventListener("load", App.init);
