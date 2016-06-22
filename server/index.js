import express from 'express';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import WebpackDevServer from 'webpack-dev-server';

const contentBase = '../client_dist';

const createWebserver = () => {
  const environment = process.env.npm_lifecycle_event;
  switch (environment) {
    case 'start':
      return express().use('/', express.static(contentBase));
    case 'start-debug':
      return new WebpackDevServer(webpack(webpackConfig), { contentBase });
    default:
      throw new Error('Could not create webserver for unknown build environment');
  }
};

createWebserver().listen(80);
