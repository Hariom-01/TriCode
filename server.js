const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { exec } = require('child_process');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/run', (req, res) => {
  const { code } = req.body;

  // Save the code to a temporary file
  const fs = require('fs');
  fs.writeFileSync('temp.py', code);

  // Execute the Python code
  exec('python3 temp.py', (error, stdout, stderr) => {
    if (error) {
      res.json({ output: stderr });
    } else {
      res.json({ output: stdout });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
