function initMap() {
    // The location of Uluru
    var deaseLake = {lat: 58.437, lng: -130.000};
    var fortNelson = {lat: 58.805, lng: -122.700};
    var terrace = {lat: 54.515, lng: -128.610};
    var princeGeorge = {lat: 53.916, lng: -122.749};
    var whistler = {lat: 50.116, lng: -122.957};
    var revelstoke = {lat: 50.983, lng: -118.202};
    var creston = {lat: 49.095, lng: -116.510};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 6, center: princeGeorge});
  
    // The marker, positioned at Uluru
    var marker1 = new google.maps.Marker({position: deaseLake, map: map});
    var marker2 = new google.maps.Marker({position: fortNelson, map: map}); 
    var marker3 = new google.maps.Marker({position: terrace, map: map});
    var marker4 = new google.maps.Marker({position: princeGeorge, map: map});
    var marker5 = new google.maps.Marker({position: whistler, map: map});
    var marker6 = new google.maps.Marker({position: revelstoke, map: map});
    var marker7 = new google.maps.Marker({position: creston, map: map});

    google.maps.event.addListener(marker1, 'click', () => {
        $('#deaseLakeWeather').modal({
            keyboard: false
          })
    })

    google.maps.event.addListener(marker2, 'click', () => {
        $('#fortNelsonWeather').modal({
            keyboard: false
          })
    })

    google.maps.event.addListener(marker3, 'click', () => {
        $('#terraceWeather').modal({
            keyboard: false
          })
    })

    google.maps.event.addListener(marker4, 'click', () => {
        $('#princeGeorgeWeather').modal({
            keyboard: false
          })
    })

    google.maps.event.addListener(marker5, 'click', () => {
        $('#whistlerWeather').modal({
            keyboard: false
          })
    })

    google.maps.event.addListener(marker6, 'click', () => {
        $('#revelstokeWeather').modal({
            keyboard: false
          })
    })

    google.maps.event.addListener(marker7, 'click', () => {
        $('#crestonWeather').modal({
            keyboard: false
          })
    })
  }