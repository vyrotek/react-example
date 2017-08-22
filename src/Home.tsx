import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Store from './Store';
import './App.css';

@inject('store') @observer
export default class Home extends React.Component<{ store: Store }, {}> {

    render() {
        return (
            <div>
                <h3>Timer: {this.props.store.summary.timer} - Clicks {this.props.store.summary.clicks}</h3>
            </div>
        );
    }

}
