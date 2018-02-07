
import React from 'react';

import {connect} from 'react-redux';

import AlertForm from './Alert-form';
import AlertList from './Alert-list';
import store from '../../lib/store';

import {createAlert, updateAlert, deleteAlert} from './alertState/alert-actions';

class Alerts extends React.Component {

  constructor(props) {
		super(props);

		this.state = {
			submitText: 'Add Alert'
		}
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.alert){
			this.setState(nextProps.alert)
		}
	}

  render() {
		return (
			<div id="alertWrapper">
				<AlertForm submitText={this.state.submitText} handler={this.props.handleAddAlert} />
				<AlertList
				 alerts={this.props.alerts}
				 handleDelete={this.props.handleDeleteAlert}
				 handleAlerts={this.props.alerts} />
			</div>
    )
  }
}

const mapStateToProps = (state) => ({
  alerts: state
});

const mapDispatchToProps = (dispatch, getState) => ({
	handleAddAlert: alert => dispatch(createAlert(alert)),
  handleDeleteAlert: alert => dispatch(deleteAlert(alert)),
	handleUpdateAlert: alert => dispatch(updateAlert(alert))
});



export default connect(mapStateToProps,mapDispatchToProps)(Alerts);
