import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Icon } from '../';

export default function Temperature (props) {

    const tempType = useSelector(state => state.tempType);
    const [ temp, setTemp ] = useState({});

    useEffect(() => {
        if (props.weather?.main) {
            setTemperature();
        }
    }, [tempType]);

    const setTemperature = () => {
        if (!props.weather.main) return;

        let data = {
            main: convertUnit(props.weather.main.temp),
            min: convertUnit(props.weather.main.temp_min),
            max: convertUnit(props.weather.main.temp_max)
        }

        setTemp(data);
    }

    const convertUnit = (value) => {
        let result;

        if (tempType === 'F') {
            result = parseFloat(((value - 273.15) * 9/5) + 32);
        } else {
            result = parseFloat(value - 273.15);
        }

        return result.toFixed(2);
    }
    
    if (props.weather?.main) {

        return (
            <div className="temp">
    
                {
                    props.weather.weather &&
                    <Icon type={props.weather.weather[0]?.icon} />
                }
    
                 <div className="current">
                    {temp.main} &deg;
                </div>
                <div className="maxMin">
                    {temp.min} &deg; / {temp.max} &deg;
                </div>
            </div>
        );
    } else {
        return null;
    }
} 