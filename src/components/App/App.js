import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather } from '../../redux/actions';

import {
    Error,
    Icon,
    Loading,
    MapContainer,
    Recent,
    Search,
    Temperature
} from '../';

import './styles.css';

function App() {
    const { weather, search, loading, error } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWeather(search));
    }, [dispatch]);

    const handleSearch = (city) => {
        dispatch(getWeather(city));
    }

    const renderContent = () => {
        return (
            <div className="content">

                <Temperature weather={ weather } />

                <div className="extraInfo">
                    <div className="item">
                        <Icon type="humidity" small />
                        <span>{weather.main?.humidity}%</span>
                    </div>

                    <div className="item">
                        <Icon type="pressure" small />
                        <span>{weather.main?.pressure} hPa</span>
                    </div>
                </div>

                {
                    weather.coord &&
                    <div className="mapWrapper">
                        <MapContainer location={weather.coord} />
                    </div>
                }

                <Recent searchAction={handleSearch} />

            </div>
        );
    }

    return (
        <div className="App">

            <Search searchAction={handleSearch} />

            {
                loading ? <Loading /> :
                    error ? <Error message={error.message} /> : renderContent()

            }

        </div>
    );
}

export default App;
