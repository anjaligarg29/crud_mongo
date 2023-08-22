const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const customers = require('./routes/customers');

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1/customer')
         .then(()=> console.log('connected to database...'))
        .catch((err)=> console.error('could not connected to database...'));

app.use('/api/customers',customers);

const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));