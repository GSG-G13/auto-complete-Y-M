const { getDataFromFile, filterData } = require("./handler");
const path = require("path");
const url = require("url");

const handler = (req, res) => {
    const { pathname, query } = url.parse(req.url, true);

    if (req.url == "/") {
        const filePath = path.join(__dirname, "..", "public", "index.html");
        getDataFromFile(filePath, (data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }
    else if (req.url == "/public/css/style.css") {
        const filePath = path.join(__dirname, "..", "public", "css", "style.css")
        getDataFromFile(filePath, (data) => {
            res.writeHead(200);
            res.end(data);
        })
    }
    else if (req.url == "/public/javascript/script.js") {
        const filePath = path.join(__dirname, "..", "public", "javascript", "script.js")
        getDataFromFile(filePath, (data) => {
            res.writeHead(200);
            res.end(data);
        })

    } else if (req.url === `/autocomplete/data?key1=${query.key1}`) {
        const filePath = path.join(__dirname, "..", "src", "data.json")
        getDataFromFile(filePath, (data) => {
            res.writeHead(200);
            res.end(JSON.stringify(filterData(data, query.key1)))
        })
    } else if (req.url == "/public/javascript/dom.js") {
        const filePath = path.join(__dirname, "..", "public", "javascript", "dom.js");
        getDataFromFile(filePath, (data) => {
            res.writeHead(200);
            res.end(data);
        })
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("page not found");
    }
};

module.exports = handler;
