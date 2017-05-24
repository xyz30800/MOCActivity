import React, {Component} from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';
import PropTypes from 'prop-types';

const GoogleMapComponent = (props) => {
	console.log(props)
	return (
		<GoogleMapLoader
			containerElement={ <div style={{height: '100%'}} /> }
			googleMapElement={
				<GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}}/>
			}
		/>
	);
}

GoogleMapComponent.propTypes = {
	lat: PropTypes.any.isRequired,
	lon: PropTypes.any.isRequired,
}

export default GoogleMapComponent;