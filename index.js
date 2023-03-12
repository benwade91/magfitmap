let map;
const icon = new Image();
icon.src = './markers/magfitIcon.png'

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.7749, lng: -122.4194 },
    zoom: 7,
    mapId: "a4aeaf34cd1e581a",
  });


  const image = {
    url: "https://benwade.dev/magfitmap/markers/magfitIcon.png",
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(50, 50)
  };

  const marker = new google.maps.Marker({
    position: { lat: 37.7749, lng: -122.4194 },
    map,
    title: "Hello World!",
    icon: image,
  });

  const infowindow = new google.maps.InfoWindow({
    content: "contentString",
    ariaLabel: "Uluru",
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

window.initMap = initMap;