// This file was automatically generated from "index.lmd.json"
(function (global, main, modules, modules_options, options) {
    var initialized_modules = {},
        global_eval = function (code) {
            return global.Function('return ' + code)();
        },
        
        global_document = global.document,
        local_undefined,
        /**
         * @param {String} moduleName module name or path to file
         * @param {*}      module module content
         *
         * @returns {*}
         */
        register_module = function (moduleName, module) {
            lmd_trigger('lmd-register:before-register', moduleName, module);
            // Predefine in case of recursive require
            var output = {'exports': {}};
            initialized_modules[moduleName] = 1;
            modules[moduleName] = output.exports;

            if (!module) {
                // if undefined - try to pick up module from globals (like jQuery)
                // or load modules from nodejs/worker environment
                module = lmd_trigger('js:request-environment-module', moduleName, module)[1] || global[moduleName];
            } else if (typeof module === 'function') {
                // Ex-Lazy LMD module or unpacked module ("pack": false)
                var module_require = lmd_trigger('lmd-register:decorate-require', moduleName, lmd_require)[1];

                // Make sure that sandboxed modules cant require
                if (modules_options[moduleName] &&
                    modules_options[moduleName].sandbox &&
                    typeof module_require === 'function') {

                    module_require = local_undefined;
                }

                module = module(module_require, output.exports, output) || output.exports;
            }

            module = lmd_trigger('lmd-register:after-register', moduleName, module)[1];
            return modules[moduleName] = module;
        },
        /**
         * List of All lmd Events
         *
         * @important Do not rename it!
         */
        lmd_events = {},
        /**
         * LMD event trigger function
         *
         * @important Do not rename it!
         */
        lmd_trigger = function (event, data, data2, data3) {
            var list = lmd_events[event],
                result;

            if (list) {
                for (var i = 0, c = list.length; i < c; i++) {
                    result = list[i](data, data2, data3) || result;
                    if (result) {
                        // enable decoration
                        data = result[0] || data;
                        data2 = result[1] || data2;
                        data3 = result[2] || data3;
                    }
                }
            }
            return result || [data, data2, data3];
        },
        /**
         * LMD event register function
         *
         * @important Do not rename it!
         */
        lmd_on = function (event, callback) {
            if (!lmd_events[event]) {
                lmd_events[event] = [];
            }
            lmd_events[event].push(callback);
        },
        /**
         * @param {String} moduleName module name or path to file
         *
         * @returns {*}
         */
        lmd_require = function (moduleName) {
            var module = modules[moduleName];

            var replacement = lmd_trigger('*:rewrite-shortcut', moduleName, module);
            if (replacement) {
                moduleName = replacement[0];
                module = replacement[1];
            }

            lmd_trigger('*:before-check', moduleName, module);
            // Already inited - return as is
            if (initialized_modules[moduleName] && module) {
                return module;
            }

            lmd_trigger('*:before-init', moduleName, module);

            // Lazy LMD module not a string
            if (typeof module === 'string' && module.indexOf('(function(') === 0) {
                module = global_eval(module);
            }

            return register_module(moduleName, module);
        },
        output = {'exports': {}},

        /**
         * Sandbox object for plugins
         *
         * @important Do not rename it!
         */
        sandbox = {
            'global': global,
            'modules': modules,
            'modules_options': modules_options,
            'options': options,

            'eval': global_eval,
            'register': register_module,
            'require': lmd_require,
            'initialized': initialized_modules,

            
            'document': global_document,
            
            

            'on': lmd_on,
            'trigger': lmd_trigger,
            'undefined': local_undefined
        };

    for (var moduleName in modules) {
        // reset module init flag in case of overwriting
        initialized_modules[moduleName] = 0;
    }

/**
 * @name sandbox
 */
(function (sb) {
    /**
     * @event js:request-environment-module js.js plugin requests for enviroment-based module init
     *        (importScripts or node require)
     *
     * @param {String}   moduleName
     * @param {String}   module
     *
     * @retuns yes
     */
    sb.on('js:request-environment-module', function (moduleName, module) {
        try {
            // call importScripts or require
            // any of them can throw error if file not found or transmission error
            module = sb.modules[moduleName] = (sb.global.importScripts || require)(moduleName) || {};
            return [moduleName, module];
        } catch (e) {
            // error -> default behaviour
            sb.trigger('*:request-error', moduleName, module);
            return [moduleName, module];
        }
    });
}(sandbox));

/**
 * @name sandbox
 */
(function (sb) {
    /**
     * @event async:require-environment-file requests file register using some environment functions non XHR
     *
     * @param {String}   moduleName
     * @param {String}   module
     * @param {Function} callback   this callback will be called when module inited
     *
     * @retuns no
     */
    sb.on('preload:require-environment-file', function (moduleName, module, callback) {
        require('fs').readFile(moduleName, 'utf8', function (err, module) {
            if (err) {
                sb.trigger('*:request-error', moduleName);
                callback();
                return;
            }
            // check file extension - not content-type
            if ((/js$|json$/).test(moduleName)) {
                module = sb.trigger('*:wrap-module', moduleName, module, moduleName)[1];
                if (!(/json$/).test(moduleName)) {
                    module = sb.trigger('*:coverage-apply', moduleName, module)[1];
                }
                module = sb.eval(module);
            }
            // 4. Then callback it
            callback(sb.register(moduleName, module));
        });
    });
}(sandbox));



    main(lmd_trigger('lmd-register:decorate-require', 'main', lmd_require)[1], output.exports, output);
})/*DO NOT ADD ; !*/
(this,(function (require, exports, module) { /* wrapped by builder */
/**
 * LMD "node" plugin example
 */

// this require is lmd_require->node_require proxy in node environment
var md5 = require('md5');

if (typeof md5 === "undefined") {
    console.log('[OK] This is DOM environment!', 'No md5 module in this build.');
} else {
    console.log('[OK] This is Node environment!', md5('42'));
}

}),{

},{},{});
