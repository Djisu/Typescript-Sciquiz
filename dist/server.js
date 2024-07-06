"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_ts_1 = __importDefault(require("./config/db.js"));
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
const child_process_1 = require("child_process");
const cors_1 = __importDefault(require("cors"));
const users_ts_1 = __importDefault(require("./routes/api/users.js"));
const auth_ts_1 = __importDefault(require("./routes/api/auth.js"));
const profile_ts_1 = __importDefault(require("./routes/api/profile.js"));
const difficulty_level_ts_1 = __importDefault(require("./routes/api/difficulty_level.js"));
const question_ts_1 = __importDefault(require("./routes/api/question.js"));
const subject_ts_1 = __importDefault(require("./routes/api/subject.js"));
const topic_ts_1 = __importDefault(require("./routes/api/topic.js"));
const user_performance_ts_1 = __importDefault(require("./routes/api/user_performance.js"));
const tests_ts_1 = __importDefault(require("./routes/api/tests.js"));
const stutest_ts_1 = __importDefault(require("./routes/api/stutest.js"));
const unique_topics_ts_1 = __importDefault(require("./routes/api/unique_topics.js"));
const unique_difficultylevels_ts_1 = __importDefault(require("./routes/api/unique_difficultylevels.js"));
const unique_subjects_ts_1 = __importDefault(require("./routes/api/unique_subjects.js"));
const clear_answered_by_ts_1 = __importDefault(require("./routes/api/clear_answered_by.js"));
const updateDocument_ts_1 = __importDefault(require("./routes/api/updateDocument.js"));
const scoreCandidate_ts_1 = __importDefault(require("./routes/api/scoreCandidate.js"));
const testsUnmarked_ts_1 = __importDefault(require("./routes/api/testsUnmarked.js"));
const events_1 = require("events");
events_1.EventEmitter.defaultMaxListeners = 50;
const app = (0, express_1.default)();
// Connect Database
(0, db_ts_1.default)();
// Init Middleware  /unique-topics
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000', // Replace with your client-side application URL
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
// Define Routes
app.use('/api/users', users_ts_1.default);
app.use('/api/auth', auth_ts_1.default);
app.use('/api/profile', profile_ts_1.default);
app.use('/api/difficulty_level', difficulty_level_ts_1.default);
app.use('/api/question', question_ts_1.default);
app.use('/api/subject', subject_ts_1.default);
app.use('/api/topic', topic_ts_1.default);
app.use('/api/user_performance', user_performance_ts_1.default);
app.use('/api/tests', tests_ts_1.default);
app.use('/api/stutest', stutest_ts_1.default);
app.use('/api/unique_topics', unique_topics_ts_1.default);
app.use('/api/unique_difficultylevels', unique_difficultylevels_ts_1.default);
app.use('/api/unique_subjects', unique_subjects_ts_1.default);
app.use('/api/clear_answered_by', clear_answered_by_ts_1.default);
app.use('/api/updateDocument', updateDocument_ts_1.default);
app.use('/api/scoreCandidate', scoreCandidate_ts_1.default);
app.use('/api/testsUnmarked', testsUnmarked_ts_1.default);
// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express_1.default.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path_1.default.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
const server = http_1.default.createServer(app);
// Handle EADDRINUSE error by trying to stop the existing process on port 5000
server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.log('Port 5000 is already in use. Attempting to stop the existing process...');
        // Use netstat to find the process using the port and kill it
        (0, child_process_1.exec)('netstat -ano | findstr :5000', (err, stdout, stderr) => {
            if (err) {
                console.error('Error stopping existing process:', err);
            }
            else {
                // Parse the output to get the PID of the process
                const lines = stdout.split('\n');
                const pidLine = lines[0].trim();
                const pid = pidLine.split(/\s+/)[4];
                if (pid) {
                    (0, child_process_1.exec)(`taskkill /F /PID ${pid}`, (killErr, killStdout, killStderr) => {
                        if (killErr) {
                            console.error('Error killing existing process:', killErr);
                        }
                        else {
                            console.log(`Existing process with PID ${pid} on port 5000 stopped.`);
                            // Now, start your server again
                            server.listen(5000, () => {
                                console.log('Server is now listening on port 5000.');
                            });
                        }
                    });
                }
                else {
                    console.log('No process found using port 5000.');
                    // Now, start your server again
                    server.listen(5000, () => {
                        console.log('Server is now listening on port 5000.');
                    });
                }
            }
        });
    }
    else {
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
