import * as React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import Timer from './Timer';
import Clicks from './Clicks';

export default class App extends React.Component<{}, {}> {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>
            <Link to={'/timer'}>Timer</Link> or <Link to={'/clicks'}>Clicks</Link>
          </h2>
        </div>
        <div className="App-content">
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/timer" component={Timer} />
          <Route exact={true} path="/clicks" component={Clicks} />
        </div>
      </div>
    );
  }

}
