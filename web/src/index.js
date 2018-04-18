import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'rxjs';
import 'muicss/dist/css/mui.css'
import {Provider} from 'react-redux';
import store from './store';
import App from './containers/App';

const Root = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(<Root/>, document.getElementById('root'));
