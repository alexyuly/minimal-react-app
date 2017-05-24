# Note

I highly recommend checking out [https://github.com/facebookincubator/create-react-app](create-react-app) for a fast, reliable way to create a new React-based front-end app. This repo, `full-stack-template`, is not currently maintained.

# full-stack-template

[![CircleCI](https://circleci.com/gh/alexyuly/full-stack-template.svg?style=svg&circle-token=39c9879afcf215a11a96348ce6d1bbefc04e65de)](https://circleci.com/gh/alexyuly/full-stack-template)

The purpose of this repo is to provide a very generic and very
minimalistic template for a full-stack socket-based Node.js web app
using react, redux, webpack, socket.io, and friends.

## Notes

- The npm scripts include some Unix-only syntax like `rm` and setting
environment variables using `key=value`. If you run Windows you'll need
to change them.

## TODO

- Write more unit tests
- Refactor duplicated code in client and server stores to be shared
