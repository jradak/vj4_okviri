const http = require('http')
const app = http.createServer((req, res) =>{
 res.writeHead(200, {'Content-Type': 'text/plain'})
 res.end('Pozdrav od posluzitelja')
})
const PORT = 3001
app.listen(PORT)
console.log(`Posluzitelj je pokrenut na portu ${PORT}`);
