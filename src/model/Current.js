class Current {
    constructor(rawData){
    const{name,sys,main,wind,weather}=rawData;
        this.name=name;
        this.country=sys.country;
        this.description=weather.main;
        this.humidity=main.humidity;
        this.windspeed=wind.speed;
        this.tempCelsius=main.temp;
        this.tempFahrenheit=this.CalculateFahrenheit(main.temp);
        this.winddirection=this.CalculateWinddirection(wind.deg);
    }

    CalculateFahrenheit(celsius){
      const fahrenheit=(celsius*9)/5+32;
      return Number.parseFloat(fahrenheit.toFixed(2));
        
    }
    CalculateWinddirection(degree){
        const direction=["N","NE","E","SE","S","SW","W","NW"];
        const value= Math.floor((degree+22.5)/45);
        return direction[value%8];
    }
}
module.exports=Current;