//配置具体的修改规则
const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': 'orange' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};