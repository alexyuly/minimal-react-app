import webpack from 'webpack';
import webpackConfig from '../../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

export default (server) => {
  const compiler = webpack(webpackConfig);
  return server
    .use(webpackHotMiddleware(compiler))
    .use(webpackDevMiddleware(compiler, { publicPath: '/' }));
};
