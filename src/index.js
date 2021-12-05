import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/Routes/AppRoutes';
import { history } from "./handler/HistoryHandler";
import 'materialize-css/dist/css/materialize.min.css';
import './shared/css/common.css';
import './shared/css/indentations.css';
import './shared/css/materialize-extensions.css';
import './shared/css/site.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter history={history}>
            <ErrorBoundary>
                <AppRoutes />
            </ErrorBoundary>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
