// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === "function" && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({2:[function(require,module,exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
// Common events
    const CONNECTION_EVENT = exports.CONNECTION_EVENT = 'connection';
    const CONNECT_EVENT = exports.CONNECT_EVENT = 'connect';
    const DISCONNECT_EVENT = exports.DISCONNECT_EVENT = 'disconnect';

// Remote events
    const PREV_EVENT = exports.PREV_EVENT = 'prev';
    const NEXT_EVENT = exports.NEXT_EVENT = 'next';
    const PAUSE_EVENT = exports.PAUSE_EVENT = 'pause';
    const OVERVIEW_EVENT = exports.OVERVIEW_EVENT = 'overview';
    const REQUEST_RECONNECT_EVENT = exports.REQUEST_RECONNECT_EVENT = 'requestreconnect';
    const POINTER_START_EVENT = exports.POINTER_START_EVENT = 'pointer_start';
    const POINTER_STOP_EVENT = exports.POINTER_STOP_EVENT = 'pointer_stop';
    const POINTER_MOVE_EVENT = exports.POINTER_MOVE_EVENT = 'pointer_move';
    const REMOTE_EVENTS = exports.REMOTE_EVENTS = [PREV_EVENT, NEXT_EVENT, PAUSE_EVENT, OVERVIEW_EVENT, REQUEST_RECONNECT_EVENT, POINTER_START_EVENT, POINTER_STOP_EVENT, POINTER_MOVE_EVENT];

// Presentation events
    const INIT_EVENT = exports.INIT_EVENT = 'init';
    const SETSTATE_EVENT = exports.SETSTATE_EVENT = 'setstate';
    const PRESENTATION_DISCONNECTED_EVENT = exports.PRESENTATION_DISCONNECTED_EVENT = 'presentation_disconnected';
    const PRESENTATION_EVENTS = exports.PRESENTATION_EVENTS = [INIT_EVENT, SETSTATE_EVENT];

// Reveal events
    const SLIDE_CHANGED_EVENT = exports.SLIDE_CHANGED_EVENT = 'slidechanged';
    const PAUSED_EVENT = exports.PAUSED_EVENT = 'paused';
    const RESUMED_EVENT = exports.RESUMED_EVENT = 'resumed';
    const OVERVIEW_HIDDEN_EVENT = exports.OVERVIEW_HIDDEN_EVENT = 'overviewhidden';
    const OVERVIEW_SHOWN_EVENT = exports.OVERVIEW_SHOWN_EVENT = 'overviewshown';
    const FRAGMENT_HIDDEN_EVENT = exports.FRAGMENT_HIDDEN_EVENT = 'fragmenthidden';
    const FRAGMENT_SHOWN_EVENT = exports.FRAGMENT_SHOWN_EVENT = 'fragmentshown';
    const REVEAL_EVENTS = exports.REVEAL_EVENTS = [SLIDE_CHANGED_EVENT, PAUSED_EVENT, RESUMED_EVENT, OVERVIEW_HIDDEN_EVENT, OVERVIEW_SHOWN_EVENT, FRAGMENT_HIDDEN_EVENT, FRAGMENT_SHOWN_EVENT];

