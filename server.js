const express = require('express');
const routes = require('./controllers');//change this
const sequelize = require('./config/connect');
const session = require('express-session');
const engine = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

const sesh = {
  secret: 'super secret sauce',
  cookie: {maxAge: 60000},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sesh));
app.engine('handlebars', engine.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// sync sequelize models to the database, then turn on the server
async function start(){
  await sequelize.sync({alter: true});
  app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT} !`);
  });
}
start();

