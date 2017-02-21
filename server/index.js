import path from 'path';
import express from 'express';
import session from 'express-session';
import morgan from 'morgan';

import bodyParser from 'body-parser';

import graphqlHTTP from 'express-graphql';
import schema from './schema';
import db from './db';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();

// TODO: Provide as optional argument?
const PORT = process.env.PORT || 3000;

const compiler = webpack(require('../webpack.config.development.js'));

app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.json());

// Logging middleware
app.use(morgan('dev'));

app.use(session({
    secret: 'secretkey',
    cookie: {maxAge: 10 * 60 * 1000},
    resave: false,
    saveUninitialized: false
}));

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

// Login endpoint. This authenticates the session. We could instead do
// this using GraphQL.
app.post('/login', (req, res) => {
    console.log('initial session: ', req.session);
    const {uid, password} = req.body;
    const user = db.get('users').get(uid).value();
    if (!user || user.password !== password) {
        return res.send('login failed');
    }
    req.session.user = user;
    req.session.authenticated = true;
    console.log('new session: ', req.session);
    console.log('user authenticated: ', user);
    res.send('login successful');
});

app.get('/logout', async (req, res) => {
    await req.session.destroy();
    res.redirect('/login');
});


// React router takes care of routing, so all endpoints should arrive on the same 'page'.
app.get('*', (req, res) => {
    if (req.accepts('html'))
        return res.sendFile(path.join(__dirname, 'index.html'));
    return res.sendStatus(404);
});

const server = app.listen(PORT, () => {
    console.log(`Demo server listening on port ${server.address().port}`);
});
