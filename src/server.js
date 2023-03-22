const http =  require("http")
const handler = require("./router")

const PORT = 5000

const server = http.createServer(handler)

server.listen(PORT , () => {
    console.log(`server is running on http://localhost:${PORT}`)
})