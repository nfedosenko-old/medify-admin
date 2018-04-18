import {createStore, combineReducers, applyMiddleware} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import ContactsReducer, {getContactsEpic, createContactEpic, updateContactEpic} from './contacts';
import ModalReducer from './modal';

const rootReducer = combineReducers({
    contact: ContactsReducer,
    modal: ModalReducer
});

const rootEpic = combineEpics(
    getContactsEpic,
    createContactEpic,
    updateContactEpic
);

const epicMiddleware = createEpicMiddleware(rootEpic);

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(epicMiddleware)
);

export default store;