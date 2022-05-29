const { ApolloServer, PubSub } = require('apollo-server');

const mongoose = require('mongoose');
 
const typeDefs = require('./graphql/typeDefs');

const resolvers = require('./graphql/resolvers');

const pubsub = new PubSub();

const PORT = 4000;

var env = 'development';

// creating an ApolloServer instance

const server = new ApolloServer({
  cors: {
    origin: env=="development"? ['http://localhost:3000'] : ['https://attendlytical.netlify.app'],
    credentials: true
  },
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub }),
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

// connect to the mongo ATLAS cluster using the connection string

mongoose
  .connect("mongodb+srv://bhavya24:Ipad12345@cluster0.fprdc.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB Connected');
    return server.listen({ port: PORT }); // add a listener at the port running the cluster
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  })
  .catch((err) => {
    console.error(err);
  });