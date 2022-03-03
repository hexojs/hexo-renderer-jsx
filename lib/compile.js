const React = require('react');
const ReactDOMServer = require('react-dom/server');

require('@babel/register')({
    plugins: [
        [
            '@babel/plugin-transform-react-jsx',
            {
                runtime: 'automatic',
            },
        ],
    ],
    presets: [['@babel/preset-env', { targets: { node: true } }]],
});

function compile(data) {
    const Component = require(data.path);

    return function render(locals) {
        const element = React.createElement(Component.default || Component, locals);
        let renderedHTML = ReactDOMServer.renderToStaticMarkup(element);

        if (renderedHTML.slice(0, 5).toLowerCase() === '<html') {
            renderedHTML = '<!DOCTYPE html>' + renderedHTML;
        }

        return renderedHTML;
    };
}

module.exports = compile;
