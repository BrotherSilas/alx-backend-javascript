const http = require('http');
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

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const dbPath = process.argv[2];
      const studentList = await countStudents(dbPath);
      res.end(`This is the list of our students\n${studentList}`);
    } catch (error) {
      res.end(`This is the list of our students\n${error.message}`);
    }
  }
});

app.listen(1245);

module.exports = app;
