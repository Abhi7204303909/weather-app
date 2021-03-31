import React,{Component} from 'react';
import Aux from '../HOC/Auxilary'
import {Route,Link} from 'react-router-dom'
import classes from './FiveDayForeCast.module.css'
import Wrapper from '../../Container/wrapper';
import Daily from '../../Container/Weekly/Daily'
class ForeCast extends Component{
    
    render(){
        return (
            <Aux >
                        <nav className={classes.NavigationBar}>
                            <ul className={classes.bar}>
                                <li className={classes.forecast}><Link style={{textDecoration:'none',color:'white'}} to='/forecast'>Weekly forecast</Link></li>
                                <li className={classes.Notification}><Link style={{textDecoration:'none',color:'white'}} to='/'>Home</Link></li>
                                
                            </ul>
                        </nav>
                    <Route path='/forecast' component={Daily}/>
                    <Route path='/' exact component={Wrapper}/>
        </Aux>
        );
    }
    
}
export default ForeCast;