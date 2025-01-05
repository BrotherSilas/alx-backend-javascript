const express = require('express');
const fs = require('fs');

const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      
      const lines = data.split('\n')
        .filter(line => line.trim() !== '' && !line.includes('firstname,lastname'));
      
      const totalStudents = lines.length;
      const fieldGroups = {};
      
      lines.forEach(line => {
        const [firstname, , , field] = line.split(',');
        if (!fieldGroups[field]) {
          fieldGroups[field] = [];
        }
        fieldGroups[field].push(firstname);
      });
      
      let result = `Number of students: ${totalStudents}\n`;
      
      for (const [field, students] of Object.entries(fieldGroups)) {
        result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }
      
      resolve(result.trim());
    });
  });
};

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const dbPath = process.argv[2];
    const studentList = await countStudents(dbPath);
    res.send(`This is the list of our students\n${studentList}`);
  } catch (error) {
    res.status(500).send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(1245);

module.exports = app;
