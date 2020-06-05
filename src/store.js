import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

import loggerMiddleware from 'middlewares/logger';
import robotMiddleware from 'middlewares/robot';
import chatActiveMiddleware from 'middlewares/chatActive';
import initReducer from 'reducers';

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['chats', 'profile', 'router'], // чтобы не сохранять данные в локалсторедж
};

export const initStore = () => {
  const initialStore = {};
  const store = createStore(
    persistReducer(persistConfig, initReducer(history)),
    initialStore,
    composeWithDevTools(
      applyMiddleware(
        loggerMiddleware,
        robotMiddleware,
        chatActiveMiddleware,
        // apiMiddleware,
        thunk,
        routerMiddleware(history),
      ),
    ),
  );

  const persistor = persistStore(store);

  return { store, persistor };
};
