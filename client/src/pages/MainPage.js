import React ,{useEffect, useState} from "react";
import axios from "axios";
export default function MainPage() {


  //states for the form feilds
     const [date , setDate] =useState(null);
     const [SourceCurrency, setSourceCurrency] = useState();
     const [TargetCurrency, setTargetCurrency] = useState();
     const [amountInSourceCurrency , setAmountInSourceCurrency] = useState(0);
     const [amountInTargetCurrency , setAmountInTargetCurrency] = useState(0);
     const [ CurrencyNames , steCurrencyNames] = useState([]);

  //handle Submit methode
    const handleSubmit = (e) => {
      e.preventDefault();
        console.log( 
        date , 
    setSourceCurrency,
     TargetCurrency,
    amountInSourceCurrency,)
 };

 //GET ALL CURRUNCY NAMES
 useEffect(()=>{
  const getCurrencyNames = async() => {
    try{
      const responce = await axios.get(
        "http://localhost:5000/getAllCurrencies"
      );
      steCurrencyNames(responce.data);

    }catch(err){
      console.error(err);
    }
  };
  getCurrencyNames();
 } , [])




  return (
    <div>
      <h1 className=" lg:mx-32 text-5xl font-bold text-green-500">
        Convert Your Currencies Today
      </h1>
      <p className="lg:mx-32 opacity-40 py-6">
        Welcome to 'Convert Your Currencies Today'! This application allows you
        to easily convert currencies based on the latest exchange rates. Whether
        you're planning a trip, managing your finances, or simply curious about
        the value of your money in different currencies, this tool is here to
        help.
      </p>

      
      <div className=" mt-5  flex items-center justify-center flex-col">
        <section className=" w-full  lg:w-1/2">
          <form onSubmit={handleSubmit}>
             <div className="mb-4">
                <label
                  htmlFor={date}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date
                </label>
                <input
                onChange={(e)=>setDate(e.target.value)}
                  type="Date"
                  id={date}
                  name={date}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor={SourceCurrency}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Source Currency
                </label>
                <select 
                onChange={(e)=> setSourceCurrency(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                name={SourceCurrency} 
                id={SourceCurrency}
                value={SourceCurrency}>
                  <option value="">Select  Source Currency</option>

                </select>

                
              </div>
              <div className="mb-4">
                <label
                  htmlFor={TargetCurrency}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Target Currency
                </label>
                <select  
                 onChange={(e)=> setTargetCurrency(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                name={TargetCurrency} 
                id={TargetCurrency}
                value={TargetCurrency}>
                  <option value="">Select Target Currency</option>

                </select>
                </div>
                <div className="mb-4">
                <label
                  htmlFor={amountInSourceCurrency}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Amount In Source Currency
                </label>
                <input
                onChange={(e)=> setAmountInSourceCurrency (e.target.value)}
                  type="text"
                  id={amountInSourceCurrency}
                  name={amountInSourceCurrency}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  placeholder="Amount In Source Currency"
                  required
                />
              </div>
              <button  className="bg-green-600 hover:bg-green-700 text-white
               font-midum py-2 px-4 rounded-md">
                Get The Target Currency</button>
          </form>
        </section>
      </div>
    </div>
  );
}
