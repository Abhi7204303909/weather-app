import React from 'react';
import classes from './weekly.module.css';
import Daily from '../../Container/Weekly/Daily'
import Aux from '../HOC/Auxilary'
//<Week day={day} temperature={el.main.feels_like} windSpeed={el.wind.speed}
//description={el.weather[0].description}/>
const week=(props)=>(
    <Aux>
       
        <div className={classes.Container}>
        <div className={classes.item}>
            <p>
                <h3 style={{textShadow:'2px 2px 2px gray'}}>{props.day}</h3>
                feelLike {props.temperature}
                <br/>
                windSpeed   {props.windSpeed +'m/s'}
                <br/>
                {props.description}
            
            </p>
             
        </div>

    </div>
    </Aux>
  
)
export default week;