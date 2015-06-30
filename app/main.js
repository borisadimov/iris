$(document).ready(function(){
  function initialize() {
    var myLatlng = new google.maps.LatLng(47.226859,39.71418199999994);
    var mapOptions = {
      zoom: 18,
      center: myLatlng,
      disableDefaultUI: true,
      scrollwheel: false
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        icon: '/marker.png',
        map: map,
        title: 'Мы здесь'
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);

});

