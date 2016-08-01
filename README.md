# full-stack-template

[![CircleCI](https://circleci.com/gh/alexyuly/full-stack-template.svg?style=svg&circle-token=39c9879afcf215a11a96348ce6d1bbefc04e65de)](https://circleci.com/gh/alexyuly/full-stack-template)

The purpose of this repo is to provide (yet another) very generic
template for a full-stack socket-based Node.js web app. React, Redux,
Webpack, and Socket.io are included. Material-UI is also in the mix to
provide a quick starting point for a UI. Unit testing is done with Tape.

## Notes

- The npm scripts include some Unix-only syntax like `rm` and setting
environment variables using `key=value`. If you run Windows you'll need
to change them.

## TODO

- Write more unit tests
- Refactor duplicated code in client and server stores to be shared
