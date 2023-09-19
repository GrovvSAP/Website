const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const cors = require('cors'); // Add CORS middleware if needed
const app = express();
const port = process.env.PORT || 3001; // Use the desired port for your server

// Enable CORS if you want your React app on a different origin to access this server
// Remove this if not needed or configure it to allow specific origins.
app.use(cors());

app.use(fileUpload());

// Serve static files from the 'public' directory (React frontend)
app.use(express.static(path.join(__dirname, 'public')));

app.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const uploadedFile = req.files.file;
  const uploadPath = path.join(__dirname,'public', 'CVs', uploadedFile.name);

  // Save the file to the 'public/CVs' directory
  uploadedFile.mv(uploadPath, (err) => {
    if (err) {
      console.error('Error saving file:', err);
      return res.status(500).send('Error saving file.');
    }

    res.send('File uploaded and saved successfully.');
  });
});


// Serve static files from the 'public' directory
app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


