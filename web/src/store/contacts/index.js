import {ajax} from 'rxjs/observable/dom/ajax';
import {closeModal} from '../modal';

const GET_ALL = 'contacts/GET_ALL';
const CONTACTS_RECEIVED = 'contacts/CONTACTS_RECEIVED';
const CREATE_CONTACT = 'contacts/CREATE_CONTACT';
const UPDATE_CONTACT = 'contacts/UPDATE_CONTACT';
const ADD_CONTACT = 'contacts/ADD_CONTACT';
const REFRESH_CONTACT = 'contacts/REFRESH_CONTACT';

const initialState = {
    contacts: []
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case CONTACTS_RECEIVED:
            return {...state, contacts: action.payload};
        case REFRESH_CONTACT:
            const newContacts = state.contacts.map(contact => {
                if (contact.id === action.payload.id) {
                    return action.payload;
                }
                return contact;
            });

            return {...state, contacts: newContacts};
        case ADD_CONTACT:
            return {...state, contacts: [action.payload, ...state.contacts]};
        default:
            return state;
    }
}

export const getContacts = () => ({type: GET_ALL});

export const createContact = (data) => ({type: CREATE_CONTACT, payload: data});

export const refreshContact = (newContact) => ({type: REFRESH_CONTACT, payload: newContact});

export const addContact = (newContact) => ({type: ADD_CONTACT, payload: newContact});

export const updateContact = (contact) => ({type: UPDATE_CONTACT, payload: contact});

export const contactsReceived = (contacts) => ({type: CONTACTS_RECEIVED, payload: contacts});

export const getContactsEpic = action$ =>
    action$
        .ofType(GET_ALL)
        .switchMap(action => ajax.getJSON(`http://127.0.0.1:5000/contacts`)
            .map(response => {
                return contactsReceived(response);
            })
        );

export const createContactEpic = action$ =>
    action$
        .ofType(CREATE_CONTACT)
        .switchMap(action => ajax.post(`http://127.0.0.1:5000/contacts`, action.payload)
            .map(data => data.response)
            .mergeMap(response => [
                closeModal(),
                addContact(response)
            ]));

export const updateContactEpic = action$ =>
    action$
        .ofType(UPDATE_CONTACT)
        .switchMap(action =>
            ajax.put(`http://127.0.0.1:5000/contacts/${action.payload.id}`, action.payload)
                .map(data => data.response)
                .mergeMap(response => [
                    refreshContact(response),
                    closeModal()
                ])
        );


