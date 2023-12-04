const sf = {lat: 37.7577607, lng: -122.4787993};
let map;
const interval = 90000;
let markers = [];

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: sf,
    zoom: 12,
  });
}

// Real-time Vehicle Monitoring API provides information about current location and expected activities of a vehicle in XML and JSON formats.

// Endpoint: http://api.511.org/transit/VehicleMonitoring?api_key=[your_key]&agency=[operatorID]
// Allowable parameters: api_key (mandatory), agency (mandatory), vehicleID (optional) and format (optional)

async function fetchBusData(){
  const apiKey = '84564c16-b5ca-472c-94a0-3330564a49d7';
  const agency = 'SF';
  const url = `http://api.511.org/transit/VehicleMonitoring?api_key=${apiKey}&agency=${agency}`

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    const vehicleLocations = data.Siri.ServiceDelivery.VehicleMonitoringDelivery.VehicleActivity.map(
      activity => activity.MonitoredVehicleJourney.VehicleLocation
    );

    console.log(data);

    clearMarkers();
    updateMarkers(vehicleLocations);
    
  } catch (error) {
    console.error('Fetching bus data failed:', error);
  }

  setTimeout(fetchBusData,interval);
}

function updateMarkers(vehicleLocations){
  // Iterate through the vehicleLocations array and create markers
  vehicleLocations.forEach(vehicleLocation => {
    const location = {
      lat: parseFloat(vehicleLocation.Latitude),
      lng: parseFloat(vehicleLocation.Longitude),
    };

    // Create a marker for each vehicle location
    const marker = new google.maps.Marker({
      position: location,
      map: map, // 'map' is your Google Map object
      title: `Vehicle Location`, // Optional: You can set the title of the marker
    });

    markers.push(marker)
  });
}

function clearMarkers() {
  // Remove all markers from the map and clear the markers array
  markers.forEach(marker => marker.setMap(null));
  markers.length = 0;
}

initMap();
fetchBusData();
