import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";

const middleWare = [];

if (process.env.NODE_ENV === "development") {
  middleWare.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleWare));

const persistor = persistStore(store);
export { store, persistor };
