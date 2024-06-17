// Initialize the map
var map = L.map('map').setView([37.7749, -122.4194], 5); // Centered on San Francisco for example

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to determine marker color based on depth
function getColor(depth) {
    return depth > 90 ? '#006400' : // Dark Green
           depth > 70 ? '#008000' : // Green
           depth > 50 ? '#32CD32' : // Lime Green
           depth > 30 ? '#00FF00' : // Bright Green
           depth > 10 ? '#ADFF2F' : // Green Yellow
                        '#FFFFE0';  // Light Yellow
}

// Fetch earthquake data
fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
    .then(response => response.json())
    .then(data => {
        // Create a GeoJSON layer and add it to the map
        L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: feature.properties.mag * 4, // This line changes the size of the marker
                    fillColor: getColor(feature.geometry.coordinates[2]), // This line changes the color of the marker
                    color: "#000",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                });
            },
            onEachFeature: function (feature, layer) {
                layer.bindPopup(
                    `<h3>${feature.properties.title}</h3>
                    <p>Magnitude: ${feature.properties.mag}</p>
                    <p>Depth: ${feature.geometry.coordinates[2]} km</p>
                    <p>${new Date(feature.properties.time).toLocaleString()}</p>`
                );
            }
        }).addTo(map);

        // Create a legend
        var legend = L.control({position: 'bottomright'});

        legend.onAdd = function (map) {
            var div = L.DomUtil.create('div', 'info legend'),
                depths = [0, 10, 30, 50, 70, 90],
                labels = [];

            // Loop through our depth intervals and generate a label with a colored square for each interval
            for (var i = 0; i < depths.length; i++) {
                div.innerHTML +=
                    '<i style="background:' + getColor(depths[i] + 1) + '"></i> ' +
                    depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
            }

            return div;
        };

        legend.addTo(map);
    })
    .catch(error => console.error('Error fetching the earthquake data:', error));
