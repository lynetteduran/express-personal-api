var express = require('express');
    app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

// var db = require('./models');

/**********
 * ROUTES *
 **********/

app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

// All api endpoints documented below
app.get('/api', function api_index(req, res) {
  res.json({
    myEndpoints: true,    
    message: "This is my personal api, glad you stopped by!",
    documentationUrl: "https://github.com/lynetteduran/express_self_api/README.md",
    baseUrl: "http://lynette-personal-api.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "All about me"},
      {method: "GET", path: "/api/sfspots", description: "My favorite spots in SF"},
      {method: "POST", path: "api/sfspots", description: "Add to my favorite spot"} 
    ]
  });
});

app.get('/api/profile', function api_index(req, res) {
  res.json({
    name: "Lynette",
    githubLink: "https://github.com/lynetteduran",
    // githubProfileImage: "#",
    currentCity: "San Francisco, CA",
    schoolsAttended: [
      {name: "UC Berkeley", type: "University"},
      {name: "Santa Monica College", type: "Community College"},
      {name: "Rio Hondo College", type: "Community College"},
      {name: "Colegio Internacional de San Salvador (CISS)", type: "High School"},
      ]
  });
});

/**********
 * SERVER *
 **********/

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/')
});
