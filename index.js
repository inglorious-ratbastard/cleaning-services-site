const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");

const app = express();

app.set('view engine', 'ejs');
app.set('views', './frontend/views/');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('./frontend/public/images'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('index', { title: 'San Antonio Professional Cleaning Services' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'Local Cleaning Services' });
});

app.get('/clean', (req, res) => {
  res.render('clean', { title: 'Santization and Sterilization | Keeping Clean' });
});

app.get('/service', (req, res) => {
  res.render('service', { title: 'Representing Our Own Brand of Cleaning' });
});

app.get('/standard', (req, res) => {
  res.render('standard', { title: 'Our Reputation is Our Guaranteed Standard' });
});

app.get('/hire', (req, res) => {
  res.render('hire', { title: 'Join Our Professional Cleaning Crew' });
});

app.get('/quote', (req, res) => {
  res.render('quote', { title: 'Recieve A Personalized Quote For Our Services' });
});

app.get('/booking', (req, res) => {
  res.render('booking', { title: 'Schedule Your Cleaning Routine' });
});

app.post('/getQuote', (req, res) => {
  req.body.call = Boolean(req.body.call); 
  req.body.text = Boolean(req.body.text); 
  req.body.comm = Boolean(req.body.comm); 
  req.body.resd = Boolean(req.body.resd); 

   const output = `
   <p>Quote Request for Cleaning Services </p>
   <h3>Contact Details</h3>
   <ul>
     <li>First Name: ${req.body.first}</li>
     <li>Last Name: ${req.body.last}</li>
     <li>Phone Number ${req.body.phone}</li>
     <li>Email: ${req.body.email}</li><br>
     Requires Phone Call: ${req.body.call} <br>
     Request Text Msg Quote: ${req.body.text}
   </ul>
   <h3>Home Details</h3>
     Square Footage: ${req.body.square} <br>
     Commercial: ${req.body.comm} <br>
     Resedential: ${req.body.resd} <br>
   <h3>Comments</h3>
   <p>${req.body.comment}</p>
  `

  let transporter = nodemailer.createTransport({
    host: process.env.host,
    port: process.env.nm_port,
    secure: false,
    auth: {
      user: process.env.user, 
      pass: process.env.pass, 
    },  
    tls:{
      rejectUnauthorized: false
    }
  });

  let info = transporter.sendMail({
    from: process.env.user,
    to: process.env.user, 
    subject: "Quote for Cleaning Services", 
    text: "Request for Quote", 
    html: output
  });

  res.redirect('back');
    
});

app.post('/getDate', (req, res) => {
const output = `
   <p>Schedule Date for Cleaning Services</p>
   <h3>Contact Details</h3>
   <ul>
     <li>First Name: ${req.body.first}</li>
     <li>Last Name: ${req.body.last}</li>
     <li>Phone Number ${req.body.phone}</li>
     <li>Email: ${req.body.email}</li><br>
     Proposed Date for Cleaning: ${req.body.date} 
   </ul>
   <h3>Home Details</h3>
     Square Footage: ${req.body.square} <br>
     Address: ${req.body.address} <br>
   <h3>Comments</h3>
   <p>${req.body.comment}</p>
  `
  let transporter = nodemailer.createTransport({
    host: process.env.host,
    port: process.env.nm_port,
    secure: false,
    auth: {
      user: process.env.user, 
      pass: process.env.pass, 
    },  
    tls:{
      rejectUnauthorized: false
    }
  }); 

  let info = transporter.sendMail({
    from: process.env.user,
    to: process.env.user, 
    subject: "Request for Cleaning Services", 
    text: "Schedule a Cleaning Date", 
    html: output
  });
  
  res.redirect('back');
}); 

app.post('/rateUs', (req, res) => { 
   const output = `
   <p>Rate Our Cleaning Services</p>
   <h3>Contact Details</h3>
   <ul>
     <li>First Name: ${req.body.first}</li>
     <li>Last Name: ${req.body.last}</li>
   </ul>
   <h3>Star Rating</h3>
   <p>User Rating: ${req.body.score}</p>
   <h3>Comments</h3>
   <p>${req.body.comment}</p>
  `

  let transporter = nodemailer.createTransport({
    host: process.env.host,
    port: process.env.nm_port,
    secure: false,
    auth: {
      user: process.env.user, 
      pass: process.env.pass, 
    },  
    tls:{
      rejectUnauthorized: false
    }
  });

  let info = transporter.sendMail({
    from: process.env.user,
    to: process.env.user, 
    subject: "Rate Our Cleaning Services", 
    text: "Star Rating System",  
    html: output
  });

 res.redirect('back');
});  

app.post('/sendFeed', (req, res) => { 
   const output = `
   <p>Send Us Your Feedback</p>
   <h3>Contact Details</h3>
   <ul>
     <li>First Name: ${req.body.first}</li>
     <li>Last Name: ${req.body.last}</li>
   </ul>
   <h3>Contact Information</h3>
   <p>Customer Email: ${req.body.email}</p>
   <h3>Comments</h3>
   <p>${req.body.comment}</p>
  `

  let transporter = nodemailer.createTransport({
    host: process.env.host,
    port: process.env.nm_port,
    secure: false,
    auth: {
      user: process.env.user, 
      pass: process.env.pass, 
    },  
    tls:{
      rejectUnauthorized: false
    }
  });

  let info = transporter.sendMail({
    from: process.env.user,
    to: process.env.user, 
    subject: "Cleaning Feedback/Comments", 
    text: "Customers Thoughts",  
    html: output
  });

  res.redirect('back');
});  

app.use((req, res) => {
  res.status(404).render('error', { title: 'Page Not Found' });
});

app.listen(port, () => 
console.log(`Listening at http://localhost:${port}`));
