import { PubSub } from 'apollo-server';
import DataLoader from 'dataloader';

export default {
	Mutation: {
		newHello(_, { stuff, otherStuff }) {
			return [ { stuff, otherStuff } ];
		}
	},
	Query: {
		sayHello(_, { id }) {
			return [ { stuff: `hello ${id}`, otherStuff: `otherhello ${id}` } ];
		}
	}
};
