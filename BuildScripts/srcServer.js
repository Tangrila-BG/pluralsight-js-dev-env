import express from require('express');
import path    from require('path');
import open    from require('open');

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
    if (err)
        console.log(err);
    else
        open('localhost:' + port);
});
