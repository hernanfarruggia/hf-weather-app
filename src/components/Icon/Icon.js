import React from 'react';

import './styles.css';

export default function Icon (props) {

    const types = {
        '01d': 'sun',
        '01n': 'sun',
        '02d': 'cloud-sun',
        '02n': 'cloud-sun',
        '03d': 'clouds',
        '03n': 'clouds',
        '04d': 'clouds',
        '04n': 'clouds',
        '09d': 'cloud-rain',
        '10d': 'cloud-rain',
        '11d': 'cloud-rain-wind',
        '13d': 'snow',
        '50d': 'wind',
        humidity: 'humidity',
        pressure: 'pressure',
    }

    const getClasses = () => {
        const classes = ['icon'];

        classes.push(types[props.type]);

        if (props.small) classes.push('small');

        return classes.join(' ');
    }

    return <div className={ getClasses() }></div>;
}