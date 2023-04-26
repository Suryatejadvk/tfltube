const express = require('express')
const router = express.Router();
const axios = require('axios'); //axios is used to make HTTP requests in NodeJs with the API

//? Router to find a disruption in a mode such as bus , tube , dlr

router.get('/disruptions/:modes', async (req, res) => {
    try {
        let modes = req.params.modes;
        let url = `https://api.tfl.gov.uk/Line/Mode/${modes}/Disruption`; //API taken from line (4rth one)

        const response = await axios.get(url)

        const data = response.data //? we just want the data from the API . so filtering out the meta data such as network status, contents etc...
if(data.length==0){
    res.send('currently no disruptions')
}
  else{     res.json(data) //* returning only json data of disruption.

  }

    } catch (error) { //! if any error happens inside try block,  this block will catch it and return value as error
        console.log(error) 
        res.status(500).json({error:'Internal server error'})
    }
})


//? Welcome message router


router.get('/', async (req, res) => {
    try {
        let message = 'Welcome to my site'

        res.send(message)
    } catch (error) {
        res.json('error')
    }
})


module.exports = router