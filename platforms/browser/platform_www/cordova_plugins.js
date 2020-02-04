cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/nodejs-mobile-cordova/www/nodejs_apis.js",
        "id": "nodejs-mobile-cordova.nodejs",
        "pluginId": "nodejs-mobile-cordova",
        "clobbers": [
            "nodejs"
        ]
    },
    {
        "file": "plugins/nodejs-mobile-cordova/www/nodejs_events.js",
        "id": "nodejs-mobile-cordova.nodejs_events",
        "pluginId": "nodejs-mobile-cordova",
        "clobbers": [
            "nodejs_events"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.4",
    "nodejs-mobile-cordova": "0.3.4"
}
// BOTTOM OF METADATA
});