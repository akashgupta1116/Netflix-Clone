import React from 'react';
import Homepage from './components/Homepage'

class PrivateRoute extends React.Component {

    constructor(props){
        super(props);

        this.state={
            user:JSON.parse(localStorage.getItem('profileObj'))
        }
    }
  
    render() {
      let { as: Comp, ...props } = this.props;
      return this.state.user ? <Comp {...props} /> : <Homepage />;
    }
  }
  export default PrivateRoute;