# Unit Testing in JavaScript

## Description
This project demonstrates comprehensive unit testing and integration testing in JavaScript using various testing frameworks and methodologies. It covers basic unit tests, spies, stubs, integration testing and API endpoint testing.

## Project Structure
```
0x06-unittests_in_js/
├── 0-calcul.js
├── 0-calcul.test.js
├── 1-calcul.js
├── 1-calcul.test.js
├── 2-calcul_chai.js
├── 2-calcul_chai.test.js
├── 3-payment.js
├── 3-payment.test.js
├── 4-payment.js
├── 4-payment.test.js
├── 5-payment.js
├── 5-payment.test.js
├── 6-payment_token.js
├── 6-payment_token.test.js
├── 7-skip.test.js
├── 8-api/
│   ├── api.js
│   ├── api.test.js
│   └── package.json
├── 9-api/
│   ├── api.js
│   ├── api.test.js
│   └── package.json
├── 10-api/
│   ├── api.js
│   ├── api.test.js
│   └── package.json
├── utils.js
└── package.json
```

## Technologies Used
- Node.js (v12.x.x)
- Mocha (Testing Framework)
- Chai (Assertion Library)
- Sinon (Test spies, stubs and mocks)
- Express (Web Framework for API tests)
- Request (HTTP client for testing)

## Setup
1. Install Node.js v12.x.x
```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. Install project dependencies
```bash
npm install
```

## Task Descriptions

### 0. Basic test with Mocha and Node assertion library
- Implementation of a simple calculator function with basic tests
- Files: `0-calcul.js`, `0-calcul.test.js`

### 1. Combining descriptions
- Extended calculator with additional operations (SUM, SUBTRACT, DIVIDE)
- Files: `1-calcul.js`, `1-calcul.test.js`

### 2. Basic test using Chai assertion library
- Introduction to Chai for more readable tests
- Files: `2-calcul_chai.js`, `2-calcul_chai.test.js`

### 3. Spies
- Using Sinon spies to test function calls
- Files: `utils.js`, `3-payment.js`, `3-payment.test.js`

### 4. Stubs
- Using Sinon stubs to control function behavior
- Files: `4-payment.js`, `4-payment.test.js`

### 5. Hooks
- Using Mocha hooks for test setup and cleanup
- Files: `5-payment.js`, `5-payment.test.js`

### 6. Async tests
- Testing asynchronous functions using done callback
- Files: `6-payment_token.js`, `6-payment_token.test.js`

### 7. Skip
- Using test skipping functionality
- File: `7-skip.test.js`

### 8. Basic Integration testing
- Testing a basic Express API endpoint
- Directory: `8-api/`

### 9. Regex integration testing
- Testing API endpoints with regex parameters
- Directory: `9-api/`

### 10. Deep equality & Post integration testing
- Testing complex API endpoints with POST requests and JSON responses
- Directory: `10-api/`

## Running Tests

### For Unit Tests
```bash
# Run all tests
npm test

# Run specific test file
npm test path/to/test.js
```

### For API Integration Tests
1. Start the server in one terminal:
```bash
node api.js
```

2. Run the tests in another terminal:
```bash
npm test api.test.js
```

## Test Coverage
To generate test coverage reports:
```bash
npm run test-coverage
```

## Development Guidelines
- All files should end with a new line
- JavaScript files should use the `.js` extension
- Tests should be in files with `.test.js` extension
- All tests should pass without any warnings
- All test files should be executed using `npm test`

## Author
Silas Edet

## License
This project is licensed under the ALX License.
