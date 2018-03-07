import { SRNApp, SRNConfig } from '@souche-f2e/srn-framework';
/**
 * 加载初始化配置（各个环境）
 */
SRNConfig.load({
    default: require('./config/default.config').default,
    dev: require('./config/dev.config').default,
    prepub: require('./config/prepub.config').default,
    prod: require('./config/prod.config').default
});

// 初始化实例
var app = new SRNApp();
var routes = require('./route_config').default;
// 初始化路由设置
app.init(routes, '/Index');
// 初始化 Sentry
app.initSentry(SRNConfig.sentry.version, SRNConfig.sentry.dsn);

