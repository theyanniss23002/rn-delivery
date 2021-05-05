import * as types from './types';

const initialState = {
    loading: false
};

export default function reducer(state = initialState, action: any) {
    const { type, payload } = action;
    switch (type) {
        case types.LOADING: {
            return {
                ...state,
                loading: payload
            };
        }

        default:
            return state;
    }
}
