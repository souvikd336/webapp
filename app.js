const express = require('express')
const bodyParser  = require('body-parser');

const app = express()
const port = 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.send('Hello World!')
})


//new api
app.get('/api/souvik', (req, res) =>{
  const me = {
    name: "Souvik Das",
    age: 23,
    college: "SRM",
    date: new Date(),
  };
  res.status(200).json(me);
});

app.get('/api/:token', (req, res) => {
  res.status(200).json({param: req.params.token})
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})