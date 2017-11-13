// initialize our map
var map = L.map('map', {
    center:[-1.09713135, 37.014170107681], //center map to jkuat
    zoom:10 //set the zoom level
});

//add openstreet baselayer to the map 
var OpenStreetMap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// define a blank geoJSON Layer
var buildings = L.geoJSON(null);

//get the geojson data with ajax, and add it to the blank layer we created
$.getJSON('../data/bui.geojson',function(data){
	buildings.addData(data);
	map.fitBounds(buildings.getBounds());
});

// finally add the layer to the map
buildings.addTo(map);

