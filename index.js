const express = require('express');
const qr = require('qr-image');
const fs = require('fs');
const app = express();

app.get('/', (req, res, next) => {
  res.send("Hello")
})

app.get('/start_generate', (req, res, next) => {
  const names = ['Ihsan Satriawan', 'Ferly Fer']

  names.forEach(name => {
    const qr_png = qr.imageSync(name, { type: 'png', ec_level: 'H', margin: 1 })
    const qr_code_file_name = name + '.png';

    try {
      fs.writeFile(('./public/qr/' + qr_code_file_name), qr_png, (res) => {
        if (res) {
          console.log("Error: ", res, " ", qr_code_file_name);
        } else {
          console.log("Sukses: ", qr_code_file_name);
        }
      }) 
    } catch (error) {
      console.log("Error Catch: ", res, " ", qr_code_file_name);
    }

  })

  res.send("Attemp")
})

app.listen('3000', () => console.log('Server started at port 3000'))