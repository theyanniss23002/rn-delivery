import { all } from 'redux-saga/effects';
import lazyFeatureLoad from './reducersLazyLoad';

const sagasFromReduxFolder: any = [];

lazyFeatureLoad((module: any) => {
    if (module.saga) {
        sagasFromReduxFolder.push(module.saga());
    }
});

const allSagas = function* () {
    yield all(sagasFromReduxFolder);
};

export default allSagas;
