import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      
      const lines = data.split('\n')
        .filter(line => line.trim() !== '' && !line.includes('firstname,lastname'));
      
      const studentsByField = {};
      
      lines.forEach(line => {
        const [firstname, , , field] = line.split(',');
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      });
      
      resolve(studentsByField);
    });
  });
};

export default readDatabase;
