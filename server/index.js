const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session')
const passport = require('passport');
const strategy = require(`./strategy.js`);
require('dotenv').config()

const app = express();
massive(process.env.CONNECTION_STRING).then( dbInstance => {
    console.log('connected to db')
    app.set('db', dbInstance)});

app.use( bodyParser.json() );
app.use( cors() );

app.use( session({
    secret: 'sup dude',
    resave: true,
    saveUninitialized: true
  }));
app.use( passport.initialize() );
app.use( passport.session() );
passport.use( strategy );

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get( '/login',
passport.authenticate('auth0',
  { successRedirect: '/me', failureRedirect: '/login1', failureFlash: true }
));

app.get('/me', ( req, res, next ) => {
  if ( !req.user ) {
    res.redirect('http://localhost:3000/#/');
  } else {
    console.log('I am the session', req.session.passport.user.id, typeof(req.session))
    console.log('I am the user', req.user.id)
    // req.session.user.authid = req.session.passport.user.id
    res.redirect('http://localhost:3000/#/checkout');
    // req.user === req.session.passport.user
    // console.log( req.user )
    // console.log( req.session.passport.user );
    // res.status(200).send( JSON.stringify( req.user, null, 10 ) );
  }
});

app.get('/logout', (req, res, next ) => {
  req.logOut()
  req.session.destroy()
  res.redirect(302, 'http://sim3.auth0.com/v2/logout?returnTo=http://localhost:3000')
})

const port = 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );