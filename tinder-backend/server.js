/* Here all the Logic Goes */

import express from 'express';
import mongoose from 'mongoose';
import Cards from "./dbCards.js";
import Cors from 'cors';

/* App Config*/
const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://SSTadmin:SSTechnoids@0893@cluster0.lw4vu.mongodb.net/TinderDatabase?retryWrites=true&w=majority"
// middlewares

app.use(express.json());
app.use(Cors());

// database config
mongoose.connect(connection_url, {
useNewUrlParser : true,
useCreateIndex : true,
useUnifiedTopology : true,

})

// API endpoints
app.get("/", (req, res) => res.status(200).send("Hi There!!!"));
app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});
app.get("/tinder/cards", (req, res) => {
    Cards.find((err, data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

// Listner

app.listen(port, () => console.log(`listening on localhost:${port}`));