const express = require('express');
require('dotenv').config();
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');
const NotesRoutes = require('./routes/Notes.routes');
const PORT = process.env.PORT || 80;

app.use(express.json());
app.use(cors());
app.use('/notes', NotesRoutes);

async function start() {
    try {
        await mongoose.connect(process.env.URL_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            // useCreateIndex: true
        })
        console.log('bd started')
    }
    catch (e) {
        console.log("server error", e.message);
    }
}

start()

app.listen(PORT, () => {
    console.log('server start')
})