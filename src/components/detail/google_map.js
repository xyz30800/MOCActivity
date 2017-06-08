import React, {Component} from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
import PropTypes from 'prop-types';

class GoogleMapComponent extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			location: {},
			loading: true
		};
	}
	componentWillMount() {
		this.setState({
        	location: this.props,
        	loading: false
        });
	}

	componentWillReceiveProps(nextProps) {
		// 先丟出'讀取中......'的畫面
		this.setState({
        	loading: true
        });
        // 間隔 100ms，再 re-render 地圖資料
		setTimeout(() => {
            this.setState({
            	location: nextProps,
            	loading: false
            })
        }, 100);
	}
	
	render() {
		let map = {};
		if (!this.state.location.lat) {
			map = <div className="invalid-map">沒有地圖資料</div>;
		} else if (this.state.loading) {
			map = <div className="invalid-map">讀取中......</div>;
		} else {
			map = (
				<GoogleMapLoader
					containerElement={ <div style={{height: '100%'}} /> }
					googleMapElement={
						<GoogleMap
							defaultZoom={15} 
							defaultCenter={this.state.location} >
			                <Marker position={this.state.location} />
						</GoogleMap>
					}
				>
				</GoogleMapLoader>
			);
		}

		return map;
	}
}

export default GoogleMapComponent;