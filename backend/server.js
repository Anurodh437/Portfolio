const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { getDefaultNormalizer } = require("@testing-library/react");
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/send_mail", async (req, res) => {
  let { name, email, message } = req.body;
  console.log(name, email, message);
  console.log("called method");

  let transporter = nodemailer.createTransport({
    // host: process.env.MAIL_HOST,
    // port: process.env.MAIL_PORT,
    service: "Gmail",
    // secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER, // generated ethereal user
      pass: process.env.MAIL_PASS, // generated ethereal password
    },
  });

  transporter
    .sendMail({
      from: "rahussingh20@gmail.com",
      to: "anurodhdubey437@gmail.com",
      subject: "Test Email",
      html: `<div className="email" style="
        border: 1px solid black;
        padding:20px;
        font-family:sans-serif;
        line-height:2;
        font-size:20px;
      ">
      <h2>Here is Your Email</h2>
      <p>${name}</p>
      <p>${email}</p>
      <p>${message}</p>
      
      <p>All the best</p>
      </div>
    `,
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});

PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`server started at ${PORT}`));
