import React from 'react';
import ReactDom from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

import routes from './routes';
import { initStore, history } from './store';

const { store, persistor } = initStore();

ReactDom.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <React.Suspense fallback={<p>Loading...</p>}>
          <Switch>
            {routes.map((route) => (
              <Route key={route.id} {...route} />
            ))}
          </Switch>
        </React.Suspense>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
