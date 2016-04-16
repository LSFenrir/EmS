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

function alterMap(la,ln){

    map.panTo({lat:la,lng:ln});

}

function geb( G)
{
    $(".active").removeClass("active");
    $("."+G).addClass("active");
}



    