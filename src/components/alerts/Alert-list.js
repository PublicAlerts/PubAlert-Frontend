import React from 'react';
import {connect} from 'react-redux';
import AlertItem from './Alert-item';


class AlertList extends React.Component {

  render() {

    const alerts = this.props.alerts.alerts;
    let border="";
    if(!alerts.length) border="no_show";
    else border="show";

    return (
      <div id="kanban" className={border}>
        {
            alerts.map(alert =>
            <AlertItem handleDelete={this.props.handleDelete}
              handleUpdate={this.props.handleUpdate}
              key={alert.id} alert={alert}
            />)
        }
      </div>
    )
  }
}



export default AlertList;
