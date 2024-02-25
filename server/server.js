const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.post('/api/saveData', async (req, res) => {
    try {
      // Read existing data from the file or initialize with an empty array
      const existingData = await fs.readFile('data.json', 'utf-8').catch(() => '[]');
      const parsedData = JSON.parse(existingData || '[]');  // Provide a default value if parsing fails
  
      // Add the new data to the existing data
      parsedData.push(req.body);
  
      // Write the updated data back to the file
      await fs.writeFile('data.json', JSON.stringify(parsedData));
  
      res.status(200).send('Data successfully saved');
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  });
  

// Added route handler for GET request to /api/getData
app.get('/api/getData', async (req, res) => {
  try {
    // Read data from the file system using fs
    const data = await fs.readFile('data.json', 'utf-8').catch(() => '[]');

    // Check if the content is not empty before parsing
    const parsedData = data ? JSON.parse(data) : [];

    res.json(parsedData);
  } catch (error) {
    console.error('Error reading data:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/api/getData`);
});
