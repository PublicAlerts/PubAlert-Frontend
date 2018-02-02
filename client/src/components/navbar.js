import React from 'react';
import {renderIf} from '../lib/__'



class Navbar extends React.Component {

    constructor(props) {
        super(props)

    this.startText = this.startText.bind(this);
    }

    startText() {
      this.props.switchRoute('/text');
    }



    render() {
        return (
            <nav>
                {renderIf(this.props.auth,
                    <ul>
                    <li onClick={this.startText}>Text</li>
                    <li onClick={ () => this.props.switchRoute('/profile') }>Profile</li>
                    <li onClick={this.props.logout}>Logout</li>
                    </ul>
                )}
            </nav>
        )
    }
}



export default Navbar;
