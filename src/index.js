import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { stopReportingRuntimeErrors } from "react-error-overlay";
import './main.css';
import Paging from './paging.js'
import Main from './components/main-sun_2020_10_13.js'
import { BrowserRouter } from 'react-router-dom';

if (process.env.NODE_ENV === "development") {
  stopReportingRuntimeErrors(); // disables error overlays
}
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Main />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();