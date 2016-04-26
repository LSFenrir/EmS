/**
 * Created by Robin Holzwarth on 13.04.2016.
 */

var map;

function initMap() {
    var mapDiv = document.getElementById('map');
    map = new google.maps.Map(mapDiv, {
        center: {lat: 49.122631, lng: 9.209131},
        zoom: 18,
        tilt: 0,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        mapTypeId: google.maps.MapTypeId.SATELLITE

    });
}
var lat = [49.122210, 49.122112, 49.122664, 49.122307, 49.122962, 49.122916, 49.123055, 49.125037, 49.122631]
var len = [9.211107, 9.210634, 9.210194, 9.212023, 9.211238, 9.211826, 9.210388, 9.204143, 9.206131]


function alterMap(la, ln) {

}

function geb(G) {
    $(".active").removeClass("active");
    $("." + G).addClass("active");

    var zm = zoom();

    map.setZoom(zm);
    map.panTo({lat: lat[G - 1], lng: len[G - 1]});

}

function button_close() {

    $('div.control_big').fadeOut(200, 'swing', function () {
        $(this).attr('display', 'none');
        $('div.control_small').attr('display', 'block').fadeIn(200, 'swing')
    });

}
function button_click(val, obj) {
    text = $(obj).text();
    $('div.control_small button').text(text);
    geb(val);
    button_close();

}
function button_open() {

    $('div.control_small').fadeOut(200, 'swing', function () {
        $(this).attr('display', 'none');
        $('div.control_big').attr('display', 'block').fadeIn(200, 'swing')
    });

}

function zoom() {
    var breite = $('body').width();

    if (breite >= 1024) {
        return 20;
    }

    if (breite >= 649 && breite < 1024) {
        return 19;
    }

    if (breite < 649) {
        return 18;
    }

}