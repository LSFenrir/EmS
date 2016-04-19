/**
 * Created by Robin Holzwarth on 13.04.2016.
 */

var map;

function initMap() {
    var mapDiv = document.getElementById('map');
    map = new google.maps.Map(mapDiv, {
        center: {lat: 49.122631, lng: 9.206131},
        zoom:24,
        tilt:0,
        mapTypeId: google.maps.MapTypeId.SATELLITE

    });
}
var len = [49.122631,49.122631,49.122631,49.122631,49.122631,49.122631,49.122631,49.122631,49.122631]
var lat = [9.206131,9.206131,9.206131,9.206131,9.206131,9.206131,9.206131,9.206131,9.206131]


function alterMap(la,ln){

    map.setZoom(15);
    /*map.panTo({lat:la,lng:ln});*/
    //map.setZoom(24);

}

function geb( G)
{
    $(".active").removeClass("active");
    $("."+G).addClass("active");

    map.panTo({lat:lat[G-1],lng:ln[G-1]});

}



    