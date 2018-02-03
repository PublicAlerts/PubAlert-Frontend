import React from 'react';
import {renderIf} from '../lib/__'



class Navbar extends React.Component {

    constructor(props) {
        super(props)

    this.startChat = this.startChat.bind(this);
    }

    startChat() {
      this.props.switchRoute('/chat');
    }



    render() {
        return (
            <nav>
                {renderIf(this.props.auth,
                    <ul>
                    <li onClick={this.startChat}>Chat</li>
                    <li onClick={ () => this.props.switchRoute('/profile') }>Profile</li>
                    <li onClick={this.props.logout}>Logout</li>
                    </ul>
                )}
            </nav>
        )
    }
}



export default Navbar;
