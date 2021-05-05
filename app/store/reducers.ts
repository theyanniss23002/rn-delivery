import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import reducersLazyLoad from './reducersLazyLoad';

const reducers: any = {};

reducersLazyLoad((module: any, path: any) => {
    if (module.moduleName && module.default) {
        reducers[module.moduleName] = module.default;
    }
});

const combinedReducers = (history: any) =>
    combineReducers({
        router: connectRouter(history),
        ...reducers
    });

export default combinedReducers;
