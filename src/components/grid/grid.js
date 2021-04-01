import React from 'react';
import Aux from '../HOC/Auxilary'
import classes from './grid.module.css'
const grid=(props)=>{
let len=props.data.length;

// console.log(props.data[0]?props.data[0].feels_like:'');
const sunRise=props.data.length===3?new Date(props.data[1].sunrise*1000):null;
const sunSet=props.data.length?new Date(props.data[1].sunset*1000):null;
let gridClass;
gridClass=props.location!==''?classes.gridItem:classes.gridItemBefore
return <Aux>
    <div className={classes.gridContainer}>
        <div className={gridClass}>Location</div>
        <div className={gridClass}>{props.location}</div>
        <div className={gridClass}>Temprature</div>  
        <div className={gridClass}>
            {len===3?`(${(props.data[0].temp_min-273).toFixed(2)}°C`:''}
            {","}
            {len===3?`${(props.data[0].temp_max-273).toFixed(2)}°C)`:''}
        </div>
        <div className={gridClass}>Pressure</div>  
        <div className={gridClass}>
            {len===3?(props.data[0].pressure)+'hPa':''}
        </div>
        <div className={gridClass}>wind speed</div>  
        <div className={gridClass}>
            {len===3?(props.data[2].speed)+'m/s':''}
        </div>
        <div className={gridClass}>Sun rise</div>  
        <div className={gridClass}>
            {sunRise?`${sunRise.getHours()}:${sunRise.getMinutes()}:${sunRise.getSeconds()}AM`:''}
        </div>
        <div className={gridClass}>Sun set</div>  
        <div className={gridClass}>
            {sunSet?`${24-sunSet.getHours()}:${sunSet.getMinutes()}:${sunSet.getSeconds()}PM`:null}
        </div>
    </div>


</Aux>;
}
export default grid;