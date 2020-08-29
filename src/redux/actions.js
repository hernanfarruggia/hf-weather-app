const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = 'bcc0b108b26fb9af68010a8f42846090';

export const ERROR = 'ERROR';
export const LOADING_START = 'LOADING_START';
export const LOADING_STOP = 'LOADING_STOP';
export const RECENT_REMOVE = 'RECENT_REMOVE';
export const RECENT_UPDATE = 'RECENT_UPDATE';
export const TEMP_TYPE_UPDATE = 'TEMP_TYPE_UPDATE';
export const WEATHER_GET = 'WEATHER_GET';

export const getWeather = city => async dispatch => {
    dispatch({
        type: LOADING_START
    });
    
    try {

        const data = await fetch(`${apiUrl}q=${city}&appid=${apiKey}`);

        if (data.status === 404) {
            throw new Error(data.statusText);
        }

        const weather = await data.json();

        if (weather.cod === 404) {
            throw new Error(weather.message);
        }

        dispatch({
            search: city,
            weather,
            type: WEATHER_GET
        });

        dispatch({
            search: city,
            type: RECENT_UPDATE
        });
    
    }
    catch (error) {
        dispatch({
            type: ERROR,
            error
        });
    }
    
    dispatch({
        type: LOADING_STOP
    });
}

export const removeRecent = id => dispatch => {
    dispatch({
        id,
        type: RECENT_REMOVE
    });
}

export const updateTempType = tempType => dispatch => {
    dispatch({
        tempType,
        type: TEMP_TYPE_UPDATE
    });
}