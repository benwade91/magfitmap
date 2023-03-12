let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.7749, lng: -122.4194 },
    zoom: 7,
    mapId: "a4aeaf34cd1e581a",
  });

  new google.maps.Marker({
    position: { lat: 37.7749, lng: -122.4194 },
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;