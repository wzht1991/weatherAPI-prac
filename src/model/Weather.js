const Current=require("./Current");
const Forcast=require("./Forcast");
const axios=require("../axios");
class Weather{
  getdata(city){
      return Promise.all(getweatherdata(city))
      .then(data=>{
          const current=data[0].data;
          const forcast=data[1].data;
          const weather={
              currentWeather: new Current(current),
              ForcastWeather: forcast.list.map(i=>new Forcast(i)) 
          }
          return weather;
      });
      
  }
  
}
// getdata 他不是function 他是对象 在类中的都是对象 function 是在class 外的
module.exports=new Weather();
function getweatherdata(city){
    const url=["/weather","/forecast"];
    // const city_country=`${city},${country}`;
    const city_country=`${city}`;
    return url.map(i=>{
        if(i=="/weather"){
            return axios.get(i,{
            params:{q:city_country}
          });
        } else{
            // cnt:5 openweather 里面给的 显示5个的意思
            return axios.get(i,{
                params:{q:city_country,
                    cnt:5}
              });
        }
        
    })
};
