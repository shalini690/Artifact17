/**
 * index.js - Express.js application entry point.
 *
 * A minimal Node.js tutorial web server built on the Express framework.
 * It exposes two plaintext HTTP GET endpoints:
 *   - GET /              -> "Hello world"   (the baseline endpoint)
 *   - GET /good-evening  -> "Good evening"  (the added feature)
 *
 * The server is intentionally tutorial-grade: a single, readable file with
 * clearly named routes, no middleware, and no features beyond the two routes.
 *
 * Run with:  npm start   (which executes `node index.js`)
 */

'use strict';

// Import the Express framework using the CommonJS module system.
const express = require('express');

// Create an Express application instance. This `app` object is used to
// register route handlers and to start the HTTP listener.
const app = express();

// Resolve the listening port. An optional PORT environment variable allows the
// port to be overridden without changing code; otherwise default to 3000,
// the conventional tutorial port.
const PORT = process.env.PORT || 3000;

// Route: GET / - returns the baseline plaintext greeting.
// `res.send()` writes the string body with the default HTTP 200 status.
app.get('/', (req, res) => res.send('Hello world'));

// Route: GET /good-evening - returns the new plaintext greeting.
app.get('/good-evening', (req, res) => res.send('Good evening'));

// Start the HTTP server and begin accepting connections on the resolved port.
// The single startup log confirms the server is up and which port it is using.
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
