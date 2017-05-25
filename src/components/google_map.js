import React, {Component} from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

const GoogleMapComponent = (props) => {

	const [ lat, lon ] = [ parseFloat(props.lat), parseFloat(props.lon) ]
	
	return (
		<GoogleMapLoader
			containerElement={ <div style={{height: '100%'}} /> }
			googleMapElement={
				<GoogleMap
					defaultZoom={15} 
					defaultCenter={{lat: lat, lng: lon}} >
	                <Marker 
	                	icon=""
	                	position={{
					        lat: lat,
					        lng: lon,
					    }}
	                />
				</GoogleMap>
			}
		/>
	);
}

export default GoogleMapComponent;