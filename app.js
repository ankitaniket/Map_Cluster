

var map = L.map('map').setView([22.572645,88.363892],12); //Center co-ordinate with zoom in equal to 12
L.tileLayer('https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=5mfpNADjxhzhXQntRZVM',{
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);

const geojsonMarkerOptions = {      // marker styling
    radius : 5,
    fillColor : "#0000FF",
    color : "#0000",
    weight: 5,
    opacity : 1,
    fillOpacity : 0.8
}


// Scale at bottom-left corner

L.control.scale({
    metric : true,
    imperial : true,
    maxWidth : 100,
    position : 'bottomleft',
}).addTo(map);


// Watermark logo at the bottom-left corner
L.Control.Watermark=L.Control.extend({
    onAdd:function(map){
        var img = L.DomUtil.create('img');
        img.src = 'logo.png';
        img.style.width = '100px';
        img.style.opacity = "0.7";
        return img;
        },
        onRemove:function(map){},
        });
        L.control.watermark = function(opts){
            return new L.Control.Watermark(opts);
            }
        L.control.watermark({position:'bottomleft'}).addTo(map);


// JSON data
var locations = {
"type": "FeatureCollection",
"features": [
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.44560102519625,
  22.4794475212245
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.44776594741222,
  22.478207988914235
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.44435254244593,
  22.47941070359282
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.44715498776964,
  22.480466138480054
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.44552133480761,
  22.47899343641852
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.44516272806112,
  22.48060113538574
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.44625183003404,
  22.48025750664044
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.4433298491299,
  22.478367533299334
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.44460489534202,
  22.47909161704348
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.44537523576366,
  22.47993842204251
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.42909593168775,
  22.47967656172598
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.42577158267397,
  22.48394814688703
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.42239529070554,
  22.484716058332467
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.43096587800835,
  22.484332103142208
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.43112170686743,
  22.484332103142208
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.44010783779612,
  22.48730772801109
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.42794466850279,
  22.484105967356683
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.42668069858144,
  22.482388471296915
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.45798254194159,
  22.47572438488146
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.45872605366054,
  22.46342589901147
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.44958085951941,
  22.465143630228894
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.45344712045727,
  22.465624591154153
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.45456238803581,
  22.464662667634173
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.44742467553499,
  22.46411299405365
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.45143963881702,
  22.46425041265347
],
"type": "Point"
},
"id": 24
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.43757314526658,
  22.47345714834816
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.4421085667509,
  22.472701394590175
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.26874051828207,
  22.66576108611821
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.15749822886534,
  22.683768831042002
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.21214356401748,
  22.678366755857354
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.25312756538267,
  22.660358301621812
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.3663214739139,
  22.676566016829526
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.33704718722333,
  22.676566016829526
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.13017556128733,
  22.660358301621812
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.01698165275803,
  22.6693628242582
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  87.95452984115411,
  22.633341189326345
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.08138508347236,
  22.662159253423056
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.00136869985658,
  22.635142495485454
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  88.0638205114605,
  22.617128371524387
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  87.98770736606753,
  22.617128371524387
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  87.83157783706076,
  22.59550830785254
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {},
"geometry": {
"coordinates": [
  87.92720717357804,
  22.620731385155054
],
"type": "Point"
}
}
]
}
var markers = L.markerClusterGroup();
var marker = L.geoJSON(locations);

markers.addLayer(marker);
map.addLayer(markers);
