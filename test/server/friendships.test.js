import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';

if (Meteor.isServer) {
    describe('Friendships', () => {
        describe('methods', () => {
            it('Follow an user', () => {
                assert.equal(1,2);
            });
        });
    });
}