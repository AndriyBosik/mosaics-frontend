import React, { Component } from 'react';
import PageNotFound from '../PageNotFound/PageNotFound';
import HomeLink from './../HomeLink/HomeLink';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        console.log(error);
        return {
            error: error,
            hasError: true
        };
    }

    render() {
        if (this.state.hasError) {
            if (this.state.error.code === 404) {
                return (
                    <img src="./errors/404.png" alt="page_not_found" className="equal-flex" />
                );
            }
            return (
                <div className="full-width center-align">
                    <div className="window-height s-vflex-center">
                        <h1>Error Happened</h1>
                        <div className="center-align">
                            <HomeLink />
                        </div>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;