const reduxContext = require.context('../redux', true, /index\.ts$/);

export default function lazyFeatureLoad(forEachModule: any) {
    reduxContext.keys().forEach((key: any) => {
        forEachModule(reduxContext(key), key);
    });
}
