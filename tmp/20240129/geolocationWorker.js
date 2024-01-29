self.onmessage = function(e) {
    if (e.data === 'getLocation') {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                postMessage("Latitude: " + latitude + ", Longitude: " + longitude);
            }, function(error) {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        postMessage("User denied the request for Geolocation.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        postMessage("Location information is unavailable.");
                        break;
                    case error.TIMEOUT:
                        postMessage("The request to get user location timed out.");
                        break;
                    case error.UNKNOWN_ERROR:
                        postMessage("An unknown error occurred.");
                        break;
                }
            });
        } else {
            postMessage("Geolocation is not supported by this browser.");
        }
    }
};
