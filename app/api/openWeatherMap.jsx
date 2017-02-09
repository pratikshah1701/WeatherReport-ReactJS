var axios=require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=5b4e42e7139f8d2760568e368018e578&units=imperial';


module.exports={

  getTemp:function(location){
    var encodedLocation=encodeURIComponent(location);
    var requestUrl=`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    //debugger;
    return  axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    },function(err){
        throw new Error('Unable to fetch the weather for that location.');
      });


  }


}
