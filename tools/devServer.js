import express from 'express';
import webpack from 'webpack';
import config from './../webpack.config.dev';
import path from 'path';
import open from 'open';

const port = 8081;
const app = express();
const webpackConfig = webpack(config);

app.use(require('webpack-dev-middleware')(webpackConfig, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(webpackConfig));

app.use(express.static("public"));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './../src/index.html'));
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});