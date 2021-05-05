import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './reducers';
import { createBrowserHistory } from 'history';
import rootSaga from './saga';
import rootMiddleware from './middleware';

const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});
const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routeMiddleware, ...rootMiddleware];

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

declare global {
    interface Window {
        store: any;
    }
}

export default function configureStore(initialState = {}) {
    const store = createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers(applyMiddleware(...middlewares))
    );
    sagaMiddleware.run(rootSaga);

    window.store = store;
    return store;
}
const store = configureStore();
export { history, store };
