import React,{Component} from 'react';

class ErrorBoundry extends Component{
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }
        console.log('constructor of error Boundry');
    }

    componentDidCatch(error,errorInfo){
        this.setState({hasError:true});
        console.log("Error comp",this.state);
        console.log(error, errorInfo);
    }
    render(){
      return  this.state.hasError?<p>something went wrong
             <strong>:(</strong></p>:this.props.children;
    }
}
export default ErrorBoundry;