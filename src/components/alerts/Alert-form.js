import React from 'react';

class AlertForm extends React.Component {

  constructor(props) {

    super(props);

    this.state = this.props.alert || {name:'', location:''},

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.formState = this.props.formState;
    this.submitState = this.props.submitState;
    this.deleteButton = this.props.submitText !== 'Update' ? 'invisible' : '';
  }


  handleSubmit(e) {
    e.preventDefault();
    this.state.place = parseInt(this.state.place);
    this.props.handler( Object.assign({}, this.state));
    if(this.props.submitText !== 'Update') this.setState({ name: '', place: '' });
    else {
       this.submitState = 'hidden';
       this.formState = 'inactive';
    }
  }


  handleChange(e) {
    this.setState({[e.target.name]:(e.target.value).toUpperCase()});
  }

  render() {
    return (

      <form id="formDefault" onSubmit={this.handleSubmit} >
        <div id="alertForm">
        <input
          className={this.formState}
          id="alertName"
          type="text"
          name="name"
          value={this.state.name}
          required
          placeholder="alert"
          onChange={this.handleChange}
          />

        <a id='deleteButton' className={this.deleteButton} href="#" onClick={()=>this.props.handleDelete(this.props.alert.id)}> remove </a>
        </div>
        <input
        id='alertSubmitButton'
        className={this.submitState}
        type='submit'
        value={this.props.submitText}/>
      </form>
    )
  }
}



export default AlertForm;




/*
<input
  className={this.formState}
  id="locationName"
  type="text"
  name="name"
  value={this.state.place}
  required
  placeholder="location"
  onChange={this.handleChange}
/>
*/
