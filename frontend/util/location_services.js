export const getUserLocationSecure = () =>  {
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
