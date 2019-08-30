import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import Modal from './Modal';

class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      show:false,
      currentDate: ''
    }

    this.onClick = this.onClick.bind(this);
  };

  onClick(t, map, coord) {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    this.setState(previousState => {
      return {
        markers: [
          ...previousState.markers,
          {
            date: new Date(),
            name: "",
            location: { lat, lng }
          }
        ],
        show: true,
        currentDate: new Date(),
        currentName: '',
        activeMarker: {}
      };
    });
  }

  hideModal = () => {
    this.setState({ show: false });
  };

  onModalSave = (data) => {
    this.setState({ currentName: data });
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      activeMarker: marker,
    });
    console.log(this.state.activeMarker);

 };

  render() {
    return (
      <Map
          google={this.props.google}
          zoom={14}
          initialCenter={{ lat: 43.6532, lng: -79.3832}}
          onClick={this.onClick}>
          <Modal className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"
                show={this.state.show}
                handleClose={this.hideModal}
                handleSave={this.onModalSave}
                date={this.state.currentDate}
              />
            {this.state.markers.map((marker, index) => (
             <Marker
                key={index}
                date={marker.date}
                name={this.state.currentName}
                position={marker.location}
                onClick={this.onMarkerClick}
              />
          ))}

        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'Google Maps token here'
})(MapContainer);
