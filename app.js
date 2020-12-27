const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('We are on Home');
});
app.get('/post', (req, res) =>{
    res.send('We are on post')
})

app.listen(5000);