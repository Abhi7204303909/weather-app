import React,{Component} from 'react';
import Search from '../../components/background/seacrhBar/seacrhBar'
import Week from '../../components/DailyForecast/weeklyForecast'
import Aux from '../../components/HOC/Auxilary'
import classes from './Daily.module.css'
import {LOC} from '../wrapper'

class Daily extends Component{
   state={
       data:null,
      
   }
 
   searchLocationHandler=(e)=>{
       e.prevenDefault()
    //    console.log(e);
    //    console.log('[inside Daily]',e.target.value);
   }
    componentDidMount(){
        let arr=[];
        // console.log(LOC);
        if(LOC==='')return
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${LOC}&appid=9a566627df04c9ed63f4c5c0d254cc44`)
        .then(res=>{
            return res.json()
        })
        .then(el=>{
            // console.log(el.list);
            // console.log(el.list);
            el.list.forEach(e=>{
                 let da=new Date(e.dt*1000).getDate();
                 let ha=new Date(e.dt*1000).getHours();
              
                 let Main=e.main;
                 let Weather=e.weather;
                arr.push({date:da,hour:ha,main:Main,weather:Weather,wind:e.wind,timeStamp:e.dt});
                //  console.log(arr);
                
            }) 
            
            this.setState({data:arr})
        })
        .catch((err)=>{
            // console.log(err.message);
        })
    }
    render(){
         let renderData=this.state.data?this.state.data:[];
         let filterdArray=[];
         let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Satarday'];
         let renderComp=null;
         if(renderData.length!=0){
             filterdArray=renderData.filter((el)=>{
               return Math.abs(el.hour-new Date().getHours())<=1;
                
            })
        //  console.log(filterdArray);
            

         }
        if(filterdArray.length===5)
         {renderComp=filterdArray.map(el=>{
                let day;
                if(new Date(el.timeStamp*1000).getDay()===new Date().getDay())day='today';
                else{
                    day=days[new Date(el.timeStamp*1000).getDay()]
                }
                return <Week day={day} temperature={(el.main.feels_like-273).toFixed(2)+'°C'} windSpeed={el.wind.speed}
                description={el.weather[0].description} className={classes.item}/>
            })
        }
     
        //  console.log(filterdArray);
           return (
                <Aux>
                       
                        <div className={classes.AuxContainer}>
                        {renderComp}
                        </div>
                      
                        
                </Aux>
               
            )
    }
}
export default Daily;