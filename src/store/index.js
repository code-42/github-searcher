import { createStore } from 'redux';

const initialState = {
    repos: [],
    searchInputValue: ''
};

const reducer = (state = initialState, action) => {
    console.log('reducer', action);
    return state;
}

const store = createStore(reducer);

export default store;