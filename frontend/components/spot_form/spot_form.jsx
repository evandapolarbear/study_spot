import React from 'react';
import { Link, withRouter } from 'react-router';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);

    this.pos = {
      lat: props.lat,
      lng: props.lng
    };

    //bar can be none, hard, or soft

    this.state = {
      name: '',
      networkName: '',
      password: '',
      coffee: false,
      plugs: false,
      bar: 'none'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  goHome(){
    this.props.router.push("/");
  }

  submitForm(e){
    e.preventDefault();
    const spot = Object.assign({}, this.state, this.pos);
    this.props.createSpot({ spot });
    this.goHome();
  }

  handleSubmit(){
    
  }

  render(){
    let {name, networkName, password, coffee, plugs, bar} = this.state;
    let { lat, lng } = this.pos;

    return (
      <div className='new-spot-container'>
        <div className='new-spot-form'>

          <form onSubmit={this.submitForm}>

          </form>

          <h4>Hello</h4>
        </div>
      </div>
    );
  }
}

export default withRouter(SpotForm);
