# NodeJS

**Execute Node**:

```bash
node
```

## What is Node.js?

Node.js is a powerful, open-source runtime environment that allows you to run JavaScript on the server-side (outside of a browser). Traditionally, JavaScript was only used in web browsers to make websites interactive. With Node.js, you can use JavaScript to build server-side applications, like web servers, APIs, or command-line tools.

### Key Concepts to Understand Node.js

1. **JavaScript on the Server**:
  
* Node.js allows you to run JavaScript outside the browser. This means you can use JavaScript to create entire web applications and servers, not just for front-end interactions.

2. **Event-Driven Architecture**:

* Node.js is event-driven, meaning it is designed around events that trigger actions. For example, when a user sends a request to a server, that request triggers an event in Node.js, and the server responds to it.

3. **Non-Blocking, Asynchronous I/O**:
  
* Non-blocking means that Node.js does not wait for operations like file reading, database queries, or network requests to finish before continuing with other tasks. This makes Node.js highly efficient for handling many tasks at once (e.g., handling hundreds or thousands of web requests concurrently).

* Asynchronous I/O allows Node.js to handle these tasks in the background, freeing it up to handle new requests while waiting for others to complete.

4. **Single-Threaded**:

* Node.js runs on a single thread, meaning it doesn’t use multiple CPU cores to run tasks (unlike some other server environments). However, this doesn't mean it’s slow or limited in performance. Due to its event-driven and non-blocking nature, it can still handle many tasks simultaneously without creating multiple threads.

5. **V8 JavaScript Engine**:

* Node.js uses Google's V8 JavaScript engine (the same one used in Chrome) to execute JavaScript code. This engine compiles JavaScript into machine code to make it run faster.

6. **Modules and npm (Node Package Manager)**:

* Modules are reusable pieces of code (like libraries) that you can include in your project. Node.js has many built-in modules (e.g., http, fs, path) to handle things like HTTP requests, file systems, and path manipulations.

* npm is a package manager that comes with Node.js. It allows you to easily install third-party libraries (called packages) that extend the functionality of your Node.js projects. You can search for and install packages from the npm registry.

7. **Callback Functions**:

* In Node.js, you often use callbacks, which are functions passed as arguments to other functions. The callback is executed when a certain task is completed (like a file being read, or a web request being processed). This enables Node.js to handle operations asynchronously.

## Node Architecture

<img src="./assets/node-architecture.png" />
