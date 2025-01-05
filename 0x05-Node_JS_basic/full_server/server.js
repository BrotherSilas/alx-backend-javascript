import express from 'express';
import routes from './routes/index.js';

const app = express();
const PORT = 1245;

// Use the routes
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
