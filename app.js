import typeDefs from './Graphql/Schema/index';
import resolvers from './Graphql/Resolvers/index';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';
const app = express();
const PORT = 5000;
app.use(cors());

const server = new ApolloServer({
	typeDefs,
	resolvers,
	subscriptions: {
		onConnect: (connect, web) => {
			console.log('New Client Connected');
		}
	}
});
app.use(express.json());
app.use(
	'/schema',
	voyagerMiddleware({
		endpointUrl: '/',
		displayOptions: { showLeafFields: false }
	})
);
server.applyMiddleware({ app, path: '/' });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
	console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
	console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`);
});
