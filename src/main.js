import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom'
import superagent from 'superagent';
// import {MemoryRouter} from 'react-router-dom'
// import {Provider} from 'react-redux'

import './style/main.scss';

// const store = createStore();

class Main extends React.Component {

    render() {
        return (
          'hi'
            // <Provider store={store}>
            //     <MemoryRouter>
                    // <App/>
            //     </MemoryRouter>
            // </Provider>
        )
    }
}



ReactDom.render(<Main/>, document.getElementById('root'));