// Types
    const PRESENTATION = exports.PRESENTATION = 'presentation';
    const REMOTE = exports.REMOTE = 'remote';
  },{}],3:[function(require,module,exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const loadScript = exports.loadScript = src => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };
  },{}],6:[function(require,module,exports) {
    'use strict';

    var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

    var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

    function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _CustomElement() {
      return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
    }

    ;
    Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(_CustomElement, HTMLElement);

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    ;(function (window, document, HTMLElement) {
      var _$2 = '_slim_internals_'; // Symbol('Slim')

      var __SLIM_ALREADY_DEFINED__ = false;

      try {
        var _Slim = window.Slim;

        if (!!_Slim && !!_Slim[_$2]) {
          __SLIM_ALREADY_DEFINED__ = true;
          var warn = console.warn || console.log;
          return warn('Multiple instances of slim.js found! This may cause conflicts');
        }
      } catch (err) {}

      var __flags = {
        isWCSupported: 'customElements' in window && 'import' in document.createElement('link') && 'content' in document.createElement('template'),
        isIE11: !!window['MSInputMethodContext'] && !!document['documentMode'],
        isChrome: undefined,
        isEdge: undefined,
        isSafari: undefined,
        isFirefox: undefined
      };

      try {
        __flags.isChrome = /Chrome/.test(navigator.userAgent);
        __flags.isEdge = /Edge/.test(navigator.userAgent);
        __flags.isSafari = /Safari/.test(navigator.userAgent);
        __flags.isFirefox = /Firefox/.test(navigator.userAgent);

        if (__flags.isIE11 || __flags.isEdge) {
          __flags.isChrome = false;
          Object.defineProperty(Node.prototype, 'children', function () {
            return this.childNodes;
          });
        }
      } catch (err) {}

      var Internals = function Internals() {
        _classCallCheck(this, Internals);

        this.hasCustomTemplate = undefined;
        this.boundParent = null;
        this.repeater = {};
        this.bindings = {};
        this.reversed = {};
        this.inbounds = {};
        this.eventHandlers = {};
        this.internetExploderClone = null;
        this.rootElement = null;
        this.createdCallbackInvoked = false;
        this.sourceText = null;
        this.excluded = false;
        this.autoBoundAttributes = [];
      };

      var Slim = function (_CustomElement2) {
        _inherits(Slim, _CustomElement2);

        _createClass(Slim, null, [{
          key: 'dashToCamel',
          value: function dashToCamel(dash) {
            return dash.indexOf('-') < 0 ? dash : dash.replace(/-[a-z]/g, function (m) {
              return m[1].toUpperCase();
            });
          }
        }, {
          key: 'camelToDash',
          value: function camelToDash(camel) {
            return camel.replace(/([A-Z])/g, '-$1').toLowerCase();
          }
        }, {
          key: 'lookup',
          value: function lookup(target, expression, maybeRepeated) {
            var chain = expression.split('.');
            var o = void 0;
            if (maybeRepeated && maybeRepeated[_$2].repeater[chain[0]]) {
              o = maybeRepeated[_$2].repeater;
            } else {
              o = target;
            }
            var i = 0;
            while (o && i < chain.length) {
              o = o[chain[i++]];
            }
            return o;
          }

          // noinspection JSUnresolvedVariable

        }, {
          key: '_$',
          value: function _$(target) {
            target[_$2] = target[_$2] || new Internals();
            return target[_$2];
          }
        }, {
          key: 'polyFill',
          value: function polyFill(url) {
            if (!__flags.isWCSupported) {
              var existingScript = document.querySelector('script[data-is-slim-polyfill="true"]');
              if (!existingScript) {
                var script = document.createElement('script');
                script.setAttribute('data-is-slim-polyfill', 'true');
                script.src = url;
                document.head.appendChild(script);
              }
            }
          }
        }, {
          key: 'tag',
          value: function tag(tagName, tplOrClazz, clazz) {
            if (this.tagToClassDict.has(tagName)) {
              throw new Error('Unable to define tag: ' + tagName + ' already defined');
            }
            if (clazz === undefined) {
              clazz = tplOrClazz;
            } else {
              Slim.tagToTemplateDict.set(tagName, tplOrClazz);
            }
            this.tagToClassDict.set(tagName, clazz);
            this.classToTagDict.set(clazz, tagName);
            customElements.define(tagName, clazz);
          }
        }, {
          key: 'tagOf',
          value: function tagOf(clazz) {
            return this.classToTagDict.get(clazz);
          }
        }, {
          key: 'classOf',
          value: function classOf(tag) {
            return this.tagToClassDict.get(tag);
          }
        }, {
          key: 'createUniqueIndex',
          value: function createUniqueIndex() {
            this[_$2].uniqueCounter++;
            return this[_$2].uniqueCounter.toString(16);
          }
        }, {
          key: 'plugin',
          value: function plugin(phase, _plugin) {
            if (!this.plugins[phase]) {
              throw new Error('Cannot attach plugin: ' + phase + ' is not a supported phase');
            }
            this.plugins[phase].push(_plugin);
          }
        }, {
          key: 'checkCreationBlocking',
          value: function checkCreationBlocking(element) {
            if (element.attributes) {
              for (var i = 0, n = element.attributes.length; i < n; i++) {
                var attribute = element.attributes[i];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                  for (var _iterator = Slim[_$2].customDirectives[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _ref = _step.value;

                    var _ref2 = _slicedToArray(_ref, 2);

                    var test = _ref2[0];
                    var directive = _ref2[1];

                    var value = directive.isBlocking && test(attribute);
                    if (value) {
                      return true;
                    }
                  }
                } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                      _iterator.return();
                    }
                  } finally {
                    if (_didIteratorError) {
                      throw _iteratorError;
                    }
                  }
                }
              }
            }
            return false;
          }
        }, {
          key: 'customDirective',
          value: function customDirective(testFn, fn, isBlocking) {
            if (this[_$2].customDirectives.has(testFn)) {
              throw new Error('Cannot register custom directive: ' + testFn + ' already registered');
            }
            fn.isBlocking = isBlocking;
            this[_$2].customDirectives.set(testFn, fn);
          }
        }, {
          key: 'executePlugins',
          value: function executePlugins(phase, target) {
            this.plugins[phase].forEach(function (fn) {
              fn(target);
            });
          }
        }, {
          key: 'qSelectAll',
          value: function qSelectAll(target, selector) {
            return [].concat(_toConsumableArray(target.querySelectorAll(selector)));
          }
        }, {
          key: 'unbind',
          value: function unbind(source, target) {
            var bindings = source[_$2].bindings;
            Object.keys(bindings).forEach(function (key) {
              var chain = bindings[key].chain.filter(function (binding) {
                return binding.target !== target;
              });
              bindings[key].chain = chain;
            });
          }
        }, {
          key: 'root',
          value: function root(target) {
            return target.__isSlim && target.useShadow ? target[_$2].rootElement || target : target;
          }
        }, {
          key: 'selectRecursive',
          value: function selectRecursive(target, force) {
            var collection = [];
            var search = function search(node, force) {
              collection.push(node);
              var allow = !node.__isSlim || node.__isSlim && !node.template || node.__isSlim && node === target || force;
              if (allow) {
                var children = [].concat(_toConsumableArray(Slim.root(node).children));
                children.forEach(function (childNode) {
                  search(childNode, force);
                });
              }
            };
            search(target, force);
            return collection;
          }
        }, {
          key: 'removeChild',
          value: function removeChild(target) {
            if (typeof target.remove === 'function') {
              target.remove();
            }
            if (target.parentNode) {
              target.parentNode.removeChild(target);
            }
            if (this._$(target).internetExploderClone) {
              this.removeChild(this._$(target).internetExploderClone);
            }
          }
        }, {
          key: 'moveChildren',
          value: function moveChildren(source, target) {
            while (source.firstChild) {
              target.appendChild(source.firstChild);
            }
          }
        }, {
          key: 'wrapGetterSetter',
          value: function wrapGetterSetter(element, expression) {
            var pName = expression.split('.')[0];
            var oSetter = element.__lookupSetter__(pName);
            if (oSetter && oSetter[_$2]) return pName;
            if (typeof oSetter === 'undefined') {
              oSetter = function oSetter() {};
            }

            var srcValue = element[pName];
            this._$(element).bindings[pName] = element[_$2].bindings[pName] || {
              chain: [],
              value: srcValue
            };
            element[_$2].bindings[pName].value = srcValue;
            var newSetter = function newSetter(v) {
              oSetter.call(element, v);
              this[_$2].bindings[pName].value = v;
              this._executeBindings(pName);
            };
            newSetter[_$2] = true;
            element.__defineGetter__(pName, function () {
              return element[_$2].bindings[pName].value;
            });
            element.__defineSetter__(pName, newSetter);
            return pName;
          }
        }, {
          key: 'bindOwn',
          value: function bindOwn(target, expression, executor) {
            return Slim.bind(target, target, expression, executor);
          }
        }, {
          key: 'bind',
          value: function bind(source, target, expression, executor) {
            Slim._$(source);
            Slim._$(target);
            if (target[_$2].excluded) return;
            executor.source = source;
            executor.target = target;
            var pName = this.wrapGetterSetter(source, expression);
            if (!source[_$2].reversed[pName]) {
              source[_$2].bindings[pName].chain.push(executor);
            }
            target[_$2].inbounds[pName] = target[_$2].inbounds[pName] || [];
            target[_$2].inbounds[pName].push(executor);
            return executor;
          }
        }, {
          key: 'update',
          value: function update(target) {
            var children = Slim.selectRecursive(target);

            for (var _len = arguments.length, props = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              props[_key - 1] = arguments[_key];
            }

            if (props.length === 0) {
              return children.forEach(function (child) {
                Slim.commit(child);
              });
            }
            props.forEach(function (prop) {
              children.forEach(function (child) {
                Slim.commit(child, prop);
              });
            });
          }
        }, {
          key: 'commit',
          value: function commit(target, prop) {
            var $ = target[_$2];
            var chain = [];
            if (prop) {
              if ($.inbounds[prop]) {
                chain = chain.concat($.inbounds[prop] || []);
              }
              if ($.bindings[prop]) {
                chain = chain.concat($.bindings[prop].chain);
              }
            } else {
              Object.keys(target[_$2].inbounds).forEach(function (prop) {
                if ($.inbounds[prop]) {
                  chain = chain.concat($.inbounds[prop] || []);
                }
                if ($.bindings[prop]) {
                  chain = chain.concat($.bindings[prop].chain);
                }
              });
            }
            chain.forEach(function (x) {
              return x();
            });
          }

          /*
            Class instance
            */

        }, {
          key: 'rxInject',
          get: function get() {
            return (/\{(.+[^(\((.+)\))])\}/
            ); // eslint-disable-line
          }
        }, {
          key: 'rxProp',
          get: function get() {
            return (/(.+[^(\((.+)\))])/
            ); // eslint-disable-line
          }
        }, {
          key: 'rxMethod',
          get: function get() {
            return (/(.+)(\((.+)\)){1}/
            ); // eslint-disable-line
          }
        }]);

        function Slim() {
          _classCallCheck(this, Slim);

          var _this = _possibleConstructorReturn(this, (Slim.__proto__ || Object.getPrototypeOf(Slim)).call(this));

          var init = function init() {
            _this.__isSlim = true;
            Slim.debug('ctor', _this.localName);
            if (Slim.checkCreationBlocking(_this)) {
              return;
            }
            _this.createdCallback();
          };
          if (__flags.isSafari) {
            Slim.asap(init);
          } else init();
          return _this;
        }

        // Native DOM Api V1

        _createClass(Slim, [{
          key: 'createdCallback',
          value: function createdCallback() {
            if (this[_$2] && this[_$2].createdCallbackInvoked) return;
            this._initialize();
            this[_$2].createdCallbackInvoked = true;
            this.onBeforeCreated();
            Slim.executePlugins('create', this);
            this.render();
            this.onCreated();
          }

          // Native DOM Api V2

        }, {
          key: 'connectedCallback',
          value: function connectedCallback() {
            this.onAdded();
            Slim.executePlugins('added', this);
          }
        }, {
          key: 'disconnectedCallback',
          value: function disconnectedCallback() {
            this.onRemoved();
            Slim.executePlugins('removed', this);
          }
        }, {
          key: 'attributeChangedCallback',
          value: function attributeChangedCallback(attr, oldValue, newValue) {
            if (newValue !== oldValue && this.autoBoundAttributes.includes[attr]) {
              var prop = Slim.dashToCamel(attr);
              this[prop] = newValue;
            }
          }
          // Slim internal API

        }, {
          key: '_executeBindings',
          value: function _executeBindings(prop) {
            var _this2 = this;

            Slim.debug('_executeBindings', this.localName);
            var all = this[_$2].bindings;
            if (prop) {
              all = _defineProperty({}, prop, true);
            }
            Object.keys(all).forEach(function (pName) {
              var o = _this2[_$2].bindings[pName];
              o && o.chain.forEach(function (binding) {
                return binding();
              });
            });
          }
        }, {
          key: '_bindChildren',
          value: function _bindChildren(children) {
            Slim.debug('_bindChildren', this.localName);
            if (!children) {
              children = Slim.qSelectAll(this, '*');
            }
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var child = _step2.value;

                Slim._$(child);
                if (child[_$2].boundParent === this) continue;
                child[_$2].boundParent = child[_$2].boundParent || this;

                // todo: child.localName === 'style' && this.useShadow -> processStyleNodeInShadowMode

                if (child.attributes.length) {
                  var i = 0;
                  var n = child.attributes.length;
                  while (i < n) {
                    var source = this;
                    var attribute = child.attributes.item(i);
                    if (!child[_$2].excluded) {
                      var _iteratorNormalCompletion3 = true;
                      var _didIteratorError3 = false;
                      var _iteratorError3 = undefined;

                      try {
                        for (var _iterator3 = Slim[_$2].customDirectives[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                          var _ref3 = _step3.value;

                          var _ref4 = _slicedToArray(_ref3, 2);

                          var check = _ref4[0];
                          var directive = _ref4[1];

                          var match = check(attribute);
                          if (match) {
                            directive(source, child, attribute, match);
                          }
                        }
                      } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                      } finally {
                        try {
                          if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                          }
                        } finally {
                          if (_didIteratorError3) {
                            throw _iteratorError3;
                          }
                        }
                      }
                    }
                    i++;
                  }
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
        }, {
          key: '_resetBindings',
          value: function _resetBindings() {
            Slim.debug('_resetBindings', this.localName);
            this[_$2].bindings = {};
          }
        }, {
          key: '_render',
          value: function _render(customTemplate) {
            var _this3 = this;

            Slim.debug('_render', this.localName);
            Slim.executePlugins('beforeRender', this);
            this[_$2].hasCustomTemplate = customTemplate;
            this._resetBindings();
            this[_$2].rootElement.innerHTML = '';[].concat(_toConsumableArray(this.childNodes)).forEach(function (childNode) {
              if (childNode.localName === 'style') {
                _this3[_$2].externalStyle = childNode;
                childNode.remove();
              }
            });
            var template = this[_$2].hasCustomTemplate || this.template;
            if (template && typeof template === 'string') {
              var frag = document.createElement('slim-root-fragment');
              frag.innerHTML = template || '';
              var scopedChildren = Slim.qSelectAll(frag, '*');
              if (this[_$2].externalStyle) {
                this._bindChildren([this[_$2].externalStyle]);
              }
              this._bindChildren(scopedChildren);
              Slim.asap(function () {
                Slim.moveChildren(frag, _this3[_$2].rootElement || _this3);
                _this3[_$2].externalStyle && _this3[_$2].rootElement.appendChild(_this3[_$2].externalStyle);
                _this3._executeBindings();
                _this3.onRender();
                Slim.executePlugins('afterRender', _this3);
              });
            }
          }
        }, {
          key: '_initialize',
          value: function _initialize() {
            var _this4 = this;

            Slim.debug('_initialize', this.localName);
            Slim._$(this);
            this[_$2].uniqueIndex = Slim.createUniqueIndex();
            if (this.useShadow) {
              if (typeof HTMLElement.prototype.attachShadow === 'undefined') {
                this[_$2].rootElement = this.createShadowRoot();
              } else {
                this[_$2].rootElement = this.attachShadow({ mode: 'open' });
              }
            } else {
              this[_$2].rootElement = this;
            }
            // this.setAttribute('slim-uq', this[_$].uniqueIndex)
            var observedAttributes = this.constructor.observedAttributes;
            if (observedAttributes) {
              observedAttributes.forEach(function (attr) {
                var pName = Slim.dashToCamel(attr);
                _this4[pName] = _this4.getAttribute(attr);
              });
            }
          }

          // Slim public / protected API

        }, {
          key: 'commit',
          value: function commit() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            Slim.commit.apply(Slim, [this].concat(args));
          }
        }, {
          key: 'update',
          value: function update() {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            Slim.update.apply(Slim, [this].concat(args));
          }
        }, {
          key: 'render',
          value: function render(tpl) {
            this._render(tpl);
          }
        }, {
          key: 'onRender',
          value: function onRender() {}
        }, {
          key: 'onBeforeCreated',
          value: function onBeforeCreated() {}
        }, {
          key: 'onCreated',
          value: function onCreated() {}
        }, {
          key: 'onAdded',
          value: function onAdded() {}
        }, {
          key: 'onRemoved',
          value: function onRemoved() {}
        }, {
          key: 'find',
          value: function find(selector) {
            return this[_$2].rootElement.querySelector(selector);
          }
        }, {
          key: 'findAll',
          value: function findAll(selector) {
            return Slim.qSelectAll(this[_$2].rootElement, selector);
          }
        }, {
          key: 'callAttribute',
          value: function callAttribute(attr, data) {
            var fnName = this.getAttribute(attr);
            if (fnName) {
              return this[_$2].boundParent[fnName](data);
            }
          }
        }, {
          key: 'autoBoundAttributes',
          get: function get() {
            return [];
          }
        }, {
          key: 'useShadow',
          get: function get() {
            return false;
          }
        }, {
          key: 'template',
          get: function get() {
            return Slim.tagToTemplateDict.get(Slim.tagOf(this.constructor));
          }
        }]);

        return Slim;
      }(_CustomElement);

      Slim.uniqueIndex = 0;
      Slim.tagToClassDict = new Map();
      Slim.classToTagDict = new Map();
      Slim.tagToTemplateDict = new Map();
      Slim.plugins = {
        create: [],
        added: [],
        beforeRender: [],
        afterRender: [],
        removed: []
      };

      Slim.debug = function () {};

      Slim.asap = window && window.requestAnimationFrame ? function (cb) {
        return window.requestAnimationFrame(cb);
      } : typeof setImmediate !== 'undefined' ? setImmediate : function (cb) {
        return setTimeout(cb, 0);
      };

      Slim[_$2] = {
        customDirectives: new Map(),
        uniqueCounter: 0,
        supportedNativeEvents: ['click', 'mouseover', 'mouseout', 'mousemove', 'mouseenter', 'mousedown', 'mouseup', 'dblclick', 'contextmenu', 'wheel', 'mouseleave', 'select', 'pointerlockchange', 'pointerlockerror', 'focus', 'blur', 'input', 'error', 'invalid', 'animationstart', 'animationend', 'animationiteration', 'reset', 'submit', 'resize', 'scroll', 'keydown', 'keypress', 'keyup', 'change']
      };

      Slim.customDirective(function (attr) {
        return attr.nodeName === 's:switch';
      }, function (source, target, attribute) {
        var expression = attribute.value;
        var oldValue = void 0;
        var anchor = document.createComment('switch:' + expression);
        target.appendChild(anchor);
        var children = [].concat(_toConsumableArray(target.children));
        var defaultChildren = children.filter(function (child) {
          return child.hasAttribute('s:default');
        });
        var fn = function fn() {
          var value = Slim.lookup(source, expression, target);
          if (String(value) === oldValue) return;
          var useDefault = true;
          children.forEach(function (child) {
            if (child.getAttribute('s:case') === String(value)) {
              if (child.__isSlim) {
                child.createdCallback();
              }
              anchor.parentNode.insertBefore(child, anchor);
              useDefault = false;
            } else {
              Slim.removeChild(child);
            }
          });
          if (useDefault) {
            defaultChildren.forEach(function (child) {
              if (child.__isSlim) {
                child.createdCallback();
              }
              anchor.parentNode.insertBefore(child, anchor);
            });
          } else {
            defaultChildren.forEach(function (child) {
              Slim.removeChild(child);
            });
          }
          oldValue = String(value);
        };
        Slim.bind(source, target, expression, fn);
      });

      Slim.customDirective(function (attr) {
        return (/^s:case$/.exec(attr.nodeName)
        );
      }, function () {}, true);
      Slim.customDirective(function (attr) {
        return (/^s:default$/.exec(attr.nodeName)
        );
      }, function () {}, true);

      // supported events (i.e. click, mouseover, change...)
      Slim.customDirective(function (attr) {
        return Slim[_$2].supportedNativeEvents.indexOf(attr.nodeName) >= 0;
      }, function (source, target, attribute) {
        var eventName = attribute.nodeName;
        var delegate = attribute.value;
        Slim._$(target).eventHandlers = target[_$2].eventHandlers || {};
        var allHandlers = target[_$2].eventHandlers;
        allHandlers[eventName] = allHandlers[eventName] || [];
        var handler = function handler(e) {
          try {
            source[delegate].call(source, e); // eslint-disable-line
          } catch (err) {
            err.message = 'Could not respond to event "' + eventName + '" on ' + target.localName + ' -> "' + delegate + '" on ' + source.localName + ' ... ' + err.message;
            console.warn(err);
          }
        };
        allHandlers[eventName].push(handler);
        target.addEventListener(eventName, handler);
        handler = null;
      });

      Slim.customDirective(function (attr) {
        return attr.nodeName === 's:if';
      }, function (source, target, attribute) {
        var expression = attribute.value;
        var path = expression;
        var isNegative = false;
        if (path.charAt(0) === '!') {
          path = path.slice(1);
          isNegative = true;
        }
        var oldValue = void 0;
        var anchor = document.createComment('if:' + expression);
        target.parentNode.insertBefore(anchor, target);
        var fn = function fn() {
          var value = !!Slim.lookup(source, path, target);
          if (isNegative) {
            value = !value;
          }
          if (value === oldValue) return;
          if (value) {
            if (target.__isSlim) {
              target.createdCallback();
            }
            anchor.parentNode.insertBefore(target, anchor.nextSibling);
          } else {
            Slim.removeChild(target);
          }
          oldValue = value;
        };
        Slim.bind(source, target, path, fn);
      }, true);

      // bind (text nodes)
      Slim.customDirective(function (attr) {
        return attr.nodeName === 'bind';
      }, function (source, target) {
        Slim._$(target);
        target[_$2].sourceText = target.innerText.split('\n').join(' ');
        var updatedText = '';
        var matches = target.innerText.match(/\{\{([^\}\}]+)+\}\}/g); // eslint-disable-line
        var aggProps = {};
        var textBinds = {};
        if (matches) {
          matches.forEach(function (expression) {
            var oldValue = void 0;
            var rxM = /\{\{(.+)(\((.+)\)){1}\}\}/.exec(expression);
            if (rxM) {
              var fnName = rxM[1];
              var pNames = rxM[3].split(' ').join('').split(',');
              pNames.map(function (path) {
                return path.split('.')[0];
              }).forEach(function (p) {
                return aggProps[p] = true;
              });
              textBinds[expression] = function (target) {
                var args = pNames.map(function (path) {
                  return Slim.lookup(source, path, target);
                });
                var fn = source[fnName];
                var value = fn ? fn.apply(source, args) : undefined;
                if (oldValue === value) return;
                updatedText = updatedText.split(expression).join(value || '');
              };
              return;
            }
            var rxP = /\{\{(.+[^(\((.+)\))])\}\}/.exec(expression); // eslint-disable-line
            if (rxP) {
              var path = rxP[1];
              aggProps[path] = true;
              textBinds[expression] = function (target) {
                var value = Slim.lookup(source, path, target);
                if (oldValue === value) return;
                updatedText = updatedText.split(expression).join(value || '');
              };
            }
          });
          var chainExecutor = function chainExecutor() {
            updatedText = target[_$2].sourceText;
            Object.keys(textBinds).forEach(function (expression) {
              textBinds[expression](target);
            });
            target.innerText = updatedText;
          };
          Object.keys(aggProps).forEach(function (prop) {
            Slim.bind(source, target, prop, chainExecutor);
          });
        }
      });

      Slim.customDirective(function (attr) {
        return attr.nodeName === 's:id';
      }, function (source, target, attribute) {
        Slim._$(target).boundParent[attribute.value] = target;
      });

      var wrappedRepeaterExecution = function wrappedRepeaterExecution(source, templateNode, attribute) {
        var path = attribute.nodeValue;
        var tProp = 'data';
        if (path.indexOf(' as')) {
          tProp = path.split(' as ')[1] || tProp;
          path = path.split(' as ')[0];
        }

        var repeater = document.createElement('slim-repeat');
        repeater[_$2].boundParent = source;
        repeater.dataProp = tProp;
        repeater.dataPath = attribute.nodeValue;
        repeater.templateNode = templateNode.cloneNode(true);
        repeater.templateNode.removeAttribute('s:repeat');
        templateNode.parentNode.insertBefore(repeater, templateNode);
        Slim.removeChild(templateNode);
        Slim.bind(source, repeater, path, function () {
          var dataSource = Slim.lookup(source, path);
          repeater.dataSource = dataSource || [];
        });
      };

      // bind:property
      Slim.customDirective(function (attr) {
        return (/^(bind):(\S+)/.exec(attr.nodeName)
        );
      }, function (source, target, attribute, match) {
        var tAttr = match[2];
        var tProp = Slim.dashToCamel(tAttr);
        var expression = attribute.value;
        var oldValue = void 0;
        var rxM = Slim.rxMethod.exec(expression);
        if (rxM) {
          var pNames = rxM[3].split(' ').join('').split(',');
          pNames.forEach(function (pName) {
            Slim.bind(source, target, pName, function () {
              var fn = Slim.lookup(source, rxM[1], target);
              var args = pNames.map(function (prop) {
                return Slim.lookup(source, prop, target);
              });
              var value = fn.apply(source, args);
              if (oldValue === value) return;
              target[tProp] = value;
              target.setAttribute(tAttr, value);
            });
          });
          return;
        }
        var rxP = Slim.rxProp.exec(expression);
        if (rxP) {
          var prop = rxP[1];
          Slim.bind(source, target, prop, function () {
            var value = Slim.lookup(source, expression, target);
            if (oldValue === value) return;
            target.setAttribute(tAttr, value);
            target[tProp] = value;
          });
        }
      });

      if (__flags.isChrome || __flags.isSafari || __flags.isFirefox) {
        Slim.customDirective(function (attr) {
          return attr.nodeName === 's:repeat';
        }, function (source, templateNode, attribute) {
          if (__flags.isFirefox) {
            if (['option', 'td', 'tr', 'th'].indexOf(templateNode.localName) < 0) {
              return wrappedRepeaterExecution(source, templateNode, attribute);
            }
          }
          var path = attribute.value;
          var tProp = 'data';
          if (path.indexOf(' as')) {
            tProp = path.split(' as ')[1] || tProp;
            path = path.split(' as ')[0];
          }

          var clones = [];
          var hook = document.createComment(templateNode.localName + ' s:repeat="' + attribute.value + '"');
          var templateHTML = void 0;
          Slim._$(hook);
          Slim.selectRecursive(templateNode, true).forEach(function (e) {
            return Slim._$(e).excluded = true;
          });
          templateNode.parentElement.insertBefore(hook, templateNode);
          templateNode.remove();
          Slim.unbind(source, templateNode);
          Slim.asap(function () {
            templateNode.setAttribute('s:iterate', '');
            templateNode.removeAttribute('s:repeat');
            templateHTML = templateNode.outerHTML;
            templateNode.innerHTML = '';
          });
          var oldDataSource = [];
          Slim.bind(source, hook, path, function () {
            var dataSource = Slim.lookup(source, path) || [];
            var offset = 0;
            var restOfData = [];
            // get the diff
            var diff = Array(dataSource.length);
            dataSource.forEach(function (d, i) {
              if (oldDataSource[i] !== d) {
                diff[i] = true;
              }
            });
            oldDataSource = dataSource.concat();
            var indices = Object.keys(diff);
            if (dataSource.length < clones.length) {
              var disposables = clones.slice(dataSource.length);
              clones = clones.slice(0, dataSource.length);
              disposables.forEach(function (clone) {
                return clone.remove();
              });
              // unbind disposables?
              indices.forEach(function (index) {
                var clone = clones[index];[clone].concat(Slim.qSelectAll(clone, '*')).forEach(function (t) {
                  t[_$2].repeater[tProp] = dataSource[index];
                  Slim.commit(t, tProp);
                });
              });
            } else {
              // recycle
              clones.length && indices.forEach(function (index) {
                var clone = clones[index];
                if (!clone) return;[clone].concat(Slim.qSelectAll(clone, '*')).forEach(function (t) {
                  t[_$2].repeater[tProp] = dataSource[index];
                  Slim.commit(t, tProp);
                });
              });
              restOfData = dataSource.slice(clones.length);
              offset = clones.length;
            }
            if (!restOfData.length) return;
            // new clones
            var range = document.createRange();
            range.setStartBefore(hook);
            var html = Array(restOfData.length).fill(templateHTML).join('');
            var frag = range.createContextualFragment(html);
            var all = [];
            var i = 0;
            while (i < frag.children.length) {
              var e = frag.children.item(i);
              clones.push(e);
              all.push(e);
              Slim._$(e).repeater[tProp] = dataSource[i + offset];
              var subTree = Slim.qSelectAll(e, '*');
              subTree.forEach(function (t) {
                all.push(t);
                Slim._$(t).repeater[tProp] = dataSource[i + offset];
                Slim.commit(t, tProp);
              });
              i++;
            }
            source._bindChildren(all);
            all.forEach(function (t) {
              if (t.__isSlim) {
                t.createdCallback();
                Slim.asap(function () {
                  Slim.commit(t, tProp);
                  t[tProp] = t[_$2].repeater[tProp];
                });
              } else {
                Slim.commit(t, tProp);
                t[tProp] = t[_$2].repeater[tProp];
              }
            });
            hook.parentElement.insertBefore(frag, hook);
          });
          source[_$2].reversed[tProp] = true;
        }, true);
      } else {
        Slim.customDirective(function (attr) {
          return (/^s:repeat$/.test(attr.nodeName)
          );
        }, function (source, templateNode, attribute) {
          wrappedRepeaterExecution(source, templateNode, attribute);

          // source._executeBindings()
        }, true);
      }

      if (!__SLIM_ALREADY_DEFINED__) {
        var SlimRepeater = function (_Slim2) {
          _inherits(SlimRepeater, _Slim2);

          function SlimRepeater() {
            _classCallCheck(this, SlimRepeater);

            return _possibleConstructorReturn(this, (SlimRepeater.__proto__ || Object.getPrototypeOf(SlimRepeater)).apply(this, arguments));
          }

          _createClass(SlimRepeater, [{
            key: '_bindChildren',
            value: function _bindChildren(tree) {
              var _this6 = this;

              tree = Array.prototype.slice.call(tree);
              var directChildren = Array.prototype.filter.call(tree, function (child) {
                return child.parentNode.localName === 'slim-root-fragment';
              });
              directChildren.forEach(function (child, index) {
                child.setAttribute('s:iterate', _this6.dataPath + ' : ' + index);
                Slim.selectRecursive(child).forEach(function (e) {
                  Slim._$(e).repeater[_this6.dataProp] = _this6.dataSource[index];
                  e[_this6.dataProp] = _this6.dataSource[index];
                  if (e instanceof Slim) {
                    e[_this6.dataProp] = _this6.dataSource[index];
                  }
                });
              });
            }
          }, {
            key: 'onRender',
            value: function onRender() {
              if (!this.boundParent) return;
              var tree = Slim.selectRecursive(this);
              this.boundParent && this.boundParent._bindChildren(tree);
              this.boundParent._executeBindings();
            }
          }, {
            key: 'render',
            value: function render() {
              var _this7 = this;

              if (!this.boundParent) return;
              Slim.qSelectAll(this, '*').forEach(function (e) {
                Slim.unbind(_this7.boundParent, e);
              });
              if (!this.dataSource || !this.templateNode || !this.boundParent) {
                return _get(SlimRepeater.prototype.__proto__ || Object.getPrototypeOf(SlimRepeater.prototype), 'render', this).call(this, '');
              }
              var newTemplate = Array(this.dataSource.length).fill(this.templateNode.outerHTML).join('');
              this.innerHTML = '';
              _get(SlimRepeater.prototype.__proto__ || Object.getPrototypeOf(SlimRepeater.prototype), 'render', this).call(this, newTemplate);
            }
          }, {
            key: 'dataSource',
            get: function get() {
              return this._dataSource;
            },
            set: function set(v) {
              if (this._dataSource !== v) {
                this._dataSource = v;
                this.render();
              }
            }
          }, {
            key: 'boundParent',
            get: function get() {
              return this[_$2].boundParent;
            }
          }]);

          return SlimRepeater;
        }(Slim);

        Slim.tag('slim-repeat', SlimRepeater);
      }

      if (window) {
        window['Slim'] = Slim;
      }
      if (typeof module !== 'undefined') {
        module.exports.Slim = Slim;
      }
    })(window, document, HTMLElement);


  },{}],7:[function(require,module,exports) {
    module.exports = {
      tag: function(selector) {
        return function(target) {
          window.Slim.tag(selector, target);
        };
      },

      template: function(tpl) {
        return function(target) {
          target.prototype.__defineGetter__('template', function() {
            return tpl;
          });
        }
      },

      useShadow: function(value) {
        return function(target) {
          target.prototype.__defineGetter__('useShadow', function() { return value; });
        }
      },

      /**
       * @experimental
       * Works only with native browser support, as polyfills breaks the prototype chain
       */
      // attribute: function(target, key, descriptor) {
      //     const clazz = target.constructor
      //     const observedAttributes = target.constructor.observedAttributes || []
      //     const attr = window.Slim.camelToDash(key);
      //     observedAttributes.push(attr);
      //     Slim._$(target).autoBoundAttributes.push(attr);
      //     Object.defineProperty(clazz, 'observedAttributes', {
      //         get: () => {
      //             return [...observedAttributes, ...Slim._$(target).autoBoundAttributes]
      //         }
      //     })
      //     Slim.wrapGetterSetter(target, key)
      //     descriptor.configurable = true
      //     descriptor.writable = true
      //     return descriptor;
      // }
    };
  },{}],4:[function(require,module,exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Overlay = undefined;

    var _dec, _dec2, _dec3, _class;

    var _slimJs = require('slim-js');

    var _Decorators = require('slim-js/Decorators');

    const calculateCicle = ({ x, y }) => {
      const height = window.innerHeight;
      const width = window.innerWidth;
      const radius = height / 10;

      return `
    M 0 0
      L ${width} 0
      L ${width} ${height}
      L 0 ${height}
    Z
    M ${width * x} ${height * y}
      m -${radius} 0
      a ${radius},${radius} 0 1,0 ${radius * 2},0
      a ${radius},${radius} 0 1,0 -${radius * 2},0
    Z
  `;
    };

    let Overlay = exports.Overlay = (_dec = (0, _Decorators.tag)('pointer-overlay'), _dec2 = (0, _Decorators.useShadow)(true), _dec3 = (0, _Decorators.template)(`
<style>
  div {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 9999;
  }
  
  path {
    fill: rgba(0, 0, 0, 0.5);
    fill-rule: evenodd;
    stroke: none;
    opacity: 0;
    transition: opacity 0.2s ease;
  }
</style>
<div s:id="container">
  <svg height=${window.innerHeight} width=${window.innerWidth}>
    <path s:id="path" />
  </svg>
</div>
`), _dec(_class = _dec2(_class = _dec3(_class = class Overlay extends _slimJs.Slim {
      onCreated() {
        this.move({ x: 0, y: 0 });
      }

      show() {
        this.path.style.opacity = 1;
      }

      hide() {
        this.path.style.opacity = 0;
      }

      move({ x, y }) {
        this.path.setAttribute('d', calculateCicle({ x, y }));
      }
    }) || _class) || _class) || _class);
  },{"slim-js":6,"slim-js/Decorators":7}],1:[function(require,module,exports) {
    'use strict';

    var _constants = require('../constants');

    var _loadScript = require('../loadScript');

    require('./overlay');

    const collectData = () => ({
      title: document.title,
      url: document.location.href,
      notes: Reveal.getSlideNotes(),
      total: Reveal.getTotalSlides(),
      state: Reveal.getState(),
      sizes: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    }); /* global Reveal, io */


    const setupOverlay = socket => {
      const overlay = document.createElement('pointer-overlay');
      document.body.appendChild(overlay);

      socket.on(_constants.POINTER_MOVE_EVENT, ({ x, y }) => overlay.move({ x, y }));
      socket.on(_constants.POINTER_START_EVENT, () => overlay.show());
      socket.on(_constants.POINTER_STOP_EVENT, () => overlay.hide());
    };

    const connect = socket => {
      socket.on(_constants.CONNECT_EVENT, () => socket.emit(_constants.INIT_EVENT, collectData()));
      socket.on(_constants.REQUEST_RECONNECT_EVENT, () => socket.emit(_constants.INIT_EVENT, collectData()));
      socket.on(_constants.NEXT_EVENT, () => Reveal.next());
      socket.on(_constants.PREV_EVENT, () => Reveal.prev());
      socket.on(_constants.PAUSE_EVENT, () => Reveal.togglePause());
      socket.on(_constants.OVERVIEW_EVENT, () => Reveal.toggleOverview());

      const sendState = () => socket.emit(_constants.SETSTATE_EVENT, collectData());

      _constants.REVEAL_EVENTS.forEach(event => {
        Reveal.addEventListener(event, sendState);
      });
    };

    const load = url => {
      if ('io' in window) {
        return;
      }

      url = url || window.prompt('Enter socket.io server url');

      if (!url) {
        return;
      }

      (0, _loadScript.loadScript)(url + '/socket.io/socket.io.js').then(() => {
        const socket = io(url, {
          query: { type: _constants.PRESENTATION }
        });

        connect(socket);
        setupOverlay(socket);
      }).catch(error => console.log(error));
    };

    const init = (url, force) => {
      if (document.location.origin === url) {
        return;
      }

      if (force) {
        load(url);
        return;
      }

      document.addEventListener('keydown', event => {
        if (document.querySelector(':focus') !== null || event.shiftKey || event.altKey || event.ctrlKey || event.metaKey) {
          return;
        }

        // Disregard the event if keyboard is disabled
        if (Reveal.getConfig().keyboard === false) {
          return;
        }

        if (event.key === 'r') {
          event.preventDefault();

          load(url);
        }
      });
    };

    init();
  },{"../constants":2,"../loadScript":3,"./overlay":4}],8:[function(require,module,exports) {
    var global = arguments[3];
    var OVERLAY_ID = '__parcel__error__overlay__';

    var OldModule = module.bundle.Module;

    function Module(moduleName) {
      OldModule.call(this, moduleName);
      this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function (fn) {
          this._acceptCallbacks.push(fn || function () {});
        },
        dispose: function (fn) {
          this._disposeCallbacks.push(fn);
        }
      };

      module.bundle.hotData = null;
    }

    module.bundle.Module = Module;

    var parent = module.bundle.parent;
    if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
      var hostname = '' || location.hostname;
      var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
      var ws = new WebSocket(protocol + '://' + hostname + ':' + '52264' + '/');
      ws.onmessage = function (event) {
        var data = JSON.parse(event.data);

        if (data.type === 'update') {
          data.assets.forEach(function (asset) {
            hmrApply(global.parcelRequire, asset);
          });

          data.assets.forEach(function (asset) {
            if (!asset.isNew) {
              hmrAccept(global.parcelRequire, asset.id);
            }
          });
          // Clear the console after HMR
          console.clear();
        }

        if (data.type === 'reload') {
          ws.close();
          ws.onclose = function () {
            location.reload();
          };
        }

        if (data.type === 'error-resolved') {
          console.log('[parcel] ✨ Error resolved');

          removeErrorOverlay();
        }

        if (data.type === 'error') {
          console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

          removeErrorOverlay();

          var overlay = createErrorOverlay(data);
          document.body.appendChild(overlay);
        }
      };
    }

    function removeErrorOverlay() {
      var overlay = document.getElementById(OVERLAY_ID);
      if (overlay) {
        overlay.remove();
      }
    }

    function createErrorOverlay(data) {
      var overlay = document.createElement('div');
      overlay.id = OVERLAY_ID;

      // html encode message and stack trace
      var message = document.createElement('div');
      var stackTrace = document.createElement('pre');
      message.innerText = data.error.message;
      stackTrace.innerText = data.error.stack;

      overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

      return overlay;
    }

    function getParents(bundle, id) {
      var modules = bundle.modules;
      if (!modules) {
        return [];
      }

      var parents = [];
      var k, d, dep;

      for (k in modules) {
        for (d in modules[k][1]) {
          dep = modules[k][1][d];
          if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
            parents.push(+k);
          }
        }
      }

      if (bundle.parent) {
        parents = parents.concat(getParents(bundle.parent, id));
      }

      return parents;
    }

    function hmrApply(bundle, asset) {
      var modules = bundle.modules;
      if (!modules) {
        return;
      }

      if (modules[asset.id] || !bundle.parent) {
        var fn = new Function('require', 'module', 'exports', asset.generated.js);
        asset.isNew = !modules[asset.id];
        modules[asset.id] = [fn, asset.deps];
      } else if (bundle.parent) {
        hmrApply(bundle.parent, asset);
      }
    }

    function hmrAccept(bundle, id) {
      var modules = bundle.modules;
      if (!modules) {
        return;
      }

      if (!modules[id] && bundle.parent) {
        return hmrAccept(bundle.parent, id);
      }

      var cached = bundle.cache[id];
      bundle.hotData = {};
      if (cached) {
        cached.hot.data = bundle.hotData;
      }

      if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
        cached.hot._disposeCallbacks.forEach(function (cb) {
          cb(bundle.hotData);
        });
      }

      delete bundle.cache[id];
      bundle(id);

      cached = bundle.cache[id];
      if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        cached.hot._acceptCallbacks.forEach(function (cb) {
          cb();
        });
        return true;
      }

      return getParents(global.parcelRequire, id).some(function (id) {
        return hmrAccept(global.parcelRequire, id);
      });
    }
  },{}]},{},[8,1], null)
//# sourceMappingURL=/remeal.map