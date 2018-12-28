// Initialize and add the map
function initMap() {
  // The location of Balatoncsicso
  var balatoncsicso = {lat: 46.92775, lng: 17.66897};
  // The map, centered at Balatoncsicso
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: balatoncsicso});
  // The marker, positioned at Balatoncsicso
  var marker = new google.maps.Marker({position: balatoncsicso, map: map});
}
google.maps.event.addDomListener(window, 'load', init);