const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
require('dotenv').config();


const centralErrHandler = require('./middlewares/central-err-handler');
const allowCors = require('./middlewares/allowCors');
const { output } = require('./config/output');


const { PORT = 4002, NODE_ENV } = process.env;
const app = express();

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// Static folder
app.use(express.static(path.join(__dirname, 'build')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.use(allowCors);
// app.use('/v1/', require('./routes'));
// app.get('/', (req, res) => {
//   res.render('contact');
// });

console.log(process.env.NAME);

function sendMail(email, output) {

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.EMAIL}`, // generated ethereal user
      pass: `${process.env.PASSWORD}`  // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Nodemailer Contact" <your@email.com>', // sender address
    to: email, // list of receivers
    subject: 'Node Contact Request', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
}

app.post('/send', (req, res) => {
  req.body.emails.forEach(item => {
    const { email } = item;

    sendMail(email, output);
  });

  res.send({ data: 'Рассылка совершена' });

});


// app.use(centralErrHandler);


app.listen(PORT, () => {
  console.log(`приложение запущено на порту ${PORT}`);
});
