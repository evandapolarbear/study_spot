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
      network_name: '',
      password: '',
      coffee: false,
      plugs: false,
      bar: 'none'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.goToMain = this.goToMain.bind(this);
  }

  goToMain(){
    this.props.router.push("/");
  }

  handleSubmit(e){
    e.preventDefault();
    let newSpot = Object.assign({}, this.state, this.pos);
    this.props.createSpot({spot: newSpot});
    this.goToMain();
  }

  update(field){
    return e => this.setState({
      [field]: e.target.value
    });
  }

  render(){
    let {name, network_name, password, coffee, plugs, bar} = this.state;
    let { lat, lng } = this.pos;

    return (
      <div className='new-spot-container'>
        <div className='new-spot-form'>

          <form onSubmit={this.handleSubmit}>

            <label className='spot-field'>Location Name</label>
              <input type='text' value={name}
                onChange={this.update('name')} className='spot-field'/>

              <label className='spot-field'>Network Name</label>
              <input type='text' value={network_name}
                onChange={this.update('network_name')} className='spot-field'/>

              <label className='spot-field'>Password if applicable</label>
              <input type='text' value={password}
                onChange={this.update('password')} className='spot-field'/>

            <label className='spot-radio'>Coffee</label>
                <input type='radio' name='coffee' value={false} onChange={this.update('coffee')} /><span className='radio-text'>false</span>
                <input type='radio' name='coffee' value={true} onChange={this.update('coffee')} /><span className='radio-text'>true</span>

            <label className='spot-radio'>Plugs</label>
                <input type='radio' name='plugs' value={false} onChange={this.update('plugs')} /><span className='radio-text'>false</span>
                <input type='radio' name='plugs' value={true} onChange={this.update('plugs')} /><span className='radio-text'>true</span>

            <label className='spot-radio'>Bar</label>
                <input type='radio' name='bar' value='none' onChange={this.update('bar')} /><span className='radio-text'>None</span>
                <input type='radio' name='bar' value='soft' onChange={this.update('bar')} /><span className='radio-text'>Soft</span>
                <input type='radio' name='bar' value='hard' onChange={this.update('bar')} /><span className='radio-text'>Hard</span>

            <input type='submit' value='Submit New Spot' className='spot-submit-button'/>
            <button className='cancel-button' onClick={this.goToMain}>Canael New Spot</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SpotForm);
