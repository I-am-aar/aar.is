// Server side index
import express from 'express';
import renderer from './helpers/renderer'

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.send(renderer(req));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("listening...")
}).on('error', (err) => {
  console.log(`Error Code: ${err.code}`) 
});
