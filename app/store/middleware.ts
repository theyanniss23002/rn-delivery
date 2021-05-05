import reducersLazyLoad from './reducersLazyLoad';

const middleware: any = [];
reducersLazyLoad((module: any) => {
    if (module.middleware) {
        middleware.push(module.middleware);
    }
});

export default middleware;
