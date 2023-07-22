import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

//reducers

function giphySearchReducer(state = [], action) {
  if (action.type === "GIPHY_SEARCH") {
    return action.payload;
  }
  return state;
}

// function giphyFavoriteReducer(state = [], action) {
//   switch (action.type) {
//     case `ADD_FAVORITE`:
//       return action.payload;
//   }
//   return state;
// }

//store

const store = createStore(
  combineReducers({
    giphySearch: giphySearchReducer,
    // giphyFavorite: giphyFavoriteReducer,
  }),
  applyMiddleware(logger)
);

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
