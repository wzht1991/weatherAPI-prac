const Current =require('./Current');
// 留意这里的raw data 是 list 下面的数据 不是整个forcast 所以可以直接rawData.dt_txt 
class Forcast extends Current {
    constructor(rawData){
        // 调用继承都需要用super 来调用父类
        super(rawData)
        const {main}=rawData;
        this.time=rawData.dt_txt.split(" ")[1];
        this.temp_max_C=main.temp_max;
        this.temp_min_C=main.temp_min;
        this.temp_max_F=this.CalculateFahrenheit(main.temp_max);
        this.temp_min_F=this.CalculateFahrenheit(main.temp_min);
    }
}

module.exports=Forcast;