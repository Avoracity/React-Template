import express from "express";
import ReactDOMServer from "react-dom/server";
import React from "react";
import App from "../components/app";
import sassMiddleware from "node-sass-middleware";

  server.use(sassMiddleware({
    src: path.join(__dirname, "sass"),
    dest: path.join(__dirname, "public"),
    debug: true,
    outputStyle: "compressed",
    prefix: "/public/assets/styles"
  }));

  const server = express();
  server.use(express.static("dist"));

  server.get("/", (req, res) => {
    const initialMarkup = ReactDOMServer.renderToString(<App />);

    res.send(`
      <html>
        <head>
          <title>Sample React App</title>
        </head>
        <body>
          <div id="app">${initialMarkup}</div>
          <script src="/main.js"></script>
        </body>
      </html>
    `)
  });

  server.listen(4242, () => console.log("Server is running..."));
 