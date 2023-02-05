import express from "express";
import {graphqlHTTP} from "express-graphql";
const cors = require('cors');
import {schema} from './schema';
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(morgan('dev'));

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    pretty: true,
    schema: schema
}))

module.exports = app;