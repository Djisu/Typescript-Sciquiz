import express from 'express';
import connectDB from './config/db.js';
import path from 'path';

import users from './routes/api/users.js';
import auth from './routes/api/auth.js';
import profile from './routes/api/profile.js';

import difficulty_level from './routes/api/difficulty_level.js';
import question from './routes/api/question.js';
import subject from './routes/api/subject.js';
import topic from './routes/api/topic.js';
import user_performance from './routes/api/user_performance.js';
import tests from './routes/api/tests.js';
import stutest from './routes/api/stutest.js';
import unique_topics from './routes/api/unique_topics.js';
import unique_difficultylevels from './routes/api/unique_difficultylevels.js';

const app = express();

// Connect Database
connectDB();

// Init Middleware  /unique-topics
app.use(express.json());

// Define Routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/profile', profile);

app.use('/api/difficulty_level', difficulty_level);
app.use('/api/question', question);
app.use('/api/subject', subject);
app.use('/api/topic', topic);
app.use('/api/user_performance', user_performance);
app.use('/api/tests', tests);
app.use('/api/stutest', stutest);
app.use('/api/unique_topics', unique_topics);
app.use('/api/unique_difficultylevels', unique_difficultylevels);

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
