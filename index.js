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
    const qr_png = qr.imageSync(name, { type: 'png' })
    const qr_code_file_name = name + '.png';

    fs.writeFile(('./public/qr/' + qr_code_file_name), qr_png, (res) => {
      if (res) {
        console.log("Error: ", res, " ", qr_code_file_name);
      } else {
        console.log("Sukses: ", qr_code_file_name);
      }
    })

  })
  // const qr_txt = "Ihsan Satriawan"

  // const qr_png = qr.imageSync(qr_txt, { type: 'png' })
  // const qr_code_file_name = qr_txt + '.png';

  // fs.writeFile(('./public/qr/' + qr_code_file_name), qr_png, (res) => {
  //   console.log("res: ", res)
  //   if (res) {
  //     console.log(err);
  //   } else {
  //     console.log("Sukses: ", qr_code_file_name);
  //   }
  // })

  res.send("Attemp")
})

app.listen('3000', () => console.log('Server started at port 3000'))