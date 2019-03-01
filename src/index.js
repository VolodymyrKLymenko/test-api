import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"

import './index.css';
import store from './configureStore';
import AppRouter from './AppRouter';

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('root')
);

///
/// http://erp.preview.com.ua/customers
/// https://erp.interlogic.com.ua/dashboard
///
