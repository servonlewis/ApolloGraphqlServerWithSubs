import { gql } from 'apollo-server-express';

export default gql`
	type Hello {
		stuff: String
		otherStuff: String
	}

	type Query {
		sayHello(id: [ID]): [Hello]
	}

	type Mutation {
		newHello(stuff: String, otherStuff: String): [Hello]
	}
`;
