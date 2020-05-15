import express from 'express';
import crypto from 'crypto';

const app = express();

app.get('/', (req, res) => {
  res.set({'content-type': 'text/plain'});
  res.send(crypto.randomBytes(32).toString('hex').concat('\n'));
});

app.listen(8000, () => {
  console.log(`Server started at 8000 port`);
});
