import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './assets/scss/base/_base.scss';
import './assets/scss/base/_font.scss';
import './assets/scss/base/_typography.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

/**
|--------------------------------------------------
| Main app initialization
| Preparing Redux for App with Providers
| Rendering App inside wrapper element
|--------------------------------------------------
*/
render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('wrapper')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
