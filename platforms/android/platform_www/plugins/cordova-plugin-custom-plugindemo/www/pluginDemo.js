/**
  待解
*/
cordova.define("cordova-plugin-custom-plugindemo.pluginDemo", function(require, exports, module) {

    var exec = require('cordova/exec');
    //module.exports赋值，让赋值对象向Cordova应用公开
    exports.coolMethod = function(arg0, success, error) {
        /** 参数：第1个，成功回调；第2个，失败回调；第3个，将要调用的类的配置名字；
        第4个，调用的方法名；第5个，传递的参数  */
        exec(success, error, "PluginDemo", "coolMethod", [arg0]);
    };

});
