const OPEN_MODAL = 'modal/OPEN_MODAL';
const SUBMIT_MODAL = 'modal/SUBMIT_MODAL';
const CLOSE_MODAL = 'modal/CLOSE_MODAL';

const initialState = {
    opened: false,
    type: null,
    data: {}
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case OPEN_MODAL:
            return {...state, opened: true, data: action.payload.data, type: action.payload.type};
        case CLOSE_MODAL:
            return {...state, opened: false, data: {}, type: null};
        default:
            return state;
    }
}

export const openModal = (data, type) => ({type: OPEN_MODAL, payload: {data, type}});
export const closeModal = () => ({type: CLOSE_MODAL});
export const submitModal = () => ({type: SUBMIT_MODAL});
