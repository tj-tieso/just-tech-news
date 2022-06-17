const path = require("path");
const express = require("express");
const routes = require("./controllers");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection");

//import the helper functions
const helpers = require("./utils/helpers");
//pass the helpers to the existing exphbs.create()
const hbs = exphbs.create({ helpers });

const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "keep it secret, keep it safe",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // take all of the contents "public" folder and serve them as static assets
// hb middleware
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(session(sess));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
