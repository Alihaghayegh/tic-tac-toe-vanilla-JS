const initalValue = {
  moves: [],
};

export default class Store {
  #state = initalValue;

  constructor(players) {
    this.players = players;
  }

  get game() {
    const state = this.#getState();

    const currentPlayer = this.players[state.moves.length % 2];

    return {
      currentPlayer,
    };
  }

  playeMove(squareId) {
    const state = this.#getState()

    const stateClone = structuredClone(state)

    stateClone.moves.push({
        squareId,
        player: this.game.currentPlayer
    })

    this.#saveState(stateClone)
  }

  #getState() {
    return this.#state;
  }

  #saveState(stateOrFn) {
    const prevState = this.#getState();

    let newState;

    switch (typeof stateOrFn) {
      case "function":
        newState = stateOrFn(prevState);
        break;
      case "object":
        newState = stateOrFn;
        break;
      default:
        throw new Error("Invalid argument passed to saveState");
    }

    this.#state = newState;
  }
}