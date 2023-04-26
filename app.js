const express = require('express')
const helmet = require("helmet"); //?Using helmet can help improve the security of your application with minimal effort.   protect your app against common web vulnerabilities, such as XSS and CSRF attacks.

const logger =require('morgan') //? to  log requests coming from browser/client in terminal
const compression = require('compression') //? to compress the size of data before sending as response to client. resulting in faster page load times and reduced bandwidth costs.



const PORT = 3400 || process.env.PORT

const app = express()
app.use(helmet());
app.use(logger('dev')) 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(compression()) 

// routeHandler 
app.use('/',require('./routes')) // seperating all routing related code in seperate file called routes/index.js ..
// ?Modular coding technique :- it avoids overcrowding of codes in same file. Also improves specificity of a file ie: what that particular file is all about.
//?app.js file is used only to initiate and run our backend server at port 3400 along with some npm packages (these npm packages must activae when server starts. so using it in app.js file) for web requirements





//port listening
app.listen(PORT, () => { console.log(`Server is running at ${PORT}`) })
  