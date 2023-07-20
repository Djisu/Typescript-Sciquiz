const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

app.use('/api/difficulty_level', require('./routes/api/difficulty_level'));
app.use('/api/question', require('./routes/api/question'));
app.use('/api/subject', require('./routes/api/subject'));
app.use('/api/topic', require('./routes/api/topic'));
app.use('/api/user_performance', require('./routes/api/user_performance'));
app.use('/api/tests', require('./routes/api/tests'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
