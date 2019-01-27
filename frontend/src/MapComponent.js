import React, { Component } from "react";
//import { Map, GoogleApiWrapper } from 'google-maps-react';
// import * as google from "https://maps.googleapis.com/maps/api/js?key=AIzaSyD1F_n5E1N1b_xtjczOoGgDWe88Id6csr0&callback=initMap";



const mapStyles = {
  width: '100%',
  height: '100%'
};



export class MapContainer extends Component {

	componentDidMount(){
		function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });

        var drawingManager = new google.maps.drawing.DrawingManager({
          drawingMode: google.maps.drawing.OverlayType.MARKER,
          drawingControl: true,
          drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
          },
          markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
          circleOptions: {
            fillColor: '#ffff00',
            fillOpacity: 1,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 1
          }
        });
        drawingManager.setMap(map);
      }




	}

  render() {
    return (
    	<div id="map"></div>
    );
  }
}


export default MapContainer;

// // const MapStyle = {
// // 	height: 80%

// // };


// function InitMap() {
//         // Styles a map in night mode.
//         return new google.maps.Map(document.getElementById('map'), { center: {lat: -34.397, lng: 150.644},
//   zoom: 8}); 
//           //center: {lat: 40.674, lng: -73.945},
//           //: 12
//           // styles: [
//           //   {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
//           //   {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
//           //   {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
//           //   {
//           //     featureType: 'administrative.locality',
//           //     elementType: 'labels.text.fill',
//           //     stylers: [{color: '#d59563'}]
//           //   },
//           //   {
//           //     featureType: 'poi',
//           //     elementType: 'labels.text.fill',
//           //     stylers: [{color: '#d59563'}]
//           //   },
//           //   {
//           //     featureType: 'poi.park',
//           //     elementType: 'geometry',
//           //     stylers: [{color: '#263c3f'}]
//           //   },
//           //   {
//           //     featureType: 'poi.park',
//           //     elementType: 'labels.text.fill',
//           //     stylers: [{color: '#6b9a76'}]
//           //   },
//           //   {
//           //     featureType: 'road',
//           //     elementType: 'geometry',
//           //     stylers: [{color: '#38414e'}]
//           //   },
//           //   {
//           //     featureType: 'road',
//           //     elementType: 'geometry.stroke',
//           //     stylers: [{color: '#212a37'}]
//           //   },
//           //   {
//           //     featureType: 'road',
//           //     elementType: 'labels.text.fill',
//           //     stylers: [{color: '#9ca5b3'}]
//           //   },
//           //   {
//           //     featureType: 'road.highway',
//           //     elementType: 'geometry',
//           //     stylers: [{color: '#746855'}]
//           //   },
//           //   {
//           //     featureType: 'road.highway',
//           //     elementType: 'geometry.stroke',
//           //     stylers: [{color: '#1f2835'}]
//           //   },
//           //   {
//           //     featureType: 'road.highway',
//           //     elementType: 'labels.text.fill',
//           //     stylers: [{color: '#f3d19c'}]
//           //   },
//           //   {
//           //     featureType: 'transit',
//           //     elementType: 'geometry',
//           //     stylers: [{color: '#2f3948'}]
//           //   },
//           //   {
//           //     featureType: 'transit.station',
//           //     elementType: 'labels.text.fill',
//           //     stylers: [{color: '#d59563'}]
//           //   },
//           //   {
//           //     featureType: 'water',
//           //     elementType: 'geometry',
//           //     stylers: [{color: '#17263c'}]
//           //   },
//           //   {
//           //     featureType: 'water',
//           //     elementType: 'labels.text.fill',
//           //     stylers: [{color: '#515c6d'}]
//           //   },
//           //   {
//           //     featureType: 'water',
//           //     elementType: 'labels.text.stroke',
//           //     stylers: [{color: '#17263c'}]
//           //   }
//           // ]
        
//               }

// class MapComponent extends Component{
// 	render(){
// 		return(
//     <div id="map" >
//    	{this.InitMap()}
//    	</div>
// 	);}

// }
// export default MapComponent;