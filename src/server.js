const express = require('express');

const path = require('path');

const dotenv = require('dotenv');

const pokemonRouter = require('../routes/pokemon');



dotenv.config();



const app = express();



app.set("view engine", "ejs");



app.use(express.static(path.join(__dirname, "public")));



app.use("/", pokemonRouter);



const PORT = process.env.PORT || 8000;



app.listen(PORT, () => {

 console.log(`Server is running on port ${PORT}`);

});