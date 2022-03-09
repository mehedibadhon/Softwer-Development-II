const express = require('express');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`<h2> This is home page</h2> </br> </br>  <h3> Name : Mehedi Hasan </br> Id : 1710876109</h3>`);
});
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);


app.listen(PORT, () => {
    console.log(`Server is running..... at http:/localhost/${PORT}`);
});