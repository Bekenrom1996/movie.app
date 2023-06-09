import {
    createStore,
    applyMiddleware,
    compose
} from "redux";
import {
    composeWithDevTools
} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleWare = [thunk];

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) :
    compose;

const movieStore = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleWare))
);

export default movieStore;
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()