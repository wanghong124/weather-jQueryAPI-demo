/**
 * Created by Administrator on 2016/12/12.
 */
//默认最常访问记录
//var CITY_DATA_KEY="CITY_DATA";//localStorage储存名
var CITY_DATA_KEY="CITY_DATA";//localStorage储存名
var cityArray=[{//数组对象
    name: "北京",//城市
    count: "0",//点击次数
    dateTime: new Date().getTime()//当前时间毫秒

},{
    name:"上海",
    count:"0",
    dateTime: new Date().getTime()

},{
    name:"深圳",
    count:"0",
    dateTime: new Date().getTime()

},{
    name:"广东",
    count:"0",
    dateTime: new Date().getTime()

},{
    name:"西安",
    count:"0",
    dateTime: new Date().getTime()

},{
    name:"天津",
    count:"0",
    dateTime: new Date().getTime()

},{
    name:"广州",
    count:"0",
    dateTime: new Date().getTime()

},{
    name:"武汉",
    count:"0",
    dateTime: new Date().getTime()

}];



    function getCity(){
        var cityDate=localStorage.getItem(CITY_DATA_KEY);//取key储存

        if(!cityDate){//当没有储存值得时候 储存默认8个转JSON格式
            localStorage.setItem(CITY_DATA_KEY,JSON.stringify(cityArray));
            return cityArray;//返回 默认8个JSON
        }else{//否则 有的话直接取
            return JSON.parse(cityDate);//
        }

    }

    //var aa=localStorage.getItem('message');//省名
    //var bb=localStorage.getItem('message1');//城市
    //for(var i in city1){
    //
    //    for(var j in city1[i][aa]){
    //
    //
    //    }
    //    var city=city1[i][aa][j][bb]['n'];
    //    console.log(city)
    //}

    function addCity(city){//第三张页面的
        var getcity=getCity();//赋值上面的函数方法
        var isHave=getcity.some(//满足一个条件 返回true
            function (value,index){
                console.log(value.name);
                console.log(city)
                if(value.name==city){//点击重复的时候
                    getcity[index].count++;//次数加1
                    getcity[index].dateTime=new Date().getTime();
                    return true//赋值当前时间

                }else{
                    return false;//一个都没 返回false
                }
            });
            // console.log(isHave)
            if(!isHave){//点击城市一个都没有的时候 返回false  添加到是默认数组对象中
                getcity.push({
                    name:city,
                    count:1,
                    dateTime:new Date().getTime()
                })
            }

        localStorage.setItem(CITY_DATA_KEY,JSON.stringify(getcity));
        //key值CITY_DATA_KEY 储存 上面的一切

    }

    //点击次数排序
function getCityOrderByTimes(number) {

    var cityData = getCity();//赋值getcity函数
    cityData.sort(function (a, b) {
        return b.count - a.count;//点击事件排序
    });
    return !number ? cityData : cityData.splice(0,number);
    //返回true getCity()不变（上面点击次数+1） 一个都没返回false 点击的添加默认数组第0项
}

    //最后点击事件排序
function getCityOrderByDate(number) {
    var cityData = getCity();
    console.log(cityData);
    cityData.sort(function (a, b) {
        return b.dateTime - a.dateTime;//时间从大到小
    });
    console.log(cityData);
    return !number ? cityData : cityData.splice(0,number);
}   //返回true getCity()不变（上面点击次数+1） 一个都没返回false 点击的添加默认数组第0项目











