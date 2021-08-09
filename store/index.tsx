import { configureStore } from '@reduxjs/toolkit'
import search from './search'
import showOnHeader from './showSearchOnHeader'
import _ from 'lodash';


export const saveState = (state:object) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};


const persistedState = loadState();
const store= configureStore({
    preloadedState: persistedState,
    reducer: {
        search,
        showOnHeader,
    },
    devTools: process.env.NODE_ENV==='development'
})

store.subscribe(_.throttle(() => {
    saveState({
        search: store.getState().search
    });
}, 1000));

export default store