import React from 'react';
import { Link, withRouter } from 'react-router';

class SpotFrom extends React.Component {
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
    this.goHome = this.goHome.bind(this);
  }

  goHome(){
    this.props.router.psuh("/");
  }

  submitForm(e){
    e.preventDefault();
    const spot = Object.assign({}, this.state, this.pos);
    this.props.createSpot({ spot });
    this.goHome();
  }

  render(){
    let {name, networkName, password, coffee, plugs, bar} = this.state;
    let { lat, lng } = this.pos;

    return (
      <div className='new-spot-container'>
        <div className='new-spot-form'>

          <form onSubmit={this.submitForm}>

          </form>
        </div>
      </div>
    );
  }
}
