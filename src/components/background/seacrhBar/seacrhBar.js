import React from 'react';
import Aux from '../../HOC/Auxilary'
import classes from './searchBar.module.css'
const search=(props)=>(
    <Aux  >
        <form onSubmit={props.submited} className={classes.form}>
        <input className={classes.containerIp} placeholder="Search over 20000 cities"
        ></input>
        {/* <input type='submit' value='Submit'></input> */}
        </form>
       
    </Aux>
)
export default search;