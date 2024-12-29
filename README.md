# Unhandled Exception in Node.js Server

This repository demonstrates an example of an unhandled exception that can occur in a Node.js server using the `http` module.  The exception arises from a failure to properly handle potential errors during server startup, such as the port already being in use.

## Bug

The `server.listen()` method is called without error handling. If an error occurs (e.g., the port is in use), the exception is unhandled, leading to server failure.

## Solution

The solution involves adding a callback function to `server.listen()` to handle potential errors gracefully.  The callback receives an `error` object as its first argument.  This allows for proper error logging and handling.  Additionally, the process exit code is set to 1 to indicate failure, which is helpful for automated monitoring and deployment processes.