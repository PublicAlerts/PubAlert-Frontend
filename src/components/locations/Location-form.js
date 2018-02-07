import React from 'react';
import store from '../../appState/store'



class LocationForm extends React.Component {

  constructor(props) {

    super(props);

    let initialState = {
      location:'',
      alertId: this.props.alertId,
      place: this.props.alertPlace
    }

    this.state = this.props.location || initialState;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.formState = this.props.formState;
    this.submitState = this.props.submitState;
    this.deleteButton = this.props.submitText !== 'Update' ? 'invisible' : '';

  }

  updatePlace(){
      let remainingPlace = this.state.remainingPlace - this.state.cost;
      this.setState({remainingPlace});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.handler, this.state);
    this.state.cost = parseInt(this.state.cost);
    this.props.handler( Object.assign({}, this.state));
    this.setState({location: '' })
  }

  handleChange(e) {
    this.setState({[e.target.name]:e.target.value});
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.alertPlace !== nextProps.alertPlace){
      let alertPlace = nextProps.alertPlace;
      this.setState({alertPlace});
    }
  }

  render() {

    return (
      <form className="LocationForm" onSubmit={this.handleSubmit} >
        <div id='LocationDiv'>

          <input
            className={this.formState}
            id="locationName"
            type="text"
            name="location"
            value={this.state.location}
            placeholder="location"
            required
            onChange={this.handleChange}
            />

          <a id='deleteLocation' className={this.deleteButton} href="#" onClick={()=>this.props.handleDelete(this.props.location)}> remove </a>
        </div>
        <input
        id='locationSubmitButton'
        className={this.submitState}
        type='submit'
        value={this.props.submitText}/>
      </form>
    )
  }
}



export default LocationForm;
