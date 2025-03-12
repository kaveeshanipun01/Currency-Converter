const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

// Middleware 
app.use(express.json());
app.use(cors());

// All currencies
app.get("/getAllCurrencies", async (req, res) => {  // <-- Make this function async
    const nameURL = "https://openexchangerates.org/api/currencies.json?app_id=5eb8736b72174f37aa2588b10b22ee21";
    
    try {
        const namesResponse = await axios.get(nameURL); // Use await inside an async function
        const nameData = namesResponse.data; 
        return res.json(nameData);

    } catch (err) {
        console.error("Error fetching currency names:", err);
        res.status(500).json({ error: "Failed to fetch currency names." }); // Send a response back in case of error
    }
});


//get the  target amount
app.get("/convert" , async(req , res)=>{
    const {
        date,
        SourceCurrency,
        TargetCurrency,
        amountInSourceCurrency} = req.query;
        try{
            const dataUrl = `https://openexchangerates.org/api/historical/${date}.json?app_id=5eb8736b72174f37aa2588b10b22ee21`;

            const dataResponce = await axios.get(dataUrl);
            const rates = dataResponce.data.rates;

            //rates
            const SourceRate = rates[SourceCurrency];
            const targetRate = rates[TargetCurrency];

            //final target value

            const targetAmount = (targetRate / SourceRate) * amountInSourceCurrency;


            return res.json(targetAmount.toFixed(2));

 
        } catch (err) {
            console.error(err);
        }
} );
// Listen to a port
app.listen(5000, () => {
    console.log("SERVER STARTED on port 5000");
});
