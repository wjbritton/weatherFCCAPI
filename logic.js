console.log('Js')
let count = 1
let C, F
let zipAPI = '26K5OqfYf1XeumZPiKDbC1wh2TjtdZwf5hkTHzRXBPb6cbWuWzFyAcQC696j8Cze'
$(window).on('load',function startGameButton(){

        $('#tempType').on('click', function temp () {
            const temp = ['F', 'C']
            count++
            let odd = count % 2
            $('#FC').html(temp[odd])
            console.log(odd)
          if (odd === 0) {
            console.log(F)
            $('#temp').html(F + " F")
          } else {
            console.log(C)
            $('#temp').html(C + " C")
          }
        })

        var x = document.getElementById("LogLat");

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
        } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function tempature(temp) {
      console.log(temp)
      JSON.stringify(temp)
      console.log(temp)
        C = temp.toFixed(0)
        F = (temp  * 1.8 + 32).toFixed(0)
    }
    // function btnClick() {}

function showPosition(position) {
    let temp
    let lat = position.coords.latitude
    let long = position.coords.longitude;
    lat = lat.toFixed(2)
    long = long.toFixed(2)
    let api = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long
    $.ajax({
        url: api,
        type: "GET",
        success: function(response) {
            temp = response.main.temp
            console.log(temp)
            tempature(temp)
          }
    })
  }
getLocation()
})
