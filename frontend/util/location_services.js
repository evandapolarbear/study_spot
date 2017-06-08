export const getLocationByHTTPS = () =>  {
  let geoOptions = {
      enableHighAccuracy: true,
      maximumAge        : 30000,
      timeout           : 27000
    };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => {

      if(position){
        resolve(position.coords);
      } else {
        reject(position);
      }
    });
  });
}

export const getLocationByIp = () => {
  return new Promise((resolve, reject) => {
    $.getJSON("http://ip-api.com/json", data => {
      let latitude = data.lat;
      let longitude = data.lon;

      if (latitude && longitude) {
        resolve({latitude, longitude})
      } else {
        reject(data)
      }
    });
  })
}
