const weather=(()=>{
  function convertData(data){
     const {
        location: {name:cityName},
        current: {temp_c: temperature, feelslike_c: feelsLike, humidity},
        current: {wind_kph: windSpeed},
     }=data;

     return {cityName,temperature,feelsLike,humidity,windSpeed};
  }

  async function getData(city){

    const api=`https://api.weatherapi.com/v1/current.json?key=6ffd31e03c064febb8c151815232106&q=${city}`;
    try {
        const response=await fetch(api,{ mode: "cors" });
        if(!response.ok) throw new Error(`City ${city} not found`);
        const data=convertData(await response.json());
        return data;
    } catch (error) {
        alert(error);
        return null;
    }
  }
  return {getData};
})()

export default weather;