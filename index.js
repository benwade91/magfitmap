let map;
window.initMap = initMap;


function renderMarkers() {
  const image = {
    url: "./markers/magfitIcon.png",
    size: new google.maps.Size(40, 40),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(40, 40)
  };
  const markers = [];

  fetch("./data/newGyms.json")
    .then((response) => response.json())
    .then((json) => {
      console.log(json.length);
      json.forEach(file => {
        if (file.Latitude == null || file.Longitude == null) return;

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
          content: `<div class="content-div"><h3>${file.Name}</h3><p>${file.Address}</p><p><a href="${file.Website}">${file.Website}</a></p></div>`,
          ariaLabel: "Uluru",
        });
        marker.addListener("click", () => {
          infowindow.open({
            anchor: marker,
            map,
          });
        });
        markers.push(marker);
      })
      const clusterImg = {
        url: "./markers/magfitIcon.png",
        size: new google.maps.Size(60, 60),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(60, 60)
      };
      console.log(markers.length);

      const renderer = {
        render({
          count,
          position
        }) {
          return new google.maps.Marker({
            label: {
              text: String(count),
              color: "white",
              fontSize: "20px"
            },
            position,
            icon: clusterImg,
            // adjust zIndex to be above other markers
            zIndex: Number(google.maps.Marker.MAX_ZINDEX) + count,
          });
        }
      }
      new markerClusterer.MarkerClusterer({
        markers,
        map,
        renderer
      });
    });
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 37.7749,
      lng: -122.4194
    },
    zoom: 8,
    mapId: "a4aeaf34cd1e581a",
  });
  renderMarkers();
}