import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import './styles.css';

function MapContainer(props) {
    const containerStyle = {
        height: '100%',
        position: 'relative',
        width: '100%'
    };

    const center = {
        lat: props.location.lat,
        lng: props.location.lon
    };

    return (
        <Map
            center={ center }
            containerStyle={ containerStyle }
            google={ props.google }
            initialCenter={ center }
            zoom={ 10 }
        ></Map>
    )
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAyBDAvJLKTyzc6lMN_jhxIaXi3cv1V9l4')
})(MapContainer);