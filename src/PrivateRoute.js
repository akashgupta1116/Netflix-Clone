import React from 'react';
import Homepage from './components/Homepage'
import { Redirect } from '@reach/router';

class PrivateRoute extends React.Component {

    constructor(props){
        super(props);

        this.state={
            user:null
        }
    }
    componentWillMount(){
      debugger;
      console.log('yo')
      let user = JSON.parse(localStorage.getItem('profileObj'));
      if(user){
        this.setState({
          user:user
        })
      }
    }
  
    render() {
      let { as: Comp,location, ...props } = this.props;
      return this.state.user ? <Comp {...props} />:<Redirect from="" to='/' noThrow /> ;
    }
  }
  export default PrivateRoute;