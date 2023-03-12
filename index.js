let map;
window.initMap = initMap;


function renderMarkers() {
  const image = {
    url: "https://benwade.dev/magfitmap/markers/magfitIcon.png",
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(50, 50)
  };
  
  fetch("https://benwade.dev/magfitmap/data/gyms.json")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach(file => {
        const marker = new google.maps.Marker({
          position: {
            lat: file.Latitude,
            lng: file.Longitude,
          },
          map,
          title: file.Name,
          icon: image,
        });

        const infowindow = new google.maps.InfoWindow({
          content: file.Name,
          ariaLabel: "Uluru",
        });
        marker.addListener("click", () => {
          infowindow.open({
            anchor: marker,
            map,
          });
        });
      })
    });
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 37.7749,
      lng: -122.4194
    },
    zoom: 7,
    mapId: "a4aeaf34cd1e581a",
  });
  renderMarkers();
}