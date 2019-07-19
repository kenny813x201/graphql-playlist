const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const dbconfig = require("../config");

const app = express();
mongoose.connect(
  `mongodb+srv://${dbconfig.username}:${
    dbconfig.password
  }@cluster0-l8h9t.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Now listening for requests on port 4000");
});
