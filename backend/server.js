const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('frontend'));
const users = [{"email_id": "sample@gmail.com", "password": "1234"}, {"email_id": "sample1@gmail.com", "password": "9876"}];

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email_id === email && u.password === password);

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
