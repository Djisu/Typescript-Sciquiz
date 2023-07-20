const request = require('supertest');
const app = require('../app'); // Assuming this is the main Express app file
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

describe('Auth Routes', () => {
  let token;
  let testUserId;

  // This function will run before each test
  beforeEach(async () => {
    // Create a test user and get the authentication token
    const password = 'password123';
    const hashedPassword = await bcrypt.hash(password, 10);
    const testUser = new User({
      email: 'test@example.com',
      password: hashedPassword
    });
    await testUser.save();

    // Generate a JWT token for authentication
    const payload = {
      user: {
        id: testUser.id
      }
    };
    token = jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 3600 });

    testUserId = testUser.id;
  });

  // This function will run after each test
  afterEach(async () => {
    // Remove the test user
    await User.findByIdAndRemove(testUserId);
  });

  describe('GET /api/auth/:id', () => {
    test('should get a user by ID', async () => {
      const response = await request(app)
        .get(`/api/auth/${testUserId}`)
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('_id', testUserId);
    });

    test('should return 500 if server error occurs', async () => {
      // Mocking the User.findById() function to throw an error
      User.findById = jest.fn(() => {
        throw new Error('Mock error');
      });

      const response = await request(app)
        .get(`/api/auth/${testUserId}`)
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ msg: 'Server Error' });
    });
  });

  describe('GET /api/auth', () => {
    test('should get all users', async () => {
      const response = await request(app)
        .get('/api/auth')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
    });

    test('should return 500 if server error occurs', async () => {
      // Mocking the User.find() function to throw an error
      User.find = jest.fn(() => {
        throw new Error('Mock error');
      });

      const response = await request(app)
        .get('/api/auth')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ msg: 'Server Error' });
    });
  });

  describe('POST /api/auth', () => {
    test('should authenticate user and return token', async () => {
      const response = await request(app).post('/api/auth').send({
        email: 'test@example.com',
        password: 'password123'
      });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token');
    });

    test('should return 400 if invalid credentials are provided', async () => {
      const response = await request(app).post('/api/auth').send({
        email: 'test@example.com',
        password: 'invalidpassword'
      });

      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        errors: [{ msg: 'Invalid Credentials' }]
      });
    });

    test('should return 400 if invalid request body is provided', async () => {
      const response = await request(app).post('/api/auth').send({});

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('errors');
    });

    test('should return 500 if server error occurs', async () => {
      // Mocking the User.findOne() function to throw an error
      User.findOne = jest.fn(() => {
        throw new Error('Mock error');
      });

      const response = await request(app).post('/api/auth').send({
        email: 'test@example.com',
        password: 'password123'
      });

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ msg: 'Server Error' });
    });
  });
});
