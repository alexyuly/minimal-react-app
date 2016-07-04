import express from 'express';
import path from 'path';

export default (server) => server
  .use(express.static(path.join(__dirname, '../../client_dist')));
