const express = require('express');

const app = express();  
const port = 3000;

app.get('/teachers', (req, res) => {    
    res.send('heyyyy abhay whats going broo this shit is working fine, whats your opinion on this broo');
});

app.get('/students', (req, res) => {
    res.send("Students api is woeking khatarnakkk...")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});