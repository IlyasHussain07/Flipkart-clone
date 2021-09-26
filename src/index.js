import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import FlipkartStore from './redux/FlipkartStore'
import {Provider} from 'react-redux'

ReactDOM.render(
   <Provider store={FlipkartStore}>
        <App />
   </Provider>
    ,document.getElementById('root')
);

