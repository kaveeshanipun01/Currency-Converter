const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//mmiddle wares 
app.use(express.json());
app.use(cors());


//all currencys
app.get("/getAllCurrencies" , (req, res)=>{
    const nameURL= 'https://openexchangerates.org/api/currencies.json?app_id=034852e74bf7417f8ee5fdd540599a75';
    
   
    
    try{
        const namesResponce = awaitaxios.get(nameURL);
        const nameData = namesResponce.data; 
        return res.json(nameData);
   

        }catch(err){console.error(err);
        }
})
//listen to a port 

app.listen( 5000 , ()=>{
    console.log("SEVER STARTED");
})
