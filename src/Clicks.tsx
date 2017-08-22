import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Store from './Store';
import './App.css';

@inject('store') @observer
export default class Clicks extends React.Component<{ store: Store }, {}> {

    render() {
        return (
            <button onClick={this.onClick}>
                Clicks: {this.props.store.clicks}
            </button>
        );
    }

    onClick = () => {
        this.props.store.click();
    }

}
