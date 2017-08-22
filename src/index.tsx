import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as MobX from 'mobx';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Store from './Store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// No state changes allowed outside of @actions
MobX.useStrict(true);

const store = new Store();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
