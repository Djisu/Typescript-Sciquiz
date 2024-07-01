import express from 'express';
import connectDB from './config/db.js';
import path from 'path';
import { createProxyMiddleware } from 'http-proxy-middleware';
import http from 'http';
import { exec } from 'child_process';
import cors from 'cors';

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
import unique_subjects from './routes/api/unique_subjects.js';
import clear_answered_by from './routes/api/clear_answered_by.js';
import updateDocument from './routes/api/updateDocument.js';
import scoreCandidate from './routes/api/scoreCandidate.js';
import testsUnmarked from './routes/api/testsUnmarked.js';


const app = express();

// Connect Database
connectDB();

// Init Middleware  /unique-topics
app.use(express.json());
app.use(cors());

app.use(cors({
  origin: 'http://localhost:3000', // Replace with your client-side application URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

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
app.use('/api/unique_subjects', unique_subjects);
app.use('/api/clear_answered_by', clear_answered_by);
app.use('/api/updateDocument', updateDocument);
app.use('/api/scoreCandidate', scoreCandidate);
app.use('/api/testsUnmarked', testsUnmarked);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const server = http.createServer(app);

// Handle EADDRINUSE error by trying to stop the existing process on port 5000
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log(
      'Port 5000 is already in use. Attempting to stop the existing process...'
    );

    // Use netstat to find the process using the port and kill it
    exec('netstat -ano | findstr :5000', (err, stdout, stderr) => {
      if (err) {
        console.error('Error stopping existing process:', err);
      } else {
        // Parse the output to get the PID of the process
        const lines = stdout.split('\n');
        const pidLine = lines[0].trim();
        const pid = pidLine.split(/\s+/)[4];

        if (pid) {
          exec(`taskkill /F /PID ${pid}`, (killErr, killStdout, killStderr) => {
            if (killErr) {
              console.error('Error killing existing process:', killErr);
            } else {
              console.log(
                `Existing process with PID ${pid} on port 5000 stopped.`
              );
              // Now, start your server again
              server.listen(5000, () => {
                console.log('Server is now listening on port 5000.');
              });
            }
          });
        } else {
          console.log('No process found using port 5000.');
          // Now, start your server again
          server.listen(5000, () => {
            console.log('Server is now listening on port 5000.');
          });
        }
      }
    });
  } else {
    console.error('Server error:', error);
  }
});

// Start the server to listen on port 5000
server.listen(5000, () => {
  console.log('Server is listening on port 5000.');
});

// Handle SIGUSR2 signal (typically used for nodemon restarts)
process.once('SIGUSR2', function () {
  process.kill(process.pid, 'SIGUSR2');
});

// Handle SIGINT signal (typically used for Ctrl+C)
process.on('SIGINT', function () {
  // Perform any cleanup tasks or shutdown operations here

  // Terminate the process gracefully
  process.exit(0);
});

//const server = app.listen(0, () => {
//  const port = server.address().port;
//  console.log(`Server is running on port ${port}`);
//});
//app.get('/api/getPort', (req, res) => {
//  const port = server.address().port;
//  res.json({ port });
//});

//app.use(
//  '/api',
//  createProxyMiddleware({
//    target: `http://localhost:5000`,
//    changeOrigin: true
//  })
//);
//
//const PORT = process.env.PORT || 5000;
//
//app.listen(PORT, () => console.log(`Server started on port ${PORT} `));
