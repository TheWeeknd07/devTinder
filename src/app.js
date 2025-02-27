const express = require("express");
const app = express();

// route parameters
app.get('/user/:id', (req, res) => {
    res.send(`User id is ${req.params.id}`);
});

// regular expression in dynamic routes
app.get('/user/:id(\\d+)', (req, res) => {
    res.send(`User id is ${req.params.id}`);
});

// multiple route parameters
app.get('/user/:id/:name', (req, res) => {
    res.send(`User id is ${req.params.id} and name is ${req.params.name}`);
});

// optional parameters
app.get('/user/:id/:name?', (req, res) => {
    const { id, name } = req.params;
    if(name) {
        res.send(`User id is ${id} and name is ${name}`);
    } else {
        res.send(`User id is ${id}`);
    }
});

// query parameters
app.get('/users', (req, res) => {
    const { page, limit } = req.query;
    res.send(`Page is ${page} and limit is ${limit}`);
});

app.get('/user', (req, res, next) => {
    console.log("handling the route user 1");
    // res.send("Response 1");
    next();
  },
  (req, res, next) => {
    console.log("handling the route user 2");
    res.send("Response 2");
    next();
  },
  (req, res) => {
    console.log("handling the route user 3");
    res.send("Response 3");
  }
);

// Output:- 

// cmd:-
//     Server is running on port: 3000
//     handling the route user 1
//     handling the route user 2
//     handling the route user 3
//     Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

// postman:- Response 2

app.use('/', 
    () => {
        console.log("/error");
        next(new Error('Mock Error'));
    },
    (err, req, res, next) => {
        console.log('/user error');
        next();
    }
);

app.get('/user', (req, res) => {
    console.log('/user');
    res.send('hello world from /user !');
});
// output:-
//   /error
//   /user error
//   /user

app.listen(3000, () => {
    console.log("Server is running on port: 3000");
});