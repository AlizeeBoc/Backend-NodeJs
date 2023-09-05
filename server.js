const http = require("http")
const fs = require("fs")

// This `server` will receive data.
const server = http.createServer((req, res) => {
  console.log(req.url, req.method)

  // set header content type send back to the bowser
  res.setHeader("Content-type", "text/html") //can be json ... informe le serveur de ce quil va devoir parser

  let path
  switch (req.url) {
    case "/":
      path = "index.html"
      res.statusCode = 200;
      break
    case "/about":
      path = "about/index.html"
      res.statusCode = 200;
      break
    case "/blog":
      path = "blog/index.html"
      res.statusCode = 200;
      break
    case "/contact":
      path = "contact/index.html"
      res.statusCode = 200;
      break;
    //case "/about-me":
    //  res.statusCode= 301;
    //  res.setHeader('location', '/about');
    //  res.end();
    default : 
      path = '404.html';
      res.statusCode = 404;
      break
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err)
      res.end()
    } else {
      res.write(data)
      res.end()
    }
  })
})

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000")
})

/* 

https://www.youtube.com/watch?v=DQD00NAUPNk&list=PLzAGFfNxKFuYFA8qE2y4-Nq4vaf4_YX3m&index=4

*/
