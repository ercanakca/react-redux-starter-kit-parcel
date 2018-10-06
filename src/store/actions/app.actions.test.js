/* globals describe,it,expect */
import { initApplication, INIT_APP } from './app.actions';

describe('App actions', () => {
    it('should create app state action', () => {
        const action = initApplication(true);
        expect(action.type).toEqual(INIT_APP);
        expect(action.payload).toBeTruthy();
    });
});
