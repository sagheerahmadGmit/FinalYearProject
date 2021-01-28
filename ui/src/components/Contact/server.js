const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "gmail", //replace with your email provider
  port: 587,
  auth: {
    user: "studenthub910@gmail.com",
    pass: "studenthub2",
  }
});

// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message

  var mail = {
    from: name,
    to: "studenthub910@gmail.com",// receiver email,
    email: email,
    text: message
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})


  // router.post("http://localhost:3000/contact", (req, res) => {
  //   const name = req.body.name;
  //   const email = req.body.email;
  //   const message = req.body.message; 
  //   const mail = {
  //     from: name,
  //     to: "studenthub910@gmail.com",
  //     subject: "Contact Form Submission",
  //     html: `<p>Name: ${name}</p>
  //            <p>Email: ${email}</p>
  //            <p>Message: ${message}</p>`,
  //   };
  //   contactEmail.sendMail(mail, (error) => {
  //     if (error) {
  //       res.json({ status: "ERROR" });
  //     } else {
  //       res.json({ status: "Message Sent" });
  //     }
  //   });
  // });