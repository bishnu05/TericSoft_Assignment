import {legacy_createStore,applyMiddleware,compose} from 'redux';
import thunk from "redux-thunk";
import {reducer} from "./App/reducer";

const composeEnhencer= window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose();

export const store = legacy_createStore(
    reducer,
    composeEnhencer(applyMiddleware(thunk))
);
