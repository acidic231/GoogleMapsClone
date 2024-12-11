mapboxgl.accessToken = 'pk.eyJ1IjoidG9tdzc0NDMiLCJhIjoiY200ajUxZ3B1MDkwcTJsb2JobzRwYjlyeiJ9.YUWt9cuv1boV4AMxhzP72g';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

function successLocation(position){
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setupMap([0,0])
}

function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 16
    })
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: 'pk.eyJ1IjoidG9tdzc0NDMiLCJhIjoiY200ajUxZ3B1MDkwcTJsb2JobzRwYjlyeiJ9.YUWt9cuv1boV4AMxhzP72g'
      });
      
      map.addControl(directions, 'top-left');
}

