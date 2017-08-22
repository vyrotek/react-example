import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Store from './Store';
import './App.css';

@inject('store') @observer
export default class Timer extends React.Component<{ store: Store }, {}> {

    render() {
        return (
            <button onClick={this.onReset}>
                Seconds: {this.props.store.timer}
            </button>
        );
    }

    onReset = () => {
        this.props.store.resetTimer();
    }

}
