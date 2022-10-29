const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connect');
const session = require('express-session');
const engine = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path=require('path')


const app = express();
const PORT = process.env.PORT || 3001;



const sesh = {
  secret: 'super secret sauce',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite:'Strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.engine('handlebars', engine.engine({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname,'public')))
app.use(session(sesh));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes)

// app.set('views', './views');

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});




