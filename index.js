const express = require('express')
const app = express()
let poruke = [
    {
    id: 1,
    sadrzaj: 'HTML je jednostavan',
    },
    {
    id: 2,
    sadrzaj: 'React koristi JSX sintaksu',
    },
    {
    id: 3,
    sadrzaj: 'GET i POST su najvaznije metode HTTP protokola',
    }
]
   
app.get('/', (req, res) =>{
 res.send('<h1>Pozdrav od Express servera</h1>')
})
app.get('/api/poruke', (req, res) =>{
 res.json(poruke)
})
const PORT = 3001
app.listen(PORT, () => {
 console.log(`Posluzitelj je pokrenut na portu ${PORT}`);
})
