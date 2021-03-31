import React from 'react';
import Aux from '../HOC/Auxilary'
import classes from './spinner.module.css';
const spinner=()=>(
    <Aux className={classes.spinner} id={spinner}>
        <div className={classes.loader} >Loading...</div>
    </Aux>
)
export default spinner;