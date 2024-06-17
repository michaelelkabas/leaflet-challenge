# leaflet-challenge
Your first task is to visualize an earthquake dataset. Complete the following steps:

Get your dataset. To do so, follow these steps:

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON FeedLinks to an external site. page and choose a dataset to visualize. The following image is an example screenshot of what appears when you visit this link:

Import and visualize the data by doing the following:

Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

Create a legend that will provide context for your map data.

Your visualization should look something like the preceding map.

## Visualization

The `index.html` file sets up a web page to visualize earthquake data on a map using the Leaflet library and the Leaflet ExtraMarkers plugin.

### How to Run

1. Open `index.html` in a web browser.
2. The map will display earthquake data as colored markers, with colors based on the depth of the earthquake.

### Files

- `index.html`: The main HTML file setting up the map.
- `style.css`: CSS file for styling the map.
- `logic.js`: JavaScript file to fetch and visualize the earthquake data.

## Conclusion

This project provides a complete example of visualizing earthquake data, designing an ETL process, and creating an ERD for a database schema. It can be extended to include more complex transformations and relationships as needed.
