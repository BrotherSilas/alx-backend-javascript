# ALX Backend JavaScript - Node.js Basics

## Project Overview
This project focuses on learning and implementing basic Node.js concepts, including file operations, HTTP servers, and Express.js applications. The project covers various tasks demonstrating fundamental Node.js skills.

## Technologies Used
- Node.js (version 12.x.x)
- Express.js
- ES6 Modules
- Babel
- Jest (for testing)
- ESLint (for code linting)

## Project Structure
```
0x05-Node_JS_basic/
│
├── 0-console.js          # Basic console message display
├── 1-stdin.js            # Interactive stdin processing
├── 2-read_file.js        # Synchronous file reading
├── 3-read_file_async.js  # Asynchronous file reading
├── 4-http.js             # Simple HTTP server
├── 5-http.js             # Complex HTTP server
├── 6-http_express.js     # Simple Express server
├── 7-http_express.js     # Complex Express server
│
└── full_server/          # Advanced server structure
    ├── utils.js
    ├── controllers/
    │   ├── AppController.js
    │   └── StudentsController.js
    ├── routes/
    │   └── index.js
    └── server.js
```

## Prerequisites
- Node.js 12.x.x
- npm

## Installation
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
```bash
npm install
```

## Running the Project
### Basic Scripts
Run individual Node.js scripts:
```bash
node 0-console.js
node 1-stdin.js
# ... and so on
```

### Development Server
For the full server application:
```bash
npm run dev
```

## Testing
Run tests:
```bash
npm run test
```

Run full test suite (including linting):
```bash
npm run full-test
```

## Key Features
- Synchronous and asynchronous file reading
- HTTP servers using native Node.js and Express
- Student database processing
- Modular server architecture

## Learning Objectives
- Understanding Node.js fundamentals
- File system operations
- Creating HTTP servers
- Using Express.js
- Implementing modular server architectures
- Error handling
- Asynchronous programming

## Coding Standards
- ES6 syntax
- Modular design
- Error handling
- Consistent code formatting

## Author
[Silas Edet]

## License
This project is part of the ALX Software Engineering program.
```
