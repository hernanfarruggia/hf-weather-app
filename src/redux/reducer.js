import localStorageHelper from '../lib/localStorage';
import {
    ERROR,
    LOADING_START,
    LOADING_STOP,
    RECENT_REMOVE,
    RECENT_UPDATE,
    TEMP_TYPE_UPDATE,
    WEATHER_GET
} from './actions';

const initialState = {
    error: false,
    loading: false,
    search: 'LOS ANGELES',
    searchList: localStorageHelper.get(),
    tempType: 'F',
    weather: {}
}

function reducer (state = initialState, action) {
    
    switch (action.type) {
        case ERROR:
            return {
                ...state,
                error: action.error
            };
        case LOADING_START:
            return {
                ...state,
                error: false,
                loading: true
            };

        case LOADING_STOP:
            return {
                ...state,
                loading: false
            };

        case RECENT_REMOVE:
            return {
                ...state,
                searchList: state.searchList.filter((item, key) => key !== action.id)
            };

        case RECENT_UPDATE:
            if (!state.searchList.includes(action.search)) {
                let recent = state.searchList.slice(-4);
                recent.push(action.search);
    
                localStorageHelper.set(recent); // Update Local Storage

                return {
                    ...state,
                    searchList: recent
                }
            }

            return state;

        case TEMP_TYPE_UPDATE:
            return {
                ...state,
                tempType: action.tempType
            };

        case WEATHER_GET:
            return {
                ...state,
                error: false,
                search: action.search,
                weather: action.weather
            };

        default:
            return state;
    }
}

export default reducer;