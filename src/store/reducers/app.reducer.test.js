/* globals describe,it,expect */
import { INIT_APP } from '../actions/app.actions';
import appReducer from './app.reducer';

describe('Application reducer', () => {
    it('should return default state when action is empty', () => {
        const state = appReducer();
        expect(state).toEqual({});
    });

    it('should set application status', () => {
        const action = {
            type: INIT_APP,
            payload: true
        };

        const initState = appReducer();
        const newState = appReducer(initState, action);

        expect(newState).toEqual({ isLoaded: true });

        // check mutuation
        expect(newState).not.toEqual(initState);
    });

});
