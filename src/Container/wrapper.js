import React ,{Component} from 'react';
import Aux from '../components/HOC/Auxilary'
import classes from './wrapper.module.css';
import Grid from '../components/grid/grid'
import Spinner from '../components/Spinner/spinner'
import Search from '../components/background/seacrhBar/seacrhBar'
import FiveDayForeCast from '../components/Routing/FiveDayForeCast'
// import LOC from '../config/config'
let LOC;
class wrapper extends Component{
    state={
        location:'',
        data:null,
        loading :false,
        error:false
       
      }
      weatherData=[];
      searchLocationHandler=(event)=>{
        event.preventDefault();
        const city=event.target.firstChild.value;
        let updateCity=city[0].toLowerCase()+city.slice(1,city.length)
        // console.log(city);
        this.setState({loading:true})
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${updateCity}&appid=9a566627df04c9ed63f4c5c0d254cc44`)
        .then(res=>{
          return res.json();
        })
        .then(el=>{
          let arr;
           arr={...el}
          
          this.setState({data:[arr],location:arr.name,loading:false});
          // LOC=arr.name;
          // console.log(arr); 
        })
        .catch(()=>{
          this.setState({loading:false,error:true});
        })
       
    
      }
      render(){
         LOC=this.state.location!==''?this.state.location:'';
        // console.log('LOC LOG',LOC);
        this.weatherData=this.state.data?
        [this.state.data[0].main,this.state.data[0]
        .sys,this.state.data[0].wind]:[];
        let val=this.state.data?this.state.data[0].cod:null
         if(val==='404' || this.state.error){
            return <h3 style={{textAlign:'center',color:'Red'}}>
            something went wrong!! <strong>;(</strong> check the network connection or try to enter a valid city name</h3>
         }
       
        this.state.error=val==='404'?true:false;
       
    return (
        
                  <Aux>
            {this.state.loading?<Spinner className='attach'/>:null}
          {/* {this.state.loading?null:<FiveDayForeCast/>} */}
            {this.state.loading?null:<Search submited={e=>{this.searchLocationHandler(e)}}/>}
            {this.state.loading?null:<div className={classes.description}>
          
              {this.state.data===null?<p style={{textShadow:'3px 3px 3px gray'}}>
                Want to know how is the weather in your location?
              </p>:null}
              {this.state.data?
            <p>Feels like {(this.state.data[0].main.feels_like-273).toFixed(2)+'°C'} in 
            {this.state.location} </p>:null}
          </div>}
           {this.state.loading?null:<Grid location=
           {this.state.location?this.state.location:''} data=
           {this.weatherData.length!==0?this.weatherData:''}/>}
         </Aux>
  );
       
      }
}
export default wrapper;
export {LOC};