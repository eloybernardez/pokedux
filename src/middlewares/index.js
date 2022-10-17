export const logger = (store) => (next) => (action) => {
  console.log(action.payload);
  next(action);
};

// Featured pokemon middleware
export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{ name: "???" }, ...actionInfo.action.payload];

  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };
  next(updatedActionInfo);
};

// Pokemon number middleware
export const pokemonNumber = (store) => (next) => (actionInfo) => {
  const numbered = actionInfo.action.payload.map((pokemon, index) => ({
    ...pokemon,
    name: `No. ${String(index).padStart(3, "0")} ${pokemon.name
      .slice(0, 1)
      .toUpperCase()}${pokemon.name.slice(1)}`,
  }));
  const updatedAction = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: numbered },
  };
  next(updatedAction);
};
