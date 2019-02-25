
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker//';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));

registerServiceWorker();

