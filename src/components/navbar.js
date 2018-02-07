import React from 'react';
import {Link} from 'react-router-dom'



class Navbar extends React.Component {

  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/alerts">Alerts</Link></li>
        </ul>
      </nav>
    )
  }
}



export default Navbar;
