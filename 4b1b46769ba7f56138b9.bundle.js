/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/bootstrap/dist/js/bootstrap.js":
/*!******************************************************!*\
  !*** ../node_modules/bootstrap/dist/js/bootstrap.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! popper.js */ "../node_modules/popper.js/dist/esm/popper.js")) :
  undefined;
}(this, (function (exports, $, Popper) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $ === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $.fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.4.1';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert =
  /*#__PURE__*/
  function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(ClassName.SHOW);

      if (!$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'button';
  var VERSION$1 = '4.4.1';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var ClassName$1 = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector$1 = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLES: '[data-toggle="buttons"]',
    DATA_TOGGLE: '[data-toggle="button"]',
    DATA_TOGGLES_BUTTONS: '[data-toggle="buttons"] .btn',
    INPUT: 'input:not([type="hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event$1 = {
    CLICK_DATA_API: "click" + EVENT_KEY$1 + DATA_API_KEY$1,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1),
    LOAD_DATA_API: "load" + EVENT_KEY$1 + DATA_API_KEY$1
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button =
  /*#__PURE__*/
  function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(Selector$1.DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(Selector$1.INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(Selector$1.ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(ClassName$1.ACTIVE);
              }
            }
          } else if (input.type === 'checkbox') {
            if (this._element.tagName === 'LABEL' && input.checked === this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            }
          } else {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            triggerChangeEvent = false;
          }

          if (triggerChangeEvent) {
            input.checked = !this._element.classList.contains(ClassName$1.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName$1.ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(ClassName$1.ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$1.CLICK_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;

    if (!$(button).hasClass(ClassName$1.BUTTON)) {
      button = $(button).closest(Selector$1.BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(Selector$1.INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      Button._jQueryInterface.call($(button), 'toggle');
    }
  }).on(Event$1.FOCUS_BLUR_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector$1.BUTTON)[0];
    $(button).toggleClass(ClassName$1.FOCUS, /^focus(in)?$/.test(event.type));
  });
  $(window).on(Event$1.LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(Selector$1.INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(ClassName$1.ACTIVE);
      } else {
        button.classList.remove(ClassName$1.ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(Selector$1.DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(ClassName$1.ACTIVE);
      } else {
        _button.classList.remove(ClassName$1.ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'carousel';
  var VERSION$2 = '4.4.1';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };
  var Event$2 = {
    SLIDE: "slide" + EVENT_KEY$2,
    SLID: "slid" + EVENT_KEY$2,
    KEYDOWN: "keydown" + EVENT_KEY$2,
    MOUSEENTER: "mouseenter" + EVENT_KEY$2,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$2,
    TOUCHSTART: "touchstart" + EVENT_KEY$2,
    TOUCHMOVE: "touchmove" + EVENT_KEY$2,
    TOUCHEND: "touchend" + EVENT_KEY$2,
    POINTERDOWN: "pointerdown" + EVENT_KEY$2,
    POINTERUP: "pointerup" + EVENT_KEY$2,
    DRAG_START: "dragstart" + EVENT_KEY$2,
    LOAD_DATA_API: "load" + EVENT_KEY$2 + DATA_API_KEY$2,
    CLICK_DATA_API: "click" + EVENT_KEY$2 + DATA_API_KEY$2
  };
  var ClassName$2 = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item',
    POINTER_EVENT: 'pointer-event'
  };
  var Selector$2 = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    ITEM_IMG: '.carousel-item img',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  };
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel =
  /*#__PURE__*/
  function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(Selector$2.INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(Selector$2.NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event$2.SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default, {}, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(Event$2.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(Event$2.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event$2.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(Selector$2.ITEM_IMG)).on(Event$2.DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(Event$2.POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(ClassName$2.POINTER_EVENT);
      } else {
        $(this._element).on(Event$2.TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(Event$2.TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$2.ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(Selector$2.ACTIVE_ITEM));

      var slideEvent = $.Event(Event$2.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector$2.ACTIVE));
        $(indicators).removeClass(ClassName$2.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName$2.ACTIVE);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName$2.LEFT;
        orderClassName = ClassName$2.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName$2.RIGHT;
        orderClassName = ClassName$2.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName$2.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event$2.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(ClassName$2.SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName$2.ACTIVE);
          $(activeElement).removeClass(ClassName$2.ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(ClassName$2.ACTIVE);
        $(nextElement).addClass(ClassName$2.ACTIVE);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);

        var _config = _objectSpread2({}, Default, {}, $(this).data());

        if (typeof config === 'object') {
          _config = _objectSpread2({}, _config, {}, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName$2.CAROUSEL)) {
        return;
      }

      var config = _objectSpread2({}, $(target).data(), {}, $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$2.CLICK_DATA_API, Selector$2.DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(Event$2.LOAD_DATA_API, function () {
    var carousels = [].slice.call(document.querySelectorAll(Selector$2.DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'collapse';
  var VERSION$3 = '4.4.1';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event$3 = {
    SHOW: "show" + EVENT_KEY$3,
    SHOWN: "shown" + EVENT_KEY$3,
    HIDE: "hide" + EVENT_KEY$3,
    HIDDEN: "hidden" + EVENT_KEY$3,
    CLICK_DATA_API: "click" + EVENT_KEY$3 + DATA_API_KEY$3
  };
  var ClassName$3 = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector$3 = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse =
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(Selector$3.DATA_TOGGLE));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName$3.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(Selector$3.ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(ClassName$3.COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event$3.SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(ClassName$3.COLLAPSE).addClass(ClassName$3.COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName$3.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).addClass(ClassName$3.SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(Event$3.SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event$3.HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(ClassName$3.COLLAPSING).removeClass(ClassName$3.COLLAPSE).removeClass(ClassName$3.SHOW);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(ClassName$3.SHOW)) {
              $(trigger).addClass(ClassName$3.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).trigger(Event$3.HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$1, {}, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(ClassName$3.SHOW);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(ClassName$3.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);

        var _config = _objectSpread2({}, Default$1, {}, $this.data(), {}, typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$3.CLICK_DATA_API, Selector$3.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.4.1';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event$4 = {
    HIDE: "hide" + EVENT_KEY$4,
    HIDDEN: "hidden" + EVENT_KEY$4,
    SHOW: "show" + EVENT_KEY$4,
    SHOWN: "shown" + EVENT_KEY$4,
    CLICK: "click" + EVENT_KEY$4,
    CLICK_DATA_API: "click" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYUP_DATA_API: "keyup" + EVENT_KEY$4 + DATA_API_KEY$4
  };
  var ClassName$4 = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  };
  var Selector$4 = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown =
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var isActive = $(this._menu).hasClass(ClassName$4.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || $(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event$4.SHOW, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(ClassName$4.POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(Selector$4.NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || !$(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(Event$4.HIDE, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(Event$4.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, this.constructor.Default, {}, $(this._element).data(), {}, config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(Selector$4.MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName$4.DROPUP)) {
        placement = AttachmentMap.TOP;

        if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName$4.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName$4.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2({}, data.offsets, {}, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _objectSpread2({}, popperConfig, {}, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$4);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(Selector$4.DATA_TOGGLE));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(ClassName$4.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event$4.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $(dropdownMenu).removeClass(ClassName$4.SHOW);
        $(parent).removeClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector$4.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(ClassName$4.SHOW);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = parent.querySelector(Selector$4.DATA_TOGGLE);
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(Selector$4.VISIBLE_ITEMS)).filter(function (item) {
        return $(item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$4.KEYDOWN_DATA_API, Selector$4.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event$4.KEYDOWN_DATA_API, Selector$4.MENU, Dropdown._dataApiKeydownHandler).on(Event$4.CLICK_DATA_API + " " + Event$4.KEYUP_DATA_API, Dropdown._clearMenus).on(Event$4.CLICK_DATA_API, Selector$4.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event$4.CLICK_DATA_API, Selector$4.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;

  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'modal';
  var VERSION$5 = '4.4.1';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event$5 = {
    HIDE: "hide" + EVENT_KEY$5,
    HIDE_PREVENTED: "hidePrevented" + EVENT_KEY$5,
    HIDDEN: "hidden" + EVENT_KEY$5,
    SHOW: "show" + EVENT_KEY$5,
    SHOWN: "shown" + EVENT_KEY$5,
    FOCUSIN: "focusin" + EVENT_KEY$5,
    RESIZE: "resize" + EVENT_KEY$5,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$5,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY$5,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY$5,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY$5,
    CLICK_DATA_API: "click" + EVENT_KEY$5 + DATA_API_KEY$5
  };
  var ClassName$5 = {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show',
    STATIC: 'modal-static'
  };
  var Selector$5 = {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(Selector$5.DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(ClassName$5.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event$5.SHOW, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(Event$5.CLICK_DISMISS, Selector$5.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(Event$5.MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(Event$5.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(Event$5.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(ClassName$5.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(Event$5.FOCUSIN);
      $(this._element).removeClass(ClassName$5.SHOW);
      $(this._element).off(Event$5.CLICK_DISMISS);
      $(this._dialog).off(Event$5.MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      $(document).off(Event$5.FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$3, {}, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      if (this._config.backdrop === 'static') {
        var hideEventPrevented = $.Event(Event$5.HIDE_PREVENTED);
        $(this._element).trigger(hideEventPrevented);

        if (hideEventPrevented.defaultPrevented) {
          return;
        }

        this._element.classList.add(ClassName$5.STATIC);

        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function () {
          _this3._element.classList.remove(ClassName$5.STATIC);
        }).emulateTransitionEnd(modalTransitionDuration);

        this._element.focus();
      } else {
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $(this._element).hasClass(ClassName$5.FADE);
      var modalBody = this._dialog ? this._dialog.querySelector(Selector$5.MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(ClassName$5.SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName$5.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event$5.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $(_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $(document).off(Event$5.FOCUSIN) // Guard against infinite focus loop
      .on(Event$5.FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $(_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event$5.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event$5.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $(window).on(Event$5.RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $(window).off(Event$5.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName$5.OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $(_this8._element).trigger(Event$5.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $(this._element).hasClass(ClassName$5.FADE) ? ClassName$5.FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName$5.BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(Event$5.CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          _this9._triggerBackdropTransition();
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName$5.SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName$5.SHOW);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(ClassName$5.FADE)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(Selector$5.STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(ClassName$5.OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + Selector$5.STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName$5.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$5);

        var _config = _objectSpread2({}, Default$3, {}, $(this).data(), {}, typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$5.CLICK_DATA_API, Selector$5.DATA_TOGGLE, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread2({}, $(target).data(), {}, $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event$5.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event$5.HIDDEN, function () {
        if ($(_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal._jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;

  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.4.1';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap$1 = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event$6 = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var ClassName$6 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$6 = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip =
  /*#__PURE__*/
  function () {
    function Tooltip(element, config) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(ClassName$6.SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName$6.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
        $(tip).addClass(ClassName$6.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(ClassName$6.FADE)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName$6.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if ($(this.tip).hasClass(ClassName$6.FADE)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(Selector$6.TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(ClassName$6.FADE + " " + ClassName$6.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: Selector$6.ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _objectSpread2({}, defaultBsConfig, {}, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2({}, data.offsets, {}, _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap$1[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $(_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _objectSpread2({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName$6.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread2({}, this.constructor.Default, {}, dataAttributes, {}, typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      var popperInstance = popperData.instance;
      this.tip = popperInstance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(ClassName$6.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$6);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$6;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] = Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;

  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'popover';
  var VERSION$7 = '4.4.1';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _objectSpread2({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _objectSpread2({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var ClassName$7 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$7 = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };
  var Event$7 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover =
  /*#__PURE__*/
  function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(Selector$7.TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(Selector$7.CONTENT), content);
      $tip.removeClass(ClassName$7.FADE + " " + ClassName$7.SHOW);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$7);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$7;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] = Popover._jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;

  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.4.1';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event$8 = {
    ACTIVATE: "activate" + EVENT_KEY$8,
    SCROLL: "scroll" + EVENT_KEY$8,
    LOAD_DATA_API: "load" + EVENT_KEY$8 + DATA_API_KEY$6
  };
  var ClassName$8 = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector$8 = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy =
  /*#__PURE__*/
  function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + Selector$8.NAV_LINKS + "," + (this._config.target + " " + Selector$8.LIST_ITEMS + ",") + (this._config.target + " " + Selector$8.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(Event$8.SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$6, {}, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      var offsetLength = this._offsets.length;

      for (var i = offsetLength; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(ClassName$8.DROPDOWN_ITEM)) {
        $link.closest(Selector$8.DROPDOWN).find(Selector$8.DROPDOWN_TOGGLE).addClass(ClassName$8.ACTIVE);
        $link.addClass(ClassName$8.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName$8.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_LINKS + ", " + Selector$8.LIST_ITEMS).addClass(ClassName$8.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_ITEMS).children(Selector$8.NAV_LINKS).addClass(ClassName$8.ACTIVE);
      }

      $(this._scrollElement).trigger(Event$8.ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(ClassName$8.ACTIVE);
      }).forEach(function (node) {
        return node.classList.remove(ClassName$8.ACTIVE);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$8);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(Event$8.LOAD_DATA_API, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(Selector$8.DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;

  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'tab';
  var VERSION$9 = '4.4.1';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
  var Event$9 = {
    HIDE: "hide" + EVENT_KEY$9,
    HIDDEN: "hidden" + EVENT_KEY$9,
    SHOW: "show" + EVENT_KEY$9,
    SHOWN: "shown" + EVENT_KEY$9,
    CLICK_DATA_API: "click" + EVENT_KEY$9 + DATA_API_KEY$7
  };
  var ClassName$9 = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$9 = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName$9.ACTIVE) || $(this._element).hasClass(ClassName$9.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(Selector$9.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector$9.ACTIVE_UL : Selector$9.ACTIVE;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event$9.HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(Event$9.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event$9.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(Event$9.SHOWN, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(Selector$9.ACTIVE_UL) : $(container).children(Selector$9.ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(ClassName$9.FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(ClassName$9.SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(ClassName$9.ACTIVE);
        var dropdownChild = $(active.parentNode).find(Selector$9.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName$9.ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(ClassName$9.ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(ClassName$9.FADE)) {
        element.classList.add(ClassName$9.SHOW);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName$9.DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(Selector$9.DROPDOWN)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector$9.DROPDOWN_TOGGLE));
          $(dropdownToggleList).addClass(ClassName$9.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$9.CLICK_DATA_API, Selector$9.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab._jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;

  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'toast';
  var VERSION$a = '4.4.1';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
  var Event$a = {
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$a,
    HIDE: "hide" + EVENT_KEY$a,
    HIDDEN: "hidden" + EVENT_KEY$a,
    SHOW: "show" + EVENT_KEY$a,
    SHOWN: "shown" + EVENT_KEY$a
  };
  var ClassName$a = {
    FADE: 'fade',
    HIDE: 'hide',
    SHOW: 'show',
    SHOWING: 'showing'
  };
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var Selector$a = {
    DATA_DISMISS: '[data-dismiss="toast"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast =
  /*#__PURE__*/
  function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      var showEvent = $.Event(Event$a.SHOW);
      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      if (this._config.animation) {
        this._element.classList.add(ClassName$a.FADE);
      }

      var complete = function complete() {
        _this._element.classList.remove(ClassName$a.SHOWING);

        _this._element.classList.add(ClassName$a.SHOW);

        $(_this._element).trigger(Event$a.SHOWN);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(ClassName$a.HIDE);

      Util.reflow(this._element);

      this._element.classList.add(ClassName$a.SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(ClassName$a.SHOW)) {
        return;
      }

      var hideEvent = $.Event(Event$a.HIDE);
      $(this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      this._timeout = null;

      if (this._element.classList.contains(ClassName$a.SHOW)) {
        this._element.classList.remove(ClassName$a.SHOW);
      }

      $(this._element).off(Event$a.CLICK_DISMISS);
      $.removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, Default$7, {}, $(this._element).data(), {}, typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $(this._element).on(Event$a.CLICK_DISMISS, Selector$a.DATA_DISMISS, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(ClassName$a.HIDE);

        $(_this3._element).trigger(Event$a.HIDDEN);
      };

      this._element.classList.remove(ClassName$a.SHOW);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY$a);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] = Toast._jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;

  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bootstrap.js.map


/***/ }),

/***/ "../node_modules/handlebars/dist/cjs/handlebars.runtime.js":
/*!*****************************************************************!*\
  !*** ../node_modules/handlebars/dist/cjs/handlebars.runtime.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _handlebarsBase = __webpack_require__(/*! ./handlebars/base */ "../node_modules/handlebars/dist/cjs/handlebars/base.js");

var base = _interopRequireWildcard(_handlebarsBase);

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)

var _handlebarsSafeString = __webpack_require__(/*! ./handlebars/safe-string */ "../node_modules/handlebars/dist/cjs/handlebars/safe-string.js");

var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

var _handlebarsException = __webpack_require__(/*! ./handlebars/exception */ "../node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

var _handlebarsUtils = __webpack_require__(/*! ./handlebars/utils */ "../node_modules/handlebars/dist/cjs/handlebars/utils.js");

var Utils = _interopRequireWildcard(_handlebarsUtils);

var _handlebarsRuntime = __webpack_require__(/*! ./handlebars/runtime */ "../node_modules/handlebars/dist/cjs/handlebars/runtime.js");

var runtime = _interopRequireWildcard(_handlebarsRuntime);

var _handlebarsNoConflict = __webpack_require__(/*! ./handlebars/no-conflict */ "../node_modules/handlebars/dist/cjs/handlebars/no-conflict.js");

var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = _handlebarsSafeString2['default'];
  hb.Exception = _handlebarsException2['default'];
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function (spec) {
    return runtime.template(spec, hb);
  };

  return hb;
}

var inst = create();
inst.create = create;

_handlebarsNoConflict2['default'](inst);

inst['default'] = inst;

exports['default'] = inst;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9oYW5kbGViYXJzLnJ1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OEJBQXNCLG1CQUFtQjs7SUFBN0IsSUFBSTs7Ozs7b0NBSU8sMEJBQTBCOzs7O21DQUMzQix3QkFBd0I7Ozs7K0JBQ3ZCLG9CQUFvQjs7SUFBL0IsS0FBSzs7aUNBQ1Esc0JBQXNCOztJQUFuQyxPQUFPOztvQ0FFSSwwQkFBMEI7Ozs7O0FBR2pELFNBQVMsTUFBTSxHQUFHO0FBQ2hCLE1BQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O0FBRTFDLE9BQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUUsQ0FBQyxVQUFVLG9DQUFhLENBQUM7QUFDM0IsSUFBRSxDQUFDLFNBQVMsbUNBQVksQ0FBQztBQUN6QixJQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNqQixJQUFFLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDOztBQUU3QyxJQUFFLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUNoQixJQUFFLENBQUMsUUFBUSxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzNCLFdBQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7R0FDbkMsQ0FBQzs7QUFFRixTQUFPLEVBQUUsQ0FBQztDQUNYOztBQUVELElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUVyQixrQ0FBVyxJQUFJLENBQUMsQ0FBQzs7QUFFakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzs7cUJBRVIsSUFBSSIsImZpbGUiOiJoYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBiYXNlIGZyb20gJy4vaGFuZGxlYmFycy9iYXNlJztcblxuLy8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuLy8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcbmltcG9ydCBTYWZlU3RyaW5nIGZyb20gJy4vaGFuZGxlYmFycy9zYWZlLXN0cmluZyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vaGFuZGxlYmFycy9leGNlcHRpb24nO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9oYW5kbGViYXJzL3V0aWxzJztcbmltcG9ydCAqIGFzIHJ1bnRpbWUgZnJvbSAnLi9oYW5kbGViYXJzL3J1bnRpbWUnO1xuXG5pbXBvcnQgbm9Db25mbGljdCBmcm9tICcuL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QnO1xuXG4vLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2VcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cbiAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcbiAgaGIuU2FmZVN0cmluZyA9IFNhZmVTdHJpbmc7XG4gIGhiLkV4Y2VwdGlvbiA9IEV4Y2VwdGlvbjtcbiAgaGIuVXRpbHMgPSBVdGlscztcbiAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgaGIuVk0gPSBydW50aW1lO1xuICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG4gIH07XG5cbiAgcmV0dXJuIGhiO1xufVxuXG5sZXQgaW5zdCA9IGNyZWF0ZSgpO1xuaW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cbm5vQ29uZmxpY3QoaW5zdCk7XG5cbmluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3Q7XG4iXX0=


/***/ }),

/***/ "../node_modules/handlebars/dist/cjs/handlebars/base.js":
/*!**************************************************************!*\
  !*** ../node_modules/handlebars/dist/cjs/handlebars/base.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(/*! ./utils */ "../node_modules/handlebars/dist/cjs/handlebars/utils.js");

var _exception = __webpack_require__(/*! ./exception */ "../node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

var _helpers = __webpack_require__(/*! ./helpers */ "../node_modules/handlebars/dist/cjs/handlebars/helpers.js");

var _decorators = __webpack_require__(/*! ./decorators */ "../node_modules/handlebars/dist/cjs/handlebars/decorators.js");

var _logger = __webpack_require__(/*! ./logger */ "../node_modules/handlebars/dist/cjs/handlebars/logger.js");

var _logger2 = _interopRequireDefault(_logger);

var _internalProtoAccess = __webpack_require__(/*! ./internal/proto-access */ "../node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js");

var VERSION = '4.7.3';
exports.VERSION = VERSION;
var COMPILER_REVISION = 8;
exports.COMPILER_REVISION = COMPILER_REVISION;
var LAST_COMPATIBLE_COMPILER_REVISION = 7;

exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1',
  7: '>= 4.0.0 <4.3.0',
  8: '>= 4.3.0'
};

exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials, decorators) {
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};

  _helpers.registerDefaultHelpers(this);
  _decorators.registerDefaultDecorators(this);
}

HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: _logger2['default'],
  log: _logger2['default'].log,

  registerHelper: function registerHelper(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple helpers');
      }
      _utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function unregisterHelper(name) {
    delete this.helpers[name];
  },

  registerPartial: function registerPartial(name, partial) {
    if (_utils.toString.call(name) === objectType) {
      _utils.extend(this.partials, name);
    } else {
      if (typeof partial === 'undefined') {
        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function unregisterPartial(name) {
    delete this.partials[name];
  },

  registerDecorator: function registerDecorator(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple decorators');
      }
      _utils.extend(this.decorators, name);
    } else {
      this.decorators[name] = fn;
    }
  },
  unregisterDecorator: function unregisterDecorator(name) {
    delete this.decorators[name];
  },
  /**
   * Reset the memory of illegal property accesses that have already been logged.
   * @deprecated should only be used in handlebars test-cases
   */
  resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
    _internalProtoAccess.resetLoggedProperties();
  }
};

var log = _logger2['default'].log;

exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cUJBQThDLFNBQVM7O3lCQUNqQyxhQUFhOzs7O3VCQUNJLFdBQVc7OzBCQUNSLGNBQWM7O3NCQUNyQyxVQUFVOzs7O21DQUNTLHlCQUF5Qjs7QUFFeEQsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDOztBQUN4QixJQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQzs7QUFDNUIsSUFBTSxpQ0FBaUMsR0FBRyxDQUFDLENBQUM7OztBQUU1QyxJQUFNLGdCQUFnQixHQUFHO0FBQzlCLEdBQUMsRUFBRSxhQUFhO0FBQ2hCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxVQUFVO0FBQ2IsR0FBQyxFQUFFLGtCQUFrQjtBQUNyQixHQUFDLEVBQUUsaUJBQWlCO0FBQ3BCLEdBQUMsRUFBRSxpQkFBaUI7QUFDcEIsR0FBQyxFQUFFLFVBQVU7Q0FDZCxDQUFDOzs7QUFFRixJQUFNLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQzs7QUFFOUIsU0FBUyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRTtBQUNuRSxNQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDN0IsTUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksRUFBRSxDQUFDO0FBQy9CLE1BQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxJQUFJLEVBQUUsQ0FBQzs7QUFFbkMsa0NBQXVCLElBQUksQ0FBQyxDQUFDO0FBQzdCLHdDQUEwQixJQUFJLENBQUMsQ0FBQztDQUNqQzs7QUFFRCxxQkFBcUIsQ0FBQyxTQUFTLEdBQUc7QUFDaEMsYUFBVyxFQUFFLHFCQUFxQjs7QUFFbEMsUUFBTSxxQkFBUTtBQUNkLEtBQUcsRUFBRSxvQkFBTyxHQUFHOztBQUVmLGdCQUFjLEVBQUUsd0JBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNqQyxRQUFJLGdCQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDdEMsVUFBSSxFQUFFLEVBQUU7QUFDTixjQUFNLDJCQUFjLHlDQUF5QyxDQUFDLENBQUM7T0FDaEU7QUFDRCxvQkFBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzVCLE1BQU07QUFDTCxVQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUN6QjtHQUNGO0FBQ0Qsa0JBQWdCLEVBQUUsMEJBQVMsSUFBSSxFQUFFO0FBQy9CLFdBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUMzQjs7QUFFRCxpQkFBZSxFQUFFLHlCQUFTLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDdkMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLG9CQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDN0IsTUFBTTtBQUNMLFVBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxFQUFFO0FBQ2xDLGNBQU0seUVBQ3dDLElBQUksb0JBQ2pELENBQUM7T0FDSDtBQUNELFVBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO0tBQy9CO0dBQ0Y7QUFDRCxtQkFBaUIsRUFBRSwyQkFBUyxJQUFJLEVBQUU7QUFDaEMsV0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQzVCOztBQUVELG1CQUFpQixFQUFFLDJCQUFTLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDcEMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLFVBQUksRUFBRSxFQUFFO0FBQ04sY0FBTSwyQkFBYyw0Q0FBNEMsQ0FBQyxDQUFDO09BQ25FO0FBQ0Qsb0JBQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUMvQixNQUFNO0FBQ0wsVUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDNUI7R0FDRjtBQUNELHFCQUFtQixFQUFFLDZCQUFTLElBQUksRUFBRTtBQUNsQyxXQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDOUI7Ozs7O0FBS0QsNkJBQTJCLEVBQUEsdUNBQUc7QUFDNUIsZ0RBQXVCLENBQUM7R0FDekI7Q0FDRixDQUFDOztBQUVLLElBQUksR0FBRyxHQUFHLG9CQUFPLEdBQUcsQ0FBQzs7O1FBRW5CLFdBQVc7UUFBRSxNQUFNIiwiZmlsZSI6ImJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVGcmFtZSwgZXh0ZW5kLCB0b1N0cmluZyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuL2V4Y2VwdGlvbic7XG5pbXBvcnQgeyByZWdpc3RlckRlZmF1bHRIZWxwZXJzIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnMgfSBmcm9tICcuL2RlY29yYXRvcnMnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgeyByZXNldExvZ2dlZFByb3BlcnRpZXMgfSBmcm9tICcuL2ludGVybmFsL3Byb3RvLWFjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBWRVJTSU9OID0gJzQuNy4zJztcbmV4cG9ydCBjb25zdCBDT01QSUxFUl9SRVZJU0lPTiA9IDg7XG5leHBvcnQgY29uc3QgTEFTVF9DT01QQVRJQkxFX0NPTVBJTEVSX1JFVklTSU9OID0gNztcblxuZXhwb3J0IGNvbnN0IFJFVklTSU9OX0NIQU5HRVMgPSB7XG4gIDE6ICc8PSAxLjAucmMuMicsIC8vIDEuMC5yYy4yIGlzIGFjdHVhbGx5IHJldjIgYnV0IGRvZXNuJ3QgcmVwb3J0IGl0XG4gIDI6ICc9PSAxLjAuMC1yYy4zJyxcbiAgMzogJz09IDEuMC4wLXJjLjQnLFxuICA0OiAnPT0gMS54LngnLFxuICA1OiAnPT0gMi4wLjAtYWxwaGEueCcsXG4gIDY6ICc+PSAyLjAuMC1iZXRhLjEnLFxuICA3OiAnPj0gNC4wLjAgPDQuMy4wJyxcbiAgODogJz49IDQuMy4wJ1xufTtcblxuY29uc3Qgb2JqZWN0VHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG5leHBvcnQgZnVuY3Rpb24gSGFuZGxlYmFyc0Vudmlyb25tZW50KGhlbHBlcnMsIHBhcnRpYWxzLCBkZWNvcmF0b3JzKSB7XG4gIHRoaXMuaGVscGVycyA9IGhlbHBlcnMgfHwge307XG4gIHRoaXMucGFydGlhbHMgPSBwYXJ0aWFscyB8fCB7fTtcbiAgdGhpcy5kZWNvcmF0b3JzID0gZGVjb3JhdG9ycyB8fCB7fTtcblxuICByZWdpc3RlckRlZmF1bHRIZWxwZXJzKHRoaXMpO1xuICByZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKHRoaXMpO1xufVxuXG5IYW5kbGViYXJzRW52aXJvbm1lbnQucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogSGFuZGxlYmFyc0Vudmlyb25tZW50LFxuXG4gIGxvZ2dlcjogbG9nZ2VyLFxuICBsb2c6IGxvZ2dlci5sb2csXG5cbiAgcmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikge1xuICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGhlbHBlcnMnKTtcbiAgICAgIH1cbiAgICAgIGV4dGVuZCh0aGlzLmhlbHBlcnMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhlbHBlcnNbbmFtZV0gPSBmbjtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5oZWxwZXJzW25hbWVdO1xuICB9LFxuXG4gIHJlZ2lzdGVyUGFydGlhbDogZnVuY3Rpb24obmFtZSwgcGFydGlhbCkge1xuICAgIGlmICh0b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBleHRlbmQodGhpcy5wYXJ0aWFscywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgcGFydGlhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbihcbiAgICAgICAgICBgQXR0ZW1wdGluZyB0byByZWdpc3RlciBhIHBhcnRpYWwgY2FsbGVkIFwiJHtuYW1lfVwiIGFzIHVuZGVmaW5lZGBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFydGlhbHNbbmFtZV0gPSBwYXJ0aWFsO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5wYXJ0aWFsc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgZGVjb3JhdG9ycycpO1xuICAgICAgfVxuICAgICAgZXh0ZW5kKHRoaXMuZGVjb3JhdG9ycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVjb3JhdG9yc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmRlY29yYXRvcnNbbmFtZV07XG4gIH0sXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgbWVtb3J5IG9mIGlsbGVnYWwgcHJvcGVydHkgYWNjZXNzZXMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBsb2dnZWQuXG4gICAqIEBkZXByZWNhdGVkIHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gaGFuZGxlYmFycyB0ZXN0LWNhc2VzXG4gICAqL1xuICByZXNldExvZ2dlZFByb3BlcnR5QWNjZXNzZXMoKSB7XG4gICAgcmVzZXRMb2dnZWRQcm9wZXJ0aWVzKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBsZXQgbG9nID0gbG9nZ2VyLmxvZztcblxuZXhwb3J0IHsgY3JlYXRlRnJhbWUsIGxvZ2dlciB9O1xuIl19


/***/ }),

/***/ "../node_modules/handlebars/dist/cjs/handlebars/decorators.js":
/*!********************************************************************!*\
  !*** ../node_modules/handlebars/dist/cjs/handlebars/decorators.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _decoratorsInline = __webpack_require__(/*! ./decorators/inline */ "../node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js");

var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

function registerDefaultDecorators(instance) {
  _decoratorsInline2['default'](instance);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Z0NBQTJCLHFCQUFxQjs7OztBQUV6QyxTQUFTLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtBQUNsRCxnQ0FBZSxRQUFRLENBQUMsQ0FBQztDQUMxQiIsImZpbGUiOiJkZWNvcmF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVySW5saW5lIGZyb20gJy4vZGVjb3JhdG9ycy9pbmxpbmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyhpbnN0YW5jZSkge1xuICByZWdpc3RlcklubGluZShpbnN0YW5jZSk7XG59XG4iXX0=


/***/ }),

/***/ "../node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js":
/*!***************************************************************************!*\
  !*** ../node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ../utils */ "../node_modules/handlebars/dist/cjs/handlebars/utils.js");

exports['default'] = function (instance) {
  instance.registerDecorator('inline', function (fn, props, container, options) {
    var ret = fn;
    if (!props.partials) {
      props.partials = {};
      ret = function (context, options) {
        // Create a new partials stack frame prior to exec.
        var original = container.partials;
        container.partials = _utils.extend({}, original, props.partials);
        var ret = fn(context, options);
        container.partials = original;
        return ret;
      };
    }

    props.partials[options.args[0]] = options.fn;

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMvaW5saW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQXVCLFVBQVU7O3FCQUVsQixVQUFTLFFBQVEsRUFBRTtBQUNoQyxVQUFRLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFO0FBQzNFLFFBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ25CLFdBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFNBQUcsR0FBRyxVQUFTLE9BQU8sRUFBRSxPQUFPLEVBQUU7O0FBRS9CLFlBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDbEMsaUJBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxRCxZQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLGlCQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUM5QixlQUFPLEdBQUcsQ0FBQztPQUNaLENBQUM7S0FDSDs7QUFFRCxTQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUU3QyxXQUFPLEdBQUcsQ0FBQztHQUNaLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6ImlubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJEZWNvcmF0b3IoJ2lubGluZScsIGZ1bmN0aW9uKGZuLCBwcm9wcywgY29udGFpbmVyLCBvcHRpb25zKSB7XG4gICAgbGV0IHJldCA9IGZuO1xuICAgIGlmICghcHJvcHMucGFydGlhbHMpIHtcbiAgICAgIHByb3BzLnBhcnRpYWxzID0ge307XG4gICAgICByZXQgPSBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBwYXJ0aWFscyBzdGFjayBmcmFtZSBwcmlvciB0byBleGVjLlxuICAgICAgICBsZXQgb3JpZ2luYWwgPSBjb250YWluZXIucGFydGlhbHM7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGV4dGVuZCh7fSwgb3JpZ2luYWwsIHByb3BzLnBhcnRpYWxzKTtcbiAgICAgICAgbGV0IHJldCA9IGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBvcmlnaW5hbDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvcHMucGFydGlhbHNbb3B0aW9ucy5hcmdzWzBdXSA9IG9wdGlvbnMuZm47XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cbiJdfQ==


/***/ }),

/***/ "../node_modules/handlebars/dist/cjs/handlebars/exception.js":
/*!*******************************************************************!*\
  !*** ../node_modules/handlebars/dist/cjs/handlebars/exception.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var errorProps = ['description', 'fileName', 'lineNumber', 'endLineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var loc = node && node.loc,
      line = undefined,
      endLineNumber = undefined,
      column = undefined,
      endColumn = undefined;

  if (loc) {
    line = loc.start.line;
    endLineNumber = loc.end.line;
    column = loc.start.column;
    endColumn = loc.end.column;

    message += ' - ' + line + ':' + column;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  /* istanbul ignore else */
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Exception);
  }

  try {
    if (loc) {
      this.lineNumber = line;
      this.endLineNumber = endLineNumber;

      // Work around issue under safari where we can't directly set the column value
      /* istanbul ignore next */
      if (Object.defineProperty) {
        Object.defineProperty(this, 'column', {
          value: column,
          enumerable: true
        });
        Object.defineProperty(this, 'endColumn', {
          value: endColumn,
          enumerable: true
        });
      } else {
        this.column = column;
        this.endColumn = endColumn;
      }
    }
  } catch (nop) {
    /* Ignore if the browser is very particular */
  }
}

Exception.prototype = new Error();

exports['default'] = Exception;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNLFVBQVUsR0FBRyxDQUNqQixhQUFhLEVBQ2IsVUFBVSxFQUNWLFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsT0FBTyxDQUNSLENBQUM7O0FBRUYsU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUNoQyxNQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUc7TUFDeEIsSUFBSSxZQUFBO01BQ0osYUFBYSxZQUFBO01BQ2IsTUFBTSxZQUFBO01BQ04sU0FBUyxZQUFBLENBQUM7O0FBRVosTUFBSSxHQUFHLEVBQUU7QUFDUCxRQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDdEIsaUJBQWEsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztBQUM3QixVQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDMUIsYUFBUyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDOztBQUUzQixXQUFPLElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO0dBQ3hDOztBQUVELE1BQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7OztBQUcxRCxPQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtBQUNoRCxRQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0dBQzlDOzs7QUFHRCxNQUFJLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtBQUMzQixTQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0dBQzFDOztBQUVELE1BQUk7QUFDRixRQUFJLEdBQUcsRUFBRTtBQUNQLFVBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLFVBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDOzs7O0FBSW5DLFVBQUksTUFBTSxDQUFDLGNBQWMsRUFBRTtBQUN6QixjQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7QUFDcEMsZUFBSyxFQUFFLE1BQU07QUFDYixvQkFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO0FBQ0gsY0FBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQ3ZDLGVBQUssRUFBRSxTQUFTO0FBQ2hCLG9CQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7T0FDSixNQUFNO0FBQ0wsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsWUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7T0FDNUI7S0FDRjtHQUNGLENBQUMsT0FBTyxHQUFHLEVBQUU7O0dBRWI7Q0FDRjs7QUFFRCxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7O3FCQUVuQixTQUFTIiwiZmlsZSI6ImV4Y2VwdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVycm9yUHJvcHMgPSBbXG4gICdkZXNjcmlwdGlvbicsXG4gICdmaWxlTmFtZScsXG4gICdsaW5lTnVtYmVyJyxcbiAgJ2VuZExpbmVOdW1iZXInLFxuICAnbWVzc2FnZScsXG4gICduYW1lJyxcbiAgJ251bWJlcicsXG4gICdzdGFjaydcbl07XG5cbmZ1bmN0aW9uIEV4Y2VwdGlvbihtZXNzYWdlLCBub2RlKSB7XG4gIGxldCBsb2MgPSBub2RlICYmIG5vZGUubG9jLFxuICAgIGxpbmUsXG4gICAgZW5kTGluZU51bWJlcixcbiAgICBjb2x1bW4sXG4gICAgZW5kQ29sdW1uO1xuXG4gIGlmIChsb2MpIHtcbiAgICBsaW5lID0gbG9jLnN0YXJ0LmxpbmU7XG4gICAgZW5kTGluZU51bWJlciA9IGxvYy5lbmQubGluZTtcbiAgICBjb2x1bW4gPSBsb2Muc3RhcnQuY29sdW1uO1xuICAgIGVuZENvbHVtbiA9IGxvYy5lbmQuY29sdW1uO1xuXG4gICAgbWVzc2FnZSArPSAnIC0gJyArIGxpbmUgKyAnOicgKyBjb2x1bW47XG4gIH1cblxuICBsZXQgdG1wID0gRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cbiAgLy8gVW5mb3J0dW5hdGVseSBlcnJvcnMgYXJlIG5vdCBlbnVtZXJhYmxlIGluIENocm9tZSAoYXQgbGVhc3QpLCBzbyBgZm9yIHByb3AgaW4gdG1wYCBkb2Vzbid0IHdvcmsuXG4gIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGVycm9yUHJvcHMubGVuZ3RoOyBpZHgrKykge1xuICAgIHRoaXNbZXJyb3JQcm9wc1tpZHhdXSA9IHRtcFtlcnJvclByb3BzW2lkeF1dO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRXhjZXB0aW9uKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKGxvYykge1xuICAgICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcbiAgICAgIHRoaXMuZW5kTGluZU51bWJlciA9IGVuZExpbmVOdW1iZXI7XG5cbiAgICAgIC8vIFdvcmsgYXJvdW5kIGlzc3VlIHVuZGVyIHNhZmFyaSB3aGVyZSB3ZSBjYW4ndCBkaXJlY3RseSBzZXQgdGhlIGNvbHVtbiB2YWx1ZVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdjb2x1bW4nLCB7XG4gICAgICAgICAgdmFsdWU6IGNvbHVtbixcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2VuZENvbHVtbicsIHtcbiAgICAgICAgICB2YWx1ZTogZW5kQ29sdW1uLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICAgICAgdGhpcy5lbmRDb2x1bW4gPSBlbmRDb2x1bW47XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChub3ApIHtcbiAgICAvKiBJZ25vcmUgaWYgdGhlIGJyb3dzZXIgaXMgdmVyeSBwYXJ0aWN1bGFyICovXG4gIH1cbn1cblxuRXhjZXB0aW9uLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuXG5leHBvcnQgZGVmYXVsdCBFeGNlcHRpb247XG4iXX0=


/***/ }),

/***/ "../node_modules/handlebars/dist/cjs/handlebars/helpers.js":
/*!*****************************************************************!*\
  !*** ../node_modules/handlebars/dist/cjs/handlebars/helpers.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
exports.moveHelperToHooks = moveHelperToHooks;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersBlockHelperMissing = __webpack_require__(/*! ./helpers/block-helper-missing */ "../node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js");

var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

var _helpersEach = __webpack_require__(/*! ./helpers/each */ "../node_modules/handlebars/dist/cjs/handlebars/helpers/each.js");

var _helpersEach2 = _interopRequireDefault(_helpersEach);

var _helpersHelperMissing = __webpack_require__(/*! ./helpers/helper-missing */ "../node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js");

var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

var _helpersIf = __webpack_require__(/*! ./helpers/if */ "../node_modules/handlebars/dist/cjs/handlebars/helpers/if.js");

var _helpersIf2 = _interopRequireDefault(_helpersIf);

var _helpersLog = __webpack_require__(/*! ./helpers/log */ "../node_modules/handlebars/dist/cjs/handlebars/helpers/log.js");

var _helpersLog2 = _interopRequireDefault(_helpersLog);

var _helpersLookup = __webpack_require__(/*! ./helpers/lookup */ "../node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js");

var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

var _helpersWith = __webpack_require__(/*! ./helpers/with */ "../node_modules/handlebars/dist/cjs/handlebars/helpers/with.js");

var _helpersWith2 = _interopRequireDefault(_helpersWith);

function registerDefaultHelpers(instance) {
  _helpersBlockHelperMissing2['default'](instance);
  _helpersEach2['default'](instance);
  _helpersHelperMissing2['default'](instance);
  _helpersIf2['default'](instance);
  _helpersLog2['default'](instance);
  _helpersLookup2['default'](instance);
  _helpersWith2['default'](instance);
}

function moveHelperToHooks(instance, helperName, keepHelper) {
  if (instance.helpers[helperName]) {
    instance.hooks[helperName] = instance.helpers[helperName];
    if (!keepHelper) {
      delete instance.helpers[helperName];
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3lDQUF1QyxnQ0FBZ0M7Ozs7MkJBQzlDLGdCQUFnQjs7OztvQ0FDUCwwQkFBMEI7Ozs7eUJBQ3JDLGNBQWM7Ozs7MEJBQ2IsZUFBZTs7Ozs2QkFDWixrQkFBa0I7Ozs7MkJBQ3BCLGdCQUFnQjs7OztBQUVsQyxTQUFTLHNCQUFzQixDQUFDLFFBQVEsRUFBRTtBQUMvQyx5Q0FBMkIsUUFBUSxDQUFDLENBQUM7QUFDckMsMkJBQWEsUUFBUSxDQUFDLENBQUM7QUFDdkIsb0NBQXNCLFFBQVEsQ0FBQyxDQUFDO0FBQ2hDLHlCQUFXLFFBQVEsQ0FBQyxDQUFDO0FBQ3JCLDBCQUFZLFFBQVEsQ0FBQyxDQUFDO0FBQ3RCLDZCQUFlLFFBQVEsQ0FBQyxDQUFDO0FBQ3pCLDJCQUFhLFFBQVEsQ0FBQyxDQUFDO0NBQ3hCOztBQUVNLFNBQVMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUU7QUFDbEUsTUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQ2hDLFlBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMxRCxRQUFJLENBQUMsVUFBVSxFQUFFO0FBQ2YsYUFBTyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3JDO0dBQ0Y7Q0FDRiIsImZpbGUiOiJoZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVyQmxvY2tIZWxwZXJNaXNzaW5nIGZyb20gJy4vaGVscGVycy9ibG9jay1oZWxwZXItbWlzc2luZyc7XG5pbXBvcnQgcmVnaXN0ZXJFYWNoIGZyb20gJy4vaGVscGVycy9lYWNoJztcbmltcG9ydCByZWdpc3RlckhlbHBlck1pc3NpbmcgZnJvbSAnLi9oZWxwZXJzL2hlbHBlci1taXNzaW5nJztcbmltcG9ydCByZWdpc3RlcklmIGZyb20gJy4vaGVscGVycy9pZic7XG5pbXBvcnQgcmVnaXN0ZXJMb2cgZnJvbSAnLi9oZWxwZXJzL2xvZyc7XG5pbXBvcnQgcmVnaXN0ZXJMb29rdXAgZnJvbSAnLi9oZWxwZXJzL2xvb2t1cCc7XG5pbXBvcnQgcmVnaXN0ZXJXaXRoIGZyb20gJy4vaGVscGVycy93aXRoJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnMoaW5zdGFuY2UpIHtcbiAgcmVnaXN0ZXJCbG9ja0hlbHBlck1pc3NpbmcoaW5zdGFuY2UpO1xuICByZWdpc3RlckVhY2goaW5zdGFuY2UpO1xuICByZWdpc3RlckhlbHBlck1pc3NpbmcoaW5zdGFuY2UpO1xuICByZWdpc3RlcklmKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJMb2coaW5zdGFuY2UpO1xuICByZWdpc3Rlckxvb2t1cChpbnN0YW5jZSk7XG4gIHJlZ2lzdGVyV2l0aChpbnN0YW5jZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlSGVscGVyVG9Ib29rcyhpbnN0YW5jZSwgaGVscGVyTmFtZSwga2VlcEhlbHBlcikge1xuICBpZiAoaW5zdGFuY2UuaGVscGVyc1toZWxwZXJOYW1lXSkge1xuICAgIGluc3RhbmNlLmhvb2tzW2hlbHBlck5hbWVdID0gaW5zdGFuY2UuaGVscGVyc1toZWxwZXJOYW1lXTtcbiAgICBpZiAoIWtlZXBIZWxwZXIpIHtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5oZWxwZXJzW2hlbHBlck5hbWVdO1xuICAgIH1cbiAgfVxufVxuIl19


/***/ }),

/***/ "../node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ../utils */ "../node_modules/handlebars/dist/cjs/handlebars/utils.js");

exports['default'] = function (instance) {
  instance.registerHelper('blockHelperMissing', function (context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if (context === true) {
      return fn(this);
    } else if (context === false || context == null) {
      return inverse(this);
    } else if (_utils.isArray(context)) {
      if (context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
        options = { data: data };
      }

      return fn(context, options);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBd0QsVUFBVTs7cUJBRW5ELFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3ZFLFFBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPO1FBQzNCLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVsQixRQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDcEIsYUFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakIsTUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtBQUMvQyxhQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QixNQUFNLElBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUMzQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLFlBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLGlCQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCOztBQUVELGVBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ2hELE1BQU07QUFDTCxlQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUN0QjtLQUNGLE1BQU07QUFDTCxVQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixZQUFJLElBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQ2IsQ0FBQztBQUNGLGVBQU8sR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztPQUMxQjs7QUFFRCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDN0I7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJibG9jay1oZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcGVuZENvbnRleHRQYXRoLCBjcmVhdGVGcmFtZSwgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2Jsb2NrSGVscGVyTWlzc2luZycsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBsZXQgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcbiAgICAgIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZm4odGhpcyk7XG4gICAgfSBlbHNlIGlmIChjb250ZXh0ID09PSBmYWxzZSB8fCBjb250ZXh0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGxldCBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKFxuICAgICAgICAgIG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCxcbiAgICAgICAgICBvcHRpb25zLm5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgb3B0aW9ucyA9IHsgZGF0YTogZGF0YSB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==


/***/ }),

/***/ "../node_modules/handlebars/dist/cjs/handlebars/helpers/each.js":
/*!**********************************************************************!*\
  !*** ../node_modules/handlebars/dist/cjs/handlebars/helpers/each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(/*! ../utils */ "../node_modules/handlebars/dist/cjs/handlebars/utils.js");

var _exception = __webpack_require__(/*! ../exception */ "../node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('each', function (context, options) {
    if (!options) {
      throw new _exception2['default']('Must pass iterator to #each');
    }

    var fn = options.fn,
        inverse = options.inverse,
        i = 0,
        ret = '',
        data = undefined,
        contextPath = undefined;

    if (options.data && options.ids) {
      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    if (options.data) {
      data = _utils.createFrame(options.data);
    }

    function execIteration(field, index, last) {
      if (data) {
        data.key = field;
        data.index = index;
        data.first = index === 0;
        data.last = !!last;

        if (contextPath) {
          data.contextPath = contextPath + field;
        }
      }

      ret = ret + fn(context[field], {
        data: data,
        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
      });
    }

    if (context && typeof context === 'object') {
      if (_utils.isArray(context)) {
        for (var j = context.length; i < j; i++) {
          if (i in context) {
            execIteration(i, i, i === context.length - 1);
          }
        }
      } else if (global.Symbol && context[global.Symbol.iterator]) {
        var newContext = [];
        var iterator = context[global.Symbol.iterator]();
        for (var it = iterator.next(); !it.done; it = iterator.next()) {
          newContext.push(it.value);
        }
        context = newContext;
        for (var j = context.length; i < j; i++) {
          execIteration(i, i, i === context.length - 1);
        }
      } else {
        (function () {
          var priorKey = undefined;

          Object.keys(context).forEach(function (key) {
            // We're running the iterations one step out of sync so we can detect
            // the last iteration without have to scan the object twice and create
            // an itermediate keys array.
            if (priorKey !== undefined) {
              execIteration(priorKey, i - 1);
            }
            priorKey = key;
            i++;
          });
          if (priorKey !== undefined) {
            execIteration(priorKey, i - 1, true);
          }
        })();
      }
    }

    if (i === 0) {
      ret = inverse(this);
    }

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3FCQU1PLFVBQVU7O3lCQUNLLGNBQWM7Ozs7cUJBRXJCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVMsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUN6RCxRQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1osWUFBTSwyQkFBYyw2QkFBNkIsQ0FBQyxDQUFDO0tBQ3BEOztBQUVELFFBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFO1FBQ2pCLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTztRQUN6QixDQUFDLEdBQUcsQ0FBQztRQUNMLEdBQUcsR0FBRyxFQUFFO1FBQ1IsSUFBSSxZQUFBO1FBQ0osV0FBVyxZQUFBLENBQUM7O0FBRWQsUUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7QUFDL0IsaUJBQVcsR0FDVCx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUNyRTs7QUFFRCxRQUFJLGtCQUFXLE9BQU8sQ0FBQyxFQUFFO0FBQ3ZCLGFBQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCOztBQUVELFFBQUksT0FBTyxDQUFDLElBQUksRUFBRTtBQUNoQixVQUFJLEdBQUcsbUJBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xDOztBQUVELGFBQVMsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0FBQ3pDLFVBQUksSUFBSSxFQUFFO0FBQ1IsWUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDakIsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLFlBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzs7QUFFbkIsWUFBSSxXQUFXLEVBQUU7QUFDZixjQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsR0FBRyxLQUFLLENBQUM7U0FDeEM7T0FDRjs7QUFFRCxTQUFHLEdBQ0QsR0FBRyxHQUNILEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDakIsWUFBSSxFQUFFLElBQUk7QUFDVixtQkFBVyxFQUFFLG1CQUNYLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUN2QixDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQzVCO09BQ0YsQ0FBQyxDQUFDO0tBQ047O0FBRUQsUUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQzFDLFVBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNwQixhQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2QyxjQUFJLENBQUMsSUFBSSxPQUFPLEVBQUU7QUFDaEIseUJBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1dBQy9DO1NBQ0Y7T0FDRixNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUMzRCxZQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDdEIsWUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztBQUNuRCxhQUFLLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRTtBQUM3RCxvQkFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7QUFDRCxlQUFPLEdBQUcsVUFBVSxDQUFDO0FBQ3JCLGFBQUssSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3ZDLHVCQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMvQztPQUNGLE1BQU07O0FBQ0wsY0FBSSxRQUFRLFlBQUEsQ0FBQzs7QUFFYixnQkFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLEVBQUk7Ozs7QUFJbEMsZ0JBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQiwyQkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEM7QUFDRCxvQkFBUSxHQUFHLEdBQUcsQ0FBQztBQUNmLGFBQUMsRUFBRSxDQUFDO1dBQ0wsQ0FBQyxDQUFDO0FBQ0gsY0FBSSxRQUFRLEtBQUssU0FBUyxFQUFFO0FBQzFCLHlCQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7V0FDdEM7O09BQ0Y7S0FDRjs7QUFFRCxRQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDWCxTQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCOztBQUVELFdBQU8sR0FBRyxDQUFDO0dBQ1osQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoiZWFjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFwcGVuZENvbnRleHRQYXRoLFxuICBibG9ja1BhcmFtcyxcbiAgY3JlYXRlRnJhbWUsXG4gIGlzQXJyYXksXG4gIGlzRnVuY3Rpb25cbn0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuLi9leGNlcHRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignZWFjaCcsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ011c3QgcGFzcyBpdGVyYXRvciB0byAjZWFjaCcpO1xuICAgIH1cblxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm4sXG4gICAgICBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuICAgICAgaSA9IDAsXG4gICAgICByZXQgPSAnJyxcbiAgICAgIGRhdGEsXG4gICAgICBjb250ZXh0UGF0aDtcblxuICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcbiAgICAgIGNvbnRleHRQYXRoID1cbiAgICAgICAgYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSkgKyAnLic7XG4gICAgfVxuXG4gICAgaWYgKGlzRnVuY3Rpb24oY29udGV4dCkpIHtcbiAgICAgIGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZGF0YSkge1xuICAgICAgZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhlY0l0ZXJhdGlvbihmaWVsZCwgaW5kZXgsIGxhc3QpIHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGRhdGEua2V5ID0gZmllbGQ7XG4gICAgICAgIGRhdGEuaW5kZXggPSBpbmRleDtcbiAgICAgICAgZGF0YS5maXJzdCA9IGluZGV4ID09PSAwO1xuICAgICAgICBkYXRhLmxhc3QgPSAhIWxhc3Q7XG5cbiAgICAgICAgaWYgKGNvbnRleHRQYXRoKSB7XG4gICAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGNvbnRleHRQYXRoICsgZmllbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0ID1cbiAgICAgICAgcmV0ICtcbiAgICAgICAgZm4oY29udGV4dFtmaWVsZF0sIHtcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhcbiAgICAgICAgICAgIFtjb250ZXh0W2ZpZWxkXSwgZmllbGRdLFxuICAgICAgICAgICAgW2NvbnRleHRQYXRoICsgZmllbGQsIG51bGxdXG4gICAgICAgICAgKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dCAmJiB0eXBlb2YgY29udGV4dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChpc0FycmF5KGNvbnRleHQpKSB7XG4gICAgICAgIGZvciAobGV0IGogPSBjb250ZXh0Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgIGlmIChpIGluIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24oaSwgaSwgaSA9PT0gY29udGV4dC5sZW5ndGggLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZ2xvYmFsLlN5bWJvbCAmJiBjb250ZXh0W2dsb2JhbC5TeW1ib2wuaXRlcmF0b3JdKSB7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRleHQgPSBbXTtcbiAgICAgICAgY29uc3QgaXRlcmF0b3IgPSBjb250ZXh0W2dsb2JhbC5TeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIGZvciAobGV0IGl0ID0gaXRlcmF0b3IubmV4dCgpOyAhaXQuZG9uZTsgaXQgPSBpdGVyYXRvci5uZXh0KCkpIHtcbiAgICAgICAgICBuZXdDb250ZXh0LnB1c2goaXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQgPSBuZXdDb250ZXh0O1xuICAgICAgICBmb3IgKGxldCBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwcmlvcktleTtcblxuICAgICAgICBPYmplY3Qua2V5cyhjb250ZXh0KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgLy8gV2UncmUgcnVubmluZyB0aGUgaXRlcmF0aW9ucyBvbmUgc3RlcCBvdXQgb2Ygc3luYyBzbyB3ZSBjYW4gZGV0ZWN0XG4gICAgICAgICAgLy8gdGhlIGxhc3QgaXRlcmF0aW9uIHdpdGhvdXQgaGF2ZSB0byBzY2FuIHRoZSBvYmplY3QgdHdpY2UgYW5kIGNyZWF0ZVxuICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG4gICAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJpb3JLZXkgPSBrZXk7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cbiJdfQ==

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js":
/*!********************************************************************************!*\
  !*** ../node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = __webpack_require__(/*! ../exception */ "../node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('helperMissing', function () /* [args, ]options */{
    if (arguments.length === 1) {
      // A missing field in a {{foo}} construct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozt5QkFBc0IsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsaUNBQWdDO0FBQ3ZFLFFBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O0FBRTFCLGFBQU8sU0FBUyxDQUFDO0tBQ2xCLE1BQU07O0FBRUwsWUFBTSwyQkFDSixtQkFBbUIsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUNqRSxDQUFDO0tBQ0g7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJoZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbigvKiBbYXJncywgXW9wdGlvbnMgKi8pIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gQSBtaXNzaW5nIGZpZWxkIGluIGEge3tmb299fSBjb25zdHJ1Y3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oXG4gICAgICAgICdNaXNzaW5nIGhlbHBlcjogXCInICsgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXS5uYW1lICsgJ1wiJ1xuICAgICAgKTtcbiAgICB9XG4gIH0pO1xufVxuIl19


/***/ }),

/***/ "../node_modules/handlebars/dist/cjs/handlebars/helpers/if.js":
/*!********************************************************************!*\
  !*** ../node_modules/handlebars/dist/cjs/handlebars/helpers/if.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(/*! ../utils */ "../node_modules/handlebars/dist/cjs/handlebars/utils.js");

var _exception = __webpack_require__(/*! ../exception */ "../node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('if', function (conditional, options) {
    if (arguments.length != 2) {
      throw new _exception2['default']('#if requires exactly one argument');
    }
    if (_utils.isFunction(conditional)) {
      conditional = conditional.call(this);
    }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function (conditional, options) {
    if (arguments.length != 2) {
      throw new _exception2['default']('#unless requires exactly one argument');
    }
    return instance.helpers['if'].call(this, conditional, {
      fn: options.inverse,
      inverse: options.fn,
      hash: options.hash
    });
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztxQkFBb0MsVUFBVTs7eUJBQ3hCLGNBQWM7Ozs7cUJBRXJCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVMsV0FBVyxFQUFFLE9BQU8sRUFBRTtBQUMzRCxRQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQ3pCLFlBQU0sMkJBQWMsbUNBQW1DLENBQUMsQ0FBQztLQUMxRDtBQUNELFFBQUksa0JBQVcsV0FBVyxDQUFDLEVBQUU7QUFDM0IsaUJBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3RDOzs7OztBQUtELFFBQUksQUFBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsV0FBVyxJQUFLLGVBQVEsV0FBVyxDQUFDLEVBQUU7QUFDdkUsYUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7R0FDRixDQUFDLENBQUM7O0FBRUgsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxXQUFXLEVBQUUsT0FBTyxFQUFFO0FBQy9ELFFBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7QUFDekIsWUFBTSwyQkFBYyx1Q0FBdUMsQ0FBQyxDQUFDO0tBQzlEO0FBQ0QsV0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQ3BELFFBQUUsRUFBRSxPQUFPLENBQUMsT0FBTztBQUNuQixhQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUU7QUFDbkIsVUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO0tBQ25CLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6ImlmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNFbXB0eSwgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2lmJywgZnVuY3Rpb24oY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPSAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCcjaWYgcmVxdWlyZXMgZXhhY3RseSBvbmUgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKGlzRnVuY3Rpb24oY29uZGl0aW9uYWwpKSB7XG4gICAgICBjb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBiZWhhdmlvciBpcyB0byByZW5kZXIgdGhlIHBvc2l0aXZlIHBhdGggaWYgdGhlIHZhbHVlIGlzIHRydXRoeSBhbmQgbm90IGVtcHR5LlxuICAgIC8vIFRoZSBgaW5jbHVkZVplcm9gIG9wdGlvbiBtYXkgYmUgc2V0IHRvIHRyZWF0IHRoZSBjb25kdGlvbmFsIGFzIHB1cmVseSBub3QgZW1wdHkgYmFzZWQgb24gdGhlXG4gICAgLy8gYmVoYXZpb3Igb2YgaXNFbXB0eS4gRWZmZWN0aXZlbHkgdGhpcyBkZXRlcm1pbmVzIGlmIDAgaXMgaGFuZGxlZCBieSB0aGUgcG9zaXRpdmUgcGF0aCBvciBuZWdhdGl2ZS5cbiAgICBpZiAoKCFvcHRpb25zLmhhc2guaW5jbHVkZVplcm8gJiYgIWNvbmRpdGlvbmFsKSB8fCBpc0VtcHR5KGNvbmRpdGlvbmFsKSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZm4odGhpcyk7XG4gICAgfVxuICB9KTtcblxuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcigndW5sZXNzJywgZnVuY3Rpb24oY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPSAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCcjdW5sZXNzIHJlcXVpcmVzIGV4YWN0bHkgb25lIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIHJldHVybiBpbnN0YW5jZS5oZWxwZXJzWydpZiddLmNhbGwodGhpcywgY29uZGl0aW9uYWwsIHtcbiAgICAgIGZuOiBvcHRpb25zLmludmVyc2UsXG4gICAgICBpbnZlcnNlOiBvcHRpb25zLmZuLFxuICAgICAgaGFzaDogb3B0aW9ucy5oYXNoXG4gICAgfSk7XG4gIH0pO1xufVxuIl19


/***/ }),

/***/ "../node_modules/handlebars/dist/cjs/handlebars/helpers/log.js":
/*!*********************************************************************!*\
  !*** ../node_modules/handlebars/dist/cjs/handlebars/helpers/log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('log', function () /* message, options */{
    var args = [undefined],
        options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
      args.push(arguments[i]);
    }

    var level = 1;
    if (options.hash.level != null) {
      level = options.hash.level;
    } else if (options.data && options.data.level != null) {
      level = options.data.level;
    }
    args[0] = level;

    instance.log.apply(instance, args);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsa0NBQWlDO0FBQzlELFFBQUksSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ3BCLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM1QyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0MsVUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6Qjs7QUFFRCxRQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxRQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtBQUM5QixXQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDNUIsTUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO0FBQ3JELFdBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM1QjtBQUNELFFBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRWhCLFlBQVEsQ0FBQyxHQUFHLE1BQUEsQ0FBWixRQUFRLEVBQVEsSUFBSSxDQUFDLENBQUM7R0FDdkIsQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uKC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi8pIHtcbiAgICBsZXQgYXJncyA9IFt1bmRlZmluZWRdLFxuICAgICAgb3B0aW9ucyA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICBsZXQgbGV2ZWwgPSAxO1xuICAgIGlmIChvcHRpb25zLmhhc2gubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmhhc2gubGV2ZWw7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5kYXRhLmxldmVsICE9IG51bGwpIHtcbiAgICAgIGxldmVsID0gb3B0aW9ucy5kYXRhLmxldmVsO1xuICAgIH1cbiAgICBhcmdzWzBdID0gbGV2ZWw7XG5cbiAgICBpbnN0YW5jZS5sb2coLi4uYXJncyk7XG4gIH0pO1xufVxuIl19


/***/ }),

/***/ "../node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js":
/*!************************************************************************!*\
  !*** ../node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('lookup', function (obj, field, options) {
    if (!obj) {
      // Note for 5.0: Change to "obj == null" in 5.0
      return obj;
    }
    return options.lookupProperty(obj, field);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9va3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtBQUM5RCxRQUFJLENBQUMsR0FBRyxFQUFFOztBQUVSLGFBQU8sR0FBRyxDQUFDO0tBQ1o7QUFDRCxXQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQzNDLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6Imxvb2t1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdsb29rdXAnLCBmdW5jdGlvbihvYmosIGZpZWxkLCBvcHRpb25zKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgIC8vIE5vdGUgZm9yIDUuMDogQ2hhbmdlIHRvIFwib2JqID09IG51bGxcIiBpbiA1LjBcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zLmxvb2t1cFByb3BlcnR5KG9iaiwgZmllbGQpO1xuICB9KTtcbn1cbiJdfQ==


/***/ }),

/***/ "../node_modules/handlebars/dist/cjs/handlebars/helpers/with.js":
/*!**********************************************************************!*\
  !*** ../node_modules/handlebars/dist/cjs/handlebars/helpers/with.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(/*! ../utils */ "../node_modules/handlebars/dist/cjs/handlebars/utils.js");

var _exception = __webpack_require__(/*! ../exception */ "../node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('with', function (context, options) {
    if (arguments.length != 2) {
      throw new _exception2['default']('#with requires exactly one argument');
    }
    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    var fn = options.fn;

    if (!_utils.isEmpty(context)) {
      var data = options.data;
      if (options.data && options.ids) {
        data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
      }

      return fn(context, {
        data: data,
        blockParams: _utils.blockParams([context], [data && data.contextPath])
      });
    } else {
      return options.inverse(this);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3FCQU1PLFVBQVU7O3lCQUNLLGNBQWM7Ozs7cUJBRXJCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVMsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUN6RCxRQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQ3pCLFlBQU0sMkJBQWMscUNBQXFDLENBQUMsQ0FBQztLQUM1RDtBQUNELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFDdkIsYUFBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7O0FBRUQsUUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQzs7QUFFcEIsUUFBSSxDQUFDLGVBQVEsT0FBTyxDQUFDLEVBQUU7QUFDckIsVUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztBQUN4QixVQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixZQUFJLEdBQUcsbUJBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pDLFlBQUksQ0FBQyxXQUFXLEdBQUcseUJBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUNmLENBQUM7T0FDSDs7QUFFRCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUU7QUFDakIsWUFBSSxFQUFFLElBQUk7QUFDVixtQkFBVyxFQUFFLG1CQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO09BQ2hFLENBQUMsQ0FBQztLQUNKLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJ3aXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYXBwZW5kQ29udGV4dFBhdGgsXG4gIGJsb2NrUGFyYW1zLFxuICBjcmVhdGVGcmFtZSxcbiAgaXNFbXB0eSxcbiAgaXNGdW5jdGlvblxufSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4uL2V4Y2VwdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd3aXRoJywgZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9IDIpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJyN3aXRoIHJlcXVpcmVzIGV4YWN0bHkgb25lIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7XG4gICAgICBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm47XG5cbiAgICBpZiAoIWlzRW1wdHkoY29udGV4dCkpIHtcbiAgICAgIGxldCBkYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgICBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKFxuICAgICAgICAgIG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCxcbiAgICAgICAgICBvcHRpb25zLmlkc1swXVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm4oY29udGV4dCwge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBibG9ja1BhcmFtczogYmxvY2tQYXJhbXMoW2NvbnRleHRdLCBbZGF0YSAmJiBkYXRhLmNvbnRleHRQYXRoXSlcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=


/***/ }),

/***/ "../node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createNewLookupObject = createNewLookupObject;

var _utils = __webpack_require__(/*! ../utils */ "../node_modules/handlebars/dist/cjs/handlebars/utils.js");

/**
 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
 * The resulting object can be used with "object[property]" to check if a property exists
 * @param {...object} sources a varargs parameter of source objects that will be merged
 * @returns {object}
 */

function createNewLookupObject() {
  for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }

  return _utils.extend.apply(undefined, [Object.create(null)].concat(sources));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2ludGVybmFsL2NyZWF0ZS1uZXctbG9va3VwLW9iamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztxQkFBdUIsVUFBVTs7Ozs7Ozs7O0FBUTFCLFNBQVMscUJBQXFCLEdBQWE7b0NBQVQsT0FBTztBQUFQLFdBQU87OztBQUM5QyxTQUFPLGdDQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQUssT0FBTyxFQUFDLENBQUM7Q0FDaEQiLCJmaWxlIjoiY3JlYXRlLW5ldy1sb29rdXAtb2JqZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBvYmplY3Qgd2l0aCBcIm51bGxcIi1wcm90b3R5cGUgdG8gYXZvaWQgdHJ1dGh5IHJlc3VsdHMgb24gcHJvdG90eXBlIHByb3BlcnRpZXMuXG4gKiBUaGUgcmVzdWx0aW5nIG9iamVjdCBjYW4gYmUgdXNlZCB3aXRoIFwib2JqZWN0W3Byb3BlcnR5XVwiIHRvIGNoZWNrIGlmIGEgcHJvcGVydHkgZXhpc3RzXG4gKiBAcGFyYW0gey4uLm9iamVjdH0gc291cmNlcyBhIHZhcmFyZ3MgcGFyYW1ldGVyIG9mIHNvdXJjZSBvYmplY3RzIHRoYXQgd2lsbCBiZSBtZXJnZWRcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdMb29rdXBPYmplY3QoLi4uc291cmNlcykge1xuICByZXR1cm4gZXh0ZW5kKE9iamVjdC5jcmVhdGUobnVsbCksIC4uLnNvdXJjZXMpO1xufVxuIl19


/***/ }),

/***/ "../node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createProtoAccessControl = createProtoAccessControl;
exports.resultIsAllowed = resultIsAllowed;
exports.resetLoggedProperties = resetLoggedProperties;
// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _createNewLookupObject = __webpack_require__(/*! ./create-new-lookup-object */ "../node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js");

var _logger = __webpack_require__(/*! ../logger */ "../node_modules/handlebars/dist/cjs/handlebars/logger.js");

var logger = _interopRequireWildcard(_logger);

var loggedProperties = Object.create(null);

function createProtoAccessControl(runtimeOptions) {
  var defaultMethodWhiteList = Object.create(null);
  defaultMethodWhiteList['constructor'] = false;
  defaultMethodWhiteList['__defineGetter__'] = false;
  defaultMethodWhiteList['__defineSetter__'] = false;
  defaultMethodWhiteList['__lookupGetter__'] = false;

  var defaultPropertyWhiteList = Object.create(null);
  // eslint-disable-next-line no-proto
  defaultPropertyWhiteList['__proto__'] = false;

  return {
    properties: {
      whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
      defaultValue: runtimeOptions.allowProtoPropertiesByDefault
    },
    methods: {
      whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
      defaultValue: runtimeOptions.allowProtoMethodsByDefault
    }
  };
}

function resultIsAllowed(result, protoAccessControl, propertyName) {
  if (typeof result === 'function') {
    return checkWhiteList(protoAccessControl.methods, propertyName);
  } else {
    return checkWhiteList(protoAccessControl.properties, propertyName);
  }
}

function checkWhiteList(protoAccessControlForType, propertyName) {
  if (protoAccessControlForType.whitelist[propertyName] !== undefined) {
    return protoAccessControlForType.whitelist[propertyName] === true;
  }
  if (protoAccessControlForType.defaultValue !== undefined) {
    return protoAccessControlForType.defaultValue;
  }
  logUnexpecedPropertyAccessOnce(propertyName);
  return false;
}

function logUnexpecedPropertyAccessOnce(propertyName) {
  if (loggedProperties[propertyName] !== true) {
    loggedProperties[propertyName] = true;
    logger.log('error', 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + 'You can add a runtime option to disable the check or this warning:\n' + 'See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
  }
}

function resetLoggedProperties() {
  Object.keys(loggedProperties).forEach(function (propertyName) {
    delete loggedProperties[propertyName];
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2ludGVybmFsL3Byb3RvLWFjY2Vzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3FDQUFzQyw0QkFBNEI7O3NCQUMxQyxXQUFXOztJQUF2QixNQUFNOztBQUVsQixJQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXRDLFNBQVMsd0JBQXdCLENBQUMsY0FBYyxFQUFFO0FBQ3ZELE1BQUksc0JBQXNCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqRCx3QkFBc0IsQ0FBQyxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDOUMsd0JBQXNCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDbkQsd0JBQXNCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDbkQsd0JBQXNCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRW5ELE1BQUksd0JBQXdCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFbkQsMEJBQXdCLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDOztBQUU5QyxTQUFPO0FBQ0wsY0FBVSxFQUFFO0FBQ1YsZUFBUyxFQUFFLDZDQUNULHdCQUF3QixFQUN4QixjQUFjLENBQUMsc0JBQXNCLENBQ3RDO0FBQ0Qsa0JBQVksRUFBRSxjQUFjLENBQUMsNkJBQTZCO0tBQzNEO0FBQ0QsV0FBTyxFQUFFO0FBQ1AsZUFBUyxFQUFFLDZDQUNULHNCQUFzQixFQUN0QixjQUFjLENBQUMsbUJBQW1CLENBQ25DO0FBQ0Qsa0JBQVksRUFBRSxjQUFjLENBQUMsMEJBQTBCO0tBQ3hEO0dBQ0YsQ0FBQztDQUNIOztBQUVNLFNBQVMsZUFBZSxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUU7QUFDeEUsTUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLEVBQUU7QUFDaEMsV0FBTyxjQUFjLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0dBQ2pFLE1BQU07QUFDTCxXQUFPLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7R0FDcEU7Q0FDRjs7QUFFRCxTQUFTLGNBQWMsQ0FBQyx5QkFBeUIsRUFBRSxZQUFZLEVBQUU7QUFDL0QsTUFBSSx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEtBQUssU0FBUyxFQUFFO0FBQ25FLFdBQU8seUJBQXlCLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksQ0FBQztHQUNuRTtBQUNELE1BQUkseUJBQXlCLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtBQUN4RCxXQUFPLHlCQUF5QixDQUFDLFlBQVksQ0FBQztHQUMvQztBQUNELGdDQUE4QixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzdDLFNBQU8sS0FBSyxDQUFDO0NBQ2Q7O0FBRUQsU0FBUyw4QkFBOEIsQ0FBQyxZQUFZLEVBQUU7QUFDcEQsTUFBSSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxJQUFJLEVBQUU7QUFDM0Msb0JBQWdCLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3RDLFVBQU0sQ0FBQyxHQUFHLENBQ1IsT0FBTyxFQUNQLGlFQUErRCxZQUFZLG9JQUNILG9IQUMyQyxDQUNwSCxDQUFDO0dBQ0g7Q0FDRjs7QUFFTSxTQUFTLHFCQUFxQixHQUFHO0FBQ3RDLFFBQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxZQUFZLEVBQUk7QUFDcEQsV0FBTyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztHQUN2QyxDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJwcm90by1hY2Nlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVOZXdMb29rdXBPYmplY3QgfSBmcm9tICcuL2NyZWF0ZS1uZXctbG9va3VwLW9iamVjdCc7XG5pbXBvcnQgKiBhcyBsb2dnZXIgZnJvbSAnLi4vbG9nZ2VyJztcblxuY29uc3QgbG9nZ2VkUHJvcGVydGllcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm90b0FjY2Vzc0NvbnRyb2wocnVudGltZU9wdGlvbnMpIHtcbiAgbGV0IGRlZmF1bHRNZXRob2RXaGl0ZUxpc3QgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBkZWZhdWx0TWV0aG9kV2hpdGVMaXN0Wydjb25zdHJ1Y3RvciddID0gZmFsc2U7XG4gIGRlZmF1bHRNZXRob2RXaGl0ZUxpc3RbJ19fZGVmaW5lR2V0dGVyX18nXSA9IGZhbHNlO1xuICBkZWZhdWx0TWV0aG9kV2hpdGVMaXN0WydfX2RlZmluZVNldHRlcl9fJ10gPSBmYWxzZTtcbiAgZGVmYXVsdE1ldGhvZFdoaXRlTGlzdFsnX19sb29rdXBHZXR0ZXJfXyddID0gZmFsc2U7XG5cbiAgbGV0IGRlZmF1bHRQcm9wZXJ0eVdoaXRlTGlzdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b1xuICBkZWZhdWx0UHJvcGVydHlXaGl0ZUxpc3RbJ19fcHJvdG9fXyddID0gZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICB3aGl0ZWxpc3Q6IGNyZWF0ZU5ld0xvb2t1cE9iamVjdChcbiAgICAgICAgZGVmYXVsdFByb3BlcnR5V2hpdGVMaXN0LFxuICAgICAgICBydW50aW1lT3B0aW9ucy5hbGxvd2VkUHJvdG9Qcm9wZXJ0aWVzXG4gICAgICApLFxuICAgICAgZGVmYXVsdFZhbHVlOiBydW50aW1lT3B0aW9ucy5hbGxvd1Byb3RvUHJvcGVydGllc0J5RGVmYXVsdFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgd2hpdGVsaXN0OiBjcmVhdGVOZXdMb29rdXBPYmplY3QoXG4gICAgICAgIGRlZmF1bHRNZXRob2RXaGl0ZUxpc3QsXG4gICAgICAgIHJ1bnRpbWVPcHRpb25zLmFsbG93ZWRQcm90b01ldGhvZHNcbiAgICAgICksXG4gICAgICBkZWZhdWx0VmFsdWU6IHJ1bnRpbWVPcHRpb25zLmFsbG93UHJvdG9NZXRob2RzQnlEZWZhdWx0XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzdWx0SXNBbGxvd2VkKHJlc3VsdCwgcHJvdG9BY2Nlc3NDb250cm9sLCBwcm9wZXJ0eU5hbWUpIHtcbiAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gY2hlY2tXaGl0ZUxpc3QocHJvdG9BY2Nlc3NDb250cm9sLm1ldGhvZHMsIHByb3BlcnR5TmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNoZWNrV2hpdGVMaXN0KHByb3RvQWNjZXNzQ29udHJvbC5wcm9wZXJ0aWVzLCBwcm9wZXJ0eU5hbWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2hpdGVMaXN0KHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUsIHByb3BlcnR5TmFtZSkge1xuICBpZiAocHJvdG9BY2Nlc3NDb250cm9sRm9yVHlwZS53aGl0ZWxpc3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUud2hpdGVsaXN0W3Byb3BlcnR5TmFtZV0gPT09IHRydWU7XG4gIH1cbiAgaWYgKHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcHJvdG9BY2Nlc3NDb250cm9sRm9yVHlwZS5kZWZhdWx0VmFsdWU7XG4gIH1cbiAgbG9nVW5leHBlY2VkUHJvcGVydHlBY2Nlc3NPbmNlKHByb3BlcnR5TmFtZSk7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbG9nVW5leHBlY2VkUHJvcGVydHlBY2Nlc3NPbmNlKHByb3BlcnR5TmFtZSkge1xuICBpZiAobG9nZ2VkUHJvcGVydGllc1twcm9wZXJ0eU5hbWVdICE9PSB0cnVlKSB7XG4gICAgbG9nZ2VkUHJvcGVydGllc1twcm9wZXJ0eU5hbWVdID0gdHJ1ZTtcbiAgICBsb2dnZXIubG9nKFxuICAgICAgJ2Vycm9yJyxcbiAgICAgIGBIYW5kbGViYXJzOiBBY2Nlc3MgaGFzIGJlZW4gZGVuaWVkIHRvIHJlc29sdmUgdGhlIHByb3BlcnR5IFwiJHtwcm9wZXJ0eU5hbWV9XCIgYmVjYXVzZSBpdCBpcyBub3QgYW4gXCJvd24gcHJvcGVydHlcIiBvZiBpdHMgcGFyZW50LlxcbmAgK1xuICAgICAgICBgWW91IGNhbiBhZGQgYSBydW50aW1lIG9wdGlvbiB0byBkaXNhYmxlIHRoZSBjaGVjayBvciB0aGlzIHdhcm5pbmc6XFxuYCArXG4gICAgICAgIGBTZWUgaHR0cHM6Ly9oYW5kbGViYXJzanMuY29tL2FwaS1yZWZlcmVuY2UvcnVudGltZS1vcHRpb25zLmh0bWwjb3B0aW9ucy10by1jb250cm9sLXByb3RvdHlwZS1hY2Nlc3MgZm9yIGRldGFpbHNgXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRMb2dnZWRQcm9wZXJ0aWVzKCkge1xuICBPYmplY3Qua2V5cyhsb2dnZWRQcm9wZXJ0aWVzKS5mb3JFYWNoKHByb3BlcnR5TmFtZSA9PiB7XG4gICAgZGVsZXRlIGxvZ2dlZFByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcbiAgfSk7XG59XG4iXX0=


/***/ }),

/***/ "../node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.wrapHelper = wrapHelper;

function wrapHelper(helper, transformOptionsFn) {
  if (typeof helper !== 'function') {
    // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
    // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
    return helper;
  }
  var wrapper = function wrapper() /* dynamic arguments */{
    var options = arguments[arguments.length - 1];
    arguments[arguments.length - 1] = transformOptionsFn(options);
    return helper.apply(this, arguments);
  };
  return wrapper;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2ludGVybmFsL3dyYXBIZWxwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLEVBQUU7QUFDckQsTUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLEVBQUU7OztBQUdoQyxXQUFPLE1BQU0sQ0FBQztHQUNmO0FBQ0QsTUFBSSxPQUFPLEdBQUcsU0FBVixPQUFPLDBCQUFxQztBQUM5QyxRQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoRCxhQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM5RCxXQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0dBQ3RDLENBQUM7QUFDRixTQUFPLE9BQU8sQ0FBQztDQUNoQiIsImZpbGUiOiJ3cmFwSGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHdyYXBIZWxwZXIoaGVscGVyLCB0cmFuc2Zvcm1PcHRpb25zRm4pIHtcbiAgaWYgKHR5cGVvZiBoZWxwZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuLCBidXQgYXBwYXJlbnRseSBpdCBkb2VzIGluIGh0dHBzOi8vZ2l0aHViLmNvbS93eWNhdHMvaGFuZGxlYmFycy5qcy9pc3N1ZXMvMTYzOVxuICAgIC8vIFdlIHRyeSB0byBtYWtlIHRoZSB3cmFwcGVyIGxlYXN0LWludmFzaXZlIGJ5IG5vdCB3cmFwcGluZyBpdCwgaWYgdGhlIGhlbHBlciBpcyBub3QgYSBmdW5jdGlvbi5cbiAgICByZXR1cm4gaGVscGVyO1xuICB9XG4gIGxldCB3cmFwcGVyID0gZnVuY3Rpb24oLyogZHluYW1pYyBhcmd1bWVudHMgKi8pIHtcbiAgICBjb25zdCBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdID0gdHJhbnNmb3JtT3B0aW9uc0ZuKG9wdGlvbnMpO1xuICAgIHJldHVybiBoZWxwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG4iXX0=


/***/ }),

/***/ "../node_modules/handlebars/dist/cjs/handlebars/logger.js":
/*!****************************************************************!*\
  !*** ../node_modules/handlebars/dist/cjs/handlebars/logger.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ./utils */ "../node_modules/handlebars/dist/cjs/handlebars/utils.js");

var logger = {
  methodMap: ['debug', 'info', 'warn', 'error'],
  level: 'info',

  // Maps a given level value to the `methodMap` indexes above.
  lookupLevel: function lookupLevel(level) {
    if (typeof level === 'string') {
      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
      if (levelMap >= 0) {
        level = levelMap;
      } else {
        level = parseInt(level, 10);
      }
    }

    return level;
  },

  // Can be overridden in the host environment
  log: function log(level) {
    level = logger.lookupLevel(level);

    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
      var method = logger.methodMap[level];
      // eslint-disable-next-line no-console
      if (!console[method]) {
        method = 'log';
      }

      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        message[_key - 1] = arguments[_key];
      }

      console[method].apply(console, message); // eslint-disable-line no-console
    }
  }
};

exports['default'] = logger;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2xvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUF3QixTQUFTOztBQUVqQyxJQUFJLE1BQU0sR0FBRztBQUNYLFdBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztBQUM3QyxPQUFLLEVBQUUsTUFBTTs7O0FBR2IsYUFBVyxFQUFFLHFCQUFTLEtBQUssRUFBRTtBQUMzQixRQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUM3QixVQUFJLFFBQVEsR0FBRyxlQUFRLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDOUQsVUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO0FBQ2pCLGFBQUssR0FBRyxRQUFRLENBQUM7T0FDbEIsTUFBTTtBQUNMLGFBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO09BQzdCO0tBQ0Y7O0FBRUQsV0FBTyxLQUFLLENBQUM7R0FDZDs7O0FBR0QsS0FBRyxFQUFFLGFBQVMsS0FBSyxFQUFjO0FBQy9CLFNBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVsQyxRQUNFLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFDOUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxFQUN6QztBQUNBLFVBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRXJDLFVBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDcEIsY0FBTSxHQUFHLEtBQUssQ0FBQztPQUNoQjs7d0NBWG1CLE9BQU87QUFBUCxlQUFPOzs7QUFZM0IsYUFBTyxDQUFDLE1BQU0sT0FBQyxDQUFmLE9BQU8sRUFBWSxPQUFPLENBQUMsQ0FBQztLQUM3QjtHQUNGO0NBQ0YsQ0FBQzs7cUJBRWEsTUFBTSIsImZpbGUiOiJsb2dnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmRleE9mIH0gZnJvbSAnLi91dGlscyc7XG5cbmxldCBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbihsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbGV2ZWxNYXAgPSBpbmRleE9mKGxvZ2dlci5tZXRob2RNYXAsIGxldmVsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcbiAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH0sXG5cbiAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbihsZXZlbCwgLi4ubWVzc2FnZSkge1xuICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWxcbiAgICApIHtcbiAgICAgIGxldCBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBpZiAoIWNvbnNvbGVbbWV0aG9kXSkge1xuICAgICAgICBtZXRob2QgPSAnbG9nJztcbiAgICAgIH1cbiAgICAgIGNvbnNvbGVbbWV0aG9kXSguLi5tZXNzYWdlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dnZXI7XG4iXX0=


/***/ }),

/***/ "../node_modules/handlebars/dist/cjs/handlebars/no-conflict.js":
/*!*********************************************************************!*\
  !*** ../node_modules/handlebars/dist/cjs/handlebars/no-conflict.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;

exports['default'] = function (Handlebars) {
  /* istanbul ignore next */
  var root = typeof global !== 'undefined' ? global : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function () {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
    return Handlebars;
  };
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL25vLWNvbmZsaWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxVQUFVLEVBQUU7O0FBRWxDLE1BQUksSUFBSSxHQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsR0FBRyxNQUFNLEdBQUcsTUFBTTtNQUN4RCxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7QUFFaEMsWUFBVSxDQUFDLFVBQVUsR0FBRyxZQUFXO0FBQ2pDLFFBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7QUFDbEMsVUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7S0FDL0I7QUFDRCxXQUFPLFVBQVUsQ0FBQztHQUNuQixDQUFDO0NBQ0giLCJmaWxlIjoibm8tY29uZmxpY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihIYW5kbGViYXJzKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGxldCByb290ID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3csXG4gICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcbiAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuICAgIH1cbiAgICByZXR1cm4gSGFuZGxlYmFycztcbiAgfTtcbn1cbiJdfQ==

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/handlebars/dist/cjs/handlebars/runtime.js":
/*!*****************************************************************!*\
  !*** ../node_modules/handlebars/dist/cjs/handlebars/runtime.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utils = __webpack_require__(/*! ./utils */ "../node_modules/handlebars/dist/cjs/handlebars/utils.js");

var Utils = _interopRequireWildcard(_utils);

var _exception = __webpack_require__(/*! ./exception */ "../node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

var _base = __webpack_require__(/*! ./base */ "../node_modules/handlebars/dist/cjs/handlebars/base.js");

var _helpers = __webpack_require__(/*! ./helpers */ "../node_modules/handlebars/dist/cjs/handlebars/helpers.js");

var _internalWrapHelper = __webpack_require__(/*! ./internal/wrapHelper */ "../node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js");

var _internalProtoAccess = __webpack_require__(/*! ./internal/proto-access */ "../node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js");

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = _base.COMPILER_REVISION;

  if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
    return;
  }

  if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
    var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
        compilerVersions = _base.REVISION_CHANGES[compilerRevision];
    throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
  } else {
    // Use the embedded version info since the runtime doesn't know about this revision yet
    throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
  }
}

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new _exception2['default']('No environment passed to template');
  }
  if (!templateSpec || !templateSpec.main) {
    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
  }

  templateSpec.main.decorator = templateSpec.main_d;

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as pseudo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
  var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;

  function invokePartialWrapper(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
      if (options.ids) {
        options.ids[0] = true;
      }
    }
    partial = env.VM.resolvePartial.call(this, partial, context, options);

    var extendedOptions = Utils.extend({}, options, {
      hooks: this.hooks,
      protoAccessControl: this.protoAccessControl
    });

    var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);

    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, extendedOptions);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = options.indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
  }

  // Just add water
  var container = {
    strict: function strict(obj, name, loc) {
      if (!obj || !(name in obj)) {
        throw new _exception2['default']('"' + name + '" not defined in ' + obj, {
          loc: loc
        });
      }
      return obj[name];
    },
    lookupProperty: function lookupProperty(parent, propertyName) {
      var result = parent[propertyName];
      if (result == null) {
        return result;
      }
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return result;
      }

      if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {
        return result;
      }
      return undefined;
    },
    lookup: function lookup(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        var result = depths[i] && container.lookupProperty(depths[i], name);
        if (result != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function lambda(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function fn(i) {
      var ret = templateSpec[i];
      ret.decorator = templateSpec[i + '_d'];
      return ret;
    },

    programs: [],
    program: function program(i, data, declaredBlockParams, blockParams, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths || blockParams || declaredBlockParams) {
        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
      }
      return programWrapper;
    },

    data: function data(value, depth) {
      while (value && depth--) {
        value = value._parent;
      }
      return value;
    },
    mergeIfNeeded: function mergeIfNeeded(param, common) {
      var obj = param || common;

      if (param && common && param !== common) {
        obj = Utils.extend({}, common, param);
      }

      return obj;
    },
    // An empty object to use as replacement for null-contexts
    nullContext: Object.seal({}),

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  function ret(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths = undefined,
        blockParams = templateSpec.useBlockParams ? [] : undefined;
    if (templateSpec.useDepths) {
      if (options.depths) {
        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
      } else {
        depths = [context];
      }
    }

    function main(context /*, options*/) {
      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
    }

    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
    return main(context, options);
  }

  ret.isTop = true;

  ret._setup = function (options) {
    if (!options.partial) {
      var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
      wrapHelpersToPassLookupProperty(mergedHelpers, container);
      container.helpers = mergedHelpers;

      if (templateSpec.usePartial) {
        // Use mergeIfNeeded here to prevent compiling global partials multiple times
        container.partials = container.mergeIfNeeded(options.partials, env.partials);
      }
      if (templateSpec.usePartial || templateSpec.useDecorators) {
        container.decorators = Utils.extend({}, env.decorators, options.decorators);
      }

      container.hooks = {};
      container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);

      var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
      _helpers.moveHelperToHooks(container, 'helperMissing', keepHelperInHelpers);
      _helpers.moveHelperToHooks(container, 'blockHelperMissing', keepHelperInHelpers);
    } else {
      container.protoAccessControl = options.protoAccessControl; // internal option
      container.helpers = options.helpers;
      container.partials = options.partials;
      container.decorators = options.decorators;
      container.hooks = options.hooks;
    }
  };

  ret._child = function (i, data, blockParams, depths) {
    if (templateSpec.useBlockParams && !blockParams) {
      throw new _exception2['default']('must pass block params');
    }
    if (templateSpec.useDepths && !depths) {
      throw new _exception2['default']('must pass parent depths');
    }

    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
  };
  return ret;
}

function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
  function prog(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var currentDepths = depths;
    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
      currentDepths = [context].concat(depths);
    }

    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
  }

  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}

/**
 * This is currently part of the official API, therefore implementation details should not be changed.
 */

function resolvePartial(partial, context, options) {
  if (!partial) {
    if (options.name === '@partial-block') {
      partial = options.data['partial-block'];
    } else {
      partial = options.partials[options.name];
    }
  } else if (!partial.call && !options.name) {
    // This is a dynamic partial that returned a string
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}

function invokePartial(partial, context, options) {
  // Use the current closure context to save the partial-block if this partial
  var currentPartialBlock = options.data && options.data['partial-block'];
  options.partial = true;
  if (options.ids) {
    options.data.contextPath = options.ids[0] || options.data.contextPath;
  }

  var partialBlock = undefined;
  if (options.fn && options.fn !== noop) {
    (function () {
      options.data = _base.createFrame(options.data);
      // Wrapper function to get access to currentPartialBlock from the closure
      var fn = options.fn;
      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        // Restore the partial-block from the closure for the execution of the block
        // i.e. the part inside the block of the partial call.
        options.data = _base.createFrame(options.data);
        options.data['partial-block'] = currentPartialBlock;
        return fn(context, options);
      };
      if (fn.partials) {
        options.partials = Utils.extend({}, options.partials, fn.partials);
      }
    })();
  }

  if (partial === undefined && partialBlock) {
    partial = partialBlock;
  }

  if (partial === undefined) {
    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
  } else if (partial instanceof Function) {
    return partial(context, options);
  }
}

function noop() {
  return '';
}

function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? _base.createFrame(data) : {};
    data.root = context;
  }
  return data;
}

function executeDecorators(fn, prog, container, depths, data, blockParams) {
  if (fn.decorator) {
    var props = {};
    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
    Utils.extend(prog, props);
  }
  return prog;
}

function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
  Object.keys(mergedHelpers).forEach(function (helperName) {
    var helper = mergedHelpers[helperName];
    mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
  });
}

function passLookupPropertyOption(helper, container) {
  var lookupProperty = container.lookupProperty;
  return _internalWrapHelper.wrapHelper(helper, function (options) {
    return Utils.extend({ lookupProperty: lookupProperty }, options);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3J1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQXVCLFNBQVM7O0lBQXBCLEtBQUs7O3lCQUNLLGFBQWE7Ozs7b0JBTTVCLFFBQVE7O3VCQUNtQixXQUFXOztrQ0FDbEIsdUJBQXVCOzttQ0FJM0MseUJBQXlCOztBQUV6QixTQUFTLGFBQWEsQ0FBQyxZQUFZLEVBQUU7QUFDMUMsTUFBTSxnQkFBZ0IsR0FBRyxBQUFDLFlBQVksSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUssQ0FBQztNQUM3RCxlQUFlLDBCQUFvQixDQUFDOztBQUV0QyxNQUNFLGdCQUFnQiwyQ0FBcUMsSUFDckQsZ0JBQWdCLDJCQUFxQixFQUNyQztBQUNBLFdBQU87R0FDUjs7QUFFRCxNQUFJLGdCQUFnQiwwQ0FBb0MsRUFBRTtBQUN4RCxRQUFNLGVBQWUsR0FBRyx1QkFBaUIsZUFBZSxDQUFDO1FBQ3ZELGdCQUFnQixHQUFHLHVCQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3hELFVBQU0sMkJBQ0oseUZBQXlGLEdBQ3ZGLHFEQUFxRCxHQUNyRCxlQUFlLEdBQ2YsbURBQW1ELEdBQ25ELGdCQUFnQixHQUNoQixJQUFJLENBQ1AsQ0FBQztHQUNILE1BQU07O0FBRUwsVUFBTSwyQkFDSix3RkFBd0YsR0FDdEYsaURBQWlELEdBQ2pELFlBQVksQ0FBQyxDQUFDLENBQUMsR0FDZixJQUFJLENBQ1AsQ0FBQztHQUNIO0NBQ0Y7O0FBRU0sU0FBUyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTs7QUFFMUMsTUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNSLFVBQU0sMkJBQWMsbUNBQW1DLENBQUMsQ0FBQztHQUMxRDtBQUNELE1BQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO0FBQ3ZDLFVBQU0sMkJBQWMsMkJBQTJCLEdBQUcsT0FBTyxZQUFZLENBQUMsQ0FBQztHQUN4RTs7QUFFRCxjQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDOzs7O0FBSWxELEtBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7O0FBRzVDLE1BQU0sb0NBQW9DLEdBQ3hDLFlBQVksQ0FBQyxRQUFRLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRTFELFdBQVMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFDdkQsUUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ2hCLGFBQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xELFVBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLGVBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO09BQ3ZCO0tBQ0Y7QUFDRCxXQUFPLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDOztBQUV0RSxRQUFJLGVBQWUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUU7QUFDOUMsV0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO0FBQ2pCLHdCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7S0FDNUMsQ0FBQyxDQUFDOztBQUVILFFBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDcEMsSUFBSSxFQUNKLE9BQU8sRUFDUCxPQUFPLEVBQ1AsZUFBZSxDQUNoQixDQUFDOztBQUVGLFFBQUksTUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO0FBQ2pDLGFBQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQzFDLE9BQU8sRUFDUCxZQUFZLENBQUMsZUFBZSxFQUM1QixHQUFHLENBQ0osQ0FBQztBQUNGLFlBQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7S0FDbkU7QUFDRCxRQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7QUFDbEIsVUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO0FBQ2xCLFlBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0IsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM1QyxjQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzVCLGtCQUFNO1dBQ1A7O0FBRUQsZUFBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO0FBQ0QsY0FBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7T0FDM0I7QUFDRCxhQUFPLE1BQU0sQ0FBQztLQUNmLE1BQU07QUFDTCxZQUFNLDJCQUNKLGNBQWMsR0FDWixPQUFPLENBQUMsSUFBSSxHQUNaLDBEQUEwRCxDQUM3RCxDQUFDO0tBQ0g7R0FDRjs7O0FBR0QsTUFBSSxTQUFTLEdBQUc7QUFDZCxVQUFNLEVBQUUsZ0JBQVMsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDL0IsVUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLElBQUksSUFBSSxHQUFHLENBQUEsQUFBQyxFQUFFO0FBQzFCLGNBQU0sMkJBQWMsR0FBRyxHQUFHLElBQUksR0FBRyxtQkFBbUIsR0FBRyxHQUFHLEVBQUU7QUFDMUQsYUFBRyxFQUFFLEdBQUc7U0FDVCxDQUFDLENBQUM7T0FDSjtBQUNELGFBQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xCO0FBQ0Qsa0JBQWMsRUFBRSx3QkFBUyxNQUFNLEVBQUUsWUFBWSxFQUFFO0FBQzdDLFVBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNsQyxVQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7QUFDbEIsZUFBTyxNQUFNLENBQUM7T0FDZjtBQUNELFVBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsRUFBRTtBQUM5RCxlQUFPLE1BQU0sQ0FBQztPQUNmOztBQUVELFVBQUkscUNBQWdCLE1BQU0sRUFBRSxTQUFTLENBQUMsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLEVBQUU7QUFDdkUsZUFBTyxNQUFNLENBQUM7T0FDZjtBQUNELGFBQU8sU0FBUyxDQUFDO0tBQ2xCO0FBQ0QsVUFBTSxFQUFFLGdCQUFTLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFDN0IsVUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUMxQixXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVCLFlBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwRSxZQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7QUFDbEIsaUJBQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO09BQ0Y7S0FDRjtBQUNELFVBQU0sRUFBRSxnQkFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ2pDLGFBQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDO0tBQ3hFOztBQUVELG9CQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7QUFDeEMsaUJBQWEsRUFBRSxvQkFBb0I7O0FBRW5DLE1BQUUsRUFBRSxZQUFTLENBQUMsRUFBRTtBQUNkLFVBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixTQUFHLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDdkMsYUFBTyxHQUFHLENBQUM7S0FDWjs7QUFFRCxZQUFRLEVBQUUsRUFBRTtBQUNaLFdBQU8sRUFBRSxpQkFBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7QUFDbkUsVUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7VUFDbkMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEIsVUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLFdBQVcsSUFBSSxtQkFBbUIsRUFBRTtBQUN4RCxzQkFBYyxHQUFHLFdBQVcsQ0FDMUIsSUFBSSxFQUNKLENBQUMsRUFDRCxFQUFFLEVBQ0YsSUFBSSxFQUNKLG1CQUFtQixFQUNuQixXQUFXLEVBQ1gsTUFBTSxDQUNQLENBQUM7T0FDSCxNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUU7QUFDMUIsc0JBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO09BQzlEO0FBQ0QsYUFBTyxjQUFjLENBQUM7S0FDdkI7O0FBRUQsUUFBSSxFQUFFLGNBQVMsS0FBSyxFQUFFLEtBQUssRUFBRTtBQUMzQixhQUFPLEtBQUssSUFBSSxLQUFLLEVBQUUsRUFBRTtBQUN2QixhQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztPQUN2QjtBQUNELGFBQU8sS0FBSyxDQUFDO0tBQ2Q7QUFDRCxpQkFBYSxFQUFFLHVCQUFTLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDckMsVUFBSSxHQUFHLEdBQUcsS0FBSyxJQUFJLE1BQU0sQ0FBQzs7QUFFMUIsVUFBSSxLQUFLLElBQUksTUFBTSxJQUFJLEtBQUssS0FBSyxNQUFNLEVBQUU7QUFDdkMsV0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztPQUN2Qzs7QUFFRCxhQUFPLEdBQUcsQ0FBQztLQUNaOztBQUVELGVBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzs7QUFFNUIsUUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSTtBQUNqQixnQkFBWSxFQUFFLFlBQVksQ0FBQyxRQUFRO0dBQ3BDLENBQUM7O0FBRUYsV0FBUyxHQUFHLENBQUMsT0FBTyxFQUFnQjtRQUFkLE9BQU8seURBQUcsRUFBRTs7QUFDaEMsUUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQzs7QUFFeEIsT0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwQixRQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFO0FBQzVDLFVBQUksR0FBRyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ2hDO0FBQ0QsUUFBSSxNQUFNLFlBQUE7UUFDUixXQUFXLEdBQUcsWUFBWSxDQUFDLGNBQWMsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDO0FBQzdELFFBQUksWUFBWSxDQUFDLFNBQVMsRUFBRTtBQUMxQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDbEIsY0FBTSxHQUNKLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUN4QixDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQ2hDLE9BQU8sQ0FBQyxNQUFNLENBQUM7T0FDdEIsTUFBTTtBQUNMLGNBQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO09BQ3BCO0tBQ0Y7O0FBRUQsYUFBUyxJQUFJLENBQUMsT0FBTyxnQkFBZ0I7QUFDbkMsYUFDRSxFQUFFLEdBQ0YsWUFBWSxDQUFDLElBQUksQ0FDZixTQUFTLEVBQ1QsT0FBTyxFQUNQLFNBQVMsQ0FBQyxPQUFPLEVBQ2pCLFNBQVMsQ0FBQyxRQUFRLEVBQ2xCLElBQUksRUFDSixXQUFXLEVBQ1gsTUFBTSxDQUNQLENBQ0Q7S0FDSDs7QUFFRCxRQUFJLEdBQUcsaUJBQWlCLENBQ3RCLFlBQVksQ0FBQyxJQUFJLEVBQ2pCLElBQUksRUFDSixTQUFTLEVBQ1QsT0FBTyxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQ3BCLElBQUksRUFDSixXQUFXLENBQ1osQ0FBQztBQUNGLFdBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztHQUMvQjs7QUFFRCxLQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs7QUFFakIsS0FBRyxDQUFDLE1BQU0sR0FBRyxVQUFTLE9BQU8sRUFBRTtBQUM3QixRQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtBQUNwQixVQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuRSxxQ0FBK0IsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDMUQsZUFBUyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7O0FBRWxDLFVBQUksWUFBWSxDQUFDLFVBQVUsRUFBRTs7QUFFM0IsaUJBQVMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FDMUMsT0FBTyxDQUFDLFFBQVEsRUFDaEIsR0FBRyxDQUFDLFFBQVEsQ0FDYixDQUFDO09BQ0g7QUFDRCxVQUFJLFlBQVksQ0FBQyxVQUFVLElBQUksWUFBWSxDQUFDLGFBQWEsRUFBRTtBQUN6RCxpQkFBUyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUNqQyxFQUFFLEVBQ0YsR0FBRyxDQUFDLFVBQVUsRUFDZCxPQUFPLENBQUMsVUFBVSxDQUNuQixDQUFDO09BQ0g7O0FBRUQsZUFBUyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDckIsZUFBUyxDQUFDLGtCQUFrQixHQUFHLDhDQUF5QixPQUFPLENBQUMsQ0FBQzs7QUFFakUsVUFBSSxtQkFBbUIsR0FDckIsT0FBTyxDQUFDLHlCQUF5QixJQUNqQyxvQ0FBb0MsQ0FBQztBQUN2QyxpQ0FBa0IsU0FBUyxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0FBQ25FLGlDQUFrQixTQUFTLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztLQUN6RSxNQUFNO0FBQ0wsZUFBUyxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztBQUMxRCxlQUFTLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDcEMsZUFBUyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO0FBQ3RDLGVBQVMsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUMxQyxlQUFTLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7S0FDakM7R0FDRixDQUFDOztBQUVGLEtBQUcsQ0FBQyxNQUFNLEdBQUcsVUFBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7QUFDbEQsUUFBSSxZQUFZLENBQUMsY0FBYyxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQy9DLFlBQU0sMkJBQWMsd0JBQXdCLENBQUMsQ0FBQztLQUMvQztBQUNELFFBQUksWUFBWSxDQUFDLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNyQyxZQUFNLDJCQUFjLHlCQUF5QixDQUFDLENBQUM7S0FDaEQ7O0FBRUQsV0FBTyxXQUFXLENBQ2hCLFNBQVMsRUFDVCxDQUFDLEVBQ0QsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUNmLElBQUksRUFDSixDQUFDLEVBQ0QsV0FBVyxFQUNYLE1BQU0sQ0FDUCxDQUFDO0dBQ0gsQ0FBQztBQUNGLFNBQU8sR0FBRyxDQUFDO0NBQ1o7O0FBRU0sU0FBUyxXQUFXLENBQ3pCLFNBQVMsRUFDVCxDQUFDLEVBQ0QsRUFBRSxFQUNGLElBQUksRUFDSixtQkFBbUIsRUFDbkIsV0FBVyxFQUNYLE1BQU0sRUFDTjtBQUNBLFdBQVMsSUFBSSxDQUFDLE9BQU8sRUFBZ0I7UUFBZCxPQUFPLHlEQUFHLEVBQUU7O0FBQ2pDLFFBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQztBQUMzQixRQUNFLE1BQU0sSUFDTixPQUFPLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUNwQixFQUFFLE9BQU8sS0FBSyxTQUFTLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUEsQUFBQyxFQUMxRDtBQUNBLG1CQUFhLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDMUM7O0FBRUQsV0FBTyxFQUFFLENBQ1AsU0FBUyxFQUNULE9BQU8sRUFDUCxTQUFTLENBQUMsT0FBTyxFQUNqQixTQUFTLENBQUMsUUFBUSxFQUNsQixPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksRUFDcEIsV0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFDeEQsYUFBYSxDQUNkLENBQUM7R0FDSDs7QUFFRCxNQUFJLEdBQUcsaUJBQWlCLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQzs7QUFFekUsTUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDakIsTUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDeEMsTUFBSSxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsSUFBSSxDQUFDLENBQUM7QUFDNUMsU0FBTyxJQUFJLENBQUM7Q0FDYjs7Ozs7O0FBS00sU0FBUyxjQUFjLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFDeEQsTUFBSSxDQUFDLE9BQU8sRUFBRTtBQUNaLFFBQUksT0FBTyxDQUFDLElBQUksS0FBSyxnQkFBZ0IsRUFBRTtBQUNyQyxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUN6QyxNQUFNO0FBQ0wsYUFBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFDO0dBQ0YsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7O0FBRXpDLFdBQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFdBQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0dBQ3JDO0FBQ0QsU0FBTyxPQUFPLENBQUM7Q0FDaEI7O0FBRU0sU0FBUyxhQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7O0FBRXZELE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzFFLFNBQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLE1BQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLFdBQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7R0FDdkU7O0FBRUQsTUFBSSxZQUFZLFlBQUEsQ0FBQztBQUNqQixNQUFJLE9BQU8sQ0FBQyxFQUFFLElBQUksT0FBTyxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQUU7O0FBQ3JDLGFBQU8sQ0FBQyxJQUFJLEdBQUcsa0JBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUV6QyxVQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO0FBQ3BCLGtCQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxTQUFTLG1CQUFtQixDQUN6RSxPQUFPLEVBRVA7WUFEQSxPQUFPLHlEQUFHLEVBQUU7Ozs7QUFJWixlQUFPLENBQUMsSUFBSSxHQUFHLGtCQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QyxlQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLG1CQUFtQixDQUFDO0FBQ3BELGVBQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztPQUM3QixDQUFDO0FBQ0YsVUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0FBQ2YsZUFBTyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztPQUNwRTs7R0FDRjs7QUFFRCxNQUFJLE9BQU8sS0FBSyxTQUFTLElBQUksWUFBWSxFQUFFO0FBQ3pDLFdBQU8sR0FBRyxZQUFZLENBQUM7R0FDeEI7O0FBRUQsTUFBSSxPQUFPLEtBQUssU0FBUyxFQUFFO0FBQ3pCLFVBQU0sMkJBQWMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUMsQ0FBQztHQUM1RSxNQUFNLElBQUksT0FBTyxZQUFZLFFBQVEsRUFBRTtBQUN0QyxXQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7R0FDbEM7Q0FDRjs7QUFFTSxTQUFTLElBQUksR0FBRztBQUNyQixTQUFPLEVBQUUsQ0FBQztDQUNYOztBQUVELFNBQVMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDL0IsTUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLE1BQU0sSUFBSSxJQUFJLENBQUEsQUFBQyxFQUFFO0FBQzlCLFFBQUksR0FBRyxJQUFJLEdBQUcsa0JBQVksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3JDLFFBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0dBQ3JCO0FBQ0QsU0FBTyxJQUFJLENBQUM7Q0FDYjs7QUFFRCxTQUFTLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQ3pFLE1BQUksRUFBRSxDQUFDLFNBQVMsRUFBRTtBQUNoQixRQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDZixRQUFJLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FDakIsSUFBSSxFQUNKLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFDbkIsSUFBSSxFQUNKLFdBQVcsRUFDWCxNQUFNLENBQ1AsQ0FBQztBQUNGLFNBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQzNCO0FBQ0QsU0FBTyxJQUFJLENBQUM7Q0FDYjs7QUFFRCxTQUFTLCtCQUErQixDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUU7QUFDakUsUUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxVQUFVLEVBQUk7QUFDL0MsUUFBSSxNQUFNLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3ZDLGlCQUFhLENBQUMsVUFBVSxDQUFDLEdBQUcsd0JBQXdCLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0dBQ3pFLENBQUMsQ0FBQztDQUNKOztBQUVELFNBQVMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRTtBQUNuRCxNQUFNLGNBQWMsR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFDO0FBQ2hELFNBQU8sK0JBQVcsTUFBTSxFQUFFLFVBQUEsT0FBTyxFQUFJO0FBQ25DLFdBQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLGNBQWMsRUFBZCxjQUFjLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztHQUNsRCxDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJydW50aW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vZXhjZXB0aW9uJztcbmltcG9ydCB7XG4gIENPTVBJTEVSX1JFVklTSU9OLFxuICBjcmVhdGVGcmFtZSxcbiAgTEFTVF9DT01QQVRJQkxFX0NPTVBJTEVSX1JFVklTSU9OLFxuICBSRVZJU0lPTl9DSEFOR0VTXG59IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBtb3ZlSGVscGVyVG9Ib29rcyB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyB3cmFwSGVscGVyIH0gZnJvbSAnLi9pbnRlcm5hbC93cmFwSGVscGVyJztcbmltcG9ydCB7XG4gIGNyZWF0ZVByb3RvQWNjZXNzQ29udHJvbCxcbiAgcmVzdWx0SXNBbGxvd2VkXG59IGZyb20gJy4vaW50ZXJuYWwvcHJvdG8tYWNjZXNzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmV2aXNpb24oY29tcGlsZXJJbmZvKSB7XG4gIGNvbnN0IGNvbXBpbGVyUmV2aXNpb24gPSAoY29tcGlsZXJJbmZvICYmIGNvbXBpbGVySW5mb1swXSkgfHwgMSxcbiAgICBjdXJyZW50UmV2aXNpb24gPSBDT01QSUxFUl9SRVZJU0lPTjtcblxuICBpZiAoXG4gICAgY29tcGlsZXJSZXZpc2lvbiA+PSBMQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT04gJiZcbiAgICBjb21waWxlclJldmlzaW9uIDw9IENPTVBJTEVSX1JFVklTSU9OXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjb21waWxlclJldmlzaW9uIDwgTEFTVF9DT01QQVRJQkxFX0NPTVBJTEVSX1JFVklTSU9OKSB7XG4gICAgY29uc3QgcnVudGltZVZlcnNpb25zID0gUkVWSVNJT05fQ0hBTkdFU1tjdXJyZW50UmV2aXNpb25dLFxuICAgICAgY29tcGlsZXJWZXJzaW9ucyA9IFJFVklTSU9OX0NIQU5HRVNbY29tcGlsZXJSZXZpc2lvbl07XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbihcbiAgICAgICdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhbiBvbGRlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICtcbiAgICAgICAgJ1BsZWFzZSB1cGRhdGUgeW91ciBwcmVjb21waWxlciB0byBhIG5ld2VyIHZlcnNpb24gKCcgK1xuICAgICAgICBydW50aW1lVmVyc2lvbnMgK1xuICAgICAgICAnKSBvciBkb3duZ3JhZGUgeW91ciBydW50aW1lIHRvIGFuIG9sZGVyIHZlcnNpb24gKCcgK1xuICAgICAgICBjb21waWxlclZlcnNpb25zICtcbiAgICAgICAgJykuJ1xuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVXNlIHRoZSBlbWJlZGRlZCB2ZXJzaW9uIGluZm8gc2luY2UgdGhlIHJ1bnRpbWUgZG9lc24ndCBrbm93IGFib3V0IHRoaXMgcmV2aXNpb24geWV0XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbihcbiAgICAgICdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhIG5ld2VyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgK1xuICAgICAgICAnUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uICgnICtcbiAgICAgICAgY29tcGlsZXJJbmZvWzFdICtcbiAgICAgICAgJykuJ1xuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlKHRlbXBsYXRlU3BlYywgZW52KSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGlmICghZW52KSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignTm8gZW52aXJvbm1lbnQgcGFzc2VkIHRvIHRlbXBsYXRlJyk7XG4gIH1cbiAgaWYgKCF0ZW1wbGF0ZVNwZWMgfHwgIXRlbXBsYXRlU3BlYy5tYWluKSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVW5rbm93biB0ZW1wbGF0ZSBvYmplY3Q6ICcgKyB0eXBlb2YgdGVtcGxhdGVTcGVjKTtcbiAgfVxuXG4gIHRlbXBsYXRlU3BlYy5tYWluLmRlY29yYXRvciA9IHRlbXBsYXRlU3BlYy5tYWluX2Q7XG5cbiAgLy8gTm90ZTogVXNpbmcgZW52LlZNIHJlZmVyZW5jZXMgcmF0aGVyIHRoYW4gbG9jYWwgdmFyIHJlZmVyZW5jZXMgdGhyb3VnaG91dCB0aGlzIHNlY3Rpb24gdG8gYWxsb3dcbiAgLy8gZm9yIGV4dGVybmFsIHVzZXJzIHRvIG92ZXJyaWRlIHRoZXNlIGFzIHBzZXVkby1zdXBwb3J0ZWQgQVBJcy5cbiAgZW52LlZNLmNoZWNrUmV2aXNpb24odGVtcGxhdGVTcGVjLmNvbXBpbGVyKTtcblxuICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBmb3IgcHJlY29tcGlsZWQgdGVtcGxhdGVzIHdpdGggY29tcGlsZXItdmVyc2lvbiA3ICg8NC4zLjApXG4gIGNvbnN0IHRlbXBsYXRlV2FzUHJlY29tcGlsZWRXaXRoQ29tcGlsZXJWNyA9XG4gICAgdGVtcGxhdGVTcGVjLmNvbXBpbGVyICYmIHRlbXBsYXRlU3BlYy5jb21waWxlclswXSA9PT0gNztcblxuICBmdW5jdGlvbiBpbnZva2VQYXJ0aWFsV3JhcHBlcihwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgICAgY29udGV4dCA9IFV0aWxzLmV4dGVuZCh7fSwgY29udGV4dCwgb3B0aW9ucy5oYXNoKTtcbiAgICAgIGlmIChvcHRpb25zLmlkcykge1xuICAgICAgICBvcHRpb25zLmlkc1swXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHBhcnRpYWwgPSBlbnYuVk0ucmVzb2x2ZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcblxuICAgIGxldCBleHRlbmRlZE9wdGlvbnMgPSBVdGlscy5leHRlbmQoe30sIG9wdGlvbnMsIHtcbiAgICAgIGhvb2tzOiB0aGlzLmhvb2tzLFxuICAgICAgcHJvdG9BY2Nlc3NDb250cm9sOiB0aGlzLnByb3RvQWNjZXNzQ29udHJvbFxuICAgIH0pO1xuXG4gICAgbGV0IHJlc3VsdCA9IGVudi5WTS5pbnZva2VQYXJ0aWFsLmNhbGwoXG4gICAgICB0aGlzLFxuICAgICAgcGFydGlhbCxcbiAgICAgIGNvbnRleHQsXG4gICAgICBleHRlbmRlZE9wdGlvbnNcbiAgICApO1xuXG4gICAgaWYgKHJlc3VsdCA9PSBudWxsICYmIGVudi5jb21waWxlKSB7XG4gICAgICBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0gPSBlbnYuY29tcGlsZShcbiAgICAgICAgcGFydGlhbCxcbiAgICAgICAgdGVtcGxhdGVTcGVjLmNvbXBpbGVyT3B0aW9ucyxcbiAgICAgICAgZW52XG4gICAgICApO1xuICAgICAgcmVzdWx0ID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdKGNvbnRleHQsIGV4dGVuZGVkT3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMuaW5kZW50KSB7XG4gICAgICAgIGxldCBsaW5lcyA9IHJlc3VsdC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGluZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFsaW5lc1tpXSAmJiBpICsgMSA9PT0gbCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGluZXNbaV0gPSBvcHRpb25zLmluZGVudCArIGxpbmVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IGxpbmVzLmpvaW4oJ1xcbicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbihcbiAgICAgICAgJ1RoZSBwYXJ0aWFsICcgK1xuICAgICAgICAgIG9wdGlvbnMubmFtZSArXG4gICAgICAgICAgJyBjb3VsZCBub3QgYmUgY29tcGlsZWQgd2hlbiBydW5uaW5nIGluIHJ1bnRpbWUtb25seSBtb2RlJ1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvLyBKdXN0IGFkZCB3YXRlclxuICBsZXQgY29udGFpbmVyID0ge1xuICAgIHN0cmljdDogZnVuY3Rpb24ob2JqLCBuYW1lLCBsb2MpIHtcbiAgICAgIGlmICghb2JqIHx8ICEobmFtZSBpbiBvYmopKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1wiJyArIG5hbWUgKyAnXCIgbm90IGRlZmluZWQgaW4gJyArIG9iaiwge1xuICAgICAgICAgIGxvYzogbG9jXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9ialtuYW1lXTtcbiAgICB9LFxuICAgIGxvb2t1cFByb3BlcnR5OiBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgbGV0IHJlc3VsdCA9IHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0SXNBbGxvd2VkKHJlc3VsdCwgY29udGFpbmVyLnByb3RvQWNjZXNzQ29udHJvbCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LFxuICAgIGxvb2t1cDogZnVuY3Rpb24oZGVwdGhzLCBuYW1lKSB7XG4gICAgICBjb25zdCBsZW4gPSBkZXB0aHMubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZGVwdGhzW2ldICYmIGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eShkZXB0aHNbaV0sIG5hbWUpO1xuICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZGVwdGhzW2ldW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsYW1iZGE6IGZ1bmN0aW9uKGN1cnJlbnQsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgY3VycmVudCA9PT0gJ2Z1bmN0aW9uJyA/IGN1cnJlbnQuY2FsbChjb250ZXh0KSA6IGN1cnJlbnQ7XG4gICAgfSxcblxuICAgIGVzY2FwZUV4cHJlc3Npb246IFV0aWxzLmVzY2FwZUV4cHJlc3Npb24sXG4gICAgaW52b2tlUGFydGlhbDogaW52b2tlUGFydGlhbFdyYXBwZXIsXG5cbiAgICBmbjogZnVuY3Rpb24oaSkge1xuICAgICAgbGV0IHJldCA9IHRlbXBsYXRlU3BlY1tpXTtcbiAgICAgIHJldC5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWNbaSArICdfZCddO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuXG4gICAgcHJvZ3JhbXM6IFtdLFxuICAgIHByb2dyYW06IGZ1bmN0aW9uKGksIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICAgIGxldCBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0sXG4gICAgICAgIGZuID0gdGhpcy5mbihpKTtcbiAgICAgIGlmIChkYXRhIHx8IGRlcHRocyB8fCBibG9ja1BhcmFtcyB8fCBkZWNsYXJlZEJsb2NrUGFyYW1zKSB7XG4gICAgICAgIHByb2dyYW1XcmFwcGVyID0gd3JhcFByb2dyYW0oXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBpLFxuICAgICAgICAgIGZuLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgZGVjbGFyZWRCbG9ja1BhcmFtcyxcbiAgICAgICAgICBibG9ja1BhcmFtcyxcbiAgICAgICAgICBkZXB0aHNcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoIXByb2dyYW1XcmFwcGVyKSB7XG4gICAgICAgIHByb2dyYW1XcmFwcGVyID0gdGhpcy5wcm9ncmFtc1tpXSA9IHdyYXBQcm9ncmFtKHRoaXMsIGksIGZuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9ncmFtV3JhcHBlcjtcbiAgICB9LFxuXG4gICAgZGF0YTogZnVuY3Rpb24odmFsdWUsIGRlcHRoKSB7XG4gICAgICB3aGlsZSAodmFsdWUgJiYgZGVwdGgtLSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLl9wYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBtZXJnZUlmTmVlZGVkOiBmdW5jdGlvbihwYXJhbSwgY29tbW9uKSB7XG4gICAgICBsZXQgb2JqID0gcGFyYW0gfHwgY29tbW9uO1xuXG4gICAgICBpZiAocGFyYW0gJiYgY29tbW9uICYmIHBhcmFtICE9PSBjb21tb24pIHtcbiAgICAgICAgb2JqID0gVXRpbHMuZXh0ZW5kKHt9LCBjb21tb24sIHBhcmFtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuICAgIC8vIEFuIGVtcHR5IG9iamVjdCB0byB1c2UgYXMgcmVwbGFjZW1lbnQgZm9yIG51bGwtY29udGV4dHNcbiAgICBudWxsQ29udGV4dDogT2JqZWN0LnNlYWwoe30pLFxuXG4gICAgbm9vcDogZW52LlZNLm5vb3AsXG4gICAgY29tcGlsZXJJbmZvOiB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJcbiAgfTtcblxuICBmdW5jdGlvbiByZXQoY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGRhdGEgPSBvcHRpb25zLmRhdGE7XG5cbiAgICByZXQuX3NldHVwKG9wdGlvbnMpO1xuICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsICYmIHRlbXBsYXRlU3BlYy51c2VEYXRhKSB7XG4gICAgICBkYXRhID0gaW5pdERhdGEoY29udGV4dCwgZGF0YSk7XG4gICAgfVxuICAgIGxldCBkZXB0aHMsXG4gICAgICBibG9ja1BhcmFtcyA9IHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyA/IFtdIDogdW5kZWZpbmVkO1xuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzKSB7XG4gICAgICBpZiAob3B0aW9ucy5kZXB0aHMpIHtcbiAgICAgICAgZGVwdGhzID1cbiAgICAgICAgICBjb250ZXh0ICE9IG9wdGlvbnMuZGVwdGhzWzBdXG4gICAgICAgICAgICA/IFtjb250ZXh0XS5jb25jYXQob3B0aW9ucy5kZXB0aHMpXG4gICAgICAgICAgICA6IG9wdGlvbnMuZGVwdGhzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVwdGhzID0gW2NvbnRleHRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1haW4oY29udGV4dCAvKiwgb3B0aW9ucyovKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAnJyArXG4gICAgICAgIHRlbXBsYXRlU3BlYy5tYWluKFxuICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgIGNvbnRhaW5lci5oZWxwZXJzLFxuICAgICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGJsb2NrUGFyYW1zLFxuICAgICAgICAgIGRlcHRoc1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIG1haW4gPSBleGVjdXRlRGVjb3JhdG9ycyhcbiAgICAgIHRlbXBsYXRlU3BlYy5tYWluLFxuICAgICAgbWFpbixcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIG9wdGlvbnMuZGVwdGhzIHx8IFtdLFxuICAgICAgZGF0YSxcbiAgICAgIGJsb2NrUGFyYW1zXG4gICAgKTtcbiAgICByZXR1cm4gbWFpbihjb250ZXh0LCBvcHRpb25zKTtcbiAgfVxuXG4gIHJldC5pc1RvcCA9IHRydWU7XG5cbiAgcmV0Ll9zZXR1cCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCkge1xuICAgICAgbGV0IG1lcmdlZEhlbHBlcnMgPSBVdGlscy5leHRlbmQoe30sIGVudi5oZWxwZXJzLCBvcHRpb25zLmhlbHBlcnMpO1xuICAgICAgd3JhcEhlbHBlcnNUb1Bhc3NMb29rdXBQcm9wZXJ0eShtZXJnZWRIZWxwZXJzLCBjb250YWluZXIpO1xuICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBtZXJnZWRIZWxwZXJzO1xuXG4gICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwpIHtcbiAgICAgICAgLy8gVXNlIG1lcmdlSWZOZWVkZWQgaGVyZSB0byBwcmV2ZW50IGNvbXBpbGluZyBnbG9iYWwgcGFydGlhbHMgbXVsdGlwbGUgdGltZXNcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gY29udGFpbmVyLm1lcmdlSWZOZWVkZWQoXG4gICAgICAgICAgb3B0aW9ucy5wYXJ0aWFscyxcbiAgICAgICAgICBlbnYucGFydGlhbHNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlUGFydGlhbCB8fCB0ZW1wbGF0ZVNwZWMudXNlRGVjb3JhdG9ycykge1xuICAgICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IFV0aWxzLmV4dGVuZChcbiAgICAgICAgICB7fSxcbiAgICAgICAgICBlbnYuZGVjb3JhdG9ycyxcbiAgICAgICAgICBvcHRpb25zLmRlY29yYXRvcnNcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgY29udGFpbmVyLmhvb2tzID0ge307XG4gICAgICBjb250YWluZXIucHJvdG9BY2Nlc3NDb250cm9sID0gY3JlYXRlUHJvdG9BY2Nlc3NDb250cm9sKG9wdGlvbnMpO1xuXG4gICAgICBsZXQga2VlcEhlbHBlckluSGVscGVycyA9XG4gICAgICAgIG9wdGlvbnMuYWxsb3dDYWxsc1RvSGVscGVyTWlzc2luZyB8fFxuICAgICAgICB0ZW1wbGF0ZVdhc1ByZWNvbXBpbGVkV2l0aENvbXBpbGVyVjc7XG4gICAgICBtb3ZlSGVscGVyVG9Ib29rcyhjb250YWluZXIsICdoZWxwZXJNaXNzaW5nJywga2VlcEhlbHBlckluSGVscGVycyk7XG4gICAgICBtb3ZlSGVscGVyVG9Ib29rcyhjb250YWluZXIsICdibG9ja0hlbHBlck1pc3NpbmcnLCBrZWVwSGVscGVySW5IZWxwZXJzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLnByb3RvQWNjZXNzQ29udHJvbCA9IG9wdGlvbnMucHJvdG9BY2Nlc3NDb250cm9sOyAvLyBpbnRlcm5hbCBvcHRpb25cbiAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gb3B0aW9ucy5oZWxwZXJzO1xuICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3B0aW9ucy5wYXJ0aWFscztcbiAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gb3B0aW9ucy5kZWNvcmF0b3JzO1xuICAgICAgY29udGFpbmVyLmhvb2tzID0gb3B0aW9ucy5ob29rcztcbiAgICB9XG4gIH07XG5cbiAgcmV0Ll9jaGlsZCA9IGZ1bmN0aW9uKGksIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zICYmICFibG9ja1BhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignbXVzdCBwYXNzIGJsb2NrIHBhcmFtcycpO1xuICAgIH1cbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocyAmJiAhZGVwdGhzKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdtdXN0IHBhc3MgcGFyZW50IGRlcHRocycpO1xuICAgIH1cblxuICAgIHJldHVybiB3cmFwUHJvZ3JhbShcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGksXG4gICAgICB0ZW1wbGF0ZVNwZWNbaV0sXG4gICAgICBkYXRhLFxuICAgICAgMCxcbiAgICAgIGJsb2NrUGFyYW1zLFxuICAgICAgZGVwdGhzXG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBQcm9ncmFtKFxuICBjb250YWluZXIsXG4gIGksXG4gIGZuLFxuICBkYXRhLFxuICBkZWNsYXJlZEJsb2NrUGFyYW1zLFxuICBibG9ja1BhcmFtcyxcbiAgZGVwdGhzXG4pIHtcbiAgZnVuY3Rpb24gcHJvZyhjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgICBsZXQgY3VycmVudERlcHRocyA9IGRlcHRocztcbiAgICBpZiAoXG4gICAgICBkZXB0aHMgJiZcbiAgICAgIGNvbnRleHQgIT0gZGVwdGhzWzBdICYmXG4gICAgICAhKGNvbnRleHQgPT09IGNvbnRhaW5lci5udWxsQ29udGV4dCAmJiBkZXB0aHNbMF0gPT09IG51bGwpXG4gICAgKSB7XG4gICAgICBjdXJyZW50RGVwdGhzID0gW2NvbnRleHRdLmNvbmNhdChkZXB0aHMpO1xuICAgIH1cblxuICAgIHJldHVybiBmbihcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGNvbnRleHQsXG4gICAgICBjb250YWluZXIuaGVscGVycyxcbiAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyxcbiAgICAgIG9wdGlvbnMuZGF0YSB8fCBkYXRhLFxuICAgICAgYmxvY2tQYXJhbXMgJiYgW29wdGlvbnMuYmxvY2tQYXJhbXNdLmNvbmNhdChibG9ja1BhcmFtcyksXG4gICAgICBjdXJyZW50RGVwdGhzXG4gICAgKTtcbiAgfVxuXG4gIHByb2cgPSBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKTtcblxuICBwcm9nLnByb2dyYW0gPSBpO1xuICBwcm9nLmRlcHRoID0gZGVwdGhzID8gZGVwdGhzLmxlbmd0aCA6IDA7XG4gIHByb2cuYmxvY2tQYXJhbXMgPSBkZWNsYXJlZEJsb2NrUGFyYW1zIHx8IDA7XG4gIHJldHVybiBwcm9nO1xufVxuXG4vKipcbiAqIFRoaXMgaXMgY3VycmVudGx5IHBhcnQgb2YgdGhlIG9mZmljaWFsIEFQSSwgdGhlcmVmb3JlIGltcGxlbWVudGF0aW9uIGRldGFpbHMgc2hvdWxkIG5vdCBiZSBjaGFuZ2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVBhcnRpYWwocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICBpZiAoIXBhcnRpYWwpIHtcbiAgICBpZiAob3B0aW9ucy5uYW1lID09PSAnQHBhcnRpYWwtYmxvY2snKSB7XG4gICAgICBwYXJ0aWFsID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ107XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV07XG4gICAgfVxuICB9IGVsc2UgaWYgKCFwYXJ0aWFsLmNhbGwgJiYgIW9wdGlvbnMubmFtZSkge1xuICAgIC8vIFRoaXMgaXMgYSBkeW5hbWljIHBhcnRpYWwgdGhhdCByZXR1cm5lZCBhIHN0cmluZ1xuICAgIG9wdGlvbnMubmFtZSA9IHBhcnRpYWw7XG4gICAgcGFydGlhbCA9IG9wdGlvbnMucGFydGlhbHNbcGFydGlhbF07XG4gIH1cbiAgcmV0dXJuIHBhcnRpYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZva2VQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgLy8gVXNlIHRoZSBjdXJyZW50IGNsb3N1cmUgY29udGV4dCB0byBzYXZlIHRoZSBwYXJ0aWFsLWJsb2NrIGlmIHRoaXMgcGFydGlhbFxuICBjb25zdCBjdXJyZW50UGFydGlhbEJsb2NrID0gb3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuICBvcHRpb25zLnBhcnRpYWwgPSB0cnVlO1xuICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICBvcHRpb25zLmRhdGEuY29udGV4dFBhdGggPSBvcHRpb25zLmlkc1swXSB8fCBvcHRpb25zLmRhdGEuY29udGV4dFBhdGg7XG4gIH1cblxuICBsZXQgcGFydGlhbEJsb2NrO1xuICBpZiAob3B0aW9ucy5mbiAmJiBvcHRpb25zLmZuICE9PSBub29wKSB7XG4gICAgb3B0aW9ucy5kYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAvLyBXcmFwcGVyIGZ1bmN0aW9uIHRvIGdldCBhY2Nlc3MgdG8gY3VycmVudFBhcnRpYWxCbG9jayBmcm9tIHRoZSBjbG9zdXJlXG4gICAgbGV0IGZuID0gb3B0aW9ucy5mbjtcbiAgICBwYXJ0aWFsQmxvY2sgPSBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGZ1bmN0aW9uIHBhcnRpYWxCbG9ja1dyYXBwZXIoXG4gICAgICBjb250ZXh0LFxuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgKSB7XG4gICAgICAvLyBSZXN0b3JlIHRoZSBwYXJ0aWFsLWJsb2NrIGZyb20gdGhlIGNsb3N1cmUgZm9yIHRoZSBleGVjdXRpb24gb2YgdGhlIGJsb2NrXG4gICAgICAvLyBpLmUuIHRoZSBwYXJ0IGluc2lkZSB0aGUgYmxvY2sgb2YgdGhlIHBhcnRpYWwgY2FsbC5cbiAgICAgIG9wdGlvbnMuZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGN1cnJlbnRQYXJ0aWFsQmxvY2s7XG4gICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBpZiAoZm4ucGFydGlhbHMpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHMgPSBVdGlscy5leHRlbmQoe30sIG9wdGlvbnMucGFydGlhbHMsIGZuLnBhcnRpYWxzKTtcbiAgICB9XG4gIH1cblxuICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkICYmIHBhcnRpYWxCbG9jaykge1xuICAgIHBhcnRpYWwgPSBwYXJ0aWFsQmxvY2s7XG4gIH1cblxuICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGZvdW5kJyk7XG4gIH0gZWxzZSBpZiAocGFydGlhbCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHBhcnRpYWwoY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7XG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gaW5pdERhdGEoY29udGV4dCwgZGF0YSkge1xuICBpZiAoIWRhdGEgfHwgISgncm9vdCcgaW4gZGF0YSkpIHtcbiAgICBkYXRhID0gZGF0YSA/IGNyZWF0ZUZyYW1lKGRhdGEpIDoge307XG4gICAgZGF0YS5yb290ID0gY29udGV4dDtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcykge1xuICBpZiAoZm4uZGVjb3JhdG9yKSB7XG4gICAgbGV0IHByb3BzID0ge307XG4gICAgcHJvZyA9IGZuLmRlY29yYXRvcihcbiAgICAgIHByb2csXG4gICAgICBwcm9wcyxcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGRlcHRocyAmJiBkZXB0aHNbMF0sXG4gICAgICBkYXRhLFxuICAgICAgYmxvY2tQYXJhbXMsXG4gICAgICBkZXB0aHNcbiAgICApO1xuICAgIFV0aWxzLmV4dGVuZChwcm9nLCBwcm9wcyk7XG4gIH1cbiAgcmV0dXJuIHByb2c7XG59XG5cbmZ1bmN0aW9uIHdyYXBIZWxwZXJzVG9QYXNzTG9va3VwUHJvcGVydHkobWVyZ2VkSGVscGVycywgY29udGFpbmVyKSB7XG4gIE9iamVjdC5rZXlzKG1lcmdlZEhlbHBlcnMpLmZvckVhY2goaGVscGVyTmFtZSA9PiB7XG4gICAgbGV0IGhlbHBlciA9IG1lcmdlZEhlbHBlcnNbaGVscGVyTmFtZV07XG4gICAgbWVyZ2VkSGVscGVyc1toZWxwZXJOYW1lXSA9IHBhc3NMb29rdXBQcm9wZXJ0eU9wdGlvbihoZWxwZXIsIGNvbnRhaW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwYXNzTG9va3VwUHJvcGVydHlPcHRpb24oaGVscGVyLCBjb250YWluZXIpIHtcbiAgY29uc3QgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHk7XG4gIHJldHVybiB3cmFwSGVscGVyKGhlbHBlciwgb3B0aW9ucyA9PiB7XG4gICAgcmV0dXJuIFV0aWxzLmV4dGVuZCh7IGxvb2t1cFByb3BlcnR5IH0sIG9wdGlvbnMpO1xuICB9KTtcbn1cbiJdfQ==


/***/ }),

/***/ "../node_modules/handlebars/dist/cjs/handlebars/safe-string.js":
/*!*********************************************************************!*\
  !*** ../node_modules/handlebars/dist/cjs/handlebars/safe-string.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Build out our basic SafeString type


exports.__esModule = true;
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
  return '' + this.string;
};

exports['default'] = SafeString;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDMUIsTUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDdEI7O0FBRUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBVztBQUN2RSxTQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0NBQ3pCLENBQUM7O3FCQUVhLFVBQVUiLCJmaWxlIjoic2FmZS1zdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnJyArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FmZVN0cmluZztcbiJdfQ==


/***/ }),

/***/ "../node_modules/handlebars/dist/cjs/handlebars/utils.js":
/*!***************************************************************!*\
  !*** ../node_modules/handlebars/dist/cjs/handlebars/utils.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

var badChars = /[&<>"'`=]/g,
    possible = /[&<>"'`=]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

var toString = Object.prototype.toString;

exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  exports.isFunction = isFunction = function (value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
exports.isFunction = isFunction;

/* eslint-enable func-style */

/* istanbul ignore next */
var isArray = Array.isArray || function (value) {
  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};

exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.

function indexOf(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function escapeExpression(string) {
  if (typeof string !== 'string') {
    // don't escape SafeStrings, since they're already safe
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;
  }

  if (!possible.test(string)) {
    return string;
  }
  return string.replace(badChars, escapeChar);
}

function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function createFrame(object) {
  var frame = extend({}, object);
  frame._parent = object;
  return frame;
}

function blockParams(params, ids) {
  params.path = ids;
  return params;
}

function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE1BQU0sR0FBRztBQUNiLEtBQUcsRUFBRSxPQUFPO0FBQ1osS0FBRyxFQUFFLE1BQU07QUFDWCxLQUFHLEVBQUUsTUFBTTtBQUNYLEtBQUcsRUFBRSxRQUFRO0FBQ2IsS0FBRyxFQUFFLFFBQVE7QUFDYixLQUFHLEVBQUUsUUFBUTtBQUNiLEtBQUcsRUFBRSxRQUFRO0NBQ2QsQ0FBQzs7QUFFRixJQUFNLFFBQVEsR0FBRyxZQUFZO0lBQzNCLFFBQVEsR0FBRyxXQUFXLENBQUM7O0FBRXpCLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUN2QixTQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNwQjs7QUFFTSxTQUFTLE1BQU0sQ0FBQyxHQUFHLG9CQUFvQjtBQUM1QyxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QyxTQUFLLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUM1QixVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFDM0QsV0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUM5QjtLQUNGO0dBQ0Y7O0FBRUQsU0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFTSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0FBS2hELElBQUksVUFBVSxHQUFHLG9CQUFTLEtBQUssRUFBRTtBQUMvQixTQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztDQUNwQyxDQUFDOzs7QUFHRixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNuQixVQU9PLFVBQVUsR0FQakIsVUFBVSxHQUFHLFVBQVMsS0FBSyxFQUFFO0FBQzNCLFdBQ0UsT0FBTyxLQUFLLEtBQUssVUFBVSxJQUMzQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLG1CQUFtQixDQUM1QztHQUNILENBQUM7Q0FDSDtRQUNRLFVBQVUsR0FBVixVQUFVOzs7OztBQUlaLElBQU0sT0FBTyxHQUNsQixLQUFLLENBQUMsT0FBTyxJQUNiLFVBQVMsS0FBSyxFQUFFO0FBQ2QsU0FBTyxLQUFLLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxHQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixHQUN6QyxLQUFLLENBQUM7Q0FDWCxDQUFDOzs7OztBQUdHLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDcEMsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoRCxRQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDdEIsYUFBTyxDQUFDLENBQUM7S0FDVjtHQUNGO0FBQ0QsU0FBTyxDQUFDLENBQUMsQ0FBQztDQUNYOztBQUVNLFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0FBQ3ZDLE1BQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFOztBQUU5QixRQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQzNCLGFBQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3hCLE1BQU0sSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3pCLGFBQU8sRUFBRSxDQUFDO0tBQ1gsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2xCLGFBQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7QUFLRCxVQUFNLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztHQUN0Qjs7QUFFRCxNQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUMxQixXQUFPLE1BQU0sQ0FBQztHQUNmO0FBQ0QsU0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztDQUM3Qzs7QUFFTSxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDN0IsTUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQ3pCLFdBQU8sSUFBSSxDQUFDO0dBQ2IsTUFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUMvQyxXQUFPLElBQUksQ0FBQztHQUNiLE1BQU07QUFDTCxXQUFPLEtBQUssQ0FBQztHQUNkO0NBQ0Y7O0FBRU0sU0FBUyxXQUFXLENBQUMsTUFBTSxFQUFFO0FBQ2xDLE1BQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0IsT0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDdkIsU0FBTyxLQUFLLENBQUM7Q0FDZDs7QUFFTSxTQUFTLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLFFBQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLFNBQU8sTUFBTSxDQUFDO0NBQ2Y7O0FBRU0sU0FBUyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFO0FBQ2pELFNBQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUEsR0FBSSxFQUFFLENBQUM7Q0FDcEQiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlc2NhcGUgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnLFxuICAnPSc6ICcmI3gzRDsnXG59O1xuXG5jb25zdCBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXG4gIHBvc3NpYmxlID0gL1smPD5cIidgPV0vO1xuXG5mdW5jdGlvbiBlc2NhcGVDaGFyKGNocikge1xuICByZXR1cm4gZXNjYXBlW2Nocl07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQob2JqIC8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnQgbGV0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxuLyogZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSAqL1xubGV0IGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcbiAgICApO1xuICB9O1xufVxuZXhwb3J0IHsgaXNGdW5jdGlvbiB9O1xuLyogZXNsaW50LWVuYWJsZSBmdW5jLXN0eWxlICovXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5leHBvcnQgY29uc3QgaXNBcnJheSA9XG4gIEFycmF5LmlzQXJyYXkgfHxcbiAgZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xuICAgICAgPyB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuLy8gT2xkZXIgSUUgdmVyc2lvbnMgZG8gbm90IGRpcmVjdGx5IHN1cHBvcnQgaW5kZXhPZiBzbyB3ZSBtdXN0IGltcGxlbWVudCBvdXIgb3duLCBzYWRseS5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mKGFycmF5LCB2YWx1ZSkge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xuICAgICAgcmV0dXJuIHN0cmluZy50b0hUTUwoKTtcbiAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgYSBzdHJpbmcgY29udmVyc2lvbiBhcyB0aGlzIHdpbGwgYmUgZG9uZSBieSB0aGUgYXBwZW5kIHJlZ2FyZGxlc3MgYW5kXG4gICAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gICAgLy8gYW4gb2JqZWN0J3MgdG8gc3RyaW5nIGhhcyBlc2NhcGVkIGNoYXJhY3RlcnMgaW4gaXQuXG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG4gIH1cblxuICBpZiAoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGJhZENoYXJzLCBlc2NhcGVDaGFyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRnJhbWUob2JqZWN0KSB7XG4gIGxldCBmcmFtZSA9IGV4dGVuZCh7fSwgb2JqZWN0KTtcbiAgZnJhbWUuX3BhcmVudCA9IG9iamVjdDtcbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmxvY2tQYXJhbXMocGFyYW1zLCBpZHMpIHtcbiAgcGFyYW1zLnBhdGggPSBpZHM7XG4gIHJldHVybiBwYXJhbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDb250ZXh0UGF0aChjb250ZXh0UGF0aCwgaWQpIHtcbiAgcmV0dXJuIChjb250ZXh0UGF0aCA/IGNvbnRleHRQYXRoICsgJy4nIDogJycpICsgaWQ7XG59XG4iXX0=


/***/ }),

/***/ "../node_modules/handlebars/runtime.js":
/*!*********************************************!*\
  !*** ../node_modules/handlebars/runtime.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = __webpack_require__(/*! ./dist/cjs/handlebars.runtime */ "../node_modules/handlebars/dist/cjs/handlebars.runtime.js")['default'];


/***/ }),

/***/ "../node_modules/jquery/dist/jquery.js":
/*!*********************************************!*\
  !*** ../node_modules/jquery/dist/jquery.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "../node_modules/popper.js/dist/esm/popper.js":
/*!****************************************************!*\
  !*** ../node_modules/popper.js/dist/esm/popper.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/transliteration/dist/browser/bundle.umd.min.js":
/*!**********************************************************************!*\
  !*** ../node_modules/transliteration/dist/browser/bundle.umd.min.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(a,n){ true?n(exports):undefined}(this,(function(a){"use strict";var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(a,n){return a(n={exports:{}},n.exports),n.exports}var e=function(a){return a&&a.Math==Math&&a},u=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")(),o=function(a){try{return!!a()}catch(a){return!0}},g=!o((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),h={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,y={f:s&&!h.call({1:2},1)?function(a){var n=s(this,a);return!!n&&n.enumerable}:h},l=function(a,n){return{enumerable:!(1&a),configurable:!(2&a),writable:!(4&a),value:n}},b={}.toString,t=function(a){return b.call(a).slice(8,-1)},w="".split,d=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(a){return"String"==t(a)?w.call(a,""):Object(a)}:Object,j=function(a){if(null==a)throw TypeError("Can't call method on "+a);return a},p=function(a){return d(j(a))},r=function(a){return"object"==typeof a?null!==a:"function"==typeof a},Y=function(a,n){if(!r(a))return a;var i,e;if(n&&"function"==typeof(i=a.toString)&&!r(e=i.call(a)))return e;if("function"==typeof(i=a.valueOf)&&!r(e=i.call(a)))return e;if(!n&&"function"==typeof(i=a.toString)&&!r(e=i.call(a)))return e;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,c=function(a,n){return m.call(a,n)},Z=u.document,L=r(Z)&&r(Z.createElement),J=!g&&!o((function(){return 7!=Object.defineProperty((a="div",L?Z.createElement(a):{}),"a",{get:function(){return 7}}).a;var a})),S=Object.getOwnPropertyDescriptor,C={f:g?S:function(a,n){if(a=p(a),n=Y(n,!0),J)try{return S(a,n)}catch(a){}if(c(a,n))return l(!y.f.call(a,n),a[n])}},k=function(a){if(!r(a))throw TypeError(String(a)+" is not an object");return a},X=Object.defineProperty,H={f:g?X:function(a,n,i){if(k(a),n=Y(n,!0),k(i),J)try{return X(a,n,i)}catch(a){}if("get"in i||"set"in i)throw TypeError("Accessors not supported");return"value"in i&&(a[n]=i.value),a}},Q=g?function(a,n,i){return H.f(a,n,l(1,i))}:function(a,n,i){return a[n]=i,a},T=function(a,n){try{Q(u,a,n)}catch(i){u[a]=n}return n},D=u["__core-js_shared__"]||T("__core-js_shared__",{}),M=Function.toString;"function"!=typeof D.inspectSource&&(D.inspectSource=function(a){return M.call(a)});var G,B,P,N,W=D.inspectSource,F=u.WeakMap,K="function"==typeof F&&/native code/.test(W(F)),f=i((function(a){(a.exports=function(a,n){return D[a]||(D[a]=void 0!==n?n:{})})("versions",[]).push({version:"3.5.0",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),x=0,R=Math.random(),E=function(a){return"Symbol("+String(void 0===a?"":a)+")_"+(++x+R).toString(36)},A=f("keys"),z={},v=u.WeakMap;if(K){var O=new v,I=O.get,U=O.has,q=O.set;G=function(a,n){return q.call(O,a,n),n},B=function(a){return I.call(O,a)||{}},P=function(a){return U.call(O,a)}}else{var V=A[N="state"]||(A[N]=E(N));z[V]=!0,G=function(a,n){return Q(a,V,n),n},B=function(a){return c(a,V)?a[V]:{}},P=function(a){return c(a,V)}}var _={set:G,get:B,has:P,enforce:function(a){return P(a)?B(a):G(a,{})},getterFor:function(a){return function(n){var i;if(!r(n)||(i=B(n)).type!==a)throw TypeError("Incompatible receiver, "+a+" required");return i}}},$=i((function(a){var n=_.get,i=_.enforce,e=String(String).split("String");(a.exports=function(a,n,o,g){var h=!!g&&!!g.unsafe,s=!!g&&!!g.enumerable,y=!!g&&!!g.noTargetGet;"function"==typeof o&&("string"!=typeof n||c(o,"name")||Q(o,"name",n),i(o).source=e.join("string"==typeof n?n:"")),a!==u?(h?!y&&a[n]&&(s=!0):delete a[n],s?a[n]=o:Q(a,n,o)):s?a[n]=o:T(n,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||W(this)}))})),aa=u,na=function(a){return"function"==typeof a?a:void 0},ia=function(a,n){return arguments.length<2?na(aa[a])||na(u[a]):aa[a]&&aa[a][n]||u[a]&&u[a][n]},ea=Math.ceil,ua=Math.floor,oa=function(a){return isNaN(a=+a)?0:(a>0?ua:ea)(a)},ga=Math.min,ha=function(a){return a>0?ga(oa(a),9007199254740991):0},sa=Math.max,ya=Math.min,la=function(a,n){var i=oa(a);return i<0?sa(i+n,0):ya(i,n)},ba=function(a){return function(n,i,e){var u,o=p(n),g=ha(o.length),h=la(e,g);if(a&&i!=i){for(;g>h;)if((u=o[h++])!=u)return!0}else for(;g>h;h++)if((a||h in o)&&o[h]===i)return a||h||0;return!a&&-1}},ta={includes:ba(!0),indexOf:ba(!1)},wa=ta.indexOf,da=function(a,n){var i,e=p(a),u=0,o=[];for(i in e)!c(z,i)&&c(e,i)&&o.push(i);for(;n.length>u;)c(e,i=n[u++])&&(~wa(o,i)||o.push(i));return o},ja=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],pa=ja.concat("length","prototype"),ra={f:Object.getOwnPropertyNames||function(a){return da(a,pa)}},Ya={f:Object.getOwnPropertySymbols},ma=ia("Reflect","ownKeys")||function(a){var n=ra.f(k(a)),i=Ya.f;return i?n.concat(i(a)):n},ca=function(a,n){for(var i=ma(n),e=H.f,u=C.f,o=0;o<i.length;o++){var g=i[o];c(a,g)||e(a,g,u(n,g))}},Za=/#|\.prototype\./,La=function(a,n){var i=Sa[Ja(a)];return i==ka||i!=Ca&&("function"==typeof n?o(n):!!n)},Ja=La.normalize=function(a){return String(a).replace(Za,".").toLowerCase()},Sa=La.data={},Ca=La.NATIVE="N",ka=La.POLYFILL="P",Xa=La,Ha=C.f,Qa=function(a,n){var i,e,o,g,h,s=a.target,y=a.global,l=a.stat;if(i=y?u:l?u[s]||T(s,{}):(u[s]||{}).prototype)for(e in n){if(g=n[e],o=a.noTargetGet?(h=Ha(i,e))&&h.value:i[e],!Xa(y?e:s+(l?".":"#")+e,a.forced)&&void 0!==o){if(typeof g==typeof o)continue;ca(g,o)}(a.sham||o&&o.sham)&&Q(g,"sham",!0),$(i,e,g,a)}},Ta=Object.keys||function(a){return da(a,ja)},Da=function(a){return Object(j(a))},Ma=Object.assign,Ga=Object.defineProperty,Ba=!Ma||o((function(){if(g&&1!==Ma({b:1},Ma(Ga({},"a",{enumerable:!0,get:function(){Ga(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var a={},n={},i=Symbol();return a[i]=7,"abcdefghijklmnopqrst".split("").forEach((function(a){n[a]=a})),7!=Ma({},a)[i]||"abcdefghijklmnopqrst"!=Ta(Ma({},n)).join("")}))?function(a,n){for(var i=Da(a),e=arguments.length,u=1,o=Ya.f,h=y.f;e>u;)for(var s,l=d(arguments[u++]),b=o?Ta(l).concat(o(l)):Ta(l),t=b.length,w=0;t>w;)s=b[w++],g&&!h.call(l,s)||(i[s]=l[s]);return i}:Ma;Qa({target:"Object",stat:!0,forced:Object.assign!==Ba},{assign:Ba});var Pa=Object.setPrototypeOf||("__proto__"in{}?function(){var a,n=!1,i={};try{(a=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(i,[]),n=i instanceof Array}catch(a){}return function(i,e){return k(i),function(a){if(!r(a)&&null!==a)throw TypeError("Can't set "+String(a)+" as a prototype")}(e),n?a.call(i,e):i.__proto__=e,i}}():void 0),Na=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())})),Wa=Na&&!Symbol.sham&&"symbol"==typeof Symbol(),Fa=f("wks"),Ka=u.Symbol,fa=Wa?Ka:E,xa=function(a){return c(Fa,a)||(Na&&c(Ka,a)?Fa[a]=Ka[a]:Fa[a]=fa("Symbol."+a)),Fa[a]},Ra=xa("match"),Ea=function(){var a=k(this),n="";return a.global&&(n+="g"),a.ignoreCase&&(n+="i"),a.multiline&&(n+="m"),a.dotAll&&(n+="s"),a.unicode&&(n+="u"),a.sticky&&(n+="y"),n},Aa=xa("species"),za=H.f,va=ra.f,Oa=xa("match"),Ia=u.RegExp,Ua=Ia.prototype,qa=/a/g,Va=/a/g,_a=new Ia(qa)!==qa;if(g&&Xa("RegExp",!_a||o((function(){return Va[Oa]=!1,Ia(qa)!=qa||Ia(Va)==Va||"/a/i"!=Ia(qa,"i")})))){for(var $a=function(a,n){var i,e,u,o,g,h,s,y=this instanceof $a,l=r(i=a)&&(void 0!==(e=i[Ra])?!!e:"RegExp"==t(i)),b=void 0===n;return!y&&l&&a.constructor===$a&&b?a:(u=_a?new Ia(l&&!b?a.source:a,n):Ia((l=a instanceof $a)?a.source:a,l&&b?Ea.call(a):n),o=y?this:Ua,g=$a,Pa&&"function"==typeof(h=o.constructor)&&h!==g&&r(s=h.prototype)&&s!==g.prototype&&Pa(u,s),u)},an=function(a){a in $a||za($a,a,{configurable:!0,get:function(){return Ia[a]},set:function(n){Ia[a]=n}})},nn=va(Ia),en=0;nn.length>en;)an(nn[en++]);Ua.constructor=$a,$a.prototype=Ua,$(u,"RegExp",$a)}!function(a){var n=ia(a),i=H.f;g&&n&&!n[Aa]&&i(n,Aa,{configurable:!0,get:function(){return this}})}("RegExp");var un=RegExp.prototype.exec,on=String.prototype.replace,gn=un,hn=function(){var a=/a/,n=/b*/g;return un.call(a,"a"),un.call(n,"a"),0!==a.lastIndex||0!==n.lastIndex}(),sn=void 0!==/()??/.exec("")[1];(hn||sn)&&(gn=function(a){var n,i,e,u,o=this;return sn&&(i=new RegExp("^"+o.source+"$(?!\\s)",Ea.call(o))),hn&&(n=o.lastIndex),e=un.call(o,a),hn&&e&&(o.lastIndex=o.global?e.index+e[0].length:n),sn&&e&&e.length>1&&on.call(e[0],i,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(e[u]=void 0)})),e});var yn=gn;Qa({target:"RegExp",proto:!0,forced:/./.exec!==yn},{exec:yn});var ln=RegExp.prototype,bn=ln.toString,tn=o((function(){return"/a/b"!=bn.call({source:"a",flags:"b"})})),wn="toString"!=bn.name;(tn||wn)&&$(RegExp.prototype,"toString",(function(){var a=k(this),n=String(a.source),i=a.flags;return"/"+n+"/"+String(void 0===i&&a instanceof RegExp&&!("flags"in ln)?Ea.call(a):i)}),{unsafe:!0});var dn=xa("species"),jn=!o((function(){var a=/./;return a.exec=function(){var a=[];return a.groups={a:"7"},a},"7"!=="".replace(a,"$<a>")})),pn=!o((function(){var a=/(?:)/,n=a.exec;a.exec=function(){return n.apply(this,arguments)};var i="ab".split(a);return 2!==i.length||"a"!==i[0]||"b"!==i[1]})),rn=function(a){return function(n,i){var e,u,o=String(j(n)),g=oa(i),h=o.length;return g<0||g>=h?a?"":void 0:(e=o.charCodeAt(g))<55296||e>56319||g+1===h||(u=o.charCodeAt(g+1))<56320||u>57343?a?o.charAt(g):e:a?o.slice(g,g+2):u-56320+(e-55296<<10)+65536}},Yn={codeAt:rn(!1),charAt:rn(!0)}.charAt,mn=function(a,n,i){return n+(i?Yn(a,n).length:1)},cn=function(a,n){var i=a.exec;if("function"==typeof i){var e=i.call(a,n);if("object"!=typeof e)throw TypeError("RegExp exec method returned something other than an Object or null");return e}if("RegExp"!==t(a))throw TypeError("RegExp#exec called on incompatible receiver");return yn.call(a,n)},Zn=Math.max,Ln=Math.min,Jn=Math.floor,Sn=/\$([$&'`]|\d\d?|<[^>]*>)/g,Cn=/\$([$&'`]|\d\d?)/g;function kn(a,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function Xn(a,n,i){return n&&kn(a.prototype,n),i&&kn(a,i),a}function Hn(a,n){if(a!==n)throw new TypeError("Cannot instantiate an arrow function")}!function(a,n,i,e){var u=xa(a),g=!o((function(){var n={};return n[u]=function(){return 7},7!=""[a](n)})),h=g&&!o((function(){var n=!1,i=/a/;return"split"===a&&((i={}).constructor={},i.constructor[dn]=function(){return i},i.flags="",i[u]=/./[u]),i.exec=function(){return n=!0,null},i[u](""),!n}));if(!g||!h||"replace"===a&&!jn||"split"===a&&!pn){var s=/./[u],y=i(u,""[a],(function(a,n,i,e,u){return n.exec===yn?g&&!u?{done:!0,value:s.call(n,i,e)}:{done:!0,value:a.call(i,n,e)}:{done:!1}})),l=y[0],b=y[1];$(String.prototype,a,l),$(RegExp.prototype,u,2==n?function(a,n){return b.call(a,this,n)}:function(a){return b.call(a,this)}),e&&Q(RegExp.prototype[u],"sham",!0)}}("replace",2,(function(a,n,i){return[function(i,e){var u=j(this),o=null==i?void 0:i[a];return void 0!==o?o.call(i,u,e):n.call(String(u),i,e)},function(a,u){var o=i(n,a,this,u);if(o.done)return o.value;var g=k(a),h=String(this),s="function"==typeof u;s||(u=String(u));var y=g.global;if(y){var l=g.unicode;g.lastIndex=0}for(var b=[];;){var t=cn(g,h);if(null===t)break;if(b.push(t),!y)break;""===String(t[0])&&(g.lastIndex=mn(h,ha(g.lastIndex),l))}for(var w,d="",j=0,p=0;p<b.length;p++){t=b[p];for(var r=String(t[0]),Y=Zn(Ln(oa(t.index),h.length),0),m=[],c=1;c<t.length;c++)m.push(void 0===(w=t[c])?w:String(w));var Z=t.groups;if(s){var L=[r].concat(m,Y,h);void 0!==Z&&L.push(Z);var J=String(u.apply(void 0,L))}else J=e(r,h,Y,m,Z,u);Y>=j&&(d+=h.slice(j,Y)+J,j=Y+r.length)}return d+h.slice(j)}];function e(a,i,e,u,o,g){var h=e+a.length,s=u.length,y=Cn;return void 0!==o&&(o=Da(o),y=Sn),n.call(g,y,(function(n,g){var y;switch(g.charAt(0)){case"$":return"$";case"&":return a;case"`":return i.slice(0,e);case"'":return i.slice(h);case"<":y=o[g.slice(1,-1)];break;default:var l=+g;if(0===l)return n;if(l>s){var b=Jn(l/10);return 0===b?n:b<=s?void 0===u[b-1]?g.charAt(1):u[b-1]+g.charAt(1):n}y=u[l-1]}return void 0===y?"":y}))}}));var Qn,Tn,Dn=function(a){if("function"!=typeof a)throw TypeError(String(a)+" is not a function");return a},Mn=Array.isArray||function(a){return"Array"==t(a)},Gn=xa("species"),Bn=function(a,n){var i;return Mn(a)&&("function"!=typeof(i=a.constructor)||i!==Array&&!Mn(i.prototype)?r(i)&&null===(i=i[Gn])&&(i=void 0):i=void 0),new(void 0===i?Array:i)(0===n?0:n)},Pn=[].push,Nn=function(a){var n=1==a,i=2==a,e=3==a,u=4==a,o=6==a,g=5==a||o;return function(h,s,y,l){for(var b,t,w=Da(h),j=d(w),p=function(a,n,i){if(Dn(a),void 0===n)return a;switch(i){case 0:return function(){return a.call(n)};case 1:return function(i){return a.call(n,i)};case 2:return function(i,e){return a.call(n,i,e)};case 3:return function(i,e,u){return a.call(n,i,e,u)}}return function(){return a.apply(n,arguments)}}(s,y,3),r=ha(j.length),Y=0,m=l||Bn,c=n?m(h,r):i?m(h,0):void 0;r>Y;Y++)if((g||Y in j)&&(t=p(b=j[Y],Y,w),a))if(n)c[Y]=t;else if(t)switch(a){case 3:return!0;case 5:return b;case 6:return Y;case 2:Pn.call(c,b)}else if(u)return!1;return o?-1:e||u?u:c}},Wn={forEach:Nn(0),map:Nn(1),filter:Nn(2),some:Nn(3),every:Nn(4),find:Nn(5),findIndex:Nn(6)},Fn=ia("navigator","userAgent")||"",Kn=u.process,fn=Kn&&Kn.versions,xn=fn&&fn.v8;xn?Tn=(Qn=xn.split("."))[0]+Qn[1]:Fn&&(!(Qn=Fn.match(/Edge\/(\d+)/))||Qn[1]>=74)&&(Qn=Fn.match(/Chrome\/(\d+)/))&&(Tn=Qn[1]);var Rn=Tn&&+Tn,En=xa("species"),An=function(a){return Rn>=51||!o((function(){var n=[];return(n.constructor={})[En]=function(){return{foo:1}},1!==n[a](Boolean).foo}))},zn=Wn.map,vn=An("map"),On=vn&&!o((function(){[].map.call({length:-1,0:1},(function(a){throw a}))}));Qa({target:"Array",proto:!0,forced:!vn||!On},{map:function(a){return zn(this,a,arguments.length>1?arguments[1]:void 0)}}),Qa({target:"Object",stat:!0,forced:o((function(){Ta(1)}))},{keys:function(a){return Ta(Da(a))}}),g&&"g"!=/./g.flags&&H.f(RegExp.prototype,"flags",{configurable:!0,get:Ea});var In,Un="\t\n\v\f\r                　\u2028\u2029\ufeff",qn="["+Un+"]",Vn=RegExp("^"+qn+qn+"*"),_n=RegExp(qn+qn+"*$"),$n=function(a){return function(n){var i=String(j(n));return 1&a&&(i=i.replace(Vn,"")),2&a&&(i=i.replace(_n,"")),i}},ai={start:$n(1),end:$n(2),trim:$n(3)},ni=ai.trim;Qa({target:"String",proto:!0,forced:(In="trim",o((function(){return!!Un[In]()||"​᠎"!="​᠎"[In]()||Un[In].name!==In})))},{trim:function(){return ni(this)}});for(var ii=[["\0","","","","","","","","\b","\t","\n","\v","\f","\r","","","","","","","","","","","","","","","","","",""," ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~","",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,," ","!","C/","PS","$?","Y=","|","SS",'"',"(c)","a","<<","!",,"(r)","-","deg","+-","2","3","'","u","P","*",",","1","o",">>","1/4","1/2","3/4","?","A","A","A","A","A","A","AE","C","E","E","E","E","I","I","I","I","D","N","O","O","O","O","O","x","O","U","U","U","U","U","Th","ss","a","a","a","a","a","a","ae","c","e","e","e","e","i","i","i","i","d","n","o","o","o","o","o","/","o","u","u","u","u","y","th","y"],["A","a","A","a","A","a","C","c","C","c","C","c","C","c","D","d","D","d","E","e","E","e","E","e","E","e","E","e","G","g","G","g","G","g","G","g","H","h","H","h","I","i","I","i","I","i","I","i","I","i","IJ","ij","J","j","K","k","k","L","l","L","l","L","l","L","l","L","l","N","n","N","n","N","n","'n","NG","ng","O","o","O","o","O","o","OE","oe","R","r","R","r","R","r","S","s","S","s","S","s","S","s","T","t","T","t","T","t","U","u","U","u","U","u","U","u","U","u","U","u","W","w","Y","y","Y","Z","z","Z","z","Z","z","s","b","B","B","b","6","6","O","C","c","D","D","D","d","d","3","@","E","F","f","G","G","hv","I","I","K","k","l","l","W","N","n","O","O","o","OI","oi","P","p","YR","2","2","SH","sh","t","T","t","T","U","u","Y","V","Y","y","Z","z","ZH","ZH","zh","zh","2","5","5","ts","w","|","||","|=","!","DZ","Dz","dz","LJ","Lj","lj","NJ","Nj","nj","A","a","I","i","O","o","U","u","U","u","U","u","U","u","U","u","@","A","a","A","a","AE","ae","G","g","G","g","K","k","O","o","O","o","ZH","zh","j","DZ","D","dz","G","g","HV","W","N","n","A","a","AE","ae","O","o"],["A","a","A","a","E","e","E","e","I","i","I","i","O","o","O","o","R","r","R","r","U","u","U","u","S","s","T","t","Y","y","H","h","N","d","OU","ou","Z","z","A","a","E","e","O","o","O","o","O","o","O","o","Y","y","l","n","t","j","db","qp","A","C","c","L","T","s","z","?","?","B","U","V","E","e","J","j","Q","q","R","r","Y","y","a","a","a","b","o","c","d","d","e","@","@","e","e","e","e","j","g","g","g","g","u","Y","h","h","i","i","I","l","l","l","lZ","W","W","m","n","n","n","o","OE","O","F","R","R","R","R","r","r","R","R","R","s","S","j","S","S","t","t","U","U","v","^","W","Y","Y","z","z","Z","Z","?","?","?","C","@","B","E","G","H","j","k","L","q","?","?","dz","dZ","dz","ts","tS","tC","fN","ls","lz","WW","]]","h","h","k","h","j","r","r","r","r","w","y","'",'"',"`","'","`","`","'","?","?","<",">","^","V","^","V","'","-","/","\\",",","_","\\","/",":",".","`","'","^","V","+","-","V",".","@",",","~",'"',"R","X","G","l","s","x","?",,,,,,,,"V","=",'"'],[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"'",",",,,,,,,,,"?",,,,,,,,"A",";","E","I","I",,"O",,"U","O","I","A","V","G","D","E","Z","I","Th","I","K","L","M","N","X","O","P","R",,"S","T","Y","F","H","Ps","O","I","Y","a","e","i","i","y","a","v","g","d","e","z","i","th","i","k","l","m","n","x","o","p","r","s","s","t","y","f","h","ps","o","i","y","o","y","o",,"b","th","U","U","U","ph","p","&",,,"St","st","W","w","Q","q","Sp","sp","Sh","sh","F","f","Kh","kh","H","h","G","g","CH","ch","Ti","ti","k","r","c","j"],["Jo","Yo","Dj","Gj","Ie","Dz","I","Yi","J","Lj","Nj","Tsh","Kj","I","U","Dzh","A","B","V","G","D","E","Zh","Z","I","Y","K","L","M","N","O","P","R","S","T","U","F","H","C","Ch","Sh","Shch",,"Y",,"E","Yu","Ya","a","b","v","g","d","e","zh","z","i","y","k","l","m","n","o","p","r","s","t","u","f","h","c","ch","sh","shch",,"y",,"e","yu","ya","je","yo","dj","gj","ie","dz","i","yi","j","lj","nj","tsh","kj","i","u","dzh","O","o","E","e","Ie","ie","E","e","Ie","ie","O","o","Io","io","Ks","ks","Ps","ps","F","f","Y","y","Y","y","u","u","O","o","O","o","Ot","ot","Q","q","*1000*",,,,,,"*100.000*","*1.000.000*",,,'"','"',"R'","r'","G'","g'","G'","g'","G'","g'","Zh'","zh'","Z'","z'","K'","k'","K'","k'","K'","k'","K'","k'","N'","n'","Ng","ng","P'","p'","Kh","kh","S'","s'","T'","t'","U","u","U'","u'","Kh'","kh'","Tts","tts","Ch'","ch'","Ch'","ch'","H","h","Ch","ch","Ch'","ch'","`","Zh","zh","K'","k'",,,"N'","n'",,,"Ch","ch",,,,"a","a","A","a","Ae","ae","Ie","ie","@","@","@","@","Zh","zh","Z","z","Dz","dz","I","i","I","i","O","o","O","o","O","o","E","e","U","u","U","u","U","u","Ch","ch",,,"Y","y"],[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"A","B","G","D","E","Z","E","E","T`","Zh","I","L","Kh","Ts","K","H","Dz","Gh","Ch","M","Y","N","Sh","O","Ch`","P","J","Rh","S","V","T","R","Ts`","W","P`","K`","O","F",,,"<","'","/","!",",","?",".",,"a","b","g","d","e","z","e","e","t`","zh","i","l","kh","ts","k","h","dz","gh","ch","m","y","n","sh","o","ch`","p","j","rh","s","v","t","r","ts`","w","p`","k`","o","f","ew",,".","-",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"@","e","a","o","i","e","e","a","a","o",,"u","'",,,,,,,":",,,,,,,,,,,,,,"b","g","d","h","v","z","kh","t","y","k","k","l","m","m","n","n","s","`","p","p","ts","ts","q","r","sh","t",,,,,,"V","oy","i","'",'"'],[,,,,,,,,,,,,",",,,,,,,,,,,,,,,";",,,,"?",,,"a","'","w'",,"y'",,"b","@","t","th","j","H","kh","d","dh","r","z","s","sh","S","D","T","Z","aa","G",,,,,,,"f","q","k","l","m","n","h","w","~","y","an","un","in","a","u","i","W",,,"'","'",,,,,,,,,,,"0","1","2","3","4","5","6","7","8","9","%",".",",","*",,,,"'","'","'",,"'","'w","'u","'y","tt","tth","b","t","T","p","th","bh","'h","H","ny","dy","H","ch","cch","dd","D","D","Dt","dh","ddh","d","D","D","rr","R","R","R","R","R","R","j","R","S","S","S","S","S","T","GH","F","F","F","v","f","ph","Q","Q","kh","k","K","K","ng","K","g","G","N","G","G","G","L","L","L","L","N","N","N","N","N","h","Ch","hy","h","H","@","W","oe","oe","u","yu","yu","W","v","y","Y","Y","W",,,"y","y'",".","ae",,,,,,,,"@","#",,,,,,,,,,,"^",,,,,,,"0","1","2","3","4","5","6","7","8","9","Sh","D","Gh","&","+m"],["//","/",",","!","!","-",",",",",";","?","~","{","}","*",,,"'",,"b","g","g","d","d","h","w","z","H","t","t","y","yh","k","l","m","n","s","s","`","p","p","S","q","r","sh","t",,,,"a","a","a","A","A","A","e","e","e","E","i","i","u","u","u","o",,"`","'",,,"X","Q","@","@","|","+",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"h","sh","n","r","b","L","k","'","v","m","f","dh","th","l","g","ny","s","d","z","t","y","p","j","ch","tt","hh","kh","th","z","sh","s","d","t","z","`","gh","q","w","a","aa","i","ee","u","oo","e","ey","o","oa"],[],[,"N","N","H",,"a","aa","i","ii","u","uu","R","L","eN","e","e","ai","oN","o","o","au","k","kh","g","gh","ng","c","ch","j","jh","ny","tt","tth","dd","ddh","nn","t","th","d","dh","n","nnn","p","ph","b","bh","m","y","r","rr","l","l","lll","v","sh","ss","s","h",,,"'","'","aa","i","ii","u","uu","R","RR","eN","e","e","ai","oN","o","o","au",,,,"AUM","'","'","`","'",,,,"q","khh","ghh","z","dddh","rh","f","yy","RR","LL","L","LL"," / "," // ","0","1","2","3","4","5","6","7","8","9",".",,,,,,,,,,,,,,,,,"N","N","H",,"a","aa","i","ii","u","uu","R","RR",,,"e","ai",,,"o","au","k","kh","g","gh","ng","c","ch","j","jh","ny","tt","tth","dd","ddh","nn","t","th","d","dh","n",,"p","ph","b","bh","m","y","r",,"l",,,,"sh","ss","s","h",,,"'",,"aa","i","ii","u","uu","R","RR",,,"e","ai",,,"o","au",,,,,,,,,,,"+",,,,,"rr","rh",,"yy","RR","LL","L","LL",,,"0","1","2","3","4","5","6","7","8","9","r'","r`","Rs","Rs","1/","2/","3/","4/"," 1 - 1/","/16"],[,,"N",,,"a","aa","i","ii","u","uu",,,,,"ee","ai",,,"oo","au","k","kh","g","gh","ng","c","ch","j","jh","ny","tt","tth","dd","ddh","nn","t","th","d","dh","n",,"p","ph","b","bb","m","y","r",,"l","ll",,"v","sh",,"s","h",,,"'",,"aa","i","ii","u","uu",,,,,"ee","ai",,,"oo","au",,,,,,,,,,,,,"khh","ghh","z","rr",,"f",,,,,,,,"0","1","2","3","4","5","6","7","8","9","N","H",,,"G.E.O.",,,,,,,,,,,,,"N","N","H",,"a","aa","i","ii","u","uu","R",,"eN",,"e","ai","oN",,"o","au","k","kh","g","gh","ng","c","ch","j","jh","ny","tt","tth","dd","ddh","nn","t","th","d","dh","n",,"p","ph","b","bh","m","ya","r",,"l","ll",,"v","sh","ss","s","h",,,"'","'","aa","i","ii","u","uu","R","RR","eN",,"e","ai","oN",,"o","au",,,,"AUM",,,,,,,,,,,,,,,,"RR",,,,,,"0","1","2","3","4","5","6","7","8","9"],[,"N","N","H",,"a","aa","i","ii","u","uu","R","L",,,"e","ai",,,"o","au","k","kh","g","gh","ng","c","ch","j","jh","ny","tt","tth","dd","ddh","nn","t","th","d","dh","n",,"p","ph","b","bh","m","y","r",,"l","ll",,,"sh","ss","s","h",,,"'","'","aa","i","ii","u","uu","R",,,,"e","ai",,,"o","au",,,,,,,,,,"+","+",,,,,"rr","rh",,"yy","RR","LL",,,,,"0","1","2","3","4","5","6","7","8","9",,,,,,,,,,,,,,,,,,,"N","H",,"a","aa","i","ii","u","uu",,,,"e","ee","ai",,"o","oo","au","k",,,,"ng","c",,"j",,"ny","tt",,,,"nn","t",,,,"n","nnn","p",,,,"m","y","r","rr","l","ll","lll","v",,"ss","s","h",,,,,"aa","i","ii","u","uu",,,,"e","ee","ai",,"o","oo","au",,,,,,,,,,,"+",,,,,,,,,,,,,,,"0","1","2","3","4","5","6","7","8","9","+10+","+100+","+1000+"],[,"N","N","H",,"a","aa","i","ii","u","uu","R","L",,"e","ee","ai",,"o","oo","au","k","kh","g","gh","ng","c","ch","j","jh","ny","tt","tth","dd","ddh","nn","t","th","d","dh","n",,"p","ph","b","bh","m","y","r","rr","l","ll",,"v","sh","ss","s","h",,,,,"aa","i","ii","u","uu","R","RR",,"e","ee","ai",,"o","oo","au",,,,,,,,,"+","+",,,,,,,,,,"RR","LL",,,,,"0","1","2","3","4","5","6","7","8","9",,,,,,,,,,,,,,,,,,,"N","H",,"a","aa","i","ii","u","uu","R","L",,"e","ee","ai",,"o","oo","au","k","kh","g","gh","ng","c","ch","j","jh","ny","tt","tth","dd","ddh","nn","t","th","d","dh","n",,"p","ph","b","bh","m","y","r","rr","l","ll",,"v","sh","ss","s","h",,,,,"aa","i","ii","u","uu","R","RR",,"e","ee","ai",,"o","oo","au",,,,,,,,,"+","+",,,,,,,,"lll",,"RR","LL",,,,,"0","1","2","3","4","5","6","7","8","9"],[,,"N","H",,"a","aa","i","ii","u","uu","R","L",,"e","ee","ai",,"o","oo","au","k","kh","g","gh","ng","c","ch","j","jh","ny","tt","tth","dd","ddh","nn","t","th","d","dh","n",,"p","ph","b","bh","m","y","r","rr","l","ll","lll","v","sh","ss","s","h",,,,,"aa","i","ii","u","uu","R",,,"e","ee","ai",,"o","oo","au",,,,,,,,,,,"+",,,,,,,,,"RR","LL",,,,,"0","1","2","3","4","5","6","7","8","9",,,,,,,,,,,,,,,,,,,"N","H",,"a","aa","ae","aae","i","ii","u","uu","R","RR","L","LL","e","ee","ai","o","oo","au",,,,"k","kh","g","gh","ng","nng","c","ch","j","jh","ny","jny","nyj","tt","tth","dd","ddh","nn","nndd","t","th","d","dh","n",,"nd","p","ph","b","bh","m","mb","y","r",,"l",,,"v","sh","ss","s","h","ll","f",,,,,,,,,"aa","ae","aae","i","ii","u",,"uu",,"R","e","ee","ai","o","oo","au","L",,,,,,,,,,,,,,,,,,,"RR","LL"," . "],[,"k","kh","kh","kh","kh","kh","ng","cch","ch","ch","ch","ch","y","d","t","th","th","th","n","d","t","th","th","th","n","b","p","ph","f","ph","f","ph","m","y","r","R","l","L","w","s","s","s","h","l","`","h","~","a","a","aa","am","i","ii","ue","uue","u","uu","'",,,,,"Bh.","e","ae","o","ai","ai","ao","+",,,,,,,"M",," * ","0","1","2","3","4","5","6","7","8","9"," // "," /// ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"k","kh",,"kh",,,"ng","ch",,"s",,,"ny",,,,,,,"d","h","th","th",,"n","b","p","ph","f","ph","f",,"m","y","r",,"l",,"w",,,"s","h",,"`",,"~","a",,"aa","am","i","ii","y","yy","u","uu",,"o","l","ny",,,"e","ei","o","ay","ai",,"+",,,,,,,"M",,,"0","1","2","3","4","5","6","7","8","9",,,"hn","hm"],["AUM",,,,,,,," // "," * ",,"-"," / "," / "," // "," -/ "," +/ "," X/ "," /XX/ "," /X/ ",",",,,,,,,,,,,,"0","1","2","3","4","5","6","7","8","9",".5","1.5","2.5","3.5","4.5","5.5","6.5","7.5","8.5","-.5","+","*","^","_",,"~",,"]","[[","]]",,,"k","kh","g","gh","ng","c","ch","j",,"ny","tt","tth","dd","ddh","nn","t","th","d","dh","n","p","ph","b","bh","m","ts","tsh","dz","dzh","w","zh","z","'","y","r","l","sh","ssh","s","h","a","kss","r",,,,,,,"aa","i","ii","u","uu","R","RR","L","LL","e","ee","o","oo","M","H","i","ii",,,,,,,,,,,,,,,"k","kh","g","gh","ng","c","ch","j",,"ny","tt","tth","dd","ddh","nn","t","th","d","dh","n","p","ph","b","bh","m","ts","tsh","dz","dzh","w","zh","z","'","y","r","l","sh","ss","s","h","a","kss","w","y","r",,"X"," :X: "," /O/ "," /o/ "," \\o\\ "," (O) "],["k","kh","g","gh","ng","c","ch","j","jh","ny","nny","tt","tth","dd","ddh","nn","tt","th","d","dh","n","p","ph","b","bh","m","y","r","l","w","s","h","ll","a",,"i","ii","u","uu","e",,"o","au",,"aa","i","ii","u","uu","e","ai",,,,"N","'",":",,,,,,,,"0","1","2","3","4","5","6","7","8","9"," / "," // ","n*","r*","l*","e*","sh","ss","R","RR","L","LL","R","RR","L","LL",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"A","B","G","D","E","V","Z","T`","I","K","L","M","N","O","P","Zh","R","S","T","U","P`","K`","G'","Q","Sh","Ch`","C`","Z'","C","Ch","X","J","H","E","Y","W","Xh","OE",,,,,,,,,,,"a","b","g","d","e","v","z","t`","i","k","l","m","n","o","p","zh","r","s","t","u","p`","k`","g'","q","sh","ch`","c`","z'","c","ch","x","j","h","e","y","w","xh","oe","f",,,,," // "],["g","gg","n","d","dd","r","m","b","bb","s","ss",,"j","jj","c","k","t","p","h","ng","nn","nd","nb","dg","rn","rr","rh","rN","mb","mN","bg","bn",,"bs","bsg","bst","bsb","bss","bsj","bj","bc","bt","bp","bN","bbN","sg","sn","sd","sr","sm","sb","sbg","sss","s","sj","sc","sk","st","sp","sh",,,,,"Z","g","d","m","b","s","Z",,"j","c","t","p","N","j",,,,,"ck","ch",,,"pb","pN","hh","Q",,,,,,,,"a","ae","ya","yae","eo","e","yeo","ye","o","wa","wae","oe","yo","u","weo","we","wi","yu","eu","yi","i","a-o","a-u","ya-o","ya-yo","eo-o","eo-u","eo-eu","yeo-o","yeo-u","o-eo","o-e","o-ye","o-o","o-u","yo-ya","yo-yae","yo-yeo","yo-o","yo-i","u-a","u-ae","u-eo-eu","u-ye","u-u","yu-a","yu-eo","yu-e","yu-yeo","yu-ye","yu-u","yu-i","eu-u","eu-eu","yi-u","i-a","i-ya","i-o","i-u","i-eu","i-U","U","U-eo","U-u","U-i","UU",,,,,,"g","gg","gs","n","nj","nh","d","l","lg","lm","lb","ls","lt","lp","lh","m","b","bs","s","ss","ng","j","c","k","t","p","h","gl","gsg","ng","nd","ns","nZ","nt","dg","tl","lgs","ln","ld","lth","ll","lmg","lms","lbs","lbh","rNp","lss","lZ","lk","lQ","mg","ml","mb","ms","mss","mZ","mc","mh","mN","bl","bp","ph","pN","sg","sd","sl","sb","Z","g","ss",,"kh","N","Ns","NZ","pb","pN","hn","hl","hm","hb","Q"],["ha","hu","hi","haa","hee","he","ho",,"la","lu","li","laa","lee","le","lo","lwa","hha","hhu","hhi","hhaa","hhee","hhe","hho","hhwa","ma","mu","mi","maa","mee","me","mo","mwa","sza","szu","szi","szaa","szee","sze","szo","szwa","ra","ru","ri","raa","ree","re","ro","rwa","sa","su","si","saa","see","se","so","swa","sha","shu","shi","shaa","shee","she","sho","shwa","qa","qu","qi","qaa","qee","qe","qo",,"qwa",,"qwi","qwaa","qwee","qwe",,,"qha","qhu","qhi","qhaa","qhee","qhe","qho",,"qhwa",,"qhwi","qhwaa","qhwee","qhwe",,,"ba","bu","bi","baa","bee","be","bo","bwa","va","vu","vi","vaa","vee","ve","vo","vwa","ta","tu","ti","taa","tee","te","to","twa","ca","cu","ci","caa","cee","ce","co","cwa","xa","xu","xi","xaa","xee","xe","xo",,"xwa",,"xwi","xwaa","xwee","xwe",,,"na","nu","ni","naa","nee","ne","no","nwa","nya","nyu","nyi","nyaa","nyee","nye","nyo","nywa","'a","'u",,"'aa","'ee","'e","'o","'wa","ka","ku","ki","kaa","kee","ke","ko",,"kwa",,"kwi","kwaa","kwee","kwe",,,"kxa","kxu","kxi","kxaa","kxee","kxe","kxo",,"kxwa",,"kxwi","kxwaa","kxwee","kxwe",,,"wa","wu","wi","waa","wee","we","wo",,"`a","`u","`i","`aa","`ee","`e","`o",,"za","zu","zi","zaa","zee","ze","zo","zwa","zha","zhu","zhi","zhaa","zhee","zhe","zho","zhwa","ya","yu","yi","yaa","yee","ye","yo",,"da","du","di","daa","dee","de","do","dwa","dda","ddu","ddi","ddaa","ddee","dde","ddo","ddwa"],["ja","ju","ji","jaa","jee","je","jo","jwa","ga","gu","gi","gaa","gee","ge","go",,"gwa",,"gwi","gwaa","gwee","gwe",,,"gga","ggu","ggi","ggaa","ggee","gge","ggo",,"tha","thu","thi","thaa","thee","the","tho","thwa","cha","chu","chi","chaa","chee","che","cho","chwa","pha","phu","phi","phaa","phee","phe","pho","phwa","tsa","tsu","tsi","tsaa","tsee","tse","tso","tswa","tza","tzu","tzi","tzaa","tzee","tze","tzo",,"fa","fu","fi","faa","fee","fe","fo","fwa","pa","pu","pi","paa","pee","pe","po","pwa","rya","mya","fya",,,,,,," ",".",",",";",":",":: ","?","//","1","2","3","4","5","6","7","8","9","10+","20+","30+","40+","50+","60+","70+","80+","90+","100+","10,000+",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"a","e","i","o","u","v","ga","ka","ge","gi","go","gu","gv","ha","he","hi","ho","hu","hv","la","le","li","lo","lu","lv","ma","me","mi","mo","mu","na","hna","nah","ne","ni","no","nu","nv","qua","que","qui","quo","quu","quv","sa","s","se","si","so","su","sv","da","ta","de","te","di","ti","do","du","dv","dla","tla","tle","tli","tlo","tlu","tlv","tsa","tse","tsi","tso","tsu","tsv","wa","we","wi","wo","wu","wv","ya","ye","yi","yo","yu","yv"],[,"ai","aai","i","ii","u","uu","oo","ee","i","a","aa","we","we","wi","wi","wii","wii","wo","wo","woo","woo","woo","wa","wa","waa","waa","waa","ai","w","'","t","k","sh","s","n","w","n",,"w","c","?","l","en","in","on","an","pai","paai","pi","pii","pu","puu","poo","hee","hi","pa","paa","pwe","pwe","pwi","pwi","pwii","pwii","pwo","pwo","pwoo","pwoo","pwa","pwa","pwaa","pwaa","pwaa","p","p","h","tai","taai","ti","tii","tu","tuu","too","dee","di","ta","taa","twe","twe","twi","twi","twii","twii","two","two","twoo","twoo","twa","twa","twaa","twaa","twaa","t","tte","tti","tto","tta","kai","kaai","ki","kii","ku","kuu","koo","ka","kaa","kwe","kwe","kwi","kwi","kwii","kwii","kwo","kwo","kwoo","kwoo","kwa","kwa","kwaa","kwaa","kwaa","k","kw","keh","kih","koh","kah","gai","caai","gi","gii","gu","guu","coo","ga","gaa","cwe","cwe","cwi","cwi","cwii","cwii","cwo","cwo","cwoo","cwoo","cwa","cwa","cwaa","cwaa","cwaa","g","th","mai","maai","mi","mii","mu","muu","moo","ma","maa","mwe","mwe","mwi","mwi","mwii","mwii","mwo","mwo","mwoo","mwoo","mwa","mwa","mwaa","mwaa","mwaa","m","m","mh","m","m","nai","naai","ni","nii","nu","nuu","noo","na","naa","nwe","nwe","nwa","nwa","nwaa","nwaa","nwaa","n","ng","nh","lai","laai","li","lii","lu","luu","loo","la","laa","lwe","lwe","lwi","lwi","lwii","lwii","lwo","lwo","lwoo","lwoo","lwa","lwa","lwaa","lwaa","l","l","l","sai","saai","si","sii","su","suu","soo","sa","saa","swe","swe","swi","swi","swii","swii","swo","swo","swoo","swoo"],["swa","swa","swaa","swaa","swaa","s","s","sw","s","sk","skw","sW","spwa","stwa","skwa","scwa","she","shi","shii","sho","shoo","sha","shaa","shwe","shwe","shwi","shwi","shwii","shwii","shwo","shwo","shwoo","shwoo","shwa","shwa","shwaa","shwaa","sh","jai","yaai","ji","jii","ju","juu","yoo","ja","jaa","ywe","ywe","ywi","ywi","ywii","ywii","ywo","ywo","ywoo","ywoo","ywa","ywa","ywaa","ywaa","ywaa","j","y","y","yi","re","rai","le","raai","ri","rii","ru","ruu","lo","ra","raa","la","rwaa","rwaa","r","r","r","vai","faai","vi","vii","vu","vuu","va","vaa","fwaa","fwaa","v","the","the","thi","thi","thii","thii","tho","thoo","tha","thaa","thwaa","thwaa","th","tthe","tthi","ttho","ttha","tth","tye","tyi","tyo","tya","he","hi","hii","ho","hoo","ha","haa","h","h","hk","qaai","qi","qii","qu","quu","qa","qaa","q","tlhe","tlhi","tlho","tlha","re","ri","ro","ra","ngaai","ngi","ngii","ngu","nguu","nga","ngaa","ng","nng","she","shi","sho","sha","the","thi","tho","tha","th","lhi","lhii","lho","lhoo","lha","lhaa","lh","the","thi","thii","tho","thoo","tha","thaa","th","b","e","i","o","a","we","wi","wo","wa","ne","ni","no","na","ke","ki","ko","ka","he","hi","ho","ha","ghu","gho","ghe","ghee","ghi","gha","ru","ro","re","ree","ri","ra","wu","wo","we","wee","wi","wa","hwu","hwo","hwe","hwee","hwi","hwa","thu","tho","the","thee","thi","tha","ttu","tto","tte","ttee","tti","tta","pu","po","pe","pee","pi","pa","p","gu","go","ge","gee","gi","ga","khu","kho","khe","khee","khi","kha","kku","kko","kke","kkee","kki"],["kka","kk","nu","no","ne","nee","ni","na","mu","mo","me","mee","mi","ma","yu","yo","ye","yee","yi","ya","ju","ju","jo","je","jee","ji","ji","ja","jju","jjo","jje","jjee","jji","jja","lu","lo","le","lee","li","la","dlu","dlo","dle","dlee","dli","dla","lhu","lho","lhe","lhee","lhi","lha","tlhu","tlho","tlhe","tlhee","tlhi","tlha","tlu","tlo","tle","tlee","tli","tla","zu","zo","ze","zee","zi","za","z","z","dzu","dzo","dze","dzee","dzi","dza","su","so","se","see","si","sa","shu","sho","she","shee","shi","sha","sh","tsu","tso","tse","tsee","tsi","tsa","chu","cho","che","chee","chi","cha","ttsu","ttso","ttse","ttsee","ttsi","ttsa","X",".","qai","ngai","nngi","nngii","nngo","nngoo","nnga","nngaa",,,,,,,,,," ","b","l","f","s","n","h","d","t","c","q","m","g","ng","z","r","a","o","u","e","i","ch","th","ph","p","x","p","<",">",,,,"f","v","u","yr","y","w","th","th","a","o","ac","ae","o","o","o","oe","on","r","k","c","k","g","ng","g","g","w","h","h","h","h","n","n","n","i","e","j","g","ae","a","eo","p","z","s","s","s","c","z","t","t","d","b","b","p","p","e","m","m","m","l","l","ng","ng","d","o","ear","ior","qu","qu","qu","s","yr","yr","yr","q","x",".",":","+","17","18","19"],[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"k","kh","g","gh","ng","c","ch","j","jh","ny","t","tth","d","ddh","nn","t","th","d","dh","n","p","ph","b","bh","m","y","r","l","v","sh","ss","s","h","l","q","a","aa","i","ii","u","uk","uu","uuv","ry","ryy","ly","lyy","e","ai","oo","oo","au","a","aa","aa","i","ii","y","yy","u","uu","ua","oe","ya","ie","e","ae","ai","oo","au","M","H","a`",,,,"r",,"!",,,,,,"."," // ",":","+","++"," * "," /// ","KR","'",,,,"0","1","2","3","4","5","6","7","8","9"],[" @ "," ... ",",",". ",": "," // ",,"-",",",". ",,,,,,,"0","1","2","3","4","5","6","7","8","9",,,,,,,"a","e","i","o","u","O","U","ee","n","ng","b","p","q","g","m","l","s","sh","t","d","ch","j","y","r","w","f","k","kha","ts","z","h","zr","lh","zh","ch","-","e","i","o","u","O","U","ng","b","p","q","g","m","t","d","ch","j","ts","y","w","k","g","h","jy","ny","dz","e","i","iy","U","u","ng","k","g","h","p","sh","t","d","j","f","g","h","ts","z","r","ch","zh","i","k","r","f","zh",,,,,,,,,,"H","X","W","M"," 3 "," 333 ","a","i","k","ng","c","tt","tth","dd","nn","t","d","p","ph","ss","zh","z","a","t","zh","gh","ng","c","jh","tta","ddh","t","dh","ss","cy","zh","z","u","y","bh","'"],[],[],[],[],[],["A","a","B","b","B","b","B","b","C","c","D","d","D","d","D","d","D","d","D","d","E","e","E","e","E","e","E","e","E","e","F","f","G","g","H","h","H","h","H","h","H","h","H","h","I","i","I","i","K","k","K","k","K","k","L","l","L","l","L","l","L","l","M","m","M","m","M","m","N","n","N","n","N","n","N","n","O","o","O","o","O","o","O","o","P","p","P","p","R","r","R","r","R","r","R","r","S","s","S","s","S","s","S","s","S","s","T","t","T","t","T","t","T","t","U","u","U","u","U","u","U","u","U","u","V","v","V","v","W","w","W","w","W","w","W","w","W","w","X","x","X","x","Y","y","Z","z","Z","z","Z","z","h","t","w","y","a","S",,,,,"A","a","A","a","A","a","A","a","A","a","A","a","A","a","A","a","A","a","A","a","A","a","A","a","E","e","E","e","E","e","E","e","E","e","E","e","E","e","E","e","I","i","I","i","O","o","O","o","O","o","O","o","O","o","O","o","O","o","O","o","O","o","O","o","O","o","O","o","U","u","U","u","U","u","U","u","U","u","U","u","U","u","Y","y","Y","y","Y","y","Y","y"],["a","a","a","a","a","a","a","a","A","A","A","A","A","A","A","A","e","e","e","e","e","e",,,"E","E","E","E","E","E",,,"e","e","e","e","e","e","e","e","E","E","E","E","E","E","E","E","i","i","i","i","i","i","i","i","I","I","I","I","I","I","I","I","o","o","o","o","o","o",,,"O","O","O","O","O","O",,,"u","u","u","u","u","u","u","u",,"U",,"U",,"U",,"U","o","o","o","o","o","o","o","o","O","O","O","O","O","O","O","O","a","a","e","e","e","e","i","i","o","o","u","u","o","o",,,"a","a","a","a","a","a","a","a","A","A","A","A","A","A","A","A","e","e","e","e","e","e","e","e","E","E","E","E","E","E","E","E","o","o","o","o","o","o","o","o","O","O","O","O","O","O","O","O","a","a","a","a","a",,"a","a","A","A","A","A","A","'","i","'","~",'"~',"e","e","e",,"e","e","E","E","E","E","E","'`","''","'~","i","i","i","i",,,"i","i","I","I","I","I",,"`'","`'","`~","u","u","u","u","R","R","u","u","U","U","U","U","R",'"`',"\"'","`",,,"o","o","o",,"o","o","O","O","O","O","O","'","`"],[" "," "," "," "," "," "," "," "," "," "," "," ",,,,,"-","-","-","-","--","--","||","_","'","'",",","'",'"','"',",,",'"',"+","++","*","*>",".","..","...",".","\n","\n\n",,,,,," ","%0","%00","'","''","'''","`","``","```","^","<",">","*","!!","!?","-","_","-","^","***","--","/","-[","]-",,"?!","!?","7","PP","(]","[)",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"0",,,,"4","5","6","7","8","9","+","-","=","(",")","n","0","1","2","3","4","5","6","7","8","9","+","-","=","(",")",,,,,,,,,,,,,,,,,,"ECU","CL","Cr","FF","L","mil","N","Pts","Rs","W","NS","D","EU","K","T","Dr"],[,,"C",,,,,,,,"g","H","H","H","h",,"I","I","L","l","lb","N","no","(p)","P","P","Q","R","R","R",,,"(sm)","(tel)","(tm)",,"Z",,,"mho","Z",,,,"B","C","e","e",,"F",,"M","o",,,,,"i","Q","(fax)","pi",,,"Pi",,"G","L","L","Y","D","d","e","i","j",,,"per",,,,,,," 1/3 "," 2/3 "," 1/5 "," 2/5 "," 3/5 "," 4/5 "," 1/6 "," 5/6 "," 1/8 "," 3/8 "," 5/8 "," 7/8 "," 1/","I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","L","C","D","M","i","ii","iii","iv","v","vi","vii","viii","ix","x","xi","xii","l","c","d","m","(D","D)","((|))",")",,,,,,,,,,,,,"-","|","-","|","-","|","\\","/","\\","/","-","-","~","~","-","|","-","|","-","-","-","|","-","|","|","-","-","-","-","-","-","|","|","|","|","|","|","|","^","V","\\","=","V","^","-","-","|","|","-","-","|","|","=","|","=","=","|","=","|","=","=","=","=","=","=","|","=","|","=","|","\\","/","\\","/","=","=","~","~","|","|","-","|","-","|","-","-","-","|","-","|","|","|","|","|","|","|","-","\\","\\","|"],[],[],[],["-","-","|","|","-","-","|","|","-","-","|","|","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","-","-","|","|","-","|","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","/","\\","X","-","|","-","|","-","|","-","|","-","|","-","|","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","-","|",,,,,,,,,,,"#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","^","^","^","^",">",">",">",">",">",">","V","V","V","V","<","<","<","<","<","<","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","#","#","#","#","#","^","^","^","O","#","#","#","#","#","#","#","#"],[],[],[" ","a","1","b","'","k","2","l","@","c","i","f","/","m","s","p",'"',"e","3","h","9","o","6","r","^","d","j","g",">","n","t","q",",","*","5","<","-","u","8","v",".","%","[","$","+","x","!","&",";",":","4","\\","0","z","7","(","_","?","w","]","#","y",")","=","[d7]","[d17]","[d27]","[d127]","[d37]","[d137]","[d237]","[d1237]","[d47]","[d147]","[d247]","[d1247]","[d347]","[d1347]","[d2347]","[d12347]","[d57]","[d157]","[d257]","[d1257]","[d357]","[d1357]","[d2357]","[d12357]","[d457]","[d1457]","[d2457]","[d12457]","[d3457]","[d13457]","[d23457]","[d123457]","[d67]","[d167]","[d267]","[d1267]","[d367]","[d1367]","[d2367]","[d12367]","[d467]","[d1467]","[d2467]","[d12467]","[d3467]","[d13467]","[d23467]","[d123467]","[d567]","[d1567]","[d2567]","[d12567]","[d3567]","[d13567]","[d23567]","[d123567]","[d4567]","[d14567]","[d24567]","[d124567]","[d34567]","[d134567]","[d234567]","[d1234567]","[d8]","[d18]","[d28]","[d128]","[d38]","[d138]","[d238]","[d1238]","[d48]","[d148]","[d248]","[d1248]","[d348]","[d1348]","[d2348]","[d12348]","[d58]","[d158]","[d258]","[d1258]","[d358]","[d1358]","[d2358]","[d12358]","[d458]","[d1458]","[d2458]","[d12458]","[d3458]","[d13458]","[d23458]","[d123458]","[d68]","[d168]","[d268]","[d1268]","[d368]","[d1368]","[d2368]","[d12368]","[d468]","[d1468]","[d2468]","[d12468]","[d3468]","[d13468]","[d23468]","[d123468]","[d568]","[d1568]","[d2568]","[d12568]","[d3568]","[d13568]","[d23568]","[d123568]","[d4568]","[d14568]","[d24568]","[d124568]","[d34568]","[d134568]","[d234568]","[d1234568]","[d78]","[d178]","[d278]","[d1278]","[d378]","[d1378]","[d2378]","[d12378]","[d478]","[d1478]","[d2478]","[d12478]","[d3478]","[d13478]","[d23478]","[d123478]","[d578]","[d1578]","[d2578]","[d12578]","[d3578]","[d13578]","[d23578]","[d123578]","[d4578]","[d14578]","[d24578]","[d124578]","[d34578]","[d134578]","[d234578]","[d1234578]","[d678]","[d1678]","[d2678]","[d12678]","[d3678]","[d13678]","[d23678]","[d123678]","[d4678]","[d14678]","[d24678]","[d124678]","[d34678]","[d134678]","[d234678]","[d1234678]","[d5678]","[d15678]","[d25678]","[d125678]","[d35678]","[d135678]","[d235678]","[d1235678]","[d45678]","[d145678]","[d245678]","[d1245678]","[d345678]","[d1345678]","[d2345678]","[d12345678]"],[],[],[],[],[],[],[],[" ",",",". ",'"',"[JIS]",'"',"/","0","<","> ","<<",">> ","[","] ","{","} ","[(",")] ","@","X ","[","] ","[[","]] ","((",")) ","[[","]] ","~ ","``","''",",,","@","1","2","3","4","5","6","7","8","9",,,,,,,"~","+","+","+","+",,"@"," // ","+10+","+20+","+30+",,,,,,,"a","a","i","i","u","u","e","e","o","o","ka","ga","ki","gi","ku","gu","ke","ge","ko","go","sa","za","si","zi","su","zu","se","ze","so","zo","ta","da","ti","di","tu","tu","du","te","de","to","do","na","ni","nu","ne","no","ha","ba","pa","hi","bi","pi","hu","bu","pu","he","be","pe","ho","bo","po","ma","mi","mu","me","mo","ya","ya","yu","yu","yo","yo","ra","ri","ru","re","ro","wa","wa","wi","we","wo","n","vu",,,,,,,,,'"','"',,,"a","a","i","i","u","u","e","e","o","o","ka","ga","ki","gi","ku","gu","ke","ge","ko","go","sa","za","si","zi","su","zu","se","ze","so","zo","ta","da","ti","di","tu","tu","du","te","de","to","do","na","ni","nu","ne","no","ha","ba","pa","hi","bi","pi","hu","bu","pu","he","be","pe","ho","bo","po","ma","mi","mu","me","mo","ya","ya","yu","yu","yo","yo","ra","ri","ru","re","ro","wa","wa","wi","we","wo","n","vu","ka","ke","va","vi","ve","vo",,,'"','"'],[,,,,,"B","P","M","F","D","T","N","L","G","K","H","J","Q","X","ZH","CH","SH","R","Z","C","S","A","O","E","EH","AI","EI","AU","OU","AN","EN","ANG","ENG","ER","I","U","IU","V","NG","GN",,,,,"g","gg","gs","n","nj","nh","d","dd","r","lg","lm","lb","ls","lt","lp","rh","m","b","bb","bs","s","ss",,"j","jj","c","k","t","p","h","a","ae","ya","yae","eo","e","yeo","ye","o","wa","wae","oe","yo","u","weo","we","wi","yu","eu","yi","i",,"nn","nd","ns","nZ","lgs","ld","lbs","lZ","lQ","mb","ms","mZ","mN","bg",,"bsg","bst","bj","bt","bN","bbN","sg","sn","sd","sb","sj","Z",,"N","Ns","NZ","pN","hh","Q","yo-ya","yo-yae","yo-i","yu-yeo","yu-ye","yu-i","U","U-i",,,,,,,,,,,,,,,,,,"BU","ZI","JI","GU","EE","ENN","OO","ONN","IR","ANN","INN","UNN","IM","NGG","AINN","AUNN","AM","OM","ONG","INNN","P","T","K","H"],["(g)","(n)","(d)","(r)","(m)","(b)","(s)","()","(j)","(c)","(k)","(t)","(p)","(h)","(ga)","(na)","(da)","(ra)","(ma)","(ba)","(sa)","(a)","(ja)","(ca)","(ka)","(ta)","(pa)","(ha)","(ju)",,,,"(1) ","(2) ","(3) ","(4) ","(5) ","(6) ","(7) ","(8) ","(9) ","(10) ","(Yue) ","(Huo) ","(Shui) ","(Mu) ","(Jin) ","(Tu) ","(Ri) ","(Zhu) ","(You) ","(She) ","(Ming) ","(Te) ","(Cai) ","(Zhu) ","(Lao) ","(Dai) ","(Hu) ","(Xue) ","(Jian) ","(Qi) ","(Zi) ","(Xie) ","(Ji) ","(Xiu) ","<<",">>",,,,,,,,,,,,,,,,,,,,,,,,,,,,,"(g)","(n)","(d)","(r)","(m)","(b)","(s)","()","(j)","(c)","(k)","(t)","(p)","(h)","(ga)","(na)","(da)","(ra)","(ma)","(ba)","(sa)","(a)","(ja)","(ca)","(ka)","(ta)","(pa)","(ha)",,,,"KIS ","(1) ","(2) ","(3) ","(4) ","(5) ","(6) ","(7) ","(8) ","(9) ","(10) ","(Yue) ","(Huo) ","(Shui) ","(Mu) ","(Jin) ","(Tu) ","(Ri) ","(Zhu) ","(You) ","(She) ","(Ming) ","(Te) ","(Cai) ","(Zhu) ","(Lao) ","(Mi) ","(Nan) ","(Nu) ","(Shi) ","(You) ","(Yin) ","(Zhu) ","(Xiang) ","(Xiu) ","(Xie) ","(Zheng) ","(Shang) ","(Zhong) ","(Xia) ","(Zuo) ","(You) ","(Yi) ","(Zong) ","(Xue) ","(Jian) ","(Qi) ","(Zi) ","(Xie) ","(Ye) ",,,,,,,,,,,,,,,,"1M","2M","3M","4M","5M","6M","7M","8M","9M","10M","11M","12M",,,,,"a","i","u","u","o","ka","ki","ku","ke","ko","sa","si","su","se","so","ta","ti","tu","te","to","na","ni","nu","ne","no","ha","hi","hu","he","ho","ma","mi","mu","me","mo","ya","yu","yo","ra","ri","ru","re","ro","wa","wi","we","wo"],["apartment","alpha","ampere","are","inning","inch","won","escudo","acre","ounce","ohm","kai-ri","carat","calorie","gallon","gamma","giga","guinea","curie","guilder","kilo","kilogram","kilometer","kilowatt","gram","gram ton","cruzeiro","krone","case","koruna","co-op","cycle","centime","shilling","centi","cent","dozen","desi","dollar","ton","nano","knot","heights","percent","parts","barrel","piaster","picul","pico","building","farad","feet","bushel","franc","hectare","peso","pfennig","hertz","pence","page","beta","point","volt","hon","pound","hall","horn","micro","mile","mach","mark","mansion","micron","milli","millibar","mega","megaton","meter","yard","yard","yuan","liter","lira","rupee","ruble","rem","roentgen","watt","0h","1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h","24h","HPA","da","AU","bar","oV","pc",,,,,"Heisei","Syouwa","Taisyou","Meiji","Inc.","pA","nA","microamp","mA","kA","kB","MB","GB","cal","kcal","pF","nF","microFarad","microgram","mg","kg","Hz","kHz","MHz","GHz","THz","microliter","ml","dl","kl","fm","nm","micrometer","mm","cm","km","mm^2","cm^2","m^2","km^2","mm^4","cm^3","m^3","km^3","m/s","m/s^2","Pa","kPa","MPa","GPa","rad","rad/s","rad/s^2","ps","ns","microsecond","ms","pV","nV","microvolt","mV","kV","MV","pW","nW","microwatt","mW","kW","MW","kOhm","MOhm","a.m.","Bq","cc","cd","C/kg","Co.","dB","Gy","ha","HP","in","K.K.","KM","kt","lm","ln","log","lx","mb","mil","mol","pH","p.m.","PPM","PR","sr","Sv","Wb",,,"1d","2d","3d","4d","5d","6d","7d","8d","9d","10d","11d","12d","13d","14d","15d","16d","17d","18d","19d","20d","21d","22d","23d","24d","25d","26d","27d","28d","29d","30d","31d"],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],["Yi","Ding","Kao","Qi","Shang","Xia",,"Wan","Zhang","San","Shang","Xia","Ji","Bu","Yu","Mian","Gai","Chou","Chou","Zhuan","Qie","Pi","Shi","Shi","Qiu","Bing","Ye","Cong","Dong","Si","Cheng","Diu","Qiu","Liang","Diu","You","Liang","Yan","Bing","Sang","Gun","Jiu","Ge","Ya","Qiang","Zhong","Ji","Jie","Feng","Guan","Chuan","Chan","Lin","Zhuo","Zhu","Ha","Wan","Dan","Wei","Zhu","Jing","Li","Ju","Pie","Fu","Yi","Yi","Nai","Shime","Jiu","Jiu","Zhe","Me","Yi",,"Zhi","Wu","Zha","Hu","Fa","Le","Zhong","Ping","Pang","Qiao","Hu","Guai","Cheng","Cheng","Yi","Yin",,"Mie","Jiu","Qi","Ye","Xi","Xiang","Gai","Diu","Hal",,"Shu","Twul","Shi","Ji","Nang","Jia","Kel","Shi",,"Ol","Mai","Luan","Cal","Ru","Xue","Yan","Fu","Sha","Na","Gan","Sol","El","Cwul",,"Gan","Chi","Gui","Gan","Luan","Lin","Yi","Jue","Liao","Ma","Yu","Zheng","Shi","Shi","Er","Chu","Yu","Yu","Yu","Yun","Hu","Qi","Wu","Jing","Si","Sui","Gen","Gen","Ya","Xie","Ya","Qi","Ya","Ji","Tou","Wang","Kang","Ta","Jiao","Hai","Yi","Chan","Heng","Mu",,"Xiang","Jing","Ting","Liang","Xiang","Jing","Ye","Qin","Bo","You","Xie","Dan","Lian","Duo","Wei","Ren","Ren","Ji","La","Wang","Yi","Shi","Ren","Le","Ding","Ze","Jin","Pu","Chou","Ba","Zhang","Jin","Jie","Bing","Reng","Cong","Fo","San","Lun","Sya","Cang","Zi","Shi","Ta","Zhang","Fu","Xian","Xian","Tuo","Hong","Tong","Ren","Qian","Gan","Yi","Di","Dai","Ling","Yi","Chao","Chang","Sa",,"Yi","Mu","Men","Ren","Jia","Chao","Yang","Qian","Zhong","Pi","Wan","Wu","Jian","Jie","Yao","Feng","Cang","Ren","Wang","Fen","Di","Fang"],["Zhong","Qi","Pei","Yu","Diao","Dun","Wen","Yi","Xin","Kang","Yi","Ji","Ai","Wu","Ji","Fu","Fa","Xiu","Jin","Bei","Dan","Fu","Tang","Zhong","You","Huo","Hui","Yu","Cui","Chuan","San","Wei","Chuan","Che","Ya","Xian","Shang","Chang","Lun","Cang","Xun","Xin","Wei","Zhu",,"Xuan","Nu","Bo","Gu","Ni","Ni","Xie","Ban","Xu","Ling","Zhou","Shen","Qu","Si","Beng","Si","Jia","Pi","Yi","Si","Ai","Zheng","Dian","Han","Mai","Dan","Zhu","Bu","Qu","Bi","Shao","Ci","Wei","Di","Zhu","Zuo","You","Yang","Ti","Zhan","He","Bi","Tuo","She","Yu","Yi","Fo","Zuo","Kou","Ning","Tong","Ni","Xuan","Qu","Yong","Wa","Qian",,"Ka",,"Pei","Huai","He","Lao","Xiang","Ge","Yang","Bai","Fa","Ming","Jia","Er","Bing","Ji","Hen","Huo","Gui","Quan","Tiao","Jiao","Ci","Yi","Shi","Xing","Shen","Tuo","Kan","Zhi","Gai","Lai","Yi","Chi","Kua","Guang","Li","Yin","Shi","Mi","Zhu","Xu","You","An","Lu","Mou","Er","Lun","Tong","Cha","Chi","Xun","Gong","Zhou","Yi","Ru","Jian","Xia","Jia","Zai","Lu","Ko","Jiao","Zhen","Ce","Qiao","Kuai","Chai","Ning","Nong","Jin","Wu","Hou","Jiong","Cheng","Zhen","Zuo","Chou","Qin","Lu","Ju","Shu","Ting","Shen","Tuo","Bo","Nan","Hao","Bian","Tui","Yu","Xi","Cu","E","Qiu","Xu","Kuang","Ku","Wu","Jun","Yi","Fu","Lang","Zu","Qiao","Li","Yong","Hun","Jing","Xian","San","Pai","Su","Fu","Xi","Li","Fu","Ping","Bao","Yu","Si","Xia","Xin","Xiu","Yu","Ti","Che","Chou",,"Yan","Lia","Li","Lai",,"Jian","Xiu","Fu","He","Ju","Xiao","Pai","Jian","Biao","Chu","Fei","Feng","Ya","An","Bei","Yu","Xin","Bi","Jian"],["Chang","Chi","Bing","Zan","Yao","Cui","Lia","Wan","Lai","Cang","Zong","Ge","Guan","Bei","Tian","Shu","Shu","Men","Dao","Tan","Jue","Chui","Xing","Peng","Tang","Hou","Yi","Qi","Ti","Gan","Jing","Jie","Sui","Chang","Jie","Fang","Zhi","Kong","Juan","Zong","Ju","Qian","Ni","Lun","Zhuo","Wei","Luo","Song","Leng","Hun","Dong","Zi","Ben","Wu","Ju","Nai","Cai","Jian","Zhai","Ye","Zhi","Sha","Qing",,"Ying","Cheng","Jian","Yan","Nuan","Zhong","Chun","Jia","Jie","Wei","Yu","Bing","Ruo","Ti","Wei","Pian","Yan","Feng","Tang","Wo","E","Xie","Che","Sheng","Kan","Di","Zuo","Cha","Ting","Bei","Ye","Huang","Yao","Zhan","Chou","Yan","You","Jian","Xu","Zha","Ci","Fu","Bi","Zhi","Zong","Mian","Ji","Yi","Xie","Xun","Si","Duan","Ce","Zhen","Ou","Tou","Tou","Bei","Za","Lu","Jie","Wei","Fen","Chang","Gui","Sou","Zhi","Su","Xia","Fu","Yuan","Rong","Li","Ru","Yun","Gou","Ma","Bang","Dian","Tang","Hao","Jie","Xi","Shan","Qian","Jue","Cang","Chu","San","Bei","Xiao","Yong","Yao","Tan","Suo","Yang","Fa","Bing","Jia","Dai","Zai","Tang",,"Bin","Chu","Nuo","Can","Lei","Cui","Yong","Zao","Zong","Peng","Song","Ao","Chuan","Yu","Zhai","Cou","Shang","Qiang","Jing","Chi","Sha","Han","Zhang","Qing","Yan","Di","Xi","Lu","Bei","Piao","Jin","Lian","Lu","Man","Qian","Xian","Tan","Ying","Dong","Zhuan","Xiang","Shan","Qiao","Jiong","Tui","Zun","Pu","Xi","Lao","Chang","Guang","Liao","Qi","Deng","Chan","Wei","Ji","Fan","Hui","Chuan","Jian","Dan","Jiao","Jiu","Seng","Fen","Xian","Jue","E","Jiao","Jian","Tong","Lin","Bo","Gu",,"Su","Xian","Jiang","Min","Ye","Jin","Jia","Qiao","Pi","Feng","Zhou","Ai","Sai"],["Yi","Jun","Nong","Chan","Yi","Dang","Jing","Xuan","Kuai","Jian","Chu","Dan","Jiao","Sha","Zai",,"Bin","An","Ru","Tai","Chou","Chai","Lan","Ni","Jin","Qian","Meng","Wu","Ning","Qiong","Ni","Chang","Lie","Lei","Lu","Kuang","Bao","Du","Biao","Zan","Zhi","Si","You","Hao","Chen","Chen","Li","Teng","Wei","Long","Chu","Chan","Rang","Shu","Hui","Li","Luo","Zan","Nuo","Tang","Yan","Lei","Nang","Er","Wu","Yun","Zan","Yuan","Xiong","Chong","Zhao","Xiong","Xian","Guang","Dui","Ke","Dui","Mian","Tu","Chang","Er","Dui","Er","Xin","Tu","Si","Yan","Yan","Shi","Shi","Dang","Qian","Dou","Fen","Mao","Shen","Dou","Bai","Jing","Li","Huang","Ru","Wang","Nei","Quan","Liang","Yu","Ba","Gong","Liu","Xi",,"Lan","Gong","Tian","Guan","Xing","Bing","Qi","Ju","Dian","Zi","Ppwun","Yang","Jian","Shou","Ji","Yi","Ji","Chan","Jiong","Mao","Ran","Nei","Yuan","Mao","Gang","Ran","Ce","Jiong","Ce","Zai","Gua","Jiong","Mao","Zhou","Mou","Gou","Xu","Mian","Mi","Rong","Yin","Xie","Kan","Jun","Nong","Yi","Mi","Shi","Guan","Meng","Zhong","Ju","Yuan","Ming","Kou","Lam","Fu","Xie","Mi","Bing","Dong","Tai","Gang","Feng","Bing","Hu","Chong","Jue","Hu","Kuang","Ye","Leng","Pan","Fu","Min","Dong","Xian","Lie","Xia","Jian","Jing","Shu","Mei","Tu","Qi","Gu","Zhun","Song","Jing","Liang","Qing","Diao","Ling","Dong","Gan","Jian","Yin","Cou","Yi","Li","Cang","Ming","Zhuen","Cui","Si","Duo","Jin","Lin","Lin","Ning","Xi","Du","Ji","Fan","Fan","Fan","Feng","Ju","Chu","Tako","Feng","Mok","Ci","Fu","Feng","Ping","Feng","Kai","Huang","Kai","Gan","Deng","Ping","Qu","Xiong","Kuai","Tu","Ao","Chu","Ji","Dang","Han","Han","Zao"],["Dao","Diao","Dao","Ren","Ren","Chuang","Fen","Qie","Yi","Ji","Kan","Qian","Cun","Chu","Wen","Ji","Dan","Xing","Hua","Wan","Jue","Li","Yue","Lie","Liu","Ze","Gang","Chuang","Fu","Chu","Qu","Ju","Shan","Min","Ling","Zhong","Pan","Bie","Jie","Jie","Bao","Li","Shan","Bie","Chan","Jing","Gua","Gen","Dao","Chuang","Kui","Ku","Duo","Er","Zhi","Shua","Quan","Cha","Ci","Ke","Jie","Gui","Ci","Gui","Kai","Duo","Ji","Ti","Jing","Lou","Gen","Ze","Yuan","Cuo","Xue","Ke","La","Qian","Cha","Chuang","Gua","Jian","Cuo","Li","Ti","Fei","Pou","Chan","Qi","Chuang","Zi","Gang","Wan","Bo","Ji","Duo","Qing","Yan","Zhuo","Jian","Ji","Bo","Yan","Ju","Huo","Sheng","Jian","Duo","Duan","Wu","Gua","Fu","Sheng","Jian","Ge","Zha","Kai","Chuang","Juan","Chan","Tuan","Lu","Li","Fou","Shan","Piao","Kou","Jiao","Gua","Qiao","Jue","Hua","Zha","Zhuo","Lian","Ju","Pi","Liu","Gui","Jiao","Gui","Jian","Jian","Tang","Huo","Ji","Jian","Yi","Jian","Zhi","Chan","Cuan","Mo","Li","Zhu","Li","Ya","Quan","Ban","Gong","Jia","Wu","Mai","Lie","Jin","Keng","Xie","Zhi","Dong","Zhu","Nu","Jie","Qu","Shao","Yi","Zhu","Miao","Li","Jing","Lao","Lao","Juan","Kou","Yang","Wa","Xiao","Mou","Kuang","Jie","Lie","He","Shi","Ke","Jing","Hao","Bo","Min","Chi","Lang","Yong","Yong","Mian","Ke","Xun","Juan","Qing","Lu","Pou","Meng","Lai","Le","Kai","Mian","Dong","Xu","Xu","Kan","Wu","Yi","Xun","Weng","Sheng","Lao","Mu","Lu","Piao","Shi","Ji","Qin","Qiang","Jiao","Quan","Yang","Yi","Jue","Fan","Juan","Tong","Ju","Dan","Xie","Mai","Xun","Xun","Lu","Li","Che","Rang","Quan","Bao","Shao","Yun","Jiu","Bao","Gou","Wu"],["Yun","Mwun","Nay","Gai","Gai","Bao","Cong",,"Xiong","Peng","Ju","Tao","Ge","Pu","An","Pao","Fu","Gong","Da","Jiu","Qiong","Bi","Hua","Bei","Nao","Chi","Fang","Jiu","Yi","Za","Jiang","Kang","Jiang","Kuang","Hu","Xia","Qu","Bian","Gui","Qie","Zang","Kuang","Fei","Hu","Tou","Gui","Gui","Hui","Dan","Gui","Lian","Lian","Suan","Du","Jiu","Qu","Xi","Pi","Qu","Yi","Qia","Yan","Bian","Ni","Qu","Shi","Xin","Qian","Nian","Sa","Zu","Sheng","Wu","Hui","Ban","Shi","Xi","Wan","Hua","Xie","Wan","Bei","Zu","Zhuo","Xie","Dan","Mai","Nan","Dan","Ji","Bo","Shuai","Bu","Kuang","Bian","Bu","Zhan","Qia","Lu","You","Lu","Xi","Gua","Wo","Xie","Jie","Jie","Wei","Ang","Qiong","Zhi","Mao","Yin","Wei","Shao","Ji","Que","Luan","Shi","Juan","Xie","Xu","Jin","Que","Wu","Ji","E","Qing","Xi",,"Han","Zhan","E","Ting","Li","Zhe","Han","Li","Ya","Ya","Yan","She","Zhi","Zha","Pang",,"He","Ya","Zhi","Ce","Pang","Ti","Li","She","Hou","Ting","Zui","Cuo","Fei","Yuan","Ce","Yuan","Xiang","Yan","Li","Jue","Sha","Dian","Chu","Jiu","Qin","Ao","Gui","Yan","Si","Li","Chang","Lan","Li","Yan","Yan","Yuan","Si","Gong","Lin","Qiu","Qu","Qu","Uk","Lei","Du","Xian","Zhuan","San","Can","Can","Can","Can","Ai","Dai","You","Cha","Ji","You","Shuang","Fan","Shou","Guai","Ba","Fa","Ruo","Shi","Shu","Zhuo","Qu","Shou","Bian","Xu","Jia","Pan","Sou","Gao","Wei","Sou","Die","Rui","Cong","Kou","Gu","Ju","Ling","Gua","Tao","Kou","Zhi","Jiao","Zhao","Ba","Ding","Ke","Tai","Chi","Shi","You","Qiu","Po","Xie","Hao","Si","Tan","Chi","Le","Diao","Ji",,"Hong"],["Mie","Xu","Mang","Chi","Ge","Xuan","Yao","Zi","He","Ji","Diao","Cun","Tong","Ming","Hou","Li","Tu","Xiang","Zha","Xia","Ye","Lu","A","Ma","Ou","Xue","Yi","Jun","Chou","Lin","Tun","Yin","Fei","Bi","Qin","Qin","Jie","Bu","Fou","Ba","Dun","Fen","E","Han","Ting","Hang","Shun","Qi","Hong","Zhi","Shen","Wu","Wu","Chao","Ne","Xue","Xi","Chui","Dou","Wen","Hou","Ou","Wu","Gao","Ya","Jun","Lu","E","Ge","Mei","Ai","Qi","Cheng","Wu","Gao","Fu","Jiao","Hong","Chi","Sheng","Ne","Tun","Fu","Yi","Dai","Ou","Li","Bai","Yuan","Kuai",,"Qiang","Wu","E","Shi","Quan","Pen","Wen","Ni","M","Ling","Ran","You","Di","Zhou","Shi","Zhou","Tie","Xi","Yi","Qi","Ping","Zi","Gu","Zi","Wei","Xu","He","Nao","Xia","Pei","Yi","Xiao","Shen","Hu","Ming","Da","Qu","Ju","Gem","Za","Tuo","Duo","Pou","Pao","Bi","Fu","Yang","He","Zha","He","Hai","Jiu","Yong","Fu","Que","Zhou","Wa","Ka","Gu","Ka","Zuo","Bu","Long","Dong","Ning","Tha","Si","Xian","Huo","Qi","Er","E","Guang","Zha","Xi","Yi","Lie","Zi","Mie","Mi","Zhi","Yao","Ji","Zhou","Ge","Shuai","Zan","Xiao","Ke","Hui","Kua","Huai","Tao","Xian","E","Xuan","Xiu","Wai","Yan","Lao","Yi","Ai","Pin","Shen","Tong","Hong","Xiong","Chi","Wa","Ha","Zai","Yu","Di","Pai","Xiang","Ai","Hen","Kuang","Ya","Da","Xiao","Bi","Yue",,"Hua","Sasou","Kuai","Duo",,"Ji","Nong","Mou","Yo","Hao","Yuan","Long","Pou","Mang","Ge","E","Chi","Shao","Li","Na","Zu","He","Ku","Xiao","Xian","Lao","Bo","Zhe","Zha","Liang","Ba","Mie","Le","Sui","Fou","Bu","Han","Heng","Geng","Shuo","Ge"],["You","Yan","Gu","Gu","Bai","Han","Suo","Chun","Yi","Ai","Jia","Tu","Xian","Huan","Li","Xi","Tang","Zuo","Qiu","Che","Wu","Zao","Ya","Dou","Qi","Di","Qin","Ma","Mal","Hong","Dou","Kes","Lao","Liang","Suo","Zao","Huan","Lang","Sha","Ji","Zuo","Wo","Feng","Yin","Hu","Qi","Shou","Wei","Shua","Chang","Er","Li","Qiang","An","Jie","Yo","Nian","Yu","Tian","Lai","Sha","Xi","Tuo","Hu","Ai","Zhou","Nou","Ken","Zhuo","Zhuo","Shang","Di","Heng","Lan","A","Xiao","Xiang","Tun","Wu","Wen","Cui","Sha","Hu","Qi","Qi","Tao","Dan","Dan","Ye","Zi","Bi","Cui","Chuo","He","Ya","Qi","Zhe","Pei","Liang","Xian","Pi","Sha","La","Ze","Qing","Gua","Pa","Zhe","Se","Zhuan","Nie","Guo","Luo","Yan","Di","Quan","Tan","Bo","Ding","Lang","Xiao",,"Tang","Chi","Ti","An","Jiu","Dan","Ke","Yong","Wei","Nan","Shan","Yu","Zhe","La","Jie","Hou","Han","Die","Zhou","Chai","Wai","Re","Yu","Yin","Zan","Yao","Wo","Mian","Hu","Yun","Chuan","Hui","Huan","Huan","Xi","He","Ji","Kui","Zhong","Wei","Sha","Xu","Huang","Du","Nie","Xuan","Liang","Yu","Sang","Chi","Qiao","Yan","Dan","Pen","Can","Li","Yo","Zha","Wei","Miao","Ying","Pen","Phos","Kui","Xi","Yu","Jie","Lou","Ku","Sao","Huo","Ti","Yao","He","A","Xiu","Qiang","Se","Yong","Su","Hong","Xie","Yi","Suo","Ma","Cha","Hai","Ke","Ta","Sang","Tian","Ru","Sou","Wa","Ji","Pang","Wu","Xian","Shi","Ge","Zi","Jie","Luo","Weng","Wa","Si","Chi","Hao","Suo","Jia","Hai","Suo","Qin","Nie","He","Cis","Sai","Ng","Ge","Na","Dia","Ai",,"Tong","Bi","Ao","Ao","Lian","Cui","Zhe","Mo","Sou","Sou","Tan"],["Di","Qi","Jiao","Chong","Jiao","Kai","Tan","San","Cao","Jia","Ai","Xiao","Piao","Lou","Ga","Gu","Xiao","Hu","Hui","Guo","Ou","Xian","Ze","Chang","Xu","Po","De","Ma","Ma","Hu","Lei","Du","Ga","Tang","Ye","Beng","Ying","Saai","Jiao","Mi","Xiao","Hua","Mai","Ran","Zuo","Peng","Lao","Xiao","Ji","Zhu","Chao","Kui","Zui","Xiao","Si","Hao","Fu","Liao","Qiao","Xi","Xiu","Tan","Tan","Mo","Xun","E","Zun","Fan","Chi","Hui","Zan","Chuang","Cu","Dan","Yu","Tun","Cheng","Jiao","Ye","Xi","Qi","Hao","Lian","Xu","Deng","Hui","Yin","Pu","Jue","Qin","Xun","Nie","Lu","Si","Yan","Ying","Da","Dan","Yu","Zhou","Jin","Nong","Yue","Hui","Qi","E","Zao","Yi","Shi","Jiao","Yuan","Ai","Yong","Jue","Kuai","Yu","Pen","Dao","Ge","Xin","Dun","Dang","Sin","Sai","Pi","Pi","Yin","Zui","Ning","Di","Lan","Ta","Huo","Ru","Hao","Xia","Ya","Duo","Xi","Chou","Ji","Jin","Hao","Ti","Chang",,,"Ca","Ti","Lu","Hui","Bo","You","Nie","Yin","Hu","Mo","Huang","Zhe","Li","Liu","Haai","Nang","Xiao","Mo","Yan","Li","Lu","Long","Fu","Dan","Chen","Pin","Pi","Xiang","Huo","Mo","Xi","Duo","Ku","Yan","Chan","Ying","Rang","Dian","La","Ta","Xiao","Jiao","Chuo","Huan","Huo","Zhuan","Nie","Xiao","Ca","Li","Chan","Chai","Li","Yi","Luo","Nang","Zan","Su","Xi","So","Jian","Za","Zhu","Lan","Nie","Nang",,,"Wei","Hui","Yin","Qiu","Si","Nin","Jian","Hui","Xin","Yin","Nan","Tuan","Tuan","Dun","Kang","Yuan","Jiong","Pian","Yun","Cong","Hu","Hui","Yuan","You","Guo","Kun","Cong","Wei","Tu","Wei","Lun","Guo","Qun","Ri","Ling","Gu","Guo","Tai","Guo","Tu","You"],["Guo","Yin","Hun","Pu","Yu","Han","Yuan","Lun","Quan","Yu","Qing","Guo","Chuan","Wei","Yuan","Quan","Ku","Fu","Yuan","Yuan","E","Tu","Tu","Tu","Tuan","Lue","Hui","Yi","Yuan","Luan","Luan","Tu","Ya","Tu","Ting","Sheng","Pu","Lu","Iri","Ya","Zai","Wei","Ge","Yu","Wu","Gui","Pi","Yi","Di","Qian","Qian","Zhen","Zhuo","Dang","Qia","Akutsu","Yama","Kuang","Chang","Qi","Nie","Mo","Ji","Jia","Zhi","Zhi","Ban","Xun","Tou","Qin","Fen","Jun","Keng","Tun","Fang","Fen","Ben","Tan","Kan","Pi","Zuo","Keng","Bi","Xing","Di","Jing","Ji","Kuai","Di","Jing","Jian","Tan","Li","Ba","Wu","Fen","Zhui","Po","Pan","Tang","Kun","Qu","Tan","Zhi","Tuo","Gan","Ping","Dian","Gua","Ni","Tai","Pi","Jiong","Yang","Fo","Ao","Liu","Qiu","Mu","Ke","Gou","Xue","Ba","Chi","Che","Ling","Zhu","Fu","Hu","Zhi","Chui","La","Long","Long","Lu","Ao","Tay","Pao",,"Xing","Dong","Ji","Ke","Lu","Ci","Chi","Lei","Gai","Yin","Hou","Dui","Zhao","Fu","Guang","Yao","Duo","Duo","Gui","Cha","Yang","Yin","Fa","Gou","Yuan","Die","Xie","Ken","Jiong","Shou","E","Ha","Dian","Hong","Wu","Kua",,"Tao","Dang","Kai","Gake","Nao","An","Xing","Xian","Huan","Bang","Pei","Ba","Yi","Yin","Han","Xu","Chui","Cen","Geng","Ai","Peng","Fang","Que","Yong","Xun","Jia","Di","Mai","Lang","Xuan","Cheng","Yan","Jin","Zhe","Lei","Lie","Bu","Cheng","Gomi","Bu","Shi","Xun","Guo","Jiong","Ye","Nian","Di","Yu","Bu","Ya","Juan","Sui","Pi","Cheng","Wan","Ju","Lun","Zheng","Kong","Chong","Dong","Dai","Tan","An","Cai","Shu","Beng","Kan","Zhi","Duo","Yi","Zhi","Yi","Pei","Ji","Zhun","Qi","Sao","Ju","Ni"],["Ku","Ke","Tang","Kun","Ni","Jian","Dui","Jin","Gang","Yu","E","Peng","Gu","Tu","Leng",,"Ya","Qian",,"An",,"Duo","Nao","Tu","Cheng","Yin","Hun","Bi","Lian","Guo","Die","Zhuan","Hou","Bao","Bao","Yu","Di","Mao","Jie","Ruan","E","Geng","Kan","Zong","Yu","Huang","E","Yao","Yan","Bao","Ji","Mei","Chang","Du","Tuo","Yin","Feng","Zhong","Jie","Zhen","Feng","Gang","Chuan","Jian","Pyeng","Toride","Xiang","Huang","Leng","Duan",,"Xuan","Ji","Ji","Kuai","Ying","Ta","Cheng","Yong","Kai","Su","Su","Shi","Mi","Ta","Weng","Cheng","Tu","Tang","Que","Zhong","Li","Peng","Bang","Sai","Zang","Dui","Tian","Wu","Cheng","Xun","Ge","Zhen","Ai","Gong","Yan","Kan","Tian","Yuan","Wen","Xie","Liu","Ama","Lang","Chang","Peng","Beng","Chen","Cu","Lu","Ou","Qian","Mei","Mo","Zhuan","Shuang","Shu","Lou","Chi","Man","Biao","Jing","Qi","Shu","Di","Zhang","Kan","Yong","Dian","Chen","Zhi","Xi","Guo","Qiang","Jin","Di","Shang","Mu","Cui","Yan","Ta","Zeng","Qi","Qiang","Liang",,"Zhui","Qiao","Zeng","Xu","Shan","Shan","Ba","Pu","Kuai","Dong","Fan","Que","Mo","Dun","Dun","Dun","Di","Sheng","Duo","Duo","Tan","Deng","Wu","Fen","Huang","Tan","Da","Ye","Sho","Mama","Yu","Qiang","Ji","Qiao","Ken","Yi","Pi","Bi","Dian","Jiang","Ye","Yong","Bo","Tan","Lan","Ju","Huai","Dang","Rang","Qian","Xun","Lan","Xi","He","Ai","Ya","Dao","Hao","Ruan","Mama","Lei","Kuang","Lu","Yan","Tan","Wei","Huai","Long","Long","Rui","Li","Lin","Rang","Ten","Xun","Yan","Lei","Ba",,"Shi","Ren",,"Zhuang","Zhuang","Sheng","Yi","Mai","Ke","Zhu","Zhuang","Hu","Hu","Kun","Yi","Hu","Xu","Kun","Shou","Mang","Zun"],["Shou","Yi","Zhi","Gu","Chu","Jiang","Feng","Bei","Cay","Bian","Sui","Qun","Ling","Fu","Zuo","Xia","Xiong",,"Nao","Xia","Kui","Xi","Wai","Yuan","Mao","Su","Duo","Duo","Ye","Qing","Uys","Gou","Gou","Qi","Meng","Meng","Yin","Huo","Chen","Da","Ze","Tian","Tai","Fu","Guai","Yao","Yang","Hang","Gao","Shi","Ben","Tai","Tou","Yan","Bi","Yi","Kua","Jia","Duo","Kwu","Kuang","Yun","Jia","Pa","En","Lian","Huan","Di","Yan","Pao","Quan","Qi","Nai","Feng","Xie","Fen","Dian",,"Kui","Zou","Huan","Qi","Kai","Zha","Ben","Yi","Jiang","Tao","Zang","Ben","Xi","Xiang","Fei","Diao","Xun","Keng","Dian","Ao","She","Weng","Pan","Ao","Wu","Ao","Jiang","Lian","Duo","Yun","Jiang","Shi","Fen","Huo","Bi","Lian","Duo","Nu","Nu","Ding","Nai","Qian","Jian","Ta","Jiu","Nan","Cha","Hao","Xian","Fan","Ji","Shuo","Ru","Fei","Wang","Hong","Zhuang","Fu","Ma","Dan","Ren","Fu","Jing","Yan","Xie","Wen","Zhong","Pa","Du","Ji","Keng","Zhong","Yao","Jin","Yun","Miao","Pei","Shi","Yue","Zhuang","Niu","Yan","Na","Xin","Fen","Bi","Yu","Tuo","Feng","Yuan","Fang","Wu","Yu","Gui","Du","Ba","Ni","Zhou","Zhuo","Zhao","Da","Nai","Yuan","Tou","Xuan","Zhi","E","Mei","Mo","Qi","Bi","Shen","Qie","E","He","Xu","Fa","Zheng","Min","Ban","Mu","Fu","Ling","Zi","Zi","Shi","Ran","Shan","Yang","Man","Jie","Gu","Si","Xing","Wei","Zi","Ju","Shan","Pin","Ren","Yao","Tong","Jiang","Shu","Ji","Gai","Shang","Kuo","Juan","Jiao","Gou","Mu","Jian","Jian","Yi","Nian","Zhi","Ji","Ji","Xian","Heng","Guang","Jun","Kua","Yan","Ming","Lie","Pei","Yan","You","Yan","Cha","Shen","Yin","Chi","Gui","Quan","Zi"],["Song","Wei","Hong","Wa","Lou","Ya","Rao","Jiao","Luan","Ping","Xian","Shao","Li","Cheng","Xiao","Mang","Fu","Suo","Wu","Wei","Ke","Lai","Chuo","Ding","Niang","Xing","Nan","Yu","Nuo","Pei","Nei","Juan","Shen","Zhi","Han","Di","Zhuang","E","Pin","Tui","Han","Mian","Wu","Yan","Wu","Xi","Yan","Yu","Si","Yu","Wa",,"Xian","Ju","Qu","Shui","Qi","Xian","Zhui","Dong","Chang","Lu","Ai","E","E","Lou","Mian","Cong","Pou","Ju","Po","Cai","Ding","Wan","Biao","Xiao","Shu","Qi","Hui","Fu","E","Wo","Tan","Fei","Wei","Jie","Tian","Ni","Quan","Jing","Hun","Jing","Qian","Dian","Xing","Hu","Wa","Lai","Bi","Yin","Chou","Chuo","Fu","Jing","Lun","Yan","Lan","Kun","Yin","Ya","Ju","Li","Dian","Xian","Hwa","Hua","Ying","Chan","Shen","Ting","Dang","Yao","Wu","Nan","Ruo","Jia","Tou","Xu","Yu","Wei","Ti","Rou","Mei","Dan","Ruan","Qin","Hui","Wu","Qian","Chun","Mao","Fu","Jie","Duan","Xi","Zhong","Mei","Huang","Mian","An","Ying","Xuan","Jie","Wei","Mei","Yuan","Zhen","Qiu","Ti","Xie","Tuo","Lian","Mao","Ran","Si","Pian","Wei","Wa","Jiu","Hu","Ao",,"Bou","Xu","Tou","Gui","Zou","Yao","Pi","Xi","Yuan","Ying","Rong","Ru","Chi","Liu","Mei","Pan","Ao","Ma","Gou","Kui","Qin","Jia","Sao","Zhen","Yuan","Cha","Yong","Ming","Ying","Ji","Su","Niao","Xian","Tao","Pang","Lang","Nao","Bao","Ai","Pi","Pin","Yi","Piao","Yu","Lei","Xuan","Man","Yi","Zhang","Kang","Yong","Ni","Li","Di","Gui","Yan","Jin","Zhuan","Chang","Ce","Han","Nen","Lao","Mo","Zhe","Hu","Hu","Ao","Nen","Qiang","Ma","Pie","Gu","Wu","Jiao","Tuo","Zhan","Mao","Xian","Xian","Mo","Liao","Lian","Hua"],["Gui","Deng","Zhi","Xu","Yi","Hua","Xi","Hui","Rao","Xi","Yan","Chan","Jiao","Mei","Fan","Fan","Xian","Yi","Wei","Jiao","Fu","Shi","Bi","Shan","Sui","Qiang","Lian","Huan","Xin","Niao","Dong","Yi","Can","Ai","Niang","Neng","Ma","Tiao","Chou","Jin","Ci","Yu","Pin","Yong","Xu","Nai","Yan","Tai","Ying","Can","Niao","Wo","Ying","Mian","Kaka","Ma","Shen","Xing","Ni","Du","Liu","Yuan","Lan","Yan","Shuang","Ling","Jiao","Niang","Lan","Xian","Ying","Shuang","Shuai","Quan","Mi","Li","Luan","Yan","Zhu","Lan","Zi","Jie","Jue","Jue","Kong","Yun","Zi","Zi","Cun","Sun","Fu","Bei","Zi","Xiao","Xin","Meng","Si","Tai","Bao","Ji","Gu","Nu","Xue",,"Zhuan","Hai","Luan","Sun","Huai","Mie","Cong","Qian","Shu","Chan","Ya","Zi","Ni","Fu","Zi","Li","Xue","Bo","Ru","Lai","Nie","Nie","Ying","Luan","Mian","Ning","Rong","Ta","Gui","Zhai","Qiong","Yu","Shou","An","Tu","Song","Wan","Rou","Yao","Hong","Yi","Jing","Zhun","Mi","Zhu","Dang","Hong","Zong","Guan","Zhou","Ding","Wan","Yi","Bao","Shi","Shi","Chong","Shen","Ke","Xuan","Shi","You","Huan","Yi","Tiao","Shi","Xian","Gong","Cheng","Qun","Gong","Xiao","Zai","Zha","Bao","Hai","Yan","Xiao","Jia","Shen","Chen","Rong","Huang","Mi","Kou","Kuan","Bin","Su","Cai","Zan","Ji","Yuan","Ji","Yin","Mi","Kou","Qing","Que","Zhen","Jian","Fu","Ning","Bing","Huan","Mei","Qin","Han","Yu","Shi","Ning","Qin","Ning","Zhi","Yu","Bao","Kuan","Ning","Qin","Mo","Cha","Ju","Gua","Qin","Hu","Wu","Liao","Shi","Zhu","Zhai","Shen","Wei","Xie","Kuan","Hui","Liao","Jun","Huan","Yi","Yi","Bao","Qin","Chong","Bao","Feng","Cun","Dui","Si","Xun","Dao","Lu","Dui","Shou"],["Po","Feng","Zhuan","Fu","She","Ke","Jiang","Jiang","Zhuan","Wei","Zun","Xun","Shu","Dui","Dao","Xiao","Ji","Shao","Er","Er","Er","Ga","Jian","Shu","Chen","Shang","Shang","Mo","Ga","Chang","Liao","Xian","Xian",,"Wang","Wang","You","Liao","Liao","Yao","Mang","Wang","Wang","Wang","Ga","Yao","Duo","Kui","Zhong","Jiu","Gan","Gu","Gan","Tui","Gan","Gan","Shi","Yin","Chi","Kao","Ni","Jin","Wei","Niao","Ju","Pi","Ceng","Xi","Bi","Ju","Jie","Tian","Qu","Ti","Jie","Wu","Diao","Shi","Shi","Ping","Ji","Xie","Chen","Xi","Ni","Zhan","Xi",,"Man","E","Lou","Ping","Ti","Fei","Shu","Xie","Tu","Lu","Lu","Xi","Ceng","Lu","Ju","Xie","Ju","Jue","Liao","Jue","Shu","Xi","Che","Tun","Ni","Shan",,"Xian","Li","Xue","Nata",,"Long","Yi","Qi","Ren","Wu","Han","Shen","Yu","Chu","Sui","Qi",,"Yue","Ban","Yao","Ang","Ya","Wu","Jie","E","Ji","Qian","Fen","Yuan","Qi","Cen","Qian","Qi","Cha","Jie","Qu","Gang","Xian","Ao","Lan","Dao","Ba","Zuo","Zuo","Yang","Ju","Gang","Ke","Gou","Xue","Bei","Li","Tiao","Ju","Yan","Fu","Xiu","Jia","Ling","Tuo","Pei","You","Dai","Kuang","Yue","Qu","Hu","Po","Min","An","Tiao","Ling","Chi","Yuri","Dong","Cem","Kui","Xiu","Mao","Tong","Xue","Yi","Kura","He","Ke","Luo","E","Fu","Xun","Die","Lu","An","Er","Gai","Quan","Tong","Yi","Mu","Shi","An","Wei","Hu","Zhi","Mi","Li","Ji","Tong","Wei","You","Sang","Xia","Li","Yao","Jiao","Zheng","Luan","Jiao","E","E","Yu","Ye","Bu","Qiao","Qun","Feng","Feng","Nao","Li","You","Xian","Hong","Dao","Shen","Cheng","Tu","Geng","Jun","Hao","Xia","Yin","Yu"],["Lang","Kan","Lao","Lai","Xian","Que","Kong","Chong","Chong","Ta","Lin","Hua","Ju","Lai","Qi","Min","Kun","Kun","Zu","Gu","Cui","Ya","Ya","Gang","Lun","Lun","Leng","Jue","Duo","Zheng","Guo","Yin","Dong","Han","Zheng","Wei","Yao","Pi","Yan","Song","Jie","Beng","Zu","Jue","Dong","Zhan","Gu","Yin",,"Ze","Huang","Yu","Wei","Yang","Feng","Qiu","Dun","Ti","Yi","Zhi","Shi","Zai","Yao","E","Zhu","Kan","Lu","Yan","Mei","Gan","Ji","Ji","Huan","Ting","Sheng","Mei","Qian","Wu","Yu","Zong","Lan","Jue","Yan","Yan","Wei","Zong","Cha","Sui","Rong","Yamashina","Qin","Yu","Kewashii","Lou","Tu","Dui","Xi","Weng","Cang","Dang","Hong","Jie","Ai","Liu","Wu","Song","Qiao","Zi","Wei","Beng","Dian","Cuo","Qian","Yong","Nie","Cuo","Ji",,"Tao","Song","Zong","Jiang","Liao","Kang","Chan","Die","Cen","Ding","Tu","Lou","Zhang","Zhan","Zhan","Ao","Cao","Qu","Qiang","Zui","Zui","Dao","Dao","Xi","Yu","Bo","Long","Xiang","Ceng","Bo","Qin","Jiao","Yan","Lao","Zhan","Lin","Liao","Liao","Jin","Deng","Duo","Zun","Jiao","Gui","Yao","Qiao","Yao","Jue","Zhan","Yi","Xue","Nao","Ye","Ye","Yi","E","Xian","Ji","Xie","Ke","Xi","Di","Ao","Zui",,"Ni","Rong","Dao","Ling","Za","Yu","Yue","Yin",,"Jie","Li","Sui","Long","Long","Dian","Ying","Xi","Ju","Chan","Ying","Kui","Yan","Wei","Nao","Quan","Chao","Cuan","Luan","Dian","Dian",,"Yan","Yan","Yan","Nao","Yan","Chuan","Gui","Chuan","Zhou","Huang","Jing","Xun","Chao","Chao","Lie","Gong","Zuo","Qiao","Ju","Gong","Kek","Wu","Pwu","Pwu","Chai","Qiu","Qiu","Ji","Yi","Si","Ba","Zhi","Zhao","Xiang","Yi","Jin","Xun","Juan","Phas","Xun","Jin","Fu"],["Za","Bi","Shi","Bu","Ding","Shuai","Fan","Nie","Shi","Fen","Pa","Zhi","Xi","Hu","Dan","Wei","Zhang","Tang","Dai","Ma","Pei","Pa","Tie","Fu","Lian","Zhi","Zhou","Bo","Zhi","Di","Mo","Yi","Yi","Ping","Qia","Juan","Ru","Shuai","Dai","Zheng","Shui","Qiao","Zhen","Shi","Qun","Xi","Bang","Dai","Gui","Chou","Ping","Zhang","Sha","Wan","Dai","Wei","Chang","Sha","Qi","Ze","Guo","Mao","Du","Hou","Zheng","Xu","Mi","Wei","Wo","Fu","Yi","Bang","Ping","Tazuna","Gong","Pan","Huang","Dao","Mi","Jia","Teng","Hui","Zhong","Shan","Man","Mu","Biao","Guo","Ze","Mu","Bang","Zhang","Jiong","Chan","Fu","Zhi","Hu","Fan","Chuang","Bi","Hei",,"Mi","Qiao","Chan","Fen","Meng","Bang","Chou","Mie","Chu","Jie","Xian","Lan","Gan","Ping","Nian","Qian","Bing","Bing","Xing","Gan","Yao","Huan","You","You","Ji","Guang","Pi","Ting","Ze","Guang","Zhuang","Mo","Qing","Bi","Qin","Dun","Chuang","Gui","Ya","Bai","Jie","Xu","Lu","Wu",,"Ku","Ying","Di","Pao","Dian","Ya","Miao","Geng","Ci","Fu","Tong","Pang","Fei","Xiang","Yi","Zhi","Tiao","Zhi","Xiu","Du","Zuo","Xiao","Tu","Gui","Ku","Pang","Ting","You","Bu","Ding","Cheng","Lai","Bei","Ji","An","Shu","Kang","Yong","Tuo","Song","Shu","Qing","Yu","Yu","Miao","Sou","Ce","Xiang","Fei","Jiu","He","Hui","Liu","Sha","Lian","Lang","Sou","Jian","Pou","Qing","Jiu","Jiu","Qin","Ao","Kuo","Lou","Yin","Liao","Dai","Lu","Yi","Chu","Chan","Tu","Si","Xin","Miao","Chang","Wu","Fei","Guang","Koc","Kuai","Bi","Qiang","Xie","Lin","Lin","Liao","Lu",,"Ying","Xian","Ting","Yong","Li","Ting","Yin","Xun","Yan","Ting","Di","Po","Jian","Hui","Nai","Hui","Gong","Nian"],["Kai","Bian","Yi","Qi","Nong","Fen","Ju","Yan","Yi","Zang","Bi","Yi","Yi","Er","San","Shi","Er","Shi","Shi","Gong","Diao","Yin","Hu","Fu","Hong","Wu","Tui","Chi","Jiang","Ba","Shen","Di","Zhang","Jue","Tao","Fu","Di","Mi","Xian","Hu","Chao","Nu","Jing","Zhen","Yi","Mi","Quan","Wan","Shao","Ruo","Xuan","Jing","Dun","Zhang","Jiang","Qiang","Peng","Dan","Qiang","Bi","Bi","She","Dan","Jian","Gou","Sei","Fa","Bi","Kou","Nagi","Bie","Xiao","Dan","Kuo","Qiang","Hong","Mi","Kuo","Wan","Jue","Ji","Ji","Gui","Dang","Lu","Lu","Tuan","Hui","Zhi","Hui","Hui","Yi","Yi","Yi","Yi","Huo","Huo","Shan","Xing","Wen","Tong","Yan","Yan","Yu","Chi","Cai","Biao","Diao","Bin","Peng","Yong","Piao","Zhang","Ying","Chi","Chi","Zhuo","Tuo","Ji","Pang","Zhong","Yi","Wang","Che","Bi","Chi","Ling","Fu","Wang","Zheng","Cu","Wang","Jing","Dai","Xi","Xun","Hen","Yang","Huai","Lu","Hou","Wa","Cheng","Zhi","Xu","Jing","Tu","Cong",,"Lai","Cong","De","Pai","Xi",,"Qi","Chang","Zhi","Cong","Zhou","Lai","Yu","Xie","Jie","Jian","Chi","Jia","Bian","Huang","Fu","Xun","Wei","Pang","Yao","Wei","Xi","Zheng","Piao","Chi","De","Zheng","Zheng","Bie","De","Chong","Che","Jiao","Wei","Jiao","Hui","Mei","Long","Xiang","Bao","Qu","Xin","Shu","Bi","Yi","Le","Ren","Dao","Ding","Gai","Ji","Ren","Ren","Chan","Tan","Te","Te","Gan","Qi","Shi","Cun","Zhi","Wang","Mang","Xi","Fan","Ying","Tian","Min","Min","Zhong","Chong","Wu","Ji","Wu","Xi","Ye","You","Wan","Cong","Zhong","Kuai","Yu","Bian","Zhi","Qi","Cui","Chen","Tai","Tun","Qian","Nian","Hun","Xiong","Niu","Wang","Xian","Xin","Kang","Hu","Kai","Fen"],["Huai","Tai","Song","Wu","Ou","Chang","Chuang","Ju","Yi","Bao","Chao","Min","Pei","Zuo","Zen","Yang","Kou","Ban","Nu","Nao","Zheng","Pa","Bu","Tie","Gu","Hu","Ju","Da","Lian","Si","Chou","Di","Dai","Yi","Tu","You","Fu","Ji","Peng","Xing","Yuan","Ni","Guai","Fu","Xi","Bi","You","Qie","Xuan","Cong","Bing","Huang","Xu","Chu","Pi","Xi","Xi","Tan","Koraeru","Zong","Dui",,"Ki","Yi","Chi","Ren","Xun","Shi","Xi","Lao","Heng","Kuang","Mu","Zhi","Xie","Lian","Tiao","Huang","Die","Hao","Kong","Gui","Heng","Xi","Xiao","Shu","S","Kua","Qiu","Yang","Hui","Hui","Chi","Jia","Yi","Xiong","Guai","Lin","Hui","Zi","Xu","Chi","Xiang","Nu","Hen","En","Ke","Tong","Tian","Gong","Quan","Xi","Qia","Yue","Peng","Ken","De","Hui","E","Kyuu","Tong","Yan","Kai","Ce","Nao","Yun","Mang","Yong","Yong","Yuan","Pi","Kun","Qiao","Yue","Yu","Yu","Jie","Xi","Zhe","Lin","Ti","Han","Hao","Qie","Ti","Bu","Yi","Qian","Hui","Xi","Bei","Man","Yi","Heng","Song","Quan","Cheng","Hui","Wu","Wu","You","Li","Liang","Huan","Cong","Yi","Yue","Li","Nin","Nao","E","Que","Xuan","Qian","Wu","Min","Cong","Fei","Bei","Duo","Cui","Chang","Men","Li","Ji","Guan","Guan","Xing","Dao","Qi","Kong","Tian","Lun","Xi","Kan","Kun","Ni","Qing","Chou","Dun","Guo","Chan","Liang","Wan","Yuan","Jin","Ji","Lin","Yu","Huo","He","Quan","Tan","Ti","Ti","Nie","Wang","Chuo","Bu","Hun","Xi","Tang","Xin","Wei","Hui","E","Rui","Zong","Jian","Yong","Dian","Ju","Can","Cheng","De","Bei","Qie","Can","Dan","Guan","Duo","Nao","Yun","Xiang","Zhui","Die","Huang","Chun","Qiong","Re","Xing","Ce","Bian","Hun","Zong","Ti"],["Qiao","Chou","Bei","Xuan","Wei","Ge","Qian","Wei","Yu","Yu","Bi","Xuan","Huan","Min","Bi","Yi","Mian","Yong","Kai","Dang","Yin","E","Chen","Mou","Ke","Ke","Yu","Ai","Qie","Yan","Nuo","Gan","Yun","Zong","Sai","Leng","Fen",,"Kui","Kui","Que","Gong","Yun","Su","Su","Qi","Yao","Song","Huang","Ji","Gu","Ju","Chuang","Ni","Xie","Kai","Zheng","Yong","Cao","Sun","Shen","Bo","Kai","Yuan","Xie","Hun","Yong","Yang","Li","Sao","Tao","Yin","Ci","Xu","Qian","Tai","Huang","Yun","Shen","Ming",,"She","Cong","Piao","Mo","Mu","Guo","Chi","Can","Can","Can","Cui","Min","Te","Zhang","Tong","Ao","Shuang","Man","Guan","Que","Zao","Jiu","Hui","Kai","Lian","Ou","Song","Jin","Yin","Lu","Shang","Wei","Tuan","Man","Qian","She","Yong","Qing","Kang","Di","Zhi","Lou","Juan","Qi","Qi","Yu","Ping","Liao","Cong","You","Chong","Zhi","Tong","Cheng","Qi","Qu","Peng","Bei","Bie","Chun","Jiao","Zeng","Chi","Lian","Ping","Kui","Hui","Qiao","Cheng","Yin","Yin","Xi","Xi","Dan","Tan","Duo","Dui","Dui","Su","Jue","Ce","Xiao","Fan","Fen","Lao","Lao","Chong","Han","Qi","Xian","Min","Jing","Liao","Wu","Can","Jue","Cu","Xian","Tan","Sheng","Pi","Yi","Chu","Xian","Nao","Dan","Tan","Jing","Song","Han","Jiao","Wai","Huan","Dong","Qin","Qin","Qu","Cao","Ken","Xie","Ying","Ao","Mao","Yi","Lin","Se","Jun","Huai","Men","Lan","Ai","Lin","Yan","Gua","Xia","Chi","Yu","Yin","Dai","Meng","Ai","Meng","Dui","Qi","Mo","Lan","Men","Chou","Zhi","Nuo","Nuo","Yan","Yang","Bo","Zhi","Kuang","Kuang","You","Fu","Liu","Mie","Cheng",,"Chan","Meng","Lan","Huai","Xuan","Rang","Chan","Ji","Ju","Huan","She","Yi"],["Lian","Nan","Mi","Tang","Jue","Gang","Gang","Gang","Ge","Yue","Wu","Jian","Xu","Shu","Rong","Xi","Cheng","Wo","Jie","Ge","Jian","Qiang","Huo","Qiang","Zhan","Dong","Qi","Jia","Die","Zei","Jia","Ji","Shi","Kan","Ji","Kui","Gai","Deng","Zhan","Chuang","Ge","Jian","Jie","Yu","Jian","Yan","Lu","Xi","Zhan","Xi","Xi","Chuo","Dai","Qu","Hu","Hu","Hu","E","Shi","Li","Mao","Hu","Li","Fang","Suo","Bian","Dian","Jiong","Shang","Yi","Yi","Shan","Hu","Fei","Yan","Shou","T","Cai","Zha","Qiu","Le","Bu","Ba","Da","Reng","Fu","Hameru","Zai","Tuo","Zhang","Diao","Kang","Yu","Ku","Han","Shen","Cha","Yi","Gu","Kou","Wu","Tuo","Qian","Zhi","Ren","Kuo","Men","Sao","Yang","Niu","Ban","Che","Rao","Xi","Qian","Ban","Jia","Yu","Fu","Ao","Xi","Pi","Zhi","Zi","E","Dun","Zhao","Cheng","Ji","Yan","Kuang","Bian","Chao","Ju","Wen","Hu","Yue","Jue","Ba","Qin","Zhen","Zheng","Yun","Wan","Nu","Yi","Shu","Zhua","Pou","Tou","Dou","Kang","Zhe","Pou","Fu","Pao","Ba","Ao","Ze","Tuan","Kou","Lun","Qiang",,"Hu","Bao","Bing","Zhi","Peng","Tan","Pu","Pi","Tai","Yao","Zhen","Zha","Yang","Bao","He","Ni","Yi","Di","Chi","Pi","Za","Mo","Mo","Shen","Ya","Chou","Qu","Min","Chu","Jia","Fu","Zhan","Zhu","Dan","Chai","Mu","Nian","La","Fu","Pao","Ban","Pai","Ling","Na","Guai","Qian","Ju","Tuo","Ba","Tuo","Tuo","Ao","Ju","Zhuo","Pan","Zhao","Bai","Bai","Di","Ni","Ju","Kuo","Long","Jian",,"Yong","Lan","Ning","Bo","Ze","Qian","Hen","Gua","Shi","Jie","Zheng","Nin","Gong","Gong","Quan","Shuan","Cun","Zan","Kao","Chi","Xie","Ce","Hui","Pin","Zhuai","Shi","Na"],["Bo","Chi","Gua","Zhi","Kuo","Duo","Duo","Zhi","Qie","An","Nong","Zhen","Ge","Jiao","Ku","Dong","Ru","Tiao","Lie","Zha","Lu","Die","Wa","Jue","Mushiru","Ju","Zhi","Luan","Ya","Zhua","Ta","Xie","Nao","Dang","Jiao","Zheng","Ji","Hui","Xun","Ku","Ai","Tuo","Nuo","Cuo","Bo","Geng","Ti","Zhen","Cheng","Suo","Suo","Keng","Mei","Long","Ju","Peng","Jian","Yi","Ting","Shan","Nuo","Wan","Xie","Cha","Feng","Jiao","Wu","Jun","Jiu","Tong","Kun","Huo","Tu","Zhuo","Pou","Le","Ba","Han","Shao","Nie","Juan","Ze","Song","Ye","Jue","Bu","Huan","Bu","Zun","Yi","Zhai","Lu","Sou","Tuo","Lao","Sun","Bang","Jian","Huan","Dao",,"Wan","Qin","Peng","She","Lie","Min","Men","Fu","Bai","Ju","Dao","Wo","Ai","Juan","Yue","Zong","Chen","Chui","Jie","Tu","Ben","Na","Nian","Nuo","Zu","Wo","Xi","Xian","Cheng","Dian","Sao","Lun","Qing","Gang","Duo","Shou","Diao","Pou","Di","Zhang","Gun","Ji","Tao","Qia","Qi","Pai","Shu","Qian","Ling","Yi","Ya","Jue","Zheng","Liang","Gua","Yi","Huo","Shan","Zheng","Lue","Cai","Tan","Che","Bing","Jie","Ti","Kong","Tui","Yan","Cuo","Zou","Ju","Tian","Qian","Ken","Bai","Shou","Jie","Lu","Guo","Haba",,"Zhi","Dan","Mang","Xian","Sao","Guan","Peng","Yuan","Nuo","Jian","Zhen","Jiu","Jian","Yu","Yan","Kui","Nan","Hong","Rou","Pi","Wei","Sai","Zou","Xuan","Miao","Ti","Nie","Cha","Shi","Zong","Zhen","Yi","Shun","Heng","Bian","Yang","Huan","Yan","Zuan","An","Xu","Ya","Wo","Ke","Chuai","Ji","Ti","La","La","Cheng","Kai","Jiu","Jiu","Tu","Jie","Hui","Geng","Chong","Shuo","She","Xie","Yuan","Qian","Ye","Cha","Zha","Bei","Yao",,,"Lan","Wen","Qin"],["Chan","Ge","Lou","Zong","Geng","Jiao","Gou","Qin","Yong","Que","Chou","Chi","Zhan","Sun","Sun","Bo","Chu","Rong","Beng","Cuo","Sao","Ke","Yao","Dao","Zhi","Nu","Xie","Jian","Sou","Qiu","Gao","Xian","Shuo","Sang","Jin","Mie","E","Chui","Nuo","Shan","Ta","Jie","Tang","Pan","Ban","Da","Li","Tao","Hu","Zhi","Wa","Xia","Qian","Wen","Qiang","Tian","Zhen","E","Xi","Nuo","Quan","Cha","Zha","Ge","Wu","En","She","Kang","She","Shu","Bai","Yao","Bin","Sou","Tan","Sa","Chan","Suo","Liao","Chong","Chuang","Guo","Bing","Feng","Shuai","Di","Qi","Sou","Zhai","Lian","Tang","Chi","Guan","Lu","Luo","Lou","Zong","Gai","Hu","Zha","Chuang","Tang","Hua","Cui","Nai","Mo","Jiang","Gui","Ying","Zhi","Ao","Zhi","Nie","Man","Shan","Kou","Shu","Suo","Tuan","Jiao","Mo","Mo","Zhe","Xian","Keng","Piao","Jiang","Yin","Gou","Qian","Lue","Ji","Ying","Jue","Pie","Pie","Lao","Dun","Xian","Ruan","Kui","Zan","Yi","Xun","Cheng","Cheng","Sa","Nao","Heng","Si","Qian","Huang","Da","Zun","Nian","Lin","Zheng","Hui","Zhuang","Jiao","Ji","Cao","Dan","Dan","Che","Bo","Che","Jue","Xiao","Liao","Ben","Fu","Qiao","Bo","Cuo","Zhuo","Zhuan","Tuo","Pu","Qin","Dun","Nian",,"Xie","Lu","Jiao","Cuan","Ta","Han","Qiao","Zhua","Jian","Gan","Yong","Lei","Kuo","Lu","Shan","Zhuo","Ze","Pu","Chuo","Ji","Dang","Suo","Cao","Qing","Jing","Huan","Jie","Qin","Kuai","Dan","Xi","Ge","Pi","Bo","Ao","Ju","Ye",,"Mang","Sou","Mi","Ji","Tai","Zhuo","Dao","Xing","Lan","Ca","Ju","Ye","Ru","Ye","Ye","Ni","Hu","Ji","Bin","Ning","Ge","Zhi","Jie","Kuo","Mo","Jian","Xie","Lie","Tan","Bai","Sou","Lu","Lue","Rao","Zhi"],["Pan","Yang","Lei","Sa","Shu","Zan","Nian","Xian","Jun","Huo","Li","La","Han","Ying","Lu","Long","Qian","Qian","Zan","Qian","Lan","San","Ying","Mei","Rang","Chan",,"Cuan","Xi","She","Luo","Jun","Mi","Li","Zan","Luan","Tan","Zuan","Li","Dian","Wa","Dang","Jiao","Jue","Lan","Li","Nang","Zhi","Gui","Gui","Qi","Xin","Pu","Sui","Shou","Kao","You","Gai","Yi","Gong","Gan","Ban","Fang","Zheng","Bo","Dian","Kou","Min","Wu","Gu","He","Ce","Xiao","Mi","Chu","Ge","Di","Xu","Jiao","Min","Chen","Jiu","Zhen","Duo","Yu","Chi","Ao","Bai","Xu","Jiao","Duo","Lian","Nie","Bi","Chang","Dian","Duo","Yi","Gan","San","Ke","Yan","Dun","Qi","Dou","Xiao","Duo","Jiao","Jing","Yang","Xia","Min","Shu","Ai","Qiao","Ai","Zheng","Di","Zhen","Fu","Shu","Liao","Qu","Xiong","Xi","Jiao","Sen","Jiao","Zhuo","Yi","Lian","Bi","Li","Xiao","Xiao","Wen","Xue","Qi","Qi","Zhai","Bin","Jue","Zhai",,"Fei","Ban","Ban","Lan","Yu","Lan","Wei","Dou","Sheng","Liao","Jia","Hu","Xie","Jia","Yu","Zhen","Jiao","Wo","Tou","Chu","Jin","Chi","Yin","Fu","Qiang","Zhan","Qu","Zhuo","Zhan","Duan","Zhuo","Si","Xin","Zhuo","Zhuo","Qin","Lin","Zhuo","Chu","Duan","Zhu","Fang","Xie","Hang","Yu","Shi","Pei","You","Mye","Pang","Qi","Zhan","Mao","Lu","Pei","Pi","Liu","Fu","Fang","Xuan","Jing","Jing","Ni","Zu","Zhao","Yi","Liu","Shao","Jian","Es","Yi","Qi","Zhi","Fan","Piao","Fan","Zhan","Guai","Sui","Yu","Wu","Ji","Ji","Ji","Huo","Ri","Dan","Jiu","Zhi","Zao","Xie","Tiao","Xun","Xu","Xu","Xu","Gan","Han","Tai","Di","Xu","Chan","Shi","Kuang","Yang","Shi","Wang","Min","Min","Tun","Chun","Wu"],["Yun","Bei","Ang","Ze","Ban","Jie","Kun","Sheng","Hu","Fang","Hao","Gui","Chang","Xuan","Ming","Hun","Fen","Qin","Hu","Yi","Xi","Xin","Yan","Ze","Fang","Tan","Shen","Ju","Yang","Zan","Bing","Xing","Ying","Xuan","Pei","Zhen","Ling","Chun","Hao","Mei","Zuo","Mo","Bian","Xu","Hun","Zhao","Zong","Shi","Shi","Yu","Fei","Die","Mao","Ni","Chang","Wen","Dong","Ai","Bing","Ang","Zhou","Long","Xian","Kuang","Tiao","Chao","Shi","Huang","Huang","Xuan","Kui","Xu","Jiao","Jin","Zhi","Jin","Shang","Tong","Hong","Yan","Gai","Xiang","Shai","Xiao","Ye","Yun","Hui","Han","Han","Jun","Wan","Xian","Kun","Zhou","Xi","Cheng","Sheng","Bu","Zhe","Zhe","Wu","Han","Hui","Hao","Chen","Wan","Tian","Zhuo","Zui","Zhou","Pu","Jing","Xi","Shan","Yi","Xi","Qing","Qi","Jing","Gui","Zhen","Yi","Zhi","An","Wan","Lin","Liang","Chang","Wang","Xiao","Zan","Hi","Xuan","Xuan","Yi","Xia","Yun","Hui","Fu","Min","Kui","He","Ying","Du","Wei","Shu","Qing","Mao","Nan","Jian","Nuan","An","Yang","Chun","Yao","Suo","Jin","Ming","Jiao","Kai","Gao","Weng","Chang","Qi","Hao","Yan","Li","Ai","Ji","Gui","Men","Zan","Xie","Hao","Mu","Mo","Cong","Ni","Zhang","Hui","Bao","Han","Xuan","Chuan","Liao","Xian","Dan","Jing","Pie","Lin","Tun","Xi","Yi","Ji","Huang","Tai","Ye","Ye","Li","Tan","Tong","Xiao","Fei","Qin","Zhao","Hao","Yi","Xiang","Xing","Sen","Jiao","Bao","Jing","Yian","Ai","Ye","Ru","Shu","Meng","Xun","Yao","Pu","Li","Chen","Kuang","Die",,"Yan","Huo","Lu","Xi","Rong","Long","Nang","Luo","Luan","Shai","Tang","Yan","Chu","Yue","Yue","Qu","Yi","Geng","Ye","Hu","He","Shu","Cao","Cao","Noboru","Man","Ceng","Ceng","Ti"],["Zui","Can","Xu","Hui","Yin","Qie","Fen","Pi","Yue","You","Ruan","Peng","Ban","Fu","Ling","Fei","Qu",,"Nu","Tiao","Shuo","Zhen","Lang","Lang","Juan","Ming","Huang","Wang","Tun","Zhao","Ji","Qi","Ying","Zong","Wang","Tong","Lang",,"Meng","Long","Mu","Deng","Wei","Mo","Ben","Zha","Zhu","Zhu",,"Zhu","Ren","Ba","Po","Duo","Duo","Dao","Li","Qiu","Ji","Jiu","Bi","Xiu","Ting","Ci","Sha","Eburi","Za","Quan","Qian","Yu","Gan","Wu","Cha","Shan","Xun","Fan","Wu","Zi","Li","Xing","Cai","Cun","Ren","Shao","Tuo","Di","Zhang","Mang","Chi","Yi","Gu","Gong","Du","Yi","Qi","Shu","Gang","Tiao","Moku","Soma","Tochi","Lai","Sugi","Mang","Yang","Ma","Miao","Si","Yuan","Hang","Fei","Bei","Jie","Dong","Gao","Yao","Xian","Chu","Qun","Pa","Shu","Hua","Xin","Chou","Zhu","Chou","Song","Ban","Song","Ji","Yue","Jin","Gou","Ji","Mao","Pi","Bi","Wang","Ang","Fang","Fen","Yi","Fu","Nan","Xi","Hu","Ya","Dou","Xun","Zhen","Yao","Lin","Rui","E","Mei","Zhao","Guo","Zhi","Cong","Yun","Waku","Dou","Shu","Zao",,"Li","Haze","Jian","Cheng","Matsu","Qiang","Feng","Nan","Xiao","Xian","Ku","Ping","Yi","Xi","Zhi","Guai","Xiao","Jia","Jia","Gou","Fu","Mo","Yi","Ye","Ye","Shi","Nie","Bi","Duo","Yi","Ling","Bing","Ni","La","He","Pan","Fan","Zhong","Dai","Ci","Yang","Fu","Bo","Mou","Gan","Qi","Ran","Rou","Mao","Zhao","Song","Zhe","Xia","You","Shen","Ju","Tuo","Zuo","Nan","Ning","Yong","Di","Zhi","Zha","Cha","Dan","Gu","Pu","Jiu","Ao","Fu","Jian","Bo","Duo","Ke","Nai","Zhu","Bi","Liu","Chai","Zha","Si","Zhu","Pei","Shi","Guai","Cha","Yao","Jue","Jiu","Shi"],["Zhi","Liu","Mei","Hoy","Rong","Zha",,"Biao","Zhan","Jie","Long","Dong","Lu","Sayng","Li","Lan","Yong","Shu","Xun","Shuan","Qi","Zhen","Qi","Li","Yi","Xiang","Zhen","Li","Su","Gua","Kan","Bing","Ren","Xiao","Bo","Ren","Bing","Zi","Chou","Yi","Jie","Xu","Zhu","Jian","Zui","Er","Er","You","Fa","Gong","Kao","Lao","Zhan","Li","Yin","Yang","He","Gen","Zhi","Chi","Ge","Zai","Luan","Fu","Jie","Hang","Gui","Tao","Guang","Wei","Kuang","Ru","An","An","Juan","Yi","Zhuo","Ku","Zhi","Qiong","Tong","Sang","Sang","Huan","Jie","Jiu","Xue","Duo","Zhui","Yu","Zan","Kasei","Ying","Masu",,"Zhan","Ya","Nao","Zhen","Dang","Qi","Qiao","Hua","Kuai","Jiang","Zhuang","Xun","Suo","Sha","Zhen","Bei","Ting","Gua","Jing","Bo","Ben","Fu","Rui","Tong","Jue","Xi","Lang","Liu","Feng","Qi","Wen","Jun","Gan","Cu","Liang","Qiu","Ting","You","Mei","Bang","Long","Peng","Zhuang","Di","Xuan","Tu","Zao","Ao","Gu","Bi","Di","Han","Zi","Zhi","Ren","Bei","Geng","Jian","Huan","Wan","Nuo","Jia","Tiao","Ji","Xiao","Lu","Huan","Shao","Cen","Fen","Song","Meng","Wu","Li","Li","Dou","Cen","Ying","Suo","Ju","Ti","Jie","Kun","Zhuo","Shu","Chan","Fan","Wei","Jing","Li","Bing","Fumoto","Shikimi","Tao","Zhi","Lai","Lian","Jian","Zhuo","Ling","Li","Qi","Bing","Zhun","Cong","Qian","Mian","Qi","Qi","Cai","Gun","Chan","Te","Fei","Pai","Bang","Pou","Hun","Zong","Cheng","Zao","Ji","Li","Peng","Yu","Yu","Gu","Hun","Dong","Tang","Gang","Wang","Di","Xi","Fan","Cheng","Zhan","Qi","Yuan","Yan","Yu","Quan","Yi","Sen","Ren","Chui","Leng","Qi","Zhuo","Fu","Ke","Lai","Zou","Zou","Zhuo","Guan","Fen","Fen","Chen","Qiong","Nie"],["Wan","Guo","Lu","Hao","Jie","Yi","Chou","Ju","Ju","Cheng","Zuo","Liang","Qiang","Zhi","Zhui","Ya","Ju","Bei","Jiao","Zhuo","Zi","Bin","Peng","Ding","Chu","Chang","Kunugi","Momiji","Jian","Gui","Xi","Du","Qian","Kunugi","Soko","Shide","Luo","Zhi","Ken","Myeng","Tafu",,"Peng","Zhan",,"Tuo","Sen","Duo","Ye","Fou","Wei","Wei","Duan","Jia","Zong","Jian","Yi","Shen","Xi","Yan","Yan","Chuan","Zhan","Chun","Yu","He","Zha","Wo","Pian","Bi","Yao","Huo","Xu","Ruo","Yang","La","Yan","Ben","Hun","Kui","Jie","Kui","Si","Feng","Xie","Tuo","Zhi","Jian","Mu","Mao","Chu","Hu","Hu","Lian","Leng","Ting","Nan","Yu","You","Mei","Song","Xuan","Xuan","Ying","Zhen","Pian","Ye","Ji","Jie","Ye","Chu","Shun","Yu","Cou","Wei","Mei","Di","Ji","Jie","Kai","Qiu","Ying","Rou","Heng","Lou","Le","Hazou","Katsura","Pin","Muro","Gai","Tan","Lan","Yun","Yu","Chen","Lu","Ju","Sakaki",,"Pi","Xie","Jia","Yi","Zhan","Fu","Nai","Mi","Lang","Rong","Gu","Jian","Ju","Ta","Yao","Zhen","Bang","Sha","Yuan","Zi","Ming","Su","Jia","Yao","Jie","Huang","Gan","Fei","Zha","Qian","Ma","Sun","Yuan","Xie","Rong","Shi","Zhi","Cui","Yun","Ting","Liu","Rong","Tang","Que","Zhai","Si","Sheng","Ta","Ke","Xi","Gu","Qi","Kao","Gao","Sun","Pan","Tao","Ge","Xun","Dian","Nou","Ji","Shuo","Gou","Chui","Qiang","Cha","Qian","Huai","Mei","Xu","Gang","Gao","Zhuo","Tuo","Hashi","Yang","Dian","Jia","Jian","Zui","Kashi","Ori","Bin","Zhu",,"Xi","Qi","Lian","Hui","Yong","Qian","Guo","Gai","Gai","Tuan","Hua","Cu","Sen","Cui","Beng","You","Hu","Jiang","Hu","Huan","Kui","Yi","Nie","Gao","Kang","Gui","Gui","Cao","Man","Jin"],["Di","Zhuang","Le","Lang","Chen","Cong","Li","Xiu","Qing","Shuang","Fan","Tong","Guan","Ji","Suo","Lei","Lu","Liang","Mi","Lou","Chao","Su","Ke","Shu","Tang","Biao","Lu","Jiu","Shu","Zha","Shu","Zhang","Men","Mo","Niao","Yang","Tiao","Peng","Zhu","Sha","Xi","Quan","Heng","Jian","Cong",,"Hokuso","Qiang","Tara","Ying","Er","Xin","Zhi","Qiao","Zui","Cong","Pu","Shu","Hua","Kui","Zhen","Zun","Yue","Zhan","Xi","Xun","Dian","Fa","Gan","Mo","Wu","Qiao","Nao","Lin","Liu","Qiao","Xian","Run","Fan","Zhan","Tuo","Lao","Yun","Shun","Tui","Cheng","Tang","Meng","Ju","Cheng","Su","Jue","Jue","Tan","Hui","Ji","Nuo","Xiang","Tuo","Ning","Rui","Zhu","Chuang","Zeng","Fen","Qiong","Ran","Heng","Cen","Gu","Liu","Lao","Gao","Chu","Zusa","Nude","Ca","San","Ji","Dou","Shou","Lu",,,"Yuan","Ta","Shu","Jiang","Tan","Lin","Nong","Yin","Xi","Sui","Shan","Zui","Xuan","Cheng","Gan","Ju","Zui","Yi","Qin","Pu","Yan","Lei","Feng","Hui","Dang","Ji","Sui","Bo","Bi","Ding","Chu","Zhua","Kuai","Ji","Jie","Jia","Qing","Zhe","Jian","Qiang","Dao","Yi","Biao","Song","She","Lin","Kunugi","Cha","Meng","Yin","Tao","Tai","Mian","Qi","Toan","Bin","Huo","Ji","Qian","Mi","Ning","Yi","Gao","Jian","Yin","Er","Qing","Yan","Qi","Mi","Zhao","Gui","Chun","Ji","Kui","Po","Deng","Chu",,"Mian","You","Zhi","Guang","Qian","Lei","Lei","Sa","Lu","Li","Cuan","Lu","Mie","Hui","Ou","Lu","Jie","Gao","Du","Yuan","Li","Fei","Zhuo","Sou","Lian","Tamo","Chu",,"Zhu","Lu","Yan","Li","Zhu","Chen","Jie","E","Su","Huai","Nie","Yu","Long","Lai",,"Xian","Kwi","Ju","Xiao","Ling","Ying","Jian","Yin","You","Ying"],["Xiang","Nong","Bo","Chan","Lan","Ju","Shuang","She","Wei","Cong","Quan","Qu","Cang",,"Yu","Luo","Li","Zan","Luan","Dang","Jue","Em","Lan","Lan","Zhu","Lei","Li","Ba","Nang","Yu","Ling","Tsuki","Qian","Ci","Huan","Xin","Yu","Yu","Qian","Ou","Xu","Chao","Chu","Chi","Kai","Yi","Jue","Xi","Xu","Xia","Yu","Kuai","Lang","Kuan","Shuo","Xi","Ai","Yi","Qi","Hu","Chi","Qin","Kuan","Kan","Kuan","Kan","Chuan","Sha","Gua","Yin","Xin","Xie","Yu","Qian","Xiao","Yi","Ge","Wu","Tan","Jin","Ou","Hu","Ti","Huan","Xu","Pen","Xi","Xiao","Xu","Xi","Sen","Lian","Chu","Yi","Kan","Yu","Chuo","Huan","Zhi","Zheng","Ci","Bu","Wu","Qi","Bu","Bu","Wai","Ju","Qian","Chi","Se","Chi","Se","Zhong","Sui","Sui","Li","Cuo","Yu","Li","Gui","Dai","Dai","Si","Jian","Zhe","Mo","Mo","Yao","Mo","Cu","Yang","Tian","Sheng","Dai","Shang","Xu","Xun","Shu","Can","Jue","Piao","Qia","Qiu","Su","Qing","Yun","Lian","Yi","Fou","Zhi","Ye","Can","Hun","Dan","Ji","Ye","Zhen","Yun","Wen","Chou","Bin","Ti","Jin","Shang","Yin","Diao","Cu","Hui","Cuan","Yi","Dan","Du","Jiang","Lian","Bin","Du","Tsukusu","Jian","Shu","Ou","Duan","Zhu","Yin","Qing","Yi","Sha","Que","Ke","Yao","Jun","Dian","Hui","Hui","Gu","Que","Ji","Yi","Ou","Hui","Duan","Yi","Xiao","Wu","Guan","Mu","Mei","Mei","Ai","Zuo","Du","Yu","Bi","Bi","Bi","Pi","Pi","Bi","Chan","Mao",,,"Pu","Mushiru","Jia","Zhan","Sai","Mu","Tuo","Xun","Er","Rong","Xian","Ju","Mu","Hao","Qiu","Dou","Mushiru","Tan","Pei","Ju","Duo","Cui","Bi","San",,"Mao","Sui","Yu","Yu","Tuo","He","Jian","Ta","San"],["Lu","Mu","Li","Tong","Rong","Chang","Pu","Luo","Zhan","Sao","Zhan","Meng","Luo","Qu","Die","Shi","Di","Min","Jue","Mang","Qi","Pie","Nai","Qi","Dao","Xian","Chuan","Fen","Ri","Nei",,"Fu","Shen","Dong","Qing","Qi","Yin","Xi","Hai","Yang","An","Ya","Ke","Qing","Ya","Dong","Dan","Lu","Qing","Yang","Yun","Yun","Shui","San","Zheng","Bing","Yong","Dang","Shitamizu","Le","Ni","Tun","Fan","Gui","Ting","Zhi","Qiu","Bin","Ze","Mian","Cuan","Hui","Diao","Han","Cha","Zhuo","Chuan","Wan","Fan","Dai","Xi","Tuo","Mang","Qiu","Qi","Shan","Pai","Han","Qian","Wu","Wu","Xun","Si","Ru","Gong","Jiang","Chi","Wu","Tsuchi",,"Tang","Zhi","Chi","Qian","Mi","Yu","Wang","Qing","Jing","Rui","Jun","Hong","Tai","Quan","Ji","Bian","Bian","Gan","Wen","Zhong","Fang","Xiong","Jue","Hang","Niou","Qi","Fen","Xu","Xu","Qin","Yi","Wo","Yun","Yuan","Hang","Yan","Shen","Chen","Dan","You","Dun","Hu","Huo","Qie","Mu","Rou","Mei","Ta","Mian","Wu","Chong","Tian","Bi","Sha","Zhi","Pei","Pan","Zhui","Za","Gou","Liu","Mei","Ze","Feng","Ou","Li","Lun","Cang","Feng","Wei","Hu","Mo","Mei","Shu","Ju","Zan","Tuo","Tuo","Tuo","He","Li","Mi","Yi","Fa","Fei","You","Tian","Zhi","Zhao","Gu","Zhan","Yan","Si","Kuang","Jiong","Ju","Xie","Qiu","Yi","Jia","Zhong","Quan","Bo","Hui","Mi","Ben","Zhuo","Chu","Le","You","Gu","Hong","Gan","Fa","Mao","Si","Hu","Ping","Ci","Fan","Chi","Su","Ning","Cheng","Ling","Pao","Bo","Qi","Si","Ni","Ju","Yue","Zhu","Sheng","Lei","Xuan","Xue","Fu","Pan","Min","Tai","Yang","Ji","Yong","Guan","Beng","Xue","Long","Lu",,"Bo","Xie","Po","Ze","Jing","Yin"],["Zhou","Ji","Yi","Hui","Hui","Zui","Cheng","Yin","Wei","Hou","Jian","Yang","Lie","Si","Ji","Er","Xing","Fu","Sa","Suo","Zhi","Yin","Wu","Xi","Kao","Zhu","Jiang","Luo",,"An","Dong","Yi","Mou","Lei","Yi","Mi","Quan","Jin","Mo","Wei","Xiao","Xie","Hong","Xu","Shuo","Kuang","Tao","Qie","Ju","Er","Zhou","Ru","Ping","Xun","Xiong","Zhi","Guang","Huan","Ming","Huo","Wa","Qia","Pai","Wu","Qu","Liu","Yi","Jia","Jing","Qian","Jiang","Jiao","Cheng","Shi","Zhuo","Ce","Pal","Kuai","Ji","Liu","Chan","Hun","Hu","Nong","Xun","Jin","Lie","Qiu","Wei","Zhe","Jun","Han","Bang","Mang","Zhuo","You","Xi","Bo","Dou","Wan","Hong","Yi","Pu","Ying","Lan","Hao","Lang","Han","Li","Geng","Fu","Wu","Lian","Chun","Feng","Yi","Yu","Tong","Lao","Hai","Jin","Jia","Chong","Weng","Mei","Sui","Cheng","Pei","Xian","Shen","Tu","Kun","Pin","Nie","Han","Jing","Xiao","She","Nian","Tu","Yong","Xiao","Xian","Ting","E","Su","Tun","Juan","Cen","Ti","Li","Shui","Si","Lei","Shui","Tao","Du","Lao","Lai","Lian","Wei","Wo","Yun","Huan","Di",,"Run","Jian","Zhang","Se","Fu","Guan","Xing","Shou","Shuan","Ya","Chuo","Zhang","Ye","Kong","Wo","Han","Tuo","Dong","He","Wo","Ju","Gan","Liang","Hun","Ta","Zhuo","Dian","Qie","De","Juan","Zi","Xi","Yao","Qi","Gu","Guo","Han","Lin","Tang","Zhou","Peng","Hao","Chang","Shu","Qi","Fang","Chi","Lu","Nao","Ju","Tao","Cong","Lei","Zhi","Peng","Fei","Song","Tian","Pi","Dan","Yu","Ni","Yu","Lu","Gan","Mi","Jing","Ling","Lun","Yin","Cui","Qu","Huai","Yu","Nian","Shen","Piao","Chun","Wa","Yuan","Lai","Hun","Qing","Yan","Qian","Tian","Miao","Zhi","Yin","Mi"],["Ben","Yuan","Wen","Re","Fei","Qing","Yuan","Ke","Ji","She","Yuan","Shibui","Lu","Zi","Du",,"Jian","Min","Pi","Tani","Yu","Yuan","Shen","Shen","Rou","Huan","Zhu","Jian","Nuan","Yu","Qiu","Ting","Qu","Du","Feng","Zha","Bo","Wo","Wo","Di","Wei","Wen","Ru","Xie","Ce","Wei","Ge","Gang","Yan","Hong","Xuan","Mi","Ke","Mao","Ying","Yan","You","Hong","Miao","Xing","Mei","Zai","Hun","Nai","Kui","Shi","E","Pai","Mei","Lian","Qi","Qi","Mei","Tian","Cou","Wei","Can","Tuan","Mian","Hui","Mo","Xu","Ji","Pen","Jian","Jian","Hu","Feng","Xiang","Yi","Yin","Zhan","Shi","Jie","Cheng","Huang","Tan","Yu","Bi","Min","Shi","Tu","Sheng","Yong","Qu","Zhong","Suei","Jiu","Jiao","Qiou","Yin","Tang","Long","Huo","Yuan","Nan","Ban","You","Quan","Chui","Liang","Chan","Yan","Chun","Nie","Zi","Wan","Shi","Man","Ying","Ratsu","Kui",,"Jian","Xu","Lu","Gui","Gai",,,"Po","Jin","Gui","Tang","Yuan","Suo","Yuan","Lian","Yao","Meng","Zhun","Sheng","Ke","Tai","Da","Wa","Liu","Gou","Sao","Ming","Zha","Shi","Yi","Lun","Ma","Pu","Wei","Li","Cai","Wu","Xi","Wen","Qiang","Ze","Shi","Su","Yi","Zhen","Sou","Yun","Xiu","Yin","Rong","Hun","Su","Su","Ni","Ta","Shi","Ru","Wei","Pan","Chu","Chu","Pang","Weng","Cang","Mie","He","Dian","Hao","Huang","Xi","Zi","Di","Zhi","Ying","Fu","Jie","Hua","Ge","Zi","Tao","Teng","Sui","Bi","Jiao","Hui","Gun","Yin","Gao","Long","Zhi","Yan","She","Man","Ying","Chun","Lu","Lan","Luan",,"Bin","Tan","Yu","Sou","Hu","Bi","Biao","Zhi","Jiang","Kou","Shen","Shang","Di","Mi","Ao","Lu","Hu","Hu","You","Chan","Fan","Yong","Gun","Man"],["Qing","Yu","Piao","Ji","Ya","Jiao","Qi","Xi","Ji","Lu","Lu","Long","Jin","Guo","Cong","Lou","Zhi","Gai","Qiang","Li","Yan","Cao","Jiao","Cong","Qun","Tuan","Ou","Teng","Ye","Xi","Mi","Tang","Mo","Shang","Han","Lian","Lan","Wa","Li","Qian","Feng","Xuan","Yi","Man","Zi","Mang","Kang","Lei","Peng","Shu","Zhang","Zhang","Chong","Xu","Huan","Kuo","Jian","Yan","Chuang","Liao","Cui","Ti","Yang","Jiang","Cong","Ying","Hong","Xun","Shu","Guan","Ying","Xiao",,,"Xu","Lian","Zhi","Wei","Pi","Jue","Jiao","Po","Dang","Hui","Jie","Wu","Pa","Ji","Pan","Gui","Xiao","Qian","Qian","Xi","Lu","Xi","Xuan","Dun","Huang","Min","Run","Su","Liao","Zhen","Zhong","Yi","Di","Wan","Dan","Tan","Chao","Xun","Kui","Yie","Shao","Tu","Zhu","San","Hei","Bi","Shan","Chan","Chan","Shu","Tong","Pu","Lin","Wei","Se","Se","Cheng","Jiong","Cheng","Hua","Jiao","Lao","Che","Gan","Cun","Heng","Si","Shu","Peng","Han","Yun","Liu","Hong","Fu","Hao","He","Xian","Jian","Shan","Xi","Oki",,"Lan",,"Yu","Lin","Min","Zao","Dang","Wan","Ze","Xie","Yu","Li","Shi","Xue","Ling","Man","Zi","Yong","Kuai","Can","Lian","Dian","Ye","Ao","Huan","Zhen","Chan","Man","Dan","Dan","Yi","Sui","Pi","Ju","Ta","Qin","Ji","Zhuo","Lian","Nong","Guo","Jin","Fen","Se","Ji","Sui","Hui","Chu","Ta","Song","Ding",,"Zhu","Lai","Bin","Lian","Mi","Shi","Shu","Mi","Ning","Ying","Ying","Meng","Jin","Qi","Pi","Ji","Hao","Ru","Zui","Wo","Tao","Yin","Yin","Dui","Ci","Huo","Jing","Lan","Jun","Ai","Pu","Zhuo","Wei","Bin","Gu","Qian","Xing","Hama","Kuo","Fei",,"Boku","Jian","Wei","Luo","Zan","Lu","Li"],["You","Yang","Lu","Si","Jie","Ying","Du","Wang","Hui","Xie","Pan","Shen","Biao","Chan","Mo","Liu","Jian","Pu","Se","Cheng","Gu","Bin","Huo","Xian","Lu","Qin","Han","Ying","Yong","Li","Jing","Xiao","Ying","Sui","Wei","Xie","Huai","Hao","Zhu","Long","Lai","Dui","Fan","Hu","Lai",,,"Ying","Mi","Ji","Lian","Jian","Ying","Fen","Lin","Yi","Jian","Yue","Chan","Dai","Rang","Jian","Lan","Fan","Shuang","Yuan","Zhuo","Feng","She","Lei","Lan","Cong","Qu","Yong","Qian","Fa","Guan","Que","Yan","Hao","Hyeng","Sa","Zan","Luan","Yan","Li","Mi","Shan","Tan","Dang","Jiao","Chan",,"Hao","Ba","Zhu","Lan","Lan","Nang","Wan","Luan","Xun","Xian","Yan","Gan","Yan","Yu","Huo","Si","Mie","Guang","Deng","Hui","Xiao","Xiao","Hu","Hong","Ling","Zao","Zhuan","Jiu","Zha","Xie","Chi","Zhuo","Zai","Zai","Can","Yang","Qi","Zhong","Fen","Niu","Jiong","Wen","Po","Yi","Lu","Chui","Pi","Kai","Pan","Yan","Kai","Pang","Mu","Chao","Liao","Gui","Kang","Tun","Guang","Xin","Zhi","Guang","Guang","Wei","Qiang",,"Da","Xia","Zheng","Zhu","Ke","Zhao","Fu","Ba","Duo","Duo","Ling","Zhuo","Xuan","Ju","Tan","Pao","Jiong","Pao","Tai","Tai","Bing","Yang","Tong","Han","Zhu","Zha","Dian","Wei","Shi","Lian","Chi","Huang",,"Hu","Shuo","Lan","Jing","Jiao","Xu","Xing","Quan","Lie","Huan","Yang","Xiao","Xiu","Xian","Yin","Wu","Zhou","Yao","Shi","Wei","Tong","Xue","Zai","Kai","Hong","Luo","Xia","Zhu","Xuan","Zheng","Po","Yan","Hui","Guang","Zhe","Hui","Kao",,"Fan","Shao","Ye","Hui",,"Tang","Jin","Re",,"Xi","Fu","Jiong","Che","Pu","Jing","Zhuo","Ting","Wan","Hai","Peng","Lang","Shan","Hu","Feng","Chi","Rong"],["Hu","Xi","Shu","He","Xun","Ku","Jue","Xiao","Xi","Yan","Han","Zhuang","Jun","Di","Xie","Ji","Wu",,,"Han","Yan","Huan","Men","Ju","Chou","Bei","Fen","Lin","Kun","Hun","Tun","Xi","Cui","Wu","Hong","Ju","Fu","Wo","Jiao","Cong","Feng","Ping","Qiong","Ruo","Xi","Qiong","Xin","Zhuo","Yan","Yan","Yi","Jue","Yu","Gang","Ran","Pi","Gu",,"Sheng","Chang","Shao",,,,,"Chen","He","Kui","Zhong","Duan","Xia","Hui","Feng","Lian","Xuan","Xing","Huang","Jiao","Jian","Bi","Ying","Zhu","Wei","Tuan","Tian","Xi","Nuan","Nuan","Chan","Yan","Jiong","Jiong","Yu","Mei","Sha","Wei","Ye","Xin","Qiong","Rou","Mei","Huan","Xu","Zhao","Wei","Fan","Qiu","Sui","Yang","Lie","Zhu","Jie","Gao","Gua","Bao","Hu","Yun","Xia",,,"Bian","Gou","Tui","Tang","Chao","Shan","N","Bo","Huang","Xie","Xi","Wu","Xi","Yun","He","He","Xi","Yun","Xiong","Nai","Shan","Qiong","Yao","Xun","Mi","Lian","Ying","Wen","Rong","Oozutsu",,"Qiang","Liu","Xi","Bi","Biao","Zong","Lu","Jian","Shou","Yi","Lou","Feng","Sui","Yi","Tong","Jue","Zong","Yun","Hu","Yi","Zhi","Ao","Wei","Liao","Han","Ou","Re","Jiong","Man",,"Shang","Cuan","Zeng","Jian","Xi","Xi","Xi","Yi","Xiao","Chi","Huang","Chan","Ye","Qian","Ran","Yan","Xian","Qiao","Zun","Deng","Dun","Shen","Jiao","Fen","Si","Liao","Yu","Lin","Tong","Shao","Fen","Fan","Yan","Xun","Lan","Mei","Tang","Yi","Jing","Men",,,"Ying","Yu","Yi","Xue","Lan","Tai","Zao","Can","Sui","Xi","Que","Cong","Lian","Hui","Zhu","Xie","Ling","Wei","Yi","Xie","Zhao","Hui","Tatsu","Nung","Lan","Ru","Xian","Kao","Xun","Jin","Chou","Chou","Yao"],["He","Lan","Biao","Rong","Li","Mo","Bao","Ruo","Lu","La","Ao","Xun","Kuang","Shuo",,"Li","Lu","Jue","Liao","Yan","Xi","Xie","Long","Ye",,"Rang","Yue","Lan","Cong","Jue","Tong","Guan",,"Che","Mi","Tang","Lan","Zhu",,"Ling","Cuan","Yu","Zhua","Tsumekanmuri","Pa","Zheng","Pao","Cheng","Yuan","Ai","Wei",,"Jue","Jue","Fu","Ye","Ba","Die","Ye","Yao","Zu","Shuang","Er","Qiang","Chuang","Ge","Zang","Die","Qiang","Yong","Qiang","Pian","Ban","Pan","Shao","Jian","Pai","Du","Chuang","Tou","Zha","Bian","Die","Bang","Bo","Chuang","You",,"Du","Ya","Cheng","Niu","Ushihen","Pin","Jiu","Mou","Tuo","Mu","Lao","Ren","Mang","Fang","Mao","Mu","Gang","Wu","Yan","Ge","Bei","Si","Jian","Gu","You","Ge","Sheng","Mu","Di","Qian","Quan","Quan","Zi","Te","Xi","Mang","Keng","Qian","Wu","Gu","Xi","Li","Li","Pou","Ji","Gang","Zhi","Ben","Quan","Run","Du","Ju","Jia","Jian","Feng","Pian","Ke","Ju","Kao","Chu","Xi","Bei","Luo","Jie","Ma","San","Wei","Li","Dun","Tong",,"Jiang","Ikenie","Li","Du","Lie","Pi","Piao","Bao","Xi","Chou","Wei","Kui","Chou","Quan","Fan","Ba","Fan","Qiu","Ji","Cai","Chuo","An","Jie","Zhuang","Guang","Ma","You","Kang","Bo","Hou","Ya","Yin","Huan","Zhuang","Yun","Kuang","Niu","Di","Qing","Zhong","Mu","Bei","Pi","Ju","Ni","Sheng","Pao","Xia","Tuo","Hu","Ling","Fei","Pi","Ni","Ao","You","Gou","Yue","Ju","Dan","Po","Gu","Xian","Ning","Huan","Hen","Jiao","He","Zhao","Ji","Xun","Shan","Ta","Rong","Shou","Tong","Lao","Du","Xia","Shi","Hua","Zheng","Yu","Sun","Yu","Bi","Mang","Xi","Juan","Li","Xia","Yin","Suan","Lang","Bei","Zhi","Yan"],["Sha","Li","Han","Xian","Jing","Pai","Fei","Yao","Ba","Qi","Ni","Biao","Yin","Lai","Xi","Jian","Qiang","Kun","Yan","Guo","Zong","Mi","Chang","Yi","Zhi","Zheng","Ya","Meng","Cai","Cu","She","Kari","Cen","Luo","Hu","Zong","Ji","Wei","Feng","Wo","Yuan","Xing","Zhu","Mao","Wei","Yuan","Xian","Tuan","Ya","Nao","Xie","Jia","Hou","Bian","You","You","Mei","Zha","Yao","Sun","Bo","Ming","Hua","Yuan","Sou","Ma","Yuan","Dai","Yu","Shi","Hao",,"Yi","Zhen","Chuang","Hao","Man","Jing","Jiang","Mu","Zhang","Chan","Ao","Ao","Hao","Cui","Fen","Jue","Bi","Bi","Huang","Pu","Lin","Yu","Tong","Yao","Liao","Shuo","Xiao","Swu","Ton","Xi","Ge","Juan","Du","Hui","Kuai","Xian","Xie","Ta","Xian","Xun","Ning","Pin","Huo","Nou","Meng","Lie","Nao","Guang","Shou","Lu","Ta","Xian","Mi","Rang","Huan","Nao","Luo","Xian","Qi","Jue","Xuan","Miao","Zi","Lu","Lu","Yu","Su","Wang","Qiu","Ga","Ding","Le","Ba","Ji","Hong","Di","Quan","Gan","Jiu","Yu","Ji","Yu","Yang","Ma","Gong","Wu","Fu","Wen","Jie","Ya","Fen","Bian","Beng","Yue","Jue","Yun","Jue","Wan","Jian","Mei","Dan","Pi","Wei","Huan","Xian","Qiang","Ling","Dai","Yi","An","Ping","Dian","Fu","Xuan","Xi","Bo","Ci","Gou","Jia","Shao","Po","Ci","Ke","Ran","Sheng","Shen","Yi","Zu","Jia","Min","Shan","Liu","Bi","Zhen","Zhen","Jue","Fa","Long","Jin","Jiao","Jian","Li","Guang","Xian","Zhou","Gong","Yan","Xiu","Yang","Xu","Luo","Su","Zhu","Qin","Ken","Xun","Bao","Er","Xiang","Yao","Xia","Heng","Gui","Chong","Xu","Ban","Pei",,"Dang","Ei","Hun","Wen","E","Cheng","Ti","Wu","Wu","Cheng","Jun","Mei","Bei","Ting","Xian","Chuo"],["Han","Xuan","Yan","Qiu","Quan","Lang","Li","Xiu","Fu","Liu","Ye","Xi","Ling","Li","Jin","Lian","Suo","Chiisai",,"Wan","Dian","Pin","Zhan","Cui","Min","Yu","Ju","Chen","Lai","Wen","Sheng","Wei","Dian","Chu","Zhuo","Pei","Cheng","Hu","Qi","E","Kun","Chang","Qi","Beng","Wan","Lu","Cong","Guan","Yan","Diao","Bei","Lin","Qin","Pi","Pa","Que","Zhuo","Qin","Fa",,"Qiong","Du","Jie","Hun","Yu","Mao","Mei","Chun","Xuan","Ti","Xing","Dai","Rou","Min","Zhen","Wei","Ruan","Huan","Jie","Chuan","Jian","Zhuan","Yang","Lian","Quan","Xia","Duan","Yuan","Ye","Nao","Hu","Ying","Yu","Huang","Rui","Se","Liu","Shi","Rong","Suo","Yao","Wen","Wu","Jin","Jin","Ying","Ma","Tao","Liu","Tang","Li","Lang","Gui","Zhen","Qiang","Cuo","Jue","Zhao","Yao","Ai","Bin","Tu","Chang","Kun","Zhuan","Cong","Jin","Yi","Cui","Cong","Qi","Li","Ying","Suo","Qiu","Xuan","Ao","Lian","Man","Zhang","Yin",,"Ying","Zhi","Lu","Wu","Deng","Xiou","Zeng","Xun","Qu","Dang","Lin","Liao","Qiong","Su","Huang","Gui","Pu","Jing","Fan","Jin","Liu","Ji",,"Jing","Ai","Bi","Can","Qu","Zao","Dang","Jiao","Gun","Tan","Hui","Huan","Se","Sui","Tian",,"Yu","Jin","Lu","Bin","Shou","Wen","Zui","Lan","Xi","Ji","Xuan","Ruan","Huo","Gai","Lei","Du","Li","Zhi","Rou","Li","Zan","Qiong","Zhe","Gui","Sui","La","Long","Lu","Li","Zan","Lan","Ying","Mi","Xiang","Xi","Guan","Dao","Zan","Huan","Gua","Bo","Die","Bao","Hu","Zhi","Piao","Ban","Rang","Li","Wa","Dekaguramu","Jiang","Qian","Fan","Pen","Fang","Dan","Weng","Ou","Deshiguramu","Miriguramu","Thon","Hu","Ling","Yi","Ping","Ci","Hekutogura","Juan","Chang","Chi","Sarake","Dang","Meng","Pou"],["Zhui","Ping","Bian","Zhou","Zhen","Senchigura","Ci","Ying","Qi","Xian","Lou","Di","Ou","Meng","Zhuan","Peng","Lin","Zeng","Wu","Pi","Dan","Weng","Ying","Yan","Gan","Dai","Shen","Tian","Tian","Han","Chang","Sheng","Qing","Sheng","Chan","Chan","Rui","Sheng","Su","Sen","Yong","Shuai","Lu","Fu","Yong","Beng","Feng","Ning","Tian","You","Jia","Shen","Zha","Dian","Fu","Nan","Dian","Ping","Ting","Hua","Ting","Quan","Zi","Meng","Bi","Qi","Liu","Xun","Liu","Chang","Mu","Yun","Fan","Fu","Geng","Tian","Jie","Jie","Quan","Wei","Fu","Tian","Mu","Tap","Pan","Jiang","Wa","Da","Nan","Liu","Ben","Zhen","Chu","Mu","Mu","Ce","Cen","Gai","Bi","Da","Zhi","Lue","Qi","Lue","Pan","Kesa","Fan","Hua","Yu","Yu","Mu","Jun","Yi","Liu","Yu","Die","Chou","Hua","Dang","Chuo","Ji","Wan","Jiang","Sheng","Chang","Tuan","Lei","Ji","Cha","Liu","Tatamu","Tuan","Lin","Jiang","Jiang","Chou","Bo","Die","Die","Pi","Nie","Dan","Shu","Shu","Zhi","Yi","Chuang","Nai","Ding","Bi","Jie","Liao","Gong","Ge","Jiu","Zhou","Xia","Shan","Xu","Nue","Li","Yang","Chen","You","Ba","Jie","Jue","Zhi","Xia","Cui","Bi","Yi","Li","Zong","Chuang","Feng","Zhu","Pao","Pi","Gan","Ke","Ci","Xie","Qi","Dan","Zhen","Fa","Zhi","Teng","Ju","Ji","Fei","Qu","Dian","Jia","Xian","Cha","Bing","Ni","Zheng","Yong","Jing","Quan","Chong","Tong","Yi","Kai","Wei","Hui","Duo","Yang","Chi","Zhi","Hen","Ya","Mei","Dou","Jing","Xiao","Tong","Tu","Mang","Pi","Xiao","Suan","Pu","Li","Zhi","Cuo","Duo","Wu","Sha","Lao","Shou","Huan","Xian","Yi","Peng","Zhang","Guan","Tan","Fei","Ma","Lin","Chi","Ji","Dian","An","Chi","Bi","Bei","Min","Gu","Dui","E","Wei"],["Yu","Cui","Ya","Zhu","Cu","Dan","Shen","Zhung","Ji","Yu","Hou","Feng","La","Yang","Shen","Tu","Yu","Gua","Wen","Huan","Ku","Jia","Yin","Yi","Lu","Sao","Jue","Chi","Xi","Guan","Yi","Wen","Ji","Chuang","Ban","Lei","Liu","Chai","Shou","Nue","Dian","Da","Pie","Tan","Zhang","Biao","Shen","Cu","Luo","Yi","Zong","Chou","Zhang","Zhai","Sou","Suo","Que","Diao","Lou","Lu","Mo","Jin","Yin","Ying","Huang","Fu","Liao","Long","Qiao","Liu","Lao","Xian","Fei","Dan","Yin","He","Ai","Ban","Xian","Guan","Guai","Nong","Yu","Wei","Yi","Yong","Pi","Lei","Li","Shu","Dan","Lin","Dian","Lin","Lai","Pie","Ji","Chi","Yang","Xian","Jie","Zheng",,"Li","Huo","Lai","Shaku","Dian","Xian","Ying","Yin","Qu","Yong","Tan","Dian","Luo","Luan","Luan","Bo",,"Gui","Po","Fa","Deng","Fa","Bai","Bai","Qie","Bi","Zao","Zao","Mao","De","Pa","Jie","Huang","Gui","Ci","Ling","Gao","Mo","Ji","Jiao","Peng","Gao","Ai","E","Hao","Han","Bi","Wan","Chou","Qian","Xi","Ai","Jiong","Hao","Huang","Hao","Ze","Cui","Hao","Xiao","Ye","Po","Hao","Jiao","Ai","Xing","Huang","Li","Piao","He","Jiao","Pi","Gan","Pao","Zhou","Jun","Qiu","Cun","Que","Zha","Gu","Jun","Jun","Zhou","Zha","Gu","Zhan","Du","Min","Qi","Ying","Yu","Bei","Zhao","Zhong","Pen","He","Ying","He","Yi","Bo","Wan","He","Ang","Zhan","Yan","Jian","He","Yu","Kui","Fan","Gai","Dao","Pan","Fu","Qiu","Sheng","Dao","Lu","Zhan","Meng","Li","Jin","Xu","Jian","Pan","Guan","An","Lu","Shu","Zhou","Dang","An","Gu","Li","Mu","Cheng","Gan","Xu","Mang","Mang","Zhi","Qi","Ruan","Tian","Xiang","Dun","Xin","Xi","Pan","Feng","Dun","Min"],["Ming","Sheng","Shi","Yun","Mian","Pan","Fang","Miao","Dan","Mei","Mao","Kan","Xian","Ou","Shi","Yang","Zheng","Yao","Shen","Huo","Da","Zhen","Kuang","Ju","Shen","Chi","Sheng","Mei","Mo","Zhu","Zhen","Zhen","Mian","Di","Yuan","Die","Yi","Zi","Zi","Chao","Zha","Xuan","Bing","Mi","Long","Sui","Dong","Mi","Die","Yi","Er","Ming","Xuan","Chi","Kuang","Juan","Mou","Zhen","Tiao","Yang","Yan","Mo","Zhong","Mai","Zhao","Zheng","Mei","Jun","Shao","Han","Huan","Di","Cheng","Cuo","Juan","E","Wan","Xian","Xi","Kun","Lai","Jian","Shan","Tian","Hun","Wan","Ling","Shi","Qiong","Lie","Yai","Jing","Zheng","Li","Lai","Sui","Juan","Shui","Sui","Du","Bi","Bi","Mu","Hun","Ni","Lu","Yi","Jie","Cai","Zhou","Yu","Hun","Ma","Xia","Xing","Xi","Gun","Cai","Chun","Jian","Mei","Du","Hou","Xuan","Ti","Kui","Gao","Rui","Mou","Xu","Fa","Wen","Miao","Chou","Kui","Mi","Weng","Kou","Dang","Chen","Ke","Sou","Xia","Qiong","Mao","Ming","Man","Shui","Ze","Zhang","Yi","Diao","Ou","Mo","Shun","Cong","Lou","Chi","Man","Piao","Cheng","Ji","Meng",,"Run","Pie","Xi","Qiao","Pu","Zhu","Deng","Shen","Shun","Liao","Che","Xian","Kan","Ye","Xu","Tong","Mou","Lin","Kui","Xian","Ye","Ai","Hui","Zhan","Jian","Gu","Zhao","Qu","Wei","Chou","Sao","Ning","Xun","Yao","Huo","Meng","Mian","Bin","Mian","Li","Kuang","Jue","Xuan","Mian","Huo","Lu","Meng","Long","Guan","Man","Xi","Chu","Tang","Kan","Zhu","Mao","Jin","Lin","Yu","Shuo","Ce","Jue","Shi","Yi","Shen","Zhi","Hou","Shen","Ying","Ju","Zhou","Jiao","Cuo","Duan","Ai","Jiao","Zeng","Huo","Bai","Shi","Ding","Qi","Ji","Zi","Gan","Wu","Tuo","Ku","Qiang","Xi","Fan","Kuang"],["Dang","Ma","Sha","Dan","Jue","Li","Fu","Min","Nuo","Huo","Kang","Zhi","Qi","Kan","Jie","Fen","E","Ya","Pi","Zhe","Yan","Sui","Zhuan","Che","Dun","Pan","Yan",,"Feng","Fa","Mo","Zha","Qu","Yu","Luo","Tuo","Tuo","Di","Zhai","Zhen","Ai","Fei","Mu","Zhu","Li","Bian","Nu","Ping","Peng","Ling","Pao","Le","Po","Bo","Po","Shen","Za","Nuo","Li","Long","Tong",,"Li","Aragane","Chu","Keng","Quan","Zhu","Kuang","Huo","E","Nao","Jia","Lu","Wei","Ai","Luo","Ken","Xing","Yan","Tong","Peng","Xi",,"Hong","Shuo","Xia","Qiao",,"Wei","Qiao",,"Keng","Xiao","Que","Chan","Lang","Hong","Yu","Xiao","Xia","Mang","Long","Iong","Che","Che","E","Liu","Ying","Mang","Que","Yan","Sha","Kun","Yu",,"Kaki","Lu","Chen","Jian","Nue","Song","Zhuo","Keng","Peng","Yan","Zhui","Kong","Ceng","Qi","Zong","Qing","Lin","Jun","Bo","Ding","Min","Diao","Jian","He","Lu","Ai","Sui","Que","Ling","Bei","Yin","Dui","Wu","Qi","Lun","Wan","Dian","Gang","Pei","Qi","Chen","Ruan","Yan","Die","Ding","Du","Tuo","Jie","Ying","Bian","Ke","Bi","Wei","Shuo","Zhen","Duan","Xia","Dang","Ti","Nao","Peng","Jian","Di","Tan","Cha","Seki","Qi",,"Feng","Xuan","Que","Que","Ma","Gong","Nian","Su","E","Ci","Liu","Si","Tang","Bang","Hua","Pi","Wei","Sang","Lei","Cuo","Zhen","Xia","Qi","Lian","Pan","Wei","Yun","Dui","Zhe","Ke","La",,"Qing","Gun","Zhuan","Chan","Qi","Ao","Peng","Lu","Lu","Kan","Qiang","Chen","Yin","Lei","Biao","Qi","Mo","Qi","Cui","Zong","Qing","Chuo",,"Ji","Shan","Lao","Qu","Zeng","Deng","Jian","Xi","Lin","Ding","Dian","Huang","Pan","Za","Qiao","Di","Li"],["Tani","Jiao",,"Zhang","Qiao","Dun","Xian","Yu","Zhui","He","Huo","Zhai","Lei","Ke","Chu","Ji","Que","Dang","Yi","Jiang","Pi","Pi","Yu","Pin","Qi","Ai","Kai","Jian","Yu","Ruan","Meng","Pao","Ci",,,"Mie","Ca","Xian","Kuang","Lei","Lei","Zhi","Li","Li","Fan","Que","Pao","Ying","Li","Long","Long","Mo","Bo","Shuang","Guan","Lan","Zan","Yan","Shi","Shi","Li","Reng","She","Yue","Si","Qi","Ta","Ma","Xie","Xian","Xian","Zhi","Qi","Zhi","Beng","Dui","Zhong",,"Yi","Shi","You","Zhi","Tiao","Fu","Fu","Mi","Zu","Zhi","Suan","Mei","Zuo","Qu","Hu","Zhu","Shen","Sui","Ci","Chai","Mi","Lu","Yu","Xiang","Wu","Tiao","Piao","Zhu","Gui","Xia","Zhi","Ji","Gao","Zhen","Gao","Shui","Jin","Chen","Gai","Kun","Di","Dao","Huo","Tao","Qi","Gu","Guan","Zui","Ling","Lu","Bing","Jin","Dao","Zhi","Lu","Shan","Bei","Zhe","Hui","You","Xi","Yin","Zi","Huo","Zhen","Fu","Yuan","Wu","Xian","Yang","Ti","Yi","Mei","Si","Di",,"Zhuo","Zhen","Yong","Ji","Gao","Tang","Si","Ma","Ta",,"Xuan","Qi","Yu","Xi","Ji","Si","Chan","Tan","Kuai","Sui","Li","Nong","Ni","Dao","Li","Rang","Yue","Ti","Zan","Lei","Rou","Yu","Yu","Chi","Xie","Qin","He","Tu","Xiu","Si","Ren","Tu","Zi","Cha","Gan","Yi","Xian","Bing","Nian","Qiu","Qiu","Chong","Fen","Hao","Yun","Ke","Miao","Zhi","Geng","Bi","Zhi","Yu","Mi","Ku","Ban","Pi","Ni","Li","You","Zu","Pi","Ba","Ling","Mo","Cheng","Nian","Qin","Yang","Zuo","Zhi","Zhi","Shu","Ju","Zi","Huo","Ji","Cheng","Tong","Zhi","Huo","He","Yin","Zi","Zhi","Jie","Ren","Du","Yi","Zhu","Hui","Nong","Fu"],["Xi","Kao","Lang","Fu","Ze","Shui","Lu","Kun","Gan","Geng","Ti","Cheng","Tu","Shao","Shui","Ya","Lun","Lu","Gu","Zuo","Ren","Zhun","Bang","Bai","Ji","Zhi","Zhi","Kun","Leng","Peng","Ke","Bing","Chou","Zu","Yu","Su","Lue",,"Yi","Xi","Bian","Ji","Fu","Bi","Nuo","Jie","Zhong","Zong","Xu","Cheng","Dao","Wen","Lian","Zi","Yu","Ji","Xu","Zhen","Zhi","Dao","Jia","Ji","Gao","Gao","Gu","Rong","Sui","You","Ji","Kang","Mu","Shan","Men","Zhi","Ji","Lu","Su","Ji","Ying","Wen","Qiu","Se",,"Yi","Huang","Qie","Ji","Sui","Xiao","Pu","Jiao","Zhuo","Tong","Sai","Lu","Sui","Nong","Se","Hui","Rang","Nuo","Yu","Bin","Ji","Tui","Wen","Cheng","Huo","Gong","Lu","Biao",,"Rang","Zhuo","Li","Zan","Xue","Wa","Jiu","Qiong","Xi","Qiong","Kong","Yu","Sen","Jing","Yao","Chuan","Zhun","Tu","Lao","Qie","Zhai","Yao","Bian","Bao","Yao","Bing","Wa","Zhu","Jiao","Qiao","Diao","Wu","Gui","Yao","Zhi","Chuang","Yao","Tiao","Jiao","Chuang","Jiong","Xiao","Cheng","Kou","Cuan","Wo","Dan","Ku","Ke","Zhui","Xu","Su","Guan","Kui","Dou",,"Yin","Wo","Wa","Ya","Yu","Ju","Qiong","Yao","Yao","Tiao","Chao","Yu","Tian","Diao","Ju","Liao","Xi","Wu","Kui","Chuang","Zhao",,"Kuan","Long","Cheng","Cui","Piao","Zao","Cuan","Qiao","Qiong","Dou","Zao","Long","Qie","Li","Chu","Shi","Fou","Qian","Chu","Hong","Qi","Qian","Gong","Shi","Shu","Miao","Ju","Zhan","Zhu","Ling","Long","Bing","Jing","Jing","Zhang","Yi","Si","Jun","Hong","Tong","Song","Jing","Diao","Yi","Shu","Jing","Qu","Jie","Ping","Duan","Shao","Zhuan","Ceng","Deng","Cui","Huai","Jing","Kan","Jing","Zhu","Zhu","Le","Peng","Yu","Chi","Gan"],["Mang","Zhu","Utsubo","Du","Ji","Xiao","Ba","Suan","Ji","Zhen","Zhao","Sun","Ya","Zhui","Yuan","Hu","Gang","Xiao","Cen","Pi","Bi","Jian","Yi","Dong","Shan","Sheng","Xia","Di","Zhu","Na","Chi","Gu","Li","Qie","Min","Bao","Tiao","Si","Fu","Ce","Ben","Pei","Da","Zi","Di","Ling","Ze","Nu","Fu","Gou","Fan","Jia","Ge","Fan","Shi","Mao","Po","Sey","Jian","Qiong","Long","Souke","Bian","Luo","Gui","Qu","Chi","Yin","Yao","Xian","Bi","Qiong","Gua","Deng","Jiao","Jin","Quan","Sun","Ru","Fa","Kuang","Zhu","Tong","Ji","Da","Xing","Ce","Zhong","Kou","Lai","Bi","Shai","Dang","Zheng","Ce","Fu","Yun","Tu","Pa","Li","Lang","Ju","Guan","Jian","Han","Tong","Xia","Zhi","Cheng","Suan","Shi","Zhu","Zuo","Xiao","Shao","Ting","Ce","Yan","Gao","Kuai","Gan","Chou","Kago","Gang","Yun","O","Qian","Xiao","Jian","Pu","Lai","Zou","Bi","Bi","Bi","Ge","Chi","Guai","Yu","Jian","Zhao","Gu","Chi","Zheng","Jing","Sha","Zhou","Lu","Bo","Ji","Lin","Suan","Jun","Fu","Zha","Gu","Kong","Qian","Quan","Jun","Chui","Guan","Yuan","Ce","Ju","Bo","Ze","Qie","Tuo","Luo","Dan","Xiao","Ruo","Jian","Xuan","Bian","Sun","Xiang","Xian","Ping","Zhen","Sheng","Hu","Shi","Zhu","Yue","Chun","Lu","Wu","Dong","Xiao","Ji","Jie","Huang","Xing","Mei","Fan","Chui","Zhuan","Pian","Feng","Zhu","Hong","Qie","Hou","Qiu","Miao","Qian",,"Kui","Sik","Lou","Yun","He","Tang","Yue","Chou","Gao","Fei","Ruo","Zheng","Gou","Nie","Qian","Xiao","Cuan","Gong","Pang","Du","Li","Bi","Zhuo","Chu","Shai","Chi","Zhu","Qiang","Long","Lan","Jian","Bu","Li","Hui","Bi","Di","Cong","Yan","Peng","Sen","Zhuan","Pai","Piao","Dou","Yu","Mie","Zhuan"],["Ze","Xi","Guo","Yi","Hu","Chan","Kou","Cu","Ping","Chou","Ji","Gui","Su","Lou","Zha","Lu","Nian","Suo","Cuan","Sasara","Suo","Le","Duan","Yana","Xiao","Bo","Mi","Si","Dang","Liao","Dan","Dian","Fu","Jian","Min","Kui","Dai","Qiao","Deng","Huang","Sun","Lao","Zan","Xiao","Du","Shi","Zan",,"Pai","Hata","Pai","Gan","Ju","Du","Lu","Yan","Bo","Dang","Sai","Ke","Long","Qian","Lian","Bo","Zhou","Lai",,"Lan","Kui","Yu","Yue","Hao","Zhen","Tai","Ti","Mi","Chou","Ji",,"Hata","Teng","Zhuan","Zhou","Fan","Sou","Zhou","Kuji","Zhuo","Teng","Lu","Lu","Jian","Tuo","Ying","Yu","Lai","Long","Shinshi","Lian","Lan","Qian","Yue","Zhong","Qu","Lian","Bian","Duan","Zuan","Li","Si","Luo","Ying","Yue","Zhuo","Xu","Mi","Di","Fan","Shen","Zhe","Shen","Nu","Xie","Lei","Xian","Zi","Ni","Cun",,"Qian","Kume","Bi","Ban","Wu","Sha","Kang","Rou","Fen","Bi","Cui",,"Li","Chi","Nukamiso","Ro","Ba","Li","Gan","Ju","Po","Mo","Cu","Nian","Zhou","Li","Su","Tiao","Li","Qi","Su","Hong","Tong","Zi","Ce","Yue","Zhou","Lin","Zhuang","Bai",,"Fen","Ji",,"Sukumo","Liang","Xian","Fu","Liang","Can","Geng","Li","Yue","Lu","Ju","Qi","Cui","Bai","Zhang","Lin","Zong","Jing","Guo","Kouji","San","San","Tang","Bian","Rou","Mian","Hou","Xu","Zong","Hu","Jian","Zan","Ci","Li","Xie","Fu","Ni","Bei","Gu","Xiu","Gao","Tang","Qiu","Sukumo","Cao","Zhuang","Tang","Mi","San","Fen","Zao","Kang","Jiang","Mo","San","San","Nuo","Xi","Liang","Jiang","Kuai","Bo","Huan",,"Zong","Xian","Nuo","Tuan","Nie","Li","Zuo","Di","Nie","Tiao","Lan","Mi","Jiao","Jiu","Xi","Gong","Zheng","Jiu","You"],["Ji","Cha","Zhou","Xun","Yue","Hong","Yu","He","Wan","Ren","Wen","Wen","Qiu","Na","Zi","Tou","Niu","Fou","Jie","Shu","Chun","Pi","Yin","Sha","Hong","Zhi","Ji","Fen","Yun","Ren","Dan","Jin","Su","Fang","Suo","Cui","Jiu","Zha","Kinu","Jin","Fu","Zhi","Ci","Zi","Chou","Hong","Zha","Lei","Xi","Fu","Xie","Shen","Bei","Zhu","Qu","Ling","Zhu","Shao","Gan","Yang","Fu","Tuo","Zhen","Dai","Zhuo","Shi","Zhong","Xian","Zu","Jiong","Ban","Ju","Mo","Shu","Zui","Wata","Jing","Ren","Heng","Xie","Jie","Zhu","Chou","Gua","Bai","Jue","Kuang","Hu","Ci","Geng","Geng","Tao","Xie","Ku","Jiao","Quan","Gai","Luo","Xuan","Bing","Xian","Fu","Gei","Tong","Rong","Tiao","Yin","Lei","Xie","Quan","Xu","Lun","Die","Tong","Si","Jiang","Xiang","Hui","Jue","Zhi","Jian","Juan","Chi","Mian","Zhen","Lu","Cheng","Qiu","Shu","Bang","Tong","Xiao","Wan","Qin","Geng","Xiu","Ti","Xiu","Xie","Hong","Xi","Fu","Ting","Sui","Dui","Kun","Fu","Jing","Hu","Zhi","Yan","Jiong","Feng","Ji","Sok","Kase","Zong","Lin","Duo","Li","Lu","Liang","Chou","Quan","Shao","Qi","Qi","Zhun","Qi","Wan","Qian","Xian","Shou","Wei","Qi","Tao","Wan","Gang","Wang","Beng","Zhui","Cai","Guo","Cui","Lun","Liu","Qi","Zhan","Bei","Chuo","Ling","Mian","Qi","Qie","Tan","Zong","Gun","Zou","Yi","Zi","Xing","Liang","Jin","Fei","Rui","Min","Yu","Zong","Fan","Lu","Xu","Yingl","Zhang","Kasuri","Xu","Xiang","Jian","Ke","Xian","Ruan","Mian","Qi","Duan","Zhong","Di","Min","Miao","Yuan","Xie","Bao","Si","Qiu","Bian","Huan","Geng","Cong","Mian","Wei","Fu","Wei","Yu","Gou","Miao","Xie","Lian","Zong","Bian","Yun","Yin","Ti","Gua","Zhi","Yun","Cheng","Chan","Dai"],["Xia","Yuan","Zong","Xu","Nawa","Odoshi","Geng","Sen","Ying","Jin","Yi","Zhui","Ni","Bang","Gu","Pan","Zhou","Jian","Cuo","Quan","Shuang","Yun","Xia","Shuai","Xi","Rong","Tao","Fu","Yun","Zhen","Gao","Ru","Hu","Zai","Teng","Xian","Su","Zhen","Zong","Tao","Horo","Cai","Bi","Feng","Cu","Li","Suo","Yin","Xi","Zong","Lei","Zhuan","Qian","Man","Zhi","Lu","Mo","Piao","Lian","Mi","Xuan","Zong","Ji","Shan","Sui","Fan","Shuai","Beng","Yi","Sao","Mou","Zhou","Qiang","Hun","Sem","Xi","Jung","Xiu","Ran","Xuan","Hui","Qiao","Zeng","Zuo","Zhi","Shan","San","Lin","Yu","Fan","Liao","Chuo","Zun","Jian","Rao","Chan","Rui","Xiu","Hui","Hua","Zuan","Xi","Qiang","Un","Da","Sheng","Hui","Xi","Se","Jian","Jiang","Huan","Zao","Cong","Jie","Jiao","Bo","Chan","Yi","Nao","Sui","Yi","Shai","Xu","Ji","Bin","Qian","Lan","Pu","Xun","Zuan","Qi","Peng","Li","Mo","Lei","Xie","Zuan","Kuang","You","Xu","Lei","Xian","Chan","Kou","Lu","Chan","Ying","Cai","Xiang","Xian","Zui","Zuan","Luo","Xi","Dao","Lan","Lei","Lian","Si","Jiu","Yu","Hong","Zhou","Xian","He","Yue","Ji","Wan","Kuang","Ji","Ren","Wei","Yun","Hong","Chun","Pi","Sha","Gang","Na","Ren","Zong","Lun","Fen","Zhi","Wen","Fang","Zhu","Yin","Niu","Shu","Xian","Gan","Xie","Fu","Lian","Zu","Shen","Xi","Zhi","Zhong","Zhou","Ban","Fu","Zhuo","Shao","Yi","Jing","Dai","Bang","Rong","Jie","Ku","Rao","Die","Heng","Hui","Gei","Xuan","Jiang","Luo","Jue","Jiao","Tong","Geng","Xiao","Juan","Xiu","Xi","Sui","Tao","Ji","Ti","Ji","Xu","Ling",,"Xu","Qi","Fei","Chuo","Zhang","Gun","Sheng","Wei","Mian","Shou","Beng","Chou","Tao","Liu","Quan","Zong","Zhan","Wan","Lu"],["Zhui","Zi","Ke","Xiang","Jian","Mian","Lan","Ti","Miao","Qi","Yun","Hui","Si","Duo","Duan","Bian","Xian","Gou","Zhui","Huan","Di","Lu","Bian","Min","Yuan","Jin","Fu","Ru","Zhen","Feng","Shuai","Gao","Chan","Li","Yi","Jian","Bin","Piao","Man","Lei","Ying","Suo","Mou","Sao","Xie","Liao","Shan","Zeng","Jiang","Qian","Zao","Huan","Jiao","Zuan","Fou","Xie","Gang","Fou","Que","Fou","Kaakeru","Bo","Ping","Hou",,"Gang","Ying","Ying","Qing","Xia","Guan","Zun","Tan","Chang","Qi","Weng","Ying","Lei","Tan","Lu","Guan","Wang","Wang","Gang","Wang","Han",,"Luo","Fu","Mi","Fa","Gu","Zhu","Ju","Mao","Gu","Min","Gang","Ba","Gua","Ti","Juan","Fu","Lin","Yan","Zhao","Zui","Gua","Zhuo","Yu","Zhi","An","Fa","Nan","Shu","Si","Pi","Ma","Liu","Ba","Fa","Li","Chao","Wei","Bi","Ji","Zeng","Tong","Liu","Ji","Juan","Mi","Zhao","Luo","Pi","Ji","Ji","Luan","Yang","Mie","Qiang","Ta","Mei","Yang","You","You","Fen","Ba","Gao","Yang","Gu","Qiang","Zang","Gao","Ling","Yi","Zhu","Di","Xiu","Qian","Yi","Xian","Rong","Qun","Qun","Qian","Huan","Zui","Xian","Yi","Yashinau","Qiang","Xian","Yu","Geng","Jie","Tang","Yuan","Xi","Fan","Shan","Fen","Shan","Lian","Lei","Geng","Nou","Qiang","Chan","Yu","Gong","Yi","Chong","Weng","Fen","Hong","Chi","Chi","Cui","Fu","Xia","Pen","Yi","La","Yi","Pi","Ling","Liu","Zhi","Qu","Xi","Xie","Xiang","Xi","Xi","Qi","Qiao","Hui","Hui","Xiao","Se","Hong","Jiang","Di","Cui","Fei","Tao","Sha","Chi","Zhu","Jian","Xuan","Shi","Pian","Zong","Wan","Hui","Hou","He","He","Han","Ao","Piao","Yi","Lian","Qu",,"Lin","Pen","Qiao","Ao","Fan","Yi","Hui","Xuan","Dao"],["Yao","Lao",,"Kao","Mao","Zhe","Qi","Gou","Gou","Gou","Die","Die","Er","Shua","Ruan","Er","Nai","Zhuan","Lei","Ting","Zi","Geng","Chao","Hao","Yun","Pa","Pi","Chi","Si","Chu","Jia","Ju","He","Chu","Lao","Lun","Ji","Tang","Ou","Lou","Nou","Gou","Pang","Ze","Lou","Ji","Lao","Huo","You","Mo","Huai","Er","Zhe","Ting","Ye","Da","Song","Qin","Yun","Chi","Dan","Dan","Hong","Geng","Zhi",,"Nie","Dan","Zhen","Che","Ling","Zheng","You","Wa","Liao","Long","Zhi","Ning","Tiao","Er","Ya","Die","Gua",,"Lian","Hao","Sheng","Lie","Pin","Jing","Ju","Bi","Di","Guo","Wen","Xu","Ping","Cong","Shikato",,"Ting","Yu","Cong","Kui","Tsuraneru","Kui","Cong","Lian","Weng","Kui","Lian","Lian","Cong","Ao","Sheng","Song","Ting","Kui","Nie","Zhi","Dan","Ning","Qie","Ji","Ting","Ting","Long","Yu","Yu","Zhao","Si","Su","Yi","Su","Si","Zhao","Zhao","Rou","Yi","Le","Ji","Qiu","Ken","Cao","Ge","Di","Huan","Huang","Yi","Ren","Xiao","Ru","Zhou","Yuan","Du","Gang","Rong","Gan","Cha","Wo","Chang","Gu","Zhi","Han","Fu","Fei","Fen","Pei","Pang","Jian","Fang","Zhun","You","Na","Hang","Ken","Ran","Gong","Yu","Wen","Yao","Jin","Pi","Qian","Xi","Xi","Fei","Ken","Jing","Tai","Shen","Zhong","Zhang","Xie","Shen","Wei","Zhou","Die","Dan","Fei","Ba","Bo","Qu","Tian","Bei","Gua","Tai","Zi","Ku","Zhi","Ni","Ping","Zi","Fu","Pang","Zhen","Xian","Zuo","Pei","Jia","Sheng","Zhi","Bao","Mu","Qu","Hu","Ke","Yi","Yin","Xu","Yang","Long","Dong","Ka","Lu","Jing","Nu","Yan","Pang","Kua","Yi","Guang","Gai","Ge","Dong","Zhi","Xiao","Xiong","Xiong","Er","E","Xing","Pian","Neng","Zi","Gui"],["Cheng","Tiao","Zhi","Cui","Mei","Xie","Cui","Xie","Mo","Mai","Ji","Obiyaakasu",,"Kuai","Sa","Zang","Qi","Nao","Mi","Nong","Luan","Wan","Bo","Wen","Guan","Qiu","Jiao","Jing","Rou","Heng","Cuo","Lie","Shan","Ting","Mei","Chun","Shen","Xie","De","Zui","Cu","Xiu","Xin","Tuo","Pao","Cheng","Nei","Fu","Dou","Tuo","Niao","Noy","Pi","Gu","Gua","Li","Lian","Zhang","Cui","Jie","Liang","Zhou","Pi","Biao","Lun","Pian","Guo","Kui","Chui","Dan","Tian","Nei","Jing","Jie","La","Yi","An","Ren","Shen","Chuo","Fu","Fu","Ju","Fei","Qiang","Wan","Dong","Pi","Guo","Zong","Ding","Wu","Mei","Ruan","Zhuan","Zhi","Cou","Gua","Ou","Di","An","Xing","Nao","Yu","Chuan","Nan","Yun","Zhong","Rou","E","Sai","Tu","Yao","Jian","Wei","Jiao","Yu","Jia","Duan","Bi","Chang","Fu","Xian","Ni","Mian","Wa","Teng","Tui","Bang","Qian","Lu","Wa","Sou","Tang","Su","Zhui","Ge","Yi","Bo","Liao","Ji","Pi","Xie","Gao","Lu","Bin","Ou","Chang","Lu","Guo","Pang","Chuai","Piao","Jiang","Fu","Tang","Mo","Xi","Zhuan","Lu","Jiao","Ying","Lu","Zhi","Tara","Chun","Lian","Tong","Peng","Ni","Zha","Liao","Cui","Gui","Xiao","Teng","Fan","Zhi","Jiao","Shan","Wu","Cui","Run","Xiang","Sui","Fen","Ying","Tan","Zhua","Dan","Kuai","Nong","Tun","Lian","Bi","Yong","Jue","Chu","Yi","Juan","La","Lian","Sao","Tun","Gu","Qi","Cui","Bin","Xun","Ru","Huo","Zang","Xian","Biao","Xing","Kuan","La","Yan","Lu","Huo","Zang","Luo","Qu","Zang","Luan","Ni","Zang","Chen","Qian","Wo","Guang","Zang","Lin","Guang","Zi","Jiao","Nie","Chou","Ji","Gao","Chou","Mian","Nie","Zhi","Zhi","Ge","Jian","Die","Zhi","Xiu","Tai","Zhen","Jiu","Xian","Yu","Cha"],["Yao","Yu","Chong","Xi","Xi","Jiu","Yu","Yu","Xing","Ju","Jiu","Xin","She","She","Yadoru","Jiu","Shi","Tan","Shu","Shi","Tian","Dan","Pu","Pu","Guan","Hua","Tan","Chuan","Shun","Xia","Wu","Zhou","Dao","Gang","Shan","Yi",,"Pa","Tai","Fan","Ban","Chuan","Hang","Fang","Ban","Que","Hesaki","Zhong","Jian","Cang","Ling","Zhu","Ze","Duo","Bo","Xian","Ge","Chuan","Jia","Lu","Hong","Pang","Xi",,"Fu","Zao","Feng","Li","Shao","Yu","Lang","Ting",,"Wei","Bo","Meng","Nian","Ju","Huang","Shou","Zong","Bian","Mao","Die",,"Bang","Cha","Yi","Sao","Cang","Cao","Lou","Dai","Sori","Yao","Tong","Yofune","Dang","Tan","Lu","Yi","Jie","Jian","Huo","Meng","Qi","Lu","Lu","Chan","Shuang","Gen","Liang","Jian","Jian","Se","Yan","Fu","Ping","Yan","Yan","Cao","Cao","Yi","Le","Ting","Qiu","Ai","Nai","Tiao","Jiao","Jie","Peng","Wan","Yi","Chai","Mian","Mie","Gan","Qian","Yu","Yu","Shuo","Qiong","Tu","Xia","Qi","Mang","Zi","Hui","Sui","Zhi","Xiang","Bi","Fu","Tun","Wei","Wu","Zhi","Qi","Shan","Wen","Qian","Ren","Fou","Kou","Jie","Lu","Xu","Ji","Qin","Qi","Yuan","Fen","Ba","Rui","Xin","Ji","Hua","Hua","Fang","Wu","Jue","Gou","Zhi","Yun","Qin","Ao","Chu","Mao","Ya","Fei","Reng","Hang","Cong","Yin","You","Bian","Yi","Susa","Wei","Li","Pi","E","Xian","Chang","Cang","Meng","Su","Yi","Yuan","Ran","Ling","Tai","Tiao","Di","Miao","Qiong","Li","Yong","Ke","Mu","Pei","Bao","Gou","Min","Yi","Yi","Ju","Pi","Ruo","Ku","Zhu","Ni","Bo","Bing","Shan","Qiu","Yao","Xian","Ben","Hong","Ying","Zha","Dong","Ju","Die","Nie","Gan","Hu","Ping","Mei","Fu","Sheng","Gu","Bi","Wei"],["Fu","Zhuo","Mao","Fan","Qie","Mao","Mao","Ba","Zi","Mo","Zi","Di","Chi","Ji","Jing","Long",,"Niao",,"Xue","Ying","Qiong","Ge","Ming","Li","Rong","Yin","Gen","Qian","Chai","Chen","Yu","Xiu","Zi","Lie","Wu","Ji","Kui","Ce","Chong","Ci","Gou","Guang","Mang","Chi","Jiao","Jiao","Fu","Yu","Zhu","Zi","Jiang","Hui","Yin","Cha","Fa","Rong","Ru","Chong","Mang","Tong","Zhong",,"Zhu","Xun","Huan","Kua","Quan","Gai","Da","Jing","Xing","Quan","Cao","Jing","Er","An","Shou","Chi","Ren","Jian","Ti","Huang","Ping","Li","Jin","Lao","Shu","Zhuang","Da","Jia","Rao","Bi","Ze","Qiao","Hui","Qi","Dang",,"Rong","Hun","Ying","Luo","Ying","Xun","Jin","Sun","Yin","Mai","Hong","Zhou","Yao","Du","Wei","Chu","Dou","Fu","Ren","Yin","He","Bi","Bu","Yun","Di","Tu","Sui","Sui","Cheng","Chen","Wu","Bie","Xi","Geng","Li","Fu","Zhu","Mo","Li","Zhuang","Ji","Duo","Qiu","Sha","Suo","Chen","Feng","Ju","Mei","Meng","Xing","Jing","Che","Xin","Jun","Yan","Ting","Diao","Cuo","Wan","Han","You","Cuo","Jia","Wang","You","Niu","Shao","Xian","Lang","Fu","E","Mo","Wen","Jie","Nan","Mu","Kan","Lai","Lian","Shi","Wo","Usagi","Lian","Huo","You","Ying","Ying","Nuc","Chun","Mang","Mang","Ci","Wan","Jing","Di","Qu","Dong","Jian","Zou","Gu","La","Lu","Ju","Wei","Jun","Nie","Kun","He","Pu","Zi","Gao","Guo","Fu","Lun","Chang","Chou","Song","Chui","Zhan","Men","Cai","Ba","Li","Tu","Bo","Han","Bao","Qin","Juan","Xi","Qin","Di","Jie","Pu","Dang","Jin","Zhao","Tai","Geng","Hua","Gu","Ling","Fei","Jin","An","Wang","Beng","Zhou","Yan","Ju","Jian","Lin","Tan","Shu","Tian","Dao"],["Hu","Qi","He","Cui","Tao","Chun","Bei","Chang","Huan","Fei","Lai","Qi","Meng","Ping","Wei","Dan","Sha","Huan","Yan","Yi","Tiao","Qi","Wan","Ce","Nai","Kutabireru","Tuo","Jiu","Tie","Luo",,,"Meng",,"Yaji",,"Ying","Ying","Ying","Xiao","Sa","Qiu","Ke","Xiang","Wan","Yu","Yu","Fu","Lian","Xuan","Yuan","Nan","Ze","Wo","Chun","Xiao","Yu","Pian","Mao","An","E","Luo","Ying","Huo","Gua","Jiang","Mian","Zuo","Zuo","Ju","Bao","Rou","Xi","Xie","An","Qu","Jian","Fu","Lu","Jing","Pen","Feng","Hong","Hong","Hou","Yan","Tu","Zhu","Zi","Xiang","Shen","Ge","Jie","Jing","Mi","Huang","Shen","Pu","Gai","Dong","Zhou","Qian","Wei","Bo","Wei","Pa","Ji","Hu","Zang","Jia","Duan","Yao","Jun","Cong","Quan","Wei","Xian","Kui","Ting","Hun","Xi","Shi","Qi","Lan","Zong","Yao","Yuan","Mei","Yun","Shu","Di","Zhuan","Guan","Sukumo","Xue","Chan","Kai","Kui",,"Jiang","Lou","Wei","Pai",,"Sou","Yin","Shi","Chun","Shi","Yun","Zhen","Lang","Nu","Meng","He","Que","Suan","Yuan","Li","Ju","Xi","Pang","Chu","Xu","Tu","Liu","Wo","Zhen","Qian","Zu","Po","Cuo","Yuan","Chu","Yu","Kuai","Pan","Pu","Pu","Na","Shuo","Xi","Fen","Yun","Zheng","Jian","Ji","Ruo","Cang","En","Mi","Hao","Sun","Zhen","Ming","Sou","Xu","Liu","Xi","Gu","Lang","Rong","Weng","Gai","Cuo","Shi","Tang","Luo","Ru","Suo","Xian","Bei","Yao","Gui","Bi","Zong","Gun","Za","Xiu","Ce","Hai","Lan",,"Ji","Li","Can","Lang","Yu",,"Ying","Mo","Diao","Tiao","Mao","Tong","Zhu","Peng","An","Lian","Cong","Xi","Ping","Qiu","Jin","Chun","Jie","Wei","Tui","Cao","Yu","Yi","Ji","Liao","Bi","Lu","Su"],["Bu","Zhang","Luo","Jiang","Man","Yan","Ling","Ji","Piao","Gun","Han","Di","Su","Lu","She","Shang","Di","Mie","Xun","Man","Bo","Di","Cuo","Zhe","Sen","Xuan","Wei","Hu","Ao","Mi","Lou","Cu","Zhong","Cai","Po","Jiang","Mi","Cong","Niao","Hui","Jun","Yin","Jian","Yan","Shu","Yin","Kui","Chen","Hu","Sha","Kou","Qian","Ma","Zang","Sonoko","Qiang","Dou","Lian","Lin","Kou","Ai","Bi","Li","Wei","Ji","Xun","Sheng","Fan","Meng","Ou","Chan","Dian","Xun","Jiao","Rui","Rui","Lei","Yu","Qiao","Chu","Hua","Jian","Mai","Yun","Bao","You","Qu","Lu","Rao","Hui","E","Teng","Fei","Jue","Zui","Fa","Ru","Fen","Kui","Shun","Rui","Ya","Xu","Fu","Jue","Dang","Wu","Tong","Si","Xiao","Xi","Long","Yun",,"Qi","Jian","Yun","Sun","Ling","Yu","Xia","Yong","Ji","Hong","Si","Nong","Lei","Xuan","Yun","Yu","Xi","Hao","Bo","Hao","Ai","Wei","Hui","Wei","Ji","Ci","Xiang","Luan","Mie","Yi","Leng","Jiang","Can","Shen","Qiang","Lian","Ke","Yuan","Da","Ti","Tang","Xie","Bi","Zhan","Sun","Lian","Fan","Ding","Jie","Gu","Xie","Shu","Jian","Kao","Hong","Sa","Xin","Xun","Yao","Hie","Sou","Shu","Xun","Dui","Pin","Wei","Neng","Chou","Mai","Ru","Piao","Tai","Qi","Zao","Chen","Zhen","Er","Ni","Ying","Gao","Cong","Xiao","Qi","Fa","Jian","Xu","Kui","Jie","Bian","Diao","Mi","Lan","Jin","Cang","Miao","Qiong","Qie","Xian",,"Ou","Xian","Su","Lu","Yi","Xu","Xie","Li","Yi","La","Lei","Xiao","Di","Zhi","Bei","Teng","Yao","Mo","Huan","Piao","Fan","Sou","Tan","Tui","Qiong","Qiao","Wei","Liu","Hui",,"Gao","Yun",,"Li","Shu","Chu","Ai","Lin","Zao","Xuan","Chen","Lai","Huo"],["Tuo","Wu","Rui","Rui","Qi","Heng","Lu","Su","Tui","Mang","Yun","Pin","Yu","Xun","Ji","Jiong","Xian","Mo","Hagi","Su","Jiong",,"Nie","Bo","Rang","Yi","Xian","Yu","Ju","Lian","Lian","Yin","Qiang","Ying","Long","Tong","Wei","Yue","Ling","Qu","Yao","Fan","Mi","Lan","Kui","Lan","Ji","Dang","Katsura","Lei","Lei","Hua","Feng","Zhi","Wei","Kui","Zhan","Huai","Li","Ji","Mi","Lei","Huai","Luo","Ji","Kui","Lu","Jian","San",,"Lei","Quan","Xiao","Yi","Luan","Men","Bie","Hu","Hu","Lu","Nue","Lu","Si","Xiao","Qian","Chu","Hu","Xu","Cuo","Fu","Xu","Xu","Lu","Hu","Yu","Hao","Jiao","Ju","Guo","Bao","Yan","Zhan","Zhan","Kui","Ban","Xi","Shu","Chong","Qiu","Diao","Ji","Qiu","Cheng","Shi",,"Di","Zhe","She","Yu","Gan","Zi","Hong","Hui","Meng","Ge","Sui","Xia","Chai","Shi","Yi","Ma","Xiang","Fang","E","Pa","Chi","Qian","Wen","Wen","Rui","Bang","Bi","Yue","Yue","Jun","Qi","Ran","Yin","Qi","Tian","Yuan","Jue","Hui","Qin","Qi","Zhong","Ya","Ci","Mu","Wang","Fen","Fen","Hang","Gong","Zao","Fu","Ran","Jie","Fu","Chi","Dou","Piao","Xian","Ni","Te","Qiu","You","Zha","Ping","Chi","You","He","Han","Ju","Li","Fu","Ran","Zha","Gou","Pi","Bo","Xian","Zhu","Diao","Bie","Bing","Gu","Ran","Qu","She","Tie","Ling","Gu","Dan","Gu","Ying","Li","Cheng","Qu","Mou","Ge","Ci","Hui","Hui","Mang","Fu","Yang","Wa","Lie","Zhu","Yi","Xian","Kuo","Jiao","Li","Yi","Ping","Ji","Ha","She","Yi","Wang","Mo","Qiong","Qie","Gui","Gong","Zhi","Man","Ebi","Zhi","Jia","Rao","Si","Qi","Xing","Lie","Qiu","Shao","Yong","Jia","Shui","Che","Bai","E","Han"],["Shu","Xuan","Feng","Shen","Zhen","Fu","Xian","Zhe","Wu","Fu","Li","Lang","Bi","Chu","Yuan","You","Jie","Dan","Yan","Ting","Dian","Shui","Hui","Gua","Zhi","Song","Fei","Ju","Mi","Qi","Qi","Yu","Jun","Zha","Meng","Qiang","Si","Xi","Lun","Li","Die","Tiao","Tao","Kun","Gan","Han","Yu","Bang","Fei","Pi","Wei","Dun","Yi","Yuan","Su","Quan","Qian","Rui","Ni","Qing","Wei","Liang","Guo","Wan","Dong","E","Ban","Di","Wang","Can","Yang","Ying","Guo","Chan",,"La","Ke","Ji","He","Ting","Mai","Xu","Mian","Yu","Jie","Shi","Xuan","Huang","Yan","Bian","Rou","Wei","Fu","Yuan","Mei","Wei","Fu","Ruan","Xie","You","Qiu","Mao","Xia","Ying","Shi","Chong","Tang","Zhu","Zong","Ti","Fu","Yuan","Hui","Meng","La","Du","Hu","Qiu","Die","Li","Gua","Yun","Ju","Nan","Lou","Qun","Rong","Ying","Jiang",,"Lang","Pang","Si","Xi","Ci","Xi","Yuan","Weng","Lian","Sou","Ban","Rong","Rong","Ji","Wu","Qiu","Han","Qin","Yi","Bi","Hua","Tang","Yi","Du","Nai","He","Hu","Hui","Ma","Ming","Yi","Wen","Ying","Teng","Yu","Cang","So","Ebi","Man",,"Shang","Zhe","Cao","Chi","Di","Ao","Lu","Wei","Zhi","Tang","Chen","Piao","Qu","Pi","Yu","Jian","Luo","Lou","Qin","Zhong","Yin","Jiang","Shuai","Wen","Jiao","Wan","Zhi","Zhe","Ma","Ma","Guo","Liu","Mao","Xi","Cong","Li","Man","Xiao","Kamakiri","Zhang","Mang","Xiang","Mo","Zui","Si","Qiu","Te","Zhi","Peng","Peng","Jiao","Qu","Bie","Liao","Pan","Gui","Xi","Ji","Zhuan","Huang","Fei","Lao","Jue","Jue","Hui","Yin","Chan","Jiao","Shan","Rao","Xiao","Mou","Chong","Xun","Si",,"Cheng","Dang","Li","Xie","Shan","Yi","Jing","Da","Chan","Qi"],["Ci","Xiang","She","Luo","Qin","Ying","Chai","Li","Ze","Xuan","Lian","Zhu","Ze","Xie","Mang","Xie","Qi","Rong","Jian","Meng","Hao","Ruan","Huo","Zhuo","Jie","Bin","He","Mie","Fan","Lei","Jie","La","Mi","Li","Chun","Li","Qiu","Nie","Lu","Du","Xiao","Zhu","Long","Li","Long","Feng","Ye","Beng","Shang","Gu","Juan","Ying",,"Xi","Can","Qu","Quan","Du","Can","Man","Jue","Jie","Zhu","Zha","Xie","Huang","Niu","Pei","Nu","Xin","Zhong","Mo","Er","Ke","Mie","Xi","Xing","Yan","Kan","Yuan",,"Ling","Xuan","Shu","Xian","Tong","Long","Jie","Xian","Ya","Hu","Wei","Dao","Chong","Wei","Dao","Zhun","Heng","Qu","Yi","Yi","Bu","Gan","Yu","Biao","Cha","Yi","Shan","Chen","Fu","Gun","Fen","Shuai","Jie","Na","Zhong","Dan","Ri","Zhong","Zhong","Xie","Qi","Xie","Ran","Zhi","Ren","Qin","Jin","Jun","Yuan","Mei","Chai","Ao","Niao","Hui","Ran","Jia","Tuo","Ling","Dai","Bao","Pao","Yao","Zuo","Bi","Shao","Tan","Ju","He","Shu","Xiu","Zhen","Yi","Pa","Bo","Di","Wa","Fu","Gun","Zhi","Zhi","Ran","Pan","Yi","Mao","Tuo","Na","Kou","Xian","Chan","Qu","Bei","Gun","Xi","Ne","Bo","Horo","Fu","Yi","Chi","Ku","Ren","Jiang","Jia","Cun","Mo","Jie","Er","Luo","Ru","Zhu","Gui","Yin","Cai","Lie","Kamishimo","Yuki","Zhuang","Dang",,"Kun","Ken","Niao","Shu","Jia","Kun","Cheng","Li","Juan","Shen","Pou","Ge","Yi","Yu","Zhen","Liu","Qiu","Qun","Ji","Yi","Bu","Zhuang","Shui","Sha","Qun","Li","Lian","Lian","Ku","Jian","Fou","Chan","Bi","Gun","Tao","Yuan","Ling","Chi","Chang","Chou","Duo","Biao","Liang","Chang","Pei","Pei","Fei","Yuan","Luo","Guo","Yan","Du","Xi","Zhi","Ju","Qi"],["Ji","Zhi","Gua","Ken","Che","Ti","Ti","Fu","Chong","Xie","Bian","Die","Kun","Duan","Xiu","Xiu","He","Yuan","Bao","Bao","Fu","Yu","Tuan","Yan","Hui","Bei","Chu","Lu","Ena","Hitoe","Yun","Da","Gou","Da","Huai","Rong","Yuan","Ru","Nai","Jiong","Suo","Ban","Tun","Chi","Sang","Niao","Ying","Jie","Qian","Huai","Ku","Lian","Bao","Li","Zhe","Shi","Lu","Yi","Die","Xie","Xian","Wei","Biao","Cao","Ji","Jiang","Sen","Bao","Xiang","Chihaya","Pu","Jian","Zhuan","Jian","Zui","Ji","Dan","Za","Fan","Bo","Xiang","Xin","Bie","Rao","Man","Lan","Ao","Duo","Gui","Cao","Sui","Nong","Chan","Lian","Bi","Jin","Dang","Shu","Tan","Bi","Lan","Pu","Ru","Zhi",,"Shu","Wa","Shi","Bai","Xie","Bo","Chen","Lai","Long","Xi","Xian","Lan","Zhe","Dai","Tasuki","Zan","Shi","Jian","Pan","Yi","Ran","Ya","Xi","Xi","Yao","Feng","Tan",,"Biao","Fu","Ba","He","Ji","Ji","Jian","Guan","Bian","Yan","Gui","Jue","Pian","Mao","Mi","Mi","Mie","Shi","Si","Zhan","Luo","Jue","Mi","Tiao","Lian","Yao","Zhi","Jun","Xi","Shan","Wei","Xi","Tian","Yu","Lan","E","Du","Qin","Pang","Ji","Ming","Ying","Gou","Qu","Zhan","Jin","Guan","Deng","Jian","Luo","Qu","Jian","Wei","Jue","Qu","Luo","Lan","Shen","Di","Guan","Jian","Guan","Yan","Gui","Mi","Shi","Zhan","Lan","Jue","Ji","Xi","Di","Tian","Yu","Gou","Jin","Qu","Jiao","Jiu","Jin","Cu","Jue","Zhi","Chao","Ji","Gu","Dan","Zui","Di","Shang","Hua","Quan","Ge","Chi","Jie","Gui","Gong","Chu","Jie","Hun","Qiu","Xing","Su","Ni","Ji","Lu","Zhi","Zha","Bi","Xing","Hu","Shang","Gong","Zhi","Xue","Chu","Xi","Yi","Lu","Jue","Xi","Yan","Xi"],["Yan","Yan","Ding","Fu","Qiu","Qiu","Jiao","Hong","Ji","Fan","Xun","Diao","Hong","Cha","Tao","Xu","Jie","Yi","Ren","Xun","Yin","Shan","Qi","Tuo","Ji","Xun","Yin","E","Fen","Ya","Yao","Song","Shen","Yin","Xin","Jue","Xiao","Ne","Chen","You","Zhi","Xiong","Fang","Xin","Chao","She","Xian","Sha","Tun","Xu","Yi","Yi","Su","Chi","He","Shen","He","Xu","Zhen","Zhu","Zheng","Gou","Zi","Zi","Zhan","Gu","Fu","Quan","Die","Ling","Di","Yang","Li","Nao","Pan","Zhou","Gan","Yi","Ju","Ao","Zha","Tuo","Yi","Qu","Zhao","Ping","Bi","Xiong","Qu","Ba","Da","Zu","Tao","Zhu","Ci","Zhe","Yong","Xu","Xun","Yi","Huang","He","Shi","Cha","Jiao","Shi","Hen","Cha","Gou","Gui","Quan","Hui","Jie","Hua","Gai","Xiang","Wei","Shen","Chou","Tong","Mi","Zhan","Ming","E","Hui","Yan","Xiong","Gua","Er","Beng","Tiao","Chi","Lei","Zhu","Kuang","Kua","Wu","Yu","Teng","Ji","Zhi","Ren","Su","Lang","E","Kuang","E","Shi","Ting","Dan","Bo","Chan","You","Heng","Qiao","Qin","Shua","An","Yu","Xiao","Cheng","Jie","Xian","Wu","Wu","Gao","Song","Pu","Hui","Jing","Shuo","Zhen","Shuo","Du","Yasashi","Chang","Shui","Jie","Ke","Qu","Cong","Xiao","Sui","Wang","Xuan","Fei","Chi","Ta","Yi","Na","Yin","Diao","Pi","Chuo","Chan","Chen","Zhun","Ji","Qi","Tan","Zhui","Wei","Ju","Qing","Jian","Zheng","Ze","Zou","Qian","Zhuo","Liang","Jian","Zhu","Hao","Lun","Shen","Biao","Huai","Pian","Yu","Die","Xu","Pian","Shi","Xuan","Shi","Hun","Hua","E","Zhong","Di","Xie","Fu","Pu","Ting","Jian","Qi","Yu","Zi","Chuan","Xi","Hui","Yin","An","Xian","Nan","Chen","Feng","Zhu","Yang","Yan","Heng","Xuan","Ge","Nuo","Qi"],["Mou","Ye","Wei",,"Teng","Zou","Shan","Jian","Bo","Ku","Huang","Huo","Ge","Ying","Mi","Xiao","Mi","Xi","Qiang","Chen","Nue","Ti","Su","Bang","Chi","Qian","Shi","Jiang","Yuan","Xie","Xue","Tao","Yao","Yao",,"Yu","Biao","Cong","Qing","Li","Mo","Mo","Shang","Zhe","Miu","Jian","Ze","Jie","Lian","Lou","Can","Ou","Guan","Xi","Zhuo","Ao","Ao","Jin","Zhe","Yi","Hu","Jiang","Man","Chao","Han","Hua","Chan","Xu","Zeng","Se","Xi","She","Dui","Zheng","Nao","Lan","E","Ying","Jue","Ji","Zun","Jiao","Bo","Hui","Zhuan","Mu","Zen","Zha","Shi","Qiao","Tan","Zen","Pu","Sheng","Xuan","Zao","Tan","Dang","Sui","Qian","Ji","Jiao","Jing","Lian","Nou","Yi","Ai","Zhan","Pi","Hui","Hua","Yi","Yi","Shan","Rang","Nou","Qian","Zhui","Ta","Hu","Zhou","Hao","Ye","Ying","Jian","Yu","Jian","Hui","Du","Zhe","Xuan","Zan","Lei","Shen","Wei","Chan","Li","Yi","Bian","Zhe","Yan","E","Chou","Wei","Chou","Yao","Chan","Rang","Yin","Lan","Chen","Huo","Zhe","Huan","Zan","Yi","Dang","Zhan","Yan","Du","Yan","Ji","Ding","Fu","Ren","Ji","Jie","Hong","Tao","Rang","Shan","Qi","Tuo","Xun","Yi","Xun","Ji","Ren","Jiang","Hui","Ou","Ju","Ya","Ne","Xu","E","Lun","Xiong","Song","Feng","She","Fang","Jue","Zheng","Gu","He","Ping","Zu","Shi","Xiong","Zha","Su","Zhen","Di","Zou","Ci","Qu","Zhao","Bi","Yi","Yi","Kuang","Lei","Shi","Gua","Shi","Jie","Hui","Cheng","Zhu","Shen","Hua","Dan","Gou","Quan","Gui","Xun","Yi","Zheng","Gai","Xiang","Cha","Hun","Xu","Zhou","Jie","Wu","Yu","Qiao","Wu","Gao","You","Hui","Kuang","Shuo","Song","Ai","Qing","Zhu","Zou","Nuo","Du","Zhuo","Fei","Ke","Wei"],["Yu","Shui","Shen","Diao","Chan","Liang","Zhun","Sui","Tan","Shen","Yi","Mou","Chen","Die","Huang","Jian","Xie","Nue","Ye","Wei","E","Yu","Xuan","Chan","Zi","An","Yan","Di","Mi","Pian","Xu","Mo","Dang","Su","Xie","Yao","Bang","Shi","Qian","Mi","Jin","Man","Zhe","Jian","Miu","Tan","Zen","Qiao","Lan","Pu","Jue","Yan","Qian","Zhan","Chen","Gu","Qian","Hong","Xia","Jue","Hong","Han","Hong","Xi","Xi","Huo","Liao","Han","Du","Long","Dou","Jiang","Qi","Shi","Li","Deng","Wan","Bi","Shu","Xian","Feng","Zhi","Zhi","Yan","Yan","Shi","Chu","Hui","Tun","Yi","Tun","Yi","Jian","Ba","Hou","E","Cu","Xiang","Huan","Jian","Ken","Gai","Qu","Fu","Xi","Bin","Hao","Yu","Zhu","Jia",,"Xi","Bo","Wen","Huan","Bin","Di","Zong","Fen","Yi","Zhi","Bao","Chai","Han","Pi","Na","Pi","Gou","Na","You","Diao","Mo","Si","Xiu","Huan","Kun","He","He","Mo","Han","Mao","Li","Ni","Bi","Yu","Jia","Tuan","Mao","Pi","Xi","E","Ju","Mo","Chu","Tan","Huan","Jue","Bei","Zhen","Yuan","Fu","Cai","Gong","Te","Yi","Hang","Wan","Pin","Huo","Fan","Tan","Guan","Ze","Zhi","Er","Zhu","Shi","Bi","Zi","Er","Gui","Pian","Bian","Mai","Dai","Sheng","Kuang","Fei","Tie","Yi","Chi","Mao","He","Bi","Lu","Ren","Hui","Gai","Pian","Zi","Jia","Xu","Zei","Jiao","Gai","Zang","Jian","Ying","Xun","Zhen","She","Bin","Bin","Qiu","She","Chuan","Zang","Zhou","Lai","Zan","Si","Chen","Shang","Tian","Pei","Geng","Xian","Mai","Jian","Sui","Fu","Tan","Cong","Cong","Zhi","Ji","Zhang","Du","Jin","Xiong","Shun","Yun","Bao","Zai","Lai","Feng","Cang","Ji","Sheng","Ai","Zhuan","Fu","Gou","Sai","Ze","Liao"],["Wei","Bai","Chen","Zhuan","Zhi","Zhui","Biao","Yun","Zeng","Tan","Zan","Yan",,"Shan","Wan","Ying","Jin","Gan","Xian","Zang","Bi","Du","Shu","Yan",,"Xuan","Long","Gan","Zang","Bei","Zhen","Fu","Yuan","Gong","Cai","Ze","Xian","Bai","Zhang","Huo","Zhi","Fan","Tan","Pin","Bian","Gou","Zhu","Guan","Er","Jian","Bi","Shi","Tie","Gui","Kuang","Dai","Mao","Fei","He","Yi","Zei","Zhi","Jia","Hui","Zi","Ren","Lu","Zang","Zi","Gai","Jin","Qiu","Zhen","Lai","She","Fu","Du","Ji","Shu","Shang","Si","Bi","Zhou","Geng","Pei","Tan","Lai","Feng","Zhui","Fu","Zhuan","Sai","Ze","Yan","Zan","Yun","Zeng","Shan","Ying","Gan","Chi","Xi","She","Nan","Xiong","Xi","Cheng","He","Cheng","Zhe","Xia","Tang","Zou","Zou","Li","Jiu","Fu","Zhao","Gan","Qi","Shan","Qiong","Qin","Xian","Ci","Jue","Qin","Chi","Ci","Chen","Chen","Die","Ju","Chao","Di","Se","Zhan","Zhu","Yue","Qu","Jie","Chi","Chu","Gua","Xue","Ci","Tiao","Duo","Lie","Gan","Suo","Cu","Xi","Zhao","Su","Yin","Ju","Jian","Que","Tang","Chuo","Cui","Lu","Qu","Dang","Qiu","Zi","Ti","Qu","Chi","Huang","Qiao","Qiao","Yao","Zao","Ti",,"Zan","Zan","Zu","Pa","Bao","Ku","Ke","Dun","Jue","Fu","Chen","Jian","Fang","Zhi","Sa","Yue","Pa","Qi","Yue","Qiang","Tuo","Tai","Yi","Nian","Ling","Mei","Ba","Die","Ku","Tuo","Jia","Ci","Pao","Qia","Zhu","Ju","Die","Zhi","Fu","Pan","Ju","Shan","Bo","Ni","Ju","Li","Gen","Yi","Ji","Dai","Xian","Jiao","Duo","Zhu","Zhuan","Kua","Zhuai","Gui","Qiong","Kui","Xiang","Chi","Lu","Beng","Zhi","Jia","Tiao","Cai","Jian","Ta","Qiao","Bi","Xian","Duo","Ji","Ju","Ji","Shu","Tu"],["Chu","Jing","Nie","Xiao","Bo","Chi","Qun","Mou","Shu","Lang","Yong","Jiao","Chou","Qiao",,"Ta","Jian","Qi","Wo","Wei","Zhuo","Jie","Ji","Nie","Ju","Ju","Lun","Lu","Leng","Huai","Ju","Chi","Wan","Quan","Ti","Bo","Zu","Qie","Ji","Cu","Zong","Cai","Zong","Peng","Zhi","Zheng","Dian","Zhi","Yu","Duo","Dun","Chun","Yong","Zhong","Di","Zhe","Chen","Chuai","Jian","Gua","Tang","Ju","Fu","Zu","Die","Pian","Rou","Nuo","Ti","Cha","Tui","Jian","Dao","Cuo","Xi","Ta","Qiang","Zhan","Dian","Ti","Ji","Nie","Man","Liu","Zhan","Bi","Chong","Lu","Liao","Cu","Tang","Dai","Suo","Xi","Kui","Ji","Zhi","Qiang","Di","Man","Zong","Lian","Beng","Zao","Nian","Bie","Tui","Ju","Deng","Ceng","Xian","Fan","Chu","Zhong","Dun","Bo","Cu","Zu","Jue","Jue","Lin","Ta","Qiao","Qiao","Pu","Liao","Dun","Cuan","Kuang","Zao","Ta","Bi","Bi","Zhu","Ju","Chu","Qiao","Dun","Chou","Ji","Wu","Yue","Nian","Lin","Lie","Zhi","Li","Zhi","Chan","Chu","Duan","Wei","Long","Lin","Xian","Wei","Zuan","Lan","Xie","Rang","Xie","Nie","Ta","Qu","Jie","Cuan","Zuan","Xi","Kui","Jue","Lin","Shen","Gong","Dan","Segare","Qu","Ti","Duo","Duo","Gong","Lang","Nerau","Luo","Ai","Ji","Ju","Tang","Utsuke",,"Yan","Shitsuke","Kang","Qu","Lou","Lao","Tuo","Zhi","Yagate","Ti","Dao","Yagate","Yu","Che","Ya","Gui","Jun","Wei","Yue","Xin","Di","Xuan","Fan","Ren","Shan","Qiang","Shu","Tun","Chen","Dai","E","Na","Qi","Mao","Ruan","Ren","Fan","Zhuan","Hong","Hu","Qu","Huang","Di","Ling","Dai","Ao","Zhen","Fan","Kuang","Ang","Peng","Bei","Gu","Ku","Pao","Zhu","Rong","E","Ba","Zhou","Zhi","Yao","Ke","Yi","Qing","Shi","Ping"],["Er","Qiong","Ju","Jiao","Guang","Lu","Kai","Quan","Zhou","Zai","Zhi","She","Liang","Yu","Shao","You","Huan","Yun","Zhe","Wan","Fu","Qing","Zhou","Ni","Ling","Zhe","Zhan","Liang","Zi","Hui","Wang","Chuo","Guo","Kan","Yi","Peng","Qian","Gun","Nian","Pian","Guan","Bei","Lun","Pai","Liang","Ruan","Rou","Ji","Yang","Xian","Chuan","Cou","Qun","Ge","You","Hong","Shu","Fu","Zi","Fu","Wen","Ben","Zhan","Yu","Wen","Tao","Gu","Zhen","Xia","Yuan","Lu","Jiu","Chao","Zhuan","Wei","Hun","Sori","Che","Jiao","Zhan","Pu","Lao","Fen","Fan","Lin","Ge","Se","Kan","Huan","Yi","Ji","Dui","Er","Yu","Xian","Hong","Lei","Pei","Li","Li","Lu","Lin","Che","Ya","Gui","Xuan","Di","Ren","Zhuan","E","Lun","Ruan","Hong","Ku","Ke","Lu","Zhou","Zhi","Yi","Hu","Zhen","Li","Yao","Qing","Shi","Zai","Zhi","Jiao","Zhou","Quan","Lu","Jiao","Zhe","Fu","Liang","Nian","Bei","Hui","Gun","Wang","Liang","Chuo","Zi","Cou","Fu","Ji","Wen","Shu","Pei","Yuan","Xia","Zhan","Lu","Che","Lin","Xin","Gu","Ci","Ci","Pi","Zui","Bian","La","La","Ci","Xue","Ban","Bian","Bian","Bian",,"Bian","Ban","Ci","Bian","Bian","Chen","Ru","Nong","Nong","Zhen","Chuo","Chuo","Suberu","Reng","Bian","Bian","Sip","Ip","Liao","Da","Chan","Gan","Qian","Yu","Yu","Qi","Xun","Yi","Guo","Mai","Qi","Za","Wang","Jia","Zhun","Ying","Ti","Yun","Jin","Hang","Ya","Fan","Wu","Da","E","Huan","Zhe","Totemo","Jin","Yuan","Wei","Lian","Chi","Che","Ni","Tiao","Zhi","Yi","Jiong","Jia","Chen","Dai","Er","Di","Po","Wang","Die","Ze","Tao","Shu","Tuo","Kep","Jing","Hui","Tong","You","Mi","Beng","Ji","Nai","Yi","Jie","Zhui","Lie","Xun"],["Tui","Song","Gua","Tao","Pang","Hou","Ni","Dun","Jiong","Xuan","Xun","Bu","You","Xiao","Qiu","Tou","Zhu","Qiu","Di","Di","Tu","Jing","Ti","Dou","Yi","Zhe","Tong","Guang","Wu","Shi","Cheng","Su","Zao","Qun","Feng","Lian","Suo","Hui","Li","Sako","Lai","Ben","Cuo","Jue","Beng","Huan","Dai","Lu","You","Zhou","Jin","Yu","Chuo","Kui","Wei","Ti","Yi","Da","Yuan","Luo","Bi","Nuo","Yu","Dang","Sui","Dun","Sui","Yan","Chuan","Chi","Ti","Yu","Shi","Zhen","You","Yun","E","Bian","Guo","E","Xia","Huang","Qiu","Dao","Da","Wei","Appare","Yi","Gou","Yao","Chu","Liu","Xun","Ta","Di","Chi","Yuan","Su","Ta","Qian",,"Yao","Guan","Zhang","Ao","Shi","Ce","Chi","Su","Zao","Zhe","Dun","Di","Lou","Chi","Cuo","Lin","Zun","Rao","Qian","Xuan","Yu","Yi","Wu","Liao","Ju","Shi","Bi","Yao","Mai","Xie","Sui","Huan","Zhan","Teng","Er","Miao","Bian","Bian","La","Li","Yuan","Yao","Luo","Li","Yi","Ting","Deng","Qi","Yong","Shan","Han","Yu","Mang","Ru","Qiong",,"Kuang","Fu","Kang","Bin","Fang","Xing","Na","Xin","Shen","Bang","Yuan","Cun","Huo","Xie","Bang","Wu","Ju","You","Han","Tai","Qiu","Bi","Pei","Bing","Shao","Bei","Wa","Di","Zou","Ye","Lin","Kuang","Gui","Zhu","Shi","Ku","Yu","Gai","Ge","Xi","Zhi","Ji","Xun","Hou","Xing","Jiao","Xi","Gui","Nuo","Lang","Jia","Kuai","Zheng","Otoko","Yun","Yan","Cheng","Dou","Chi","Lu","Fu","Wu","Fu","Gao","Hao","Lang","Jia","Geng","Jun","Ying","Bo","Xi","Bei","Li","Yun","Bu","Xiao","Qi","Pi","Qing","Guo","Zhou","Tan","Zou","Ping","Lai","Ni","Chen","You","Bu","Xiang","Dan","Ju","Yong","Qiao","Yi","Du","Yan","Mei"],["Ruo","Bei","E","Yu","Juan","Yu","Yun","Hou","Kui","Xiang","Xiang","Sou","Tang","Ming","Xi","Ru","Chu","Zi","Zou","Ju","Wu","Xiang","Yun","Hao","Yong","Bi","Mo","Chao","Fu","Liao","Yin","Zhuan","Hu","Qiao","Yan","Zhang","Fan","Qiao","Xu","Deng","Bi","Xin","Bi","Ceng","Wei","Zheng","Mao","Shan","Lin","Po","Dan","Meng","Ye","Cao","Kuai","Feng","Meng","Zou","Kuang","Lian","Zan","Chan","You","Qi","Yan","Chan","Zan","Ling","Huan","Xi","Feng","Zan","Li","You","Ding","Qiu","Zhuo","Pei","Zhou","Yi","Hang","Yu","Jiu","Yan","Zui","Mao","Dan","Xu","Tou","Zhen","Fen","Sakenomoto",,"Yun","Tai","Tian","Qia","Tuo","Zuo","Han","Gu","Su","Po","Chou","Zai","Ming","Luo","Chuo","Chou","You","Tong","Zhi","Xian","Jiang","Cheng","Yin","Tu","Xiao","Mei","Ku","Suan","Lei","Pu","Zui","Hai","Yan","Xi","Niang","Wei","Lu","Lan","Yan","Tao","Pei","Zhan","Chun","Tan","Zui","Chuo","Cu","Kun","Ti","Mian","Du","Hu","Xu","Xing","Tan","Jiu","Chun","Yun","Po","Ke","Sou","Mi","Quan","Chou","Cuo","Yun","Yong","Ang","Zha","Hai","Tang","Jiang","Piao","Shan","Yu","Li","Zao","Lao","Yi","Jiang","Pu","Jiao","Xi","Tan","Po","Nong","Yi","Li","Ju","Jiao","Yi","Niang","Ru","Xun","Chou","Yan","Ling","Mi","Mi","Niang","Xin","Jiao","Xi","Mi","Yan","Bian","Cai","Shi","You","Shi","Shi","Li","Chong","Ye","Liang","Li","Jin","Jin","Qiu","Yi","Diao","Dao","Zhao","Ding","Po","Qiu","He","Fu","Zhen","Zhi","Ba","Luan","Fu","Nai","Diao","Shan","Qiao","Kou","Chuan","Zi","Fan","Yu","Hua","Han","Gong","Qi","Mang","Ri","Di","Si","Xi","Yi","Chai","Shi","Tu","Xi","Nu","Qian","Ishiyumi","Jian","Pi","Ye","Yin"],["Ba","Fang","Chen","Xing","Tou","Yue","Yan","Fu","Pi","Na","Xin","E","Jue","Dun","Gou","Yin","Qian","Ban","Ji","Ren","Chao","Niu","Fen","Yun","Ji","Qin","Pi","Guo","Hong","Yin","Jun","Shi","Yi","Zhong","Nie","Gai","Ri","Huo","Tai","Kang","Habaki","Irori","Ngaak",,"Duo","Zi","Ni","Tu","Shi","Min","Gu","E","Ling","Bing","Yi","Gu","Ba","Pi","Yu","Si","Zuo","Bu","You","Dian","Jia","Zhen","Shi","Shi","Tie","Ju","Zhan","Shi","She","Xuan","Zhao","Bao","He","Bi","Sheng","Chu","Shi","Bo","Zhu","Chi","Za","Po","Tong","Qian","Fu","Zhai","Liu","Qian","Fu","Li","Yue","Pi","Yang","Ban","Bo","Jie","Gou","Shu","Zheng","Mu","Ni","Nie","Di","Jia","Mu","Dan","Shen","Yi","Si","Kuang","Ka","Bei","Jian","Tong","Xing","Hong","Jiao","Chi","Er","Ge","Bing","Shi","Mou","Jia","Yin","Jun","Zhou","Chong","Shang","Tong","Mo","Lei","Ji","Yu","Xu","Ren","Zun","Zhi","Qiong","Shan","Chi","Xian","Xing","Quan","Pi","Tie","Zhu","Hou","Ming","Kua","Yao","Xian","Xian","Xiu","Jun","Cha","Lao","Ji","Pi","Ru","Mi","Yi","Yin","Guang","An","Diou","You","Se","Kao","Qian","Luan","Kasugai","Ai","Diao","Han","Rui","Shi","Keng","Qiu","Xiao","Zhe","Xiu","Zang","Ti","Cuo","Gua","Gong","Zhong","Dou","Lu","Mei","Lang","Wan","Xin","Yun","Bei","Wu","Su","Yu","Chan","Ting","Bo","Han","Jia","Hong","Cuan","Feng","Chan","Wan","Zhi","Si","Xuan","Wu","Wu","Tiao","Gong","Zhuo","Lue","Xing","Qian","Shen","Han","Lue","Xie","Chu","Zheng","Ju","Xian","Tie","Mang","Pu","Li","Pan","Rui","Cheng","Gao","Li","Te","Pyeng","Zhu",,"Tu","Liu","Zui","Ju","Chang","Yuan","Jian","Gang","Diao","Tao","Chang"],["Lun","Kua","Ling","Bei","Lu","Li","Qiang","Pou","Juan","Min","Zui","Peng","An","Pi","Xian","Ya","Zhui","Lei","A","Kong","Ta","Kun","Du","Wei","Chui","Zi","Zheng","Ben","Nie","Cong","Qun","Tan","Ding","Qi","Qian","Zhuo","Qi","Yu","Jin","Guan","Mao","Chang","Tian","Xi","Lian","Tao","Gu","Cuo","Shu","Zhen","Lu","Meng","Lu","Hua","Biao","Ga","Lai","Ken","Kazari","Bu","Nai","Wan","Zan",,"De","Xian",,"Huo","Liang",,"Men","Kai","Ying","Di","Lian","Guo","Xian","Du","Tu","Wei","Cong","Fu","Rou","Ji","E","Rou","Chen","Ti","Zha","Hong","Yang","Duan","Xia","Yu","Keng","Xing","Huang","Wei","Fu","Zhao","Cha","Qie","She","Hong","Kui","Tian","Mou","Qiao","Qiao","Hou","Tou","Cong","Huan","Ye","Min","Jian","Duan","Jian","Song","Kui","Hu","Xuan","Duo","Jie","Zhen","Bian","Zhong","Zi","Xiu","Ye","Mei","Pai","Ai","Jie",,"Mei","Chuo","Ta","Bang","Xia","Lian","Suo","Xi","Liu","Zu","Ye","Nou","Weng","Rong","Tang","Suo","Qiang","Ge","Shuo","Chui","Bo","Pan","Sa","Bi","Sang","Gang","Zi","Wu","Ying","Huang","Tiao","Liu","Kai","Sun","Sha","Sou","Wan","Hao","Zhen","Zhen","Luo","Yi","Yuan","Tang","Nie","Xi","Jia","Ge","Ma","Juan","Kasugai","Habaki","Suo",,,,"Na","Lu","Suo","Ou","Zu","Tuan","Xiu","Guan","Xuan","Lian","Shou","Ao","Man","Mo","Luo","Bi","Wei","Liu","Di","Qiao","Cong","Yi","Lu","Ao","Keng","Qiang","Cui","Qi","Chang","Tang","Man","Yong","Chan","Feng","Jing","Biao","Shu","Lou","Xiu","Cong","Long","Zan","Jian","Cao","Li","Xia","Xi","Kang",,"Beng",,,"Zheng","Lu","Hua","Ji","Pu","Hui","Qiang","Po","Lin","Suo","Xiu","San","Cheng"],["Kui","Si","Liu","Nao","Heng","Pie","Sui","Fan","Qiao","Quan","Yang","Tang","Xiang","Jue","Jiao","Zun","Liao","Jie","Lao","Dui","Tan","Zan","Ji","Jian","Zhong","Deng","Ya","Ying","Dui","Jue","Nou","Ti","Pu","Tie",,,"Ding","Shan","Kai","Jian","Fei","Sui","Lu","Juan","Hui","Yu","Lian","Zhuo","Qiao","Qian","Zhuo","Lei","Bi","Tie","Huan","Ye","Duo","Guo","Dang","Ju","Fen","Da","Bei","Yi","Ai","Zong","Xun","Diao","Zhu","Heng","Zhui","Ji","Nie","Ta","Huo","Qing","Bin","Ying","Kui","Ning","Xu","Jian","Jian","Yari","Cha","Zhi","Mie","Li","Lei","Ji","Zuan","Kuang","Shang","Peng","La","Du","Shuo","Chuo","Lu","Biao","Bao","Lu",,,"Long","E","Lu","Xin","Jian","Lan","Bo","Jian","Yao","Chan","Xiang","Jian","Xi","Guan","Cang","Nie","Lei","Cuan","Qu","Pan","Luo","Zuan","Luan","Zao","Nie","Jue","Tang","Shu","Lan","Jin","Qiu","Yi","Zhen","Ding","Zhao","Po","Diao","Tu","Qian","Chuan","Shan","Ji","Fan","Diao","Men","Nu","Xi","Chai","Xing","Gai","Bu","Tai","Ju","Dun","Chao","Zhong","Na","Bei","Gang","Ban","Qian","Yao","Qin","Jun","Wu","Gou","Kang","Fang","Huo","Tou","Niu","Ba","Yu","Qian","Zheng","Qian","Gu","Bo","E","Po","Bu","Ba","Yue","Zuan","Mu","Dan","Jia","Dian","You","Tie","Bo","Ling","Shuo","Qian","Liu","Bao","Shi","Xuan","She","Bi","Ni","Pi","Duo","Xing","Kao","Lao","Er","Mang","Ya","You","Cheng","Jia","Ye","Nao","Zhi","Dang","Tong","Lu","Diao","Yin","Kai","Zha","Zhu","Xian","Ting","Diu","Xian","Hua","Quan","Sha","Jia","Yao","Ge","Ming","Zheng","Se","Jiao","Yi","Chan","Chong","Tang","An","Yin","Ru","Zhu","Lao","Pu","Wu","Lai","Te","Lian","Keng"],["Xiao","Suo","Li","Zheng","Chu","Guo","Gao","Tie","Xiu","Cuo","Lue","Feng","Xin","Liu","Kai","Jian","Rui","Ti","Lang","Qian","Ju","A","Qiang","Duo","Tian","Cuo","Mao","Ben","Qi","De","Kua","Kun","Chang","Xi","Gu","Luo","Chui","Zhui","Jin","Zhi","Xian","Juan","Huo","Pou","Tan","Ding","Jian","Ju","Meng","Zi","Qie","Ying","Kai","Qiang","Song","E","Cha","Qiao","Zhong","Duan","Sou","Huang","Huan","Ai","Du","Mei","Lou","Zi","Fei","Mei","Mo","Zhen","Bo","Ge","Nie","Tang","Juan","Nie","Na","Liu","Hao","Bang","Yi","Jia","Bin","Rong","Biao","Tang","Man","Luo","Beng","Yong","Jing","Di","Zu","Xuan","Liu","Tan","Jue","Liao","Pu","Lu","Dui","Lan","Pu","Cuan","Qiang","Deng","Huo","Lei","Huan","Zhuo","Lian","Yi","Cha","Biao","La","Chan","Xiang","Chang","Chang","Jiu","Ao","Die","Qu","Liao","Mi","Chang","Men","Ma","Shuan","Shan","Huo","Men","Yan","Bi","Han","Bi","San","Kai","Kang","Beng","Hong","Run","San","Xian","Xian","Jian","Min","Xia","Yuru","Dou","Zha","Nao","Jian","Peng","Xia","Ling","Bian","Bi","Run","He","Guan","Ge","Ge","Fa","Chu","Hong","Gui","Min","Se","Kun","Lang","Lu","Ting","Sha","Ju","Yue","Yue","Chan","Qu","Lin","Chang","Shai","Kun","Yan","Min","Yan","E","Hun","Yu","Wen","Xiang","Bao","Xiang","Qu","Yao","Wen","Ban","An","Wei","Yin","Kuo","Que","Lan","Du",,"Phwung","Tian","Nie","Ta","Kai","He","Que","Chuang","Guan","Dou","Qi","Kui","Tang","Guan","Piao","Kan","Xi","Hui","Chan","Pi","Dang","Huan","Ta","Wen",,"Men","Shuan","Shan","Yan","Han","Bi","Wen","Chuang","Run","Wei","Xian","Hong","Jian","Min","Kang","Men","Zha","Nao","Gui","Wen","Ta","Min","Lu","Kai"],["Fa","Ge","He","Kun","Jiu","Yue","Lang","Du","Yu","Yan","Chang","Xi","Wen","Hun","Yan","E","Chan","Lan","Qu","Hui","Kuo","Que","Ge","Tian","Ta","Que","Kan","Huan","Fu","Fu","Le","Dui","Xin","Qian","Wu","Yi","Tuo","Yin","Yang","Dou","E","Sheng","Ban","Pei","Keng","Yun","Ruan","Zhi","Pi","Jing","Fang","Yang","Yin","Zhen","Jie","Cheng","E","Qu","Di","Zu","Zuo","Dian","Ling","A","Tuo","Tuo","Po","Bing","Fu","Ji","Lu","Long","Chen","Xing","Duo","Lou","Mo","Jiang","Shu","Duo","Xian","Er","Gui","Yu","Gai","Shan","Xun","Qiao","Xing","Chun","Fu","Bi","Xia","Shan","Sheng","Zhi","Pu","Dou","Yuan","Zhen","Chu","Xian","Tou","Nie","Yun","Xian","Pei","Pei","Zou","Yi","Dui","Lun","Yin","Ju","Chui","Chen","Pi","Ling","Tao","Xian","Lu","Sheng","Xian","Yin","Zhu","Yang","Reng","Shan","Chong","Yan","Yin","Yu","Ti","Yu","Long","Wei","Wei","Nie","Dui","Sui","An","Huang","Jie","Sui","Yin","Gai","Yan","Hui","Ge","Yun","Wu","Wei","Ai","Xi","Tang","Ji","Zhang","Dao","Ao","Xi","Yin",,"Rao","Lin","Tui","Deng","Pi","Sui","Sui","Yu","Xian","Fen","Ni","Er","Ji","Dao","Xi","Yin","E","Hui","Long","Xi","Li","Li","Li","Zhui","He","Zhi","Zhun","Jun","Nan","Yi","Que","Yan","Qian","Ya","Xiong","Ya","Ji","Gu","Huan","Zhi","Gou","Jun","Ci","Yong","Ju","Chu","Hu","Za","Luo","Yu","Chou","Diao","Sui","Han","Huo","Shuang","Guan","Chu","Za","Yong","Ji","Xi","Chou","Liu","Li","Nan","Xue","Za","Ji","Ji","Yu","Yu","Xue","Na","Fou","Se","Mu","Wen","Fen","Pang","Yun","Li","Li","Ang","Ling","Lei","An","Bao","Meng","Dian","Dang","Xing","Wu","Zhao"],["Xu","Ji","Mu","Chen","Xiao","Zha","Ting","Zhen","Pei","Mei","Ling","Qi","Chou","Huo","Sha","Fei","Weng","Zhan","Yin","Ni","Chou","Tun","Lin",,"Dong","Ying","Wu","Ling","Shuang","Ling","Xia","Hong","Yin","Mo","Mai","Yun","Liu","Meng","Bin","Wu","Wei","Huo","Yin","Xi","Yi","Ai","Dan","Deng","Xian","Yu","Lu","Long","Dai","Ji","Pang","Yang","Ba","Pi","Wei",,"Xi","Ji","Mai","Meng","Meng","Lei","Li","Huo","Ai","Fei","Dai","Long","Ling","Ai","Feng","Li","Bao",,"He","He","Bing","Qing","Qing","Jing","Tian","Zhen","Jing","Cheng","Qing","Jing","Jing","Dian","Jing","Tian","Fei","Fei","Kao","Mi","Mian","Mian","Pao","Ye","Tian","Hui","Ye","Ge","Ding","Cha","Jian","Ren","Di","Du","Wu","Ren","Qin","Jin","Xue","Niu","Ba","Yin","Sa","Na","Mo","Zu","Da","Ban","Yi","Yao","Tao","Tuo","Jia","Hong","Pao","Yang","Tomo","Yin","Jia","Tao","Ji","Xie","An","An","Hen","Gong","Kohaze","Da","Qiao","Ting","Wan","Ying","Sui","Tiao","Qiao","Xuan","Kong","Beng","Ta","Zhang","Bing","Kuo","Ju","La","Xie","Rou","Bang","Yi","Qiu","Qiu","He","Xiao","Mu","Ju","Jian","Bian","Di","Jian","On","Tao","Gou","Ta","Bei","Xie","Pan","Ge","Bi","Kuo","Tang","Lou","Gui","Qiao","Xue","Ji","Jian","Jiang","Chan","Da","Huo","Xian","Qian","Du","Wa","Jian","Lan","Wei","Ren","Fu","Mei","Juan","Ge","Wei","Qiao","Han","Chang",,"Rou","Xun","She","Wei","Ge","Bei","Tao","Gou","Yun",,"Bi","Wei","Hui","Du","Wa","Du","Wei","Ren","Fu","Han","Wei","Yun","Tao","Jiu","Jiu","Xian","Xie","Xian","Ji","Yin","Za","Yun","Shao","Le","Peng","Heng","Ying","Yun","Peng","Yin","Yin","Xiang"],["Hu","Ye","Ding","Qing","Pan","Xiang","Shun","Han","Xu","Yi","Xu","Gu","Song","Kui","Qi","Hang","Yu","Wan","Ban","Dun","Di","Dan","Pan","Po","Ling","Ce","Jing","Lei","He","Qiao","E","E","Wei","Jie","Gua","Shen","Yi","Shen","Hai","Dui","Pian","Ping","Lei","Fu","Jia","Tou","Hui","Kui","Jia","Le","Tian","Cheng","Ying","Jun","Hu","Han","Jing","Tui","Tui","Pin","Lai","Tui","Zi","Zi","Chui","Ding","Lai","Yan","Han","Jian","Ke","Cui","Jiong","Qin","Yi","Sai","Ti","E","E","Yan","Hun","Kan","Yong","Zhuan","Yan","Xian","Xin","Yi","Yuan","Sang","Dian","Dian","Jiang","Ku","Lei","Liao","Piao","Yi","Man","Qi","Rao","Hao","Qiao","Gu","Xun","Qian","Hui","Zhan","Ru","Hong","Bin","Xian","Pin","Lu","Lan","Nie","Quan","Ye","Ding","Qing","Han","Xiang","Shun","Xu","Xu","Wan","Gu","Dun","Qi","Ban","Song","Hang","Yu","Lu","Ling","Po","Jing","Jie","Jia","Tian","Han","Ying","Jiong","Hai","Yi","Pin","Hui","Tui","Han","Ying","Ying","Ke","Ti","Yong","E","Zhuan","Yan","E","Nie","Man","Dian","Sang","Hao","Lei","Zhan","Ru","Pin","Quan","Feng","Biao","Oroshi","Fu","Xia","Zhan","Biao","Sa","Ba","Tai","Lie","Gua","Xuan","Shao","Ju","Bi","Si","Wei","Yang","Yao","Sou","Kai","Sao","Fan","Liu","Xi","Liao","Piao","Piao","Liu","Biao","Biao","Biao","Liao",,"Se","Feng","Biao","Feng","Yang","Zhan","Biao","Sa","Ju","Si","Sou","Yao","Liu","Piao","Biao","Biao","Fei","Fan","Fei","Fei","Shi","Shi","Can","Ji","Ding","Si","Tuo","Zhan","Sun","Xiang","Tun","Ren","Yu","Juan","Chi","Yin","Fan","Fan","Sun","Yin","Zhu","Yi","Zhai","Bi","Jie","Tao","Liu","Ci","Tie","Si","Bao","Shi","Duo"],["Hai","Ren","Tian","Jiao","Jia","Bing","Yao","Tong","Ci","Xiang","Yang","Yang","Er","Yan","Le","Yi","Can","Bo","Nei","E","Bu","Jun","Dou","Su","Yu","Shi","Yao","Hun","Guo","Shi","Jian","Zhui","Bing","Xian","Bu","Ye","Tan","Fei","Zhang","Wei","Guan","E","Nuan","Hun","Hu","Huang","Tie","Hui","Jian","Hou","He","Xing","Fen","Wei","Gu","Cha","Song","Tang","Bo","Gao","Xi","Kui","Liu","Sou","Tao","Ye","Yun","Mo","Tang","Man","Bi","Yu","Xiu","Jin","San","Kui","Zhuan","Shan","Chi","Dan","Yi","Ji","Rao","Cheng","Yong","Tao","Hui","Xiang","Zhan","Fen","Hai","Meng","Yan","Mo","Chan","Xiang","Luo","Zuan","Nang","Shi","Ding","Ji","Tuo","Xing","Tun","Xi","Ren","Yu","Chi","Fan","Yin","Jian","Shi","Bao","Si","Duo","Yi","Er","Rao","Xiang","Jia","Le","Jiao","Yi","Bing","Bo","Dou","E","Yu","Nei","Jun","Guo","Hun","Xian","Guan","Cha","Kui","Gu","Sou","Chan","Ye","Mo","Bo","Liu","Xiu","Jin","Man","San","Zhuan","Nang","Shou","Kui","Guo","Xiang","Fen","Ba","Ni","Bi","Bo","Tu","Han","Fei","Jian","An","Ai","Fu","Xian","Wen","Xin","Fen","Bin","Xing","Ma","Yu","Feng","Han","Di","Tuo","Tuo","Chi","Xun","Zhu","Zhi","Pei","Xin","Ri","Sa","Yin","Wen","Zhi","Dan","Lu","You","Bo","Bao","Kuai","Tuo","Yi","Qu",,"Qu","Jiong","Bo","Zhao","Yuan","Peng","Zhou","Ju","Zhu","Nu","Ju","Pi","Zang","Jia","Ling","Zhen","Tai","Fu","Yang","Shi","Bi","Tuo","Tuo","Si","Liu","Ma","Pian","Tao","Zhi","Rong","Teng","Dong","Xun","Quan","Shen","Jiong","Er","Hai","Bo","Zhu","Yin","Luo","Shuu","Dan","Xie","Liu","Ju","Song","Qin","Mang","Liang","Han","Tu","Xuan","Tui","Jun"],["E","Cheng","Xin","Ai","Lu","Zhui","Zhou","She","Pian","Kun","Tao","Lai","Zong","Ke","Qi","Qi","Yan","Fei","Sao","Yan","Jie","Yao","Wu","Pian","Cong","Pian","Qian","Fei","Huang","Jian","Huo","Yu","Ti","Quan","Xia","Zong","Kui","Rou","Si","Gua","Tuo","Kui","Sou","Qian","Cheng","Zhi","Liu","Pang","Teng","Xi","Cao","Du","Yan","Yuan","Zou","Sao","Shan","Li","Zhi","Shuang","Lu","Xi","Luo","Zhang","Mo","Ao","Can","Piao","Cong","Qu","Bi","Zhi","Yu","Xu","Hua","Bo","Su","Xiao","Lin","Chan","Dun","Liu","Tuo","Zeng","Tan","Jiao","Tie","Yan","Luo","Zhan","Jing","Yi","Ye","Tuo","Bin","Zou","Yan","Peng","Lu","Teng","Xiang","Ji","Shuang","Ju","Xi","Huan","Li","Biao","Ma","Yu","Tuo","Xun","Chi","Qu","Ri","Bo","Lu","Zang","Shi","Si","Fu","Ju","Zou","Zhu","Tuo","Nu","Jia","Yi","Tai","Xiao","Ma","Yin","Jiao","Hua","Luo","Hai","Pian","Biao","Li","Cheng","Yan","Xin","Qin","Jun","Qi","Qi","Ke","Zhui","Zong","Su","Can","Pian","Zhi","Kui","Sao","Wu","Ao","Liu","Qian","Shan","Piao","Luo","Cong","Chan","Zou","Ji","Shuang","Xiang","Gu","Wei","Wei","Wei","Yu","Gan","Yi","Ang","Tou","Xie","Bao","Bi","Chi","Ti","Di","Ku","Hai","Qiao","Gou","Kua","Ge","Tui","Geng","Pian","Bi","Ke","Ka","Yu","Sui","Lou","Bo","Xiao","Pang","Bo","Ci","Kuan","Bin","Mo","Liao","Lou","Nao","Du","Zang","Sui","Ti","Bin","Kuan","Lu","Gao","Gao","Qiao","Kao","Qiao","Lao","Zao","Biao","Kun","Kun","Ti","Fang","Xiu","Ran","Mao","Dan","Kun","Bin","Fa","Tiao","Peng","Zi","Fa","Ran","Ti","Pao","Pi","Mao","Fu","Er","Rong","Qu","Gong","Xiu","Gua","Ji","Peng","Zhua","Shao","Sha"],["Ti","Li","Bin","Zong","Ti","Peng","Song","Zheng","Quan","Zong","Shun","Jian","Duo","Hu","La","Jiu","Qi","Lian","Zhen","Bin","Peng","Mo","San","Man","Man","Seng","Xu","Lie","Qian","Qian","Nong","Huan","Kuai","Ning","Bin","Lie","Rang","Dou","Dou","Nao","Hong","Xi","Dou","Han","Dou","Dou","Jiu","Chang","Yu","Yu","Li","Juan","Fu","Qian","Gui","Zong","Liu","Gui","Shang","Yu","Gui","Mei","Ji","Qi","Jie","Kui","Hun","Ba","Po","Mei","Xu","Yan","Xiao","Liang","Yu","Tui","Qi","Wang","Liang","Wei","Jian","Chi","Piao","Bi","Mo","Ji","Xu","Chou","Yan","Zhan","Yu","Dao","Ren","Ji","Eri","Gong","Tuo","Diao","Ji","Xu","E","E","Sha","Hang","Tun","Mo","Jie","Shen","Fan","Yuan","Bi","Lu","Wen","Hu","Lu","Za","Fang","Fen","Na","You","Namazu","Todo","He","Xia","Qu","Han","Pi","Ling","Tuo","Bo","Qiu","Ping","Fu","Bi","Ji","Wei","Ju","Diao","Bo","You","Gun","Pi","Nian","Xing","Tai","Bao","Fu","Zha","Ju","Gu","Kajika","Tong",,"Ta","Jie","Shu","Hou","Xiang","Er","An","Wei","Tiao","Zhu","Yin","Lie","Luo","Tong","Yi","Qi","Bing","Wei","Jiao","Bu","Gui","Xian","Ge","Hui","Bora","Mate","Kao","Gori","Duo","Jun","Ti","Man","Xiao","Za","Sha","Qin","Yu","Nei","Zhe","Gun","Geng","Su","Wu","Qiu","Ting","Fu","Wan","You","Li","Sha","Sha","Gao","Meng","Ugui","Asari","Subashiri","Kazunoko","Yong","Ni","Zi","Qi","Qing","Xiang","Nei","Chun","Ji","Diao","Qie","Gu","Zhou","Dong","Lai","Fei","Ni","Yi","Kun","Lu","Jiu","Chang","Jing","Lun","Ling","Zou","Li","Meng","Zong","Zhi","Nian","Shachi","Dojou","Sukesou","Shi","Shen","Hun","Shi","Hou","Xing","Zhu","La","Zong","Ji","Bian","Bian"],["Huan","Quan","Ze","Wei","Wei","Yu","Qun","Rou","Die","Huang","Lian","Yan","Qiu","Qiu","Jian","Bi","E","Yang","Fu","Sai","Jian","Xia","Tuo","Hu","Muroaji","Ruo","Haraka","Wen","Jian","Hao","Wu","Fang","Sao","Liu","Ma","Shi","Shi","Yin","Z","Teng","Ta","Yao","Ge","Rong","Qian","Qi","Wen","Ruo","Hatahata","Lian","Ao","Le","Hui","Min","Ji","Tiao","Qu","Jian","Sao","Man","Xi","Qiu","Biao","Ji","Ji","Zhu","Jiang","Qiu","Zhuan","Yong","Zhang","Kang","Xue","Bie","Jue","Qu","Xiang","Bo","Jiao","Xun","Su","Huang","Zun","Shan","Shan","Fan","Jue","Lin","Xun","Miao","Xi","Eso","Kyou","Fen","Guan","Hou","Kuai","Zei","Sao","Zhan","Gan","Gui","Sheng","Li","Chang","Hatahata","Shiira","Mutsu","Ru","Ji","Xu","Huo","Shiira","Li","Lie","Li","Mie","Zhen","Xiang","E","Lu","Guan","Li","Xian","Yu","Dao","Ji","You","Tun","Lu","Fang","Ba","He","Bo","Ping","Nian","Lu","You","Zha","Fu","Bo","Bao","Hou","Pi","Tai","Gui","Jie","Kao","Wei","Er","Tong","Ze","Hou","Kuai","Ji","Jiao","Xian","Za","Xiang","Xun","Geng","Li","Lian","Jian","Li","Shi","Tiao","Gun","Sha","Wan","Jun","Ji","Yong","Qing","Ling","Qi","Zou","Fei","Kun","Chang","Gu","Ni","Nian","Diao","Jing","Shen","Shi","Zi","Fen","Die","Bi","Chang","Shi","Wen","Wei","Sai","E","Qiu","Fu","Huang","Quan","Jiang","Bian","Sao","Ao","Qi","Ta","Yin","Yao","Fang","Jian","Le","Biao","Xue","Bie","Man","Min","Yong","Wei","Xi","Jue","Shan","Lin","Zun","Huo","Gan","Li","Zhan","Guan","Niao","Yi","Fu","Li","Jiu","Bu","Yan","Fu","Diao","Ji","Feng","Nio","Gan","Shi","Feng","Ming","Bao","Yuan","Zhi","Hu","Qin","Fu","Fen","Wen","Jian","Shi","Yu"],["Fou","Yiao","Jue","Jue","Pi","Huan","Zhen","Bao","Yan","Ya","Zheng","Fang","Feng","Wen","Ou","Te","Jia","Nu","Ling","Mie","Fu","Tuo","Wen","Li","Bian","Zhi","Ge","Yuan","Zi","Qu","Xiao","Zhi","Dan","Ju","You","Gu","Zhong","Yu","Yang","Rong","Ya","Tie","Yu","Shigi","Ying","Zhui","Wu","Er","Gua","Ai","Zhi","Yan","Heng","Jiao","Ji","Lie","Zhu","Ren","Yi","Hong","Luo","Ru","Mou","Ge","Ren","Jiao","Xiu","Zhou","Zhi","Luo","Chidori","Toki","Ten","Luan","Jia","Ji","Yu","Huan","Tuo","Bu","Wu","Juan","Yu","Bo","Xun","Xun","Bi","Xi","Jun","Ju","Tu","Jing","Ti","E","E","Kuang","Hu","Wu","Shen","Lai","Ikaruga","Kakesu","Lu","Ping","Shu","Fu","An","Zhao","Peng","Qin","Qian","Bei","Diao","Lu","Que","Jian","Ju","Tu","Ya","Yuan","Qi","Li","Ye","Zhui","Kong","Zhui","Kun","Sheng","Qi","Jing","Yi","Yi","Jing","Zi","Lai","Dong","Qi","Chun","Geng","Ju","Qu","Isuka","Kikuitadaki","Ji","Shu",,"Chi","Miao","Rou","An","Qiu","Ti","Hu","Ti","E","Jie","Mao","Fu","Chun","Tu","Yan","He","Yuan","Pian","Yun","Mei","Hu","Ying","Dun","Mu","Ju","Tsugumi","Cang","Fang","Gu","Ying","Yuan","Xuan","Weng","Shi","He","Chu","Tang","Xia","Ruo","Liu","Ji","Gu","Jian","Zhun","Han","Zi","Zi","Ni","Yao","Yan","Ji","Li","Tian","Kou","Ti","Ti","Ni","Tu","Ma","Jiao","Gao","Tian","Chen","Li","Zhuan","Zhe","Ao","Yao","Yi","Ou","Chi","Zhi","Liao","Rong","Lou","Bi","Shuang","Zhuo","Yu","Wu","Jue","Yin","Quan","Si","Jiao","Yi","Hua","Bi","Ying","Su","Huang","Fan","Jiao","Liao","Yan","Kao","Jiu","Xian","Xian","Tu","Mai","Zun","Yu","Ying","Lu","Tuan","Xian","Xue","Yi","Pi"],["Shu","Luo","Qi","Yi","Ji","Zhe","Yu","Zhan","Ye","Yang","Pi","Ning","Huo","Mi","Ying","Meng","Di","Yue","Yu","Lei","Bao","Lu","He","Long","Shuang","Yue","Ying","Guan","Qu","Li","Luan","Niao","Jiu","Ji","Yuan","Ming","Shi","Ou","Ya","Cang","Bao","Zhen","Gu","Dong","Lu","Ya","Xiao","Yang","Ling","Zhi","Qu","Yuan","Xue","Tuo","Si","Zhi","Er","Gua","Xiu","Heng","Zhou","Ge","Luan","Hong","Wu","Bo","Li","Juan","Hu","E","Yu","Xian","Ti","Wu","Que","Miao","An","Kun","Bei","Peng","Qian","Chun","Geng","Yuan","Su","Hu","He","E","Gu","Qiu","Zi","Mei","Mu","Ni","Yao","Weng","Liu","Ji","Ni","Jian","He","Yi","Ying","Zhe","Liao","Liao","Jiao","Jiu","Yu","Lu","Xuan","Zhan","Ying","Huo","Meng","Guan","Shuang","Lu","Jin","Ling","Jian","Xian","Cuo","Jian","Jian","Yan","Cuo","Lu","You","Cu","Ji","Biao","Cu","Biao","Zhu","Jun","Zhu","Jian","Mi","Mi","Wu","Liu","Chen","Jun","Lin","Ni","Qi","Lu","Jiu","Jun","Jing","Li","Xiang","Yan","Jia","Mi","Li","She","Zhang","Lin","Jing","Ji","Ling","Yan","Cu","Mai","Mai","Ge","Chao","Fu","Mian","Mian","Fu","Pao","Qu","Qu","Mou","Fu","Xian","Lai","Qu","Mian",,"Feng","Fu","Qu","Mian","Ma","Mo","Mo","Hui","Ma","Zou","Nen","Fen","Huang","Huang","Jin","Guang","Tian","Tou","Heng","Xi","Kuang","Heng","Shu","Li","Nian","Chi","Hei","Hei","Yi","Qian","Dan","Xi","Tuan","Mo","Mo","Qian","Dai","Chu","You","Dian","Yi","Xia","Yan","Qu","Mei","Yan","Jing","Yu","Li","Dang","Du","Can","Yin","An","Yan","Tan","An","Zhen","Dai","Can","Yi","Mei","Dan","Yan","Du","Lu","Zhi","Fen","Fu","Fu","Min","Min","Yuan"],["Cu","Qu","Chao","Wa","Zhu","Zhi","Mang","Ao","Bie","Tuo","Bi","Yuan","Chao","Tuo","Ding","Mi","Nai","Ding","Zi","Gu","Gu","Dong","Fen","Tao","Yuan","Pi","Chang","Gao","Qi","Yuan","Tang","Teng","Shu","Shu","Fen","Fei","Wen","Ba","Diao","Tuo","Tong","Qu","Sheng","Shi","You","Shi","Ting","Wu","Nian","Jing","Hun","Ju","Yan","Tu","Ti","Xi","Xian","Yan","Lei","Bi","Yao","Qiu","Han","Wu","Wu","Hou","Xi","Ge","Zha","Xiu","Weng","Zha","Nong","Nang","Qi","Zhai","Ji","Zi","Ji","Ji","Qi","Ji","Chi","Chen","Chen","He","Ya","Ken","Xie","Pao","Cuo","Shi","Zi","Chi","Nian","Ju","Tiao","Ling","Ling","Chu","Quan","Xie","Ken","Nie","Jiu","Yao","Chuo","Kun","Yu","Chu","Yi","Ni","Cuo","Zou","Qu","Nen","Xian","Ou","E","Wo","Yi","Chuo","Zou","Dian","Chu","Jin","Ya","Chi","Chen","He","Ken","Ju","Ling","Pao","Tiao","Zi","Ken","Yu","Chuo","Qu","Wo","Long","Pang","Gong","Pang","Yan","Long","Long","Gong","Kan","Ta","Ling","Ta","Long","Gong","Kan","Gui","Qiu","Bie","Gui","Yue","Chui","He","Jue","Xie","Yu"],["it","ix","i","ip","iet","iex","ie","iep","at","ax","a","ap","uox","uo","uop","ot","ox","o","op","ex","e","wu","bit","bix","bi","bip","biet","biex","bie","biep","bat","bax","ba","bap","buox","buo","buop","bot","box","bo","bop","bex","be","bep","but","bux","bu","bup","burx","bur","byt","byx","by","byp","byrx","byr","pit","pix","pi","pip","piex","pie","piep","pat","pax","pa","pap","puox","puo","puop","pot","pox","po","pop","put","pux","pu","pup","purx","pur","pyt","pyx","py","pyp","pyrx","pyr","bbit","bbix","bbi","bbip","bbiet","bbiex","bbie","bbiep","bbat","bbax","bba","bbap","bbuox","bbuo","bbuop","bbot","bbox","bbo","bbop","bbex","bbe","bbep","bbut","bbux","bbu","bbup","bburx","bbur","bbyt","bbyx","bby","bbyp","nbit","nbix","nbi","nbip","nbiex","nbie","nbiep","nbat","nbax","nba","nbap","nbot","nbox","nbo","nbop","nbut","nbux","nbu","nbup","nburx","nbur","nbyt","nbyx","nby","nbyp","nbyrx","nbyr","hmit","hmix","hmi","hmip","hmiex","hmie","hmiep","hmat","hmax","hma","hmap","hmuox","hmuo","hmuop","hmot","hmox","hmo","hmop","hmut","hmux","hmu","hmup","hmurx","hmur","hmyx","hmy","hmyp","hmyrx","hmyr","mit","mix","mi","mip","miex","mie","miep","mat","max","ma","map","muot","muox","muo","muop","mot","mox","mo","mop","mex","me","mut","mux","mu","mup","murx","mur","myt","myx","my","myp","fit","fix","fi","fip","fat","fax","fa","fap","fox","fo","fop","fut","fux","fu","fup","furx","fur","fyt","fyx","fy","fyp","vit","vix","vi","vip","viet","viex","vie","viep","vat","vax","va","vap","vot","vox","vo","vop","vex","vep","vut","vux","vu","vup","vurx","vur","vyt","vyx","vy","vyp","vyrx","vyr"],["dit","dix","di","dip","diex","die","diep","dat","dax","da","dap","duox","duo","dot","dox","do","dop","dex","de","dep","dut","dux","du","dup","durx","dur","tit","tix","ti","tip","tiex","tie","tiep","tat","tax","ta","tap","tuot","tuox","tuo","tuop","tot","tox","to","top","tex","te","tep","tut","tux","tu","tup","turx","tur","ddit","ddix","ddi","ddip","ddiex","ddie","ddiep","ddat","ddax","dda","ddap","dduox","dduo","dduop","ddot","ddox","ddo","ddop","ddex","dde","ddep","ddut","ddux","ddu","ddup","ddurx","ddur","ndit","ndix","ndi","ndip","ndiex","ndie","ndat","ndax","nda","ndap","ndot","ndox","ndo","ndop","ndex","nde","ndep","ndut","ndux","ndu","ndup","ndurx","ndur","hnit","hnix","hni","hnip","hniet","hniex","hnie","hniep","hnat","hnax","hna","hnap","hnuox","hnuo","hnot","hnox","hnop","hnex","hne","hnep","hnut","nit","nix","ni","nip","niex","nie","niep","nax","na","nap","nuox","nuo","nuop","not","nox","no","nop","nex","ne","nep","nut","nux","nu","nup","nurx","nur","hlit","hlix","hli","hlip","hliex","hlie","hliep","hlat","hlax","hla","hlap","hluox","hluo","hluop","hlox","hlo","hlop","hlex","hle","hlep","hlut","hlux","hlu","hlup","hlurx","hlur","hlyt","hlyx","hly","hlyp","hlyrx","hlyr","lit","lix","li","lip","liet","liex","lie","liep","lat","lax","la","lap","luot","luox","luo","luop","lot","lox","lo","lop","lex","le","lep","lut","lux","lu","lup","lurx","lur","lyt","lyx","ly","lyp","lyrx","lyr","git","gix","gi","gip","giet","giex","gie","giep","gat","gax","ga","gap","guot","guox","guo","guop","got","gox","go","gop","get","gex","ge","gep","gut","gux","gu","gup","gurx","gur","kit","kix","ki","kip","kiex","kie","kiep","kat"],["kax","ka","kap","kuox","kuo","kuop","kot","kox","ko","kop","ket","kex","ke","kep","kut","kux","ku","kup","kurx","kur","ggit","ggix","ggi","ggiex","ggie","ggiep","ggat","ggax","gga","ggap","gguot","gguox","gguo","gguop","ggot","ggox","ggo","ggop","gget","ggex","gge","ggep","ggut","ggux","ggu","ggup","ggurx","ggur","mgiex","mgie","mgat","mgax","mga","mgap","mguox","mguo","mguop","mgot","mgox","mgo","mgop","mgex","mge","mgep","mgut","mgux","mgu","mgup","mgurx","mgur","hxit","hxix","hxi","hxip","hxiet","hxiex","hxie","hxiep","hxat","hxax","hxa","hxap","hxuot","hxuox","hxuo","hxuop","hxot","hxox","hxo","hxop","hxex","hxe","hxep","ngiex","ngie","ngiep","ngat","ngax","nga","ngap","nguot","nguox","nguo","ngot","ngox","ngo","ngop","ngex","nge","ngep","hit","hiex","hie","hat","hax","ha","hap","huot","huox","huo","huop","hot","hox","ho","hop","hex","he","hep","wat","wax","wa","wap","wuox","wuo","wuop","wox","wo","wop","wex","we","wep","zit","zix","zi","zip","ziex","zie","ziep","zat","zax","za","zap","zuox","zuo","zuop","zot","zox","zo","zop","zex","ze","zep","zut","zux","zu","zup","zurx","zur","zyt","zyx","zy","zyp","zyrx","zyr","cit","cix","ci","cip","ciet","ciex","cie","ciep","cat","cax","ca","cap","cuox","cuo","cuop","cot","cox","co","cop","cex","ce","cep","cut","cux","cu","cup","curx","cur","cyt","cyx","cy","cyp","cyrx","cyr","zzit","zzix","zzi","zzip","zziet","zziex","zzie","zziep","zzat","zzax","zza","zzap","zzox","zzo","zzop","zzex","zze","zzep","zzux","zzu","zzup","zzurx","zzur","zzyt","zzyx","zzy","zzyp","zzyrx","zzyr","nzit","nzix","nzi","nzip","nziex","nzie","nziep","nzat","nzax","nza","nzap","nzuox","nzuo","nzox","nzop","nzex","nze","nzux","nzu"],["nzup","nzurx","nzur","nzyt","nzyx","nzy","nzyp","nzyrx","nzyr","sit","six","si","sip","siex","sie","siep","sat","sax","sa","sap","suox","suo","suop","sot","sox","so","sop","sex","se","sep","sut","sux","su","sup","surx","sur","syt","syx","sy","syp","syrx","syr","ssit","ssix","ssi","ssip","ssiex","ssie","ssiep","ssat","ssax","ssa","ssap","ssot","ssox","sso","ssop","ssex","sse","ssep","ssut","ssux","ssu","ssup","ssyt","ssyx","ssy","ssyp","ssyrx","ssyr","zhat","zhax","zha","zhap","zhuox","zhuo","zhuop","zhot","zhox","zho","zhop","zhet","zhex","zhe","zhep","zhut","zhux","zhu","zhup","zhurx","zhur","zhyt","zhyx","zhy","zhyp","zhyrx","zhyr","chat","chax","cha","chap","chuot","chuox","chuo","chuop","chot","chox","cho","chop","chet","chex","che","chep","chux","chu","chup","churx","chur","chyt","chyx","chy","chyp","chyrx","chyr","rrax","rra","rruox","rruo","rrot","rrox","rro","rrop","rret","rrex","rre","rrep","rrut","rrux","rru","rrup","rrurx","rrur","rryt","rryx","rry","rryp","rryrx","rryr","nrat","nrax","nra","nrap","nrox","nro","nrop","nret","nrex","nre","nrep","nrut","nrux","nru","nrup","nrurx","nrur","nryt","nryx","nry","nryp","nryrx","nryr","shat","shax","sha","shap","shuox","shuo","shuop","shot","shox","sho","shop","shet","shex","she","shep","shut","shux","shu","shup","shurx","shur","shyt","shyx","shy","shyp","shyrx","shyr","rat","rax","ra","rap","ruox","ruo","ruop","rot","rox","ro","rop","rex","re","rep","rut","rux","ru","rup","rurx","rur","ryt","ryx","ry","ryp","ryrx","ryr","jit","jix","ji","jip","jiet","jiex","jie","jiep","juot","juox","juo","juop","jot","jox","jo","jop","jut","jux","ju","jup","jurx","jur","jyt","jyx","jy","jyp","jyrx","jyr","qit","qix","qi","qip"],["qiet","qiex","qie","qiep","quot","quox","quo","quop","qot","qox","qo","qop","qut","qux","qu","qup","qurx","qur","qyt","qyx","qy","qyp","qyrx","qyr","jjit","jjix","jji","jjip","jjiet","jjiex","jjie","jjiep","jjuox","jjuo","jjuop","jjot","jjox","jjo","jjop","jjut","jjux","jju","jjup","jjurx","jjur","jjyt","jjyx","jjy","jjyp","njit","njix","nji","njip","njiet","njiex","njie","njiep","njuox","njuo","njot","njox","njo","njop","njux","nju","njup","njurx","njur","njyt","njyx","njy","njyp","njyrx","njyr","nyit","nyix","nyi","nyip","nyiet","nyiex","nyie","nyiep","nyuox","nyuo","nyuop","nyot","nyox","nyo","nyop","nyut","nyux","nyu","nyup","xit","xix","xi","xip","xiet","xiex","xie","xiep","xuox","xuo","xot","xox","xo","xop","xyt","xyx","xy","xyp","xyrx","xyr","yit","yix","yi","yip","yiet","yiex","yie","yiep","yuot","yuox","yuo","yuop","yot","yox","yo","yop","yut","yux","yu","yup","yurx","yur","yyt","yyx","yy","yyp","yyrx","yyr",,,,"Qot","Li","Kit","Nyip","Cyp","Ssi","Ggop","Gep","Mi","Hxit","Lyr","Bbut","Mop","Yo","Put","Hxuo","Tat","Ga",,,"Ddur","Bur","Gguo","Nyop","Tu","Op","Jjut","Zot","Pyt","Hmo","Yit","Vur","Shy","Vep","Za","Jo",,"Jjy","Got","Jjie","Wo","Du","Shur","Lie","Cy","Cuop","Cip","Hxop","Shat",,"Shop","Che","Zziet",,"Ke"],[],[],[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"A","a","A","a","HENG","heng","TZ","tz","3","3","4","4","4","4","F","S","AA","aa","AO","ao","AU","au","AV","av","AV-","av-","AY","ay","C","c","K","k","K","k","K","k","L","l","L","l","O","o","O","o","OO","oo","P","p","P","p","P","p","Q","q","Q","q","R","r","R","r","V","v","VY","vy","Z","z","TH","th","TH","th","Y","y","ET","et","IS","is","CON","con","US","us","dum","lum","num","rum","RUM","tum","um","D","d","F","f","G","G","g","L","l","R","r","S","s","T","t","^",":","=","'","'","H","l",".","N","n","C","c","c","h","B","b","F","f","AE","ae","OE","oe","UE","ue","G","g","K","k","N","n","R","r","S","s","H","E","G","L","I","Q","K","T","J","CHI","B","b","O","o","U","u",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"I","H","oe","M","F","P","M","I","M1"],[],[],[],[],["ga","gag","gagg","gags","gan","ganj","ganh","gad","gal","galg","galm","galb","gals","galt","galp","galh","gam","gab","gabs","gas","gass","gang","gaj","gac","gak","gat","gap","gah","gae","gaeg","gaegg","gaegs","gaen","gaenj","gaenh","gaed","gael","gaelg","gaelm","gaelb","gaels","gaelt","gaelp","gaelh","gaem","gaeb","gaebs","gaes","gaess","gaeng","gaej","gaec","gaek","gaet","gaep","gaeh","gya","gyag","gyagg","gyags","gyan","gyanj","gyanh","gyad","gyal","gyalg","gyalm","gyalb","gyals","gyalt","gyalp","gyalh","gyam","gyab","gyabs","gyas","gyass","gyang","gyaj","gyac","gyak","gyat","gyap","gyah","gyae","gyaeg","gyaegg","gyaegs","gyaen","gyaenj","gyaenh","gyaed","gyael","gyaelg","gyaelm","gyaelb","gyaels","gyaelt","gyaelp","gyaelh","gyaem","gyaeb","gyaebs","gyaes","gyaess","gyaeng","gyaej","gyaec","gyaek","gyaet","gyaep","gyaeh","geo","geog","geogg","geogs","geon","geonj","geonh","geod","geol","geolg","geolm","geolb","geols","geolt","geolp","geolh","geom","geob","geobs","geos","geoss","geong","geoj","geoc","geok","geot","geop","geoh","ge","geg","gegg","gegs","gen","genj","genh","ged","gel","gelg","gelm","gelb","gels","gelt","gelp","gelh","gem","geb","gebs","ges","gess","geng","gej","gec","gek","get","gep","geh","gyeo","gyeog","gyeogg","gyeogs","gyeon","gyeonj","gyeonh","gyeod","gyeol","gyeolg","gyeolm","gyeolb","gyeols","gyeolt","gyeolp","gyeolh","gyeom","gyeob","gyeobs","gyeos","gyeoss","gyeong","gyeoj","gyeoc","gyeok","gyeot","gyeop","gyeoh","gye","gyeg","gyegg","gyegs","gyen","gyenj","gyenh","gyed","gyel","gyelg","gyelm","gyelb","gyels","gyelt","gyelp","gyelh","gyem","gyeb","gyebs","gyes","gyess","gyeng","gyej","gyec","gyek","gyet","gyep","gyeh","go","gog","gogg","gogs","gon","gonj","gonh","god","gol","golg","golm","golb","gols","golt","golp","golh","gom","gob","gobs","gos","goss","gong","goj","goc","gok","got","gop","goh","gwa","gwag","gwagg","gwags"],["gwan","gwanj","gwanh","gwad","gwal","gwalg","gwalm","gwalb","gwals","gwalt","gwalp","gwalh","gwam","gwab","gwabs","gwas","gwass","gwang","gwaj","gwac","gwak","gwat","gwap","gwah","gwae","gwaeg","gwaegg","gwaegs","gwaen","gwaenj","gwaenh","gwaed","gwael","gwaelg","gwaelm","gwaelb","gwaels","gwaelt","gwaelp","gwaelh","gwaem","gwaeb","gwaebs","gwaes","gwaess","gwaeng","gwaej","gwaec","gwaek","gwaet","gwaep","gwaeh","goe","goeg","goegg","goegs","goen","goenj","goenh","goed","goel","goelg","goelm","goelb","goels","goelt","goelp","goelh","goem","goeb","goebs","goes","goess","goeng","goej","goec","goek","goet","goep","goeh","gyo","gyog","gyogg","gyogs","gyon","gyonj","gyonh","gyod","gyol","gyolg","gyolm","gyolb","gyols","gyolt","gyolp","gyolh","gyom","gyob","gyobs","gyos","gyoss","gyong","gyoj","gyoc","gyok","gyot","gyop","gyoh","gu","gug","gugg","gugs","gun","gunj","gunh","gud","gul","gulg","gulm","gulb","guls","gult","gulp","gulh","gum","gub","gubs","gus","guss","gung","guj","guc","guk","gut","gup","guh","gweo","gweog","gweogg","gweogs","gweon","gweonj","gweonh","gweod","gweol","gweolg","gweolm","gweolb","gweols","gweolt","gweolp","gweolh","gweom","gweob","gweobs","gweos","gweoss","gweong","gweoj","gweoc","gweok","gweot","gweop","gweoh","gwe","gweg","gwegg","gwegs","gwen","gwenj","gwenh","gwed","gwel","gwelg","gwelm","gwelb","gwels","gwelt","gwelp","gwelh","gwem","gweb","gwebs","gwes","gwess","gweng","gwej","gwec","gwek","gwet","gwep","gweh","gwi","gwig","gwigg","gwigs","gwin","gwinj","gwinh","gwid","gwil","gwilg","gwilm","gwilb","gwils","gwilt","gwilp","gwilh","gwim","gwib","gwibs","gwis","gwiss","gwing","gwij","gwic","gwik","gwit","gwip","gwih","gyu","gyug","gyugg","gyugs","gyun","gyunj","gyunh","gyud","gyul","gyulg","gyulm","gyulb","gyuls","gyult","gyulp","gyulh","gyum","gyub","gyubs","gyus","gyuss","gyung","gyuj","gyuc","gyuk","gyut","gyup","gyuh","geu","geug","geugg","geugs","geun","geunj","geunh","geud"],["geul","geulg","geulm","geulb","geuls","geult","geulp","geulh","geum","geub","geubs","geus","geuss","geung","geuj","geuc","geuk","geut","geup","geuh","gyi","gyig","gyigg","gyigs","gyin","gyinj","gyinh","gyid","gyil","gyilg","gyilm","gyilb","gyils","gyilt","gyilp","gyilh","gyim","gyib","gyibs","gyis","gyiss","gying","gyij","gyic","gyik","gyit","gyip","gyih","gi","gig","gigg","gigs","gin","ginj","ginh","gid","gil","gilg","gilm","gilb","gils","gilt","gilp","gilh","gim","gib","gibs","gis","giss","ging","gij","gic","gik","git","gip","gih","gga","ggag","ggagg","ggags","ggan","gganj","gganh","ggad","ggal","ggalg","ggalm","ggalb","ggals","ggalt","ggalp","ggalh","ggam","ggab","ggabs","ggas","ggass","ggang","ggaj","ggac","ggak","ggat","ggap","ggah","ggae","ggaeg","ggaegg","ggaegs","ggaen","ggaenj","ggaenh","ggaed","ggael","ggaelg","ggaelm","ggaelb","ggaels","ggaelt","ggaelp","ggaelh","ggaem","ggaeb","ggaebs","ggaes","ggaess","ggaeng","ggaej","ggaec","ggaek","ggaet","ggaep","ggaeh","ggya","ggyag","ggyagg","ggyags","ggyan","ggyanj","ggyanh","ggyad","ggyal","ggyalg","ggyalm","ggyalb","ggyals","ggyalt","ggyalp","ggyalh","ggyam","ggyab","ggyabs","ggyas","ggyass","ggyang","ggyaj","ggyac","ggyak","ggyat","ggyap","ggyah","ggyae","ggyaeg","ggyaegg","ggyaegs","ggyaen","ggyaenj","ggyaenh","ggyaed","ggyael","ggyaelg","ggyaelm","ggyaelb","ggyaels","ggyaelt","ggyaelp","ggyaelh","ggyaem","ggyaeb","ggyaebs","ggyaes","ggyaess","ggyaeng","ggyaej","ggyaec","ggyaek","ggyaet","ggyaep","ggyaeh","ggeo","ggeog","ggeogg","ggeogs","ggeon","ggeonj","ggeonh","ggeod","ggeol","ggeolg","ggeolm","ggeolb","ggeols","ggeolt","ggeolp","ggeolh","ggeom","ggeob","ggeobs","ggeos","ggeoss","ggeong","ggeoj","ggeoc","ggeok","ggeot","ggeop","ggeoh","gge","ggeg","ggegg","ggegs","ggen","ggenj","ggenh","gged","ggel","ggelg","ggelm","ggelb","ggels","ggelt","ggelp","ggelh","ggem","ggeb","ggebs","gges","ggess","ggeng","ggej","ggec","ggek","gget","ggep","ggeh","ggyeo","ggyeog","ggyeogg","ggyeogs","ggyeon","ggyeonj","ggyeonh","ggyeod","ggyeol","ggyeolg","ggyeolm","ggyeolb"],["ggyeols","ggyeolt","ggyeolp","ggyeolh","ggyeom","ggyeob","ggyeobs","ggyeos","ggyeoss","ggyeong","ggyeoj","ggyeoc","ggyeok","ggyeot","ggyeop","ggyeoh","ggye","ggyeg","ggyegg","ggyegs","ggyen","ggyenj","ggyenh","ggyed","ggyel","ggyelg","ggyelm","ggyelb","ggyels","ggyelt","ggyelp","ggyelh","ggyem","ggyeb","ggyebs","ggyes","ggyess","ggyeng","ggyej","ggyec","ggyek","ggyet","ggyep","ggyeh","ggo","ggog","ggogg","ggogs","ggon","ggonj","ggonh","ggod","ggol","ggolg","ggolm","ggolb","ggols","ggolt","ggolp","ggolh","ggom","ggob","ggobs","ggos","ggoss","ggong","ggoj","ggoc","ggok","ggot","ggop","ggoh","ggwa","ggwag","ggwagg","ggwags","ggwan","ggwanj","ggwanh","ggwad","ggwal","ggwalg","ggwalm","ggwalb","ggwals","ggwalt","ggwalp","ggwalh","ggwam","ggwab","ggwabs","ggwas","ggwass","ggwang","ggwaj","ggwac","ggwak","ggwat","ggwap","ggwah","ggwae","ggwaeg","ggwaegg","ggwaegs","ggwaen","ggwaenj","ggwaenh","ggwaed","ggwael","ggwaelg","ggwaelm","ggwaelb","ggwaels","ggwaelt","ggwaelp","ggwaelh","ggwaem","ggwaeb","ggwaebs","ggwaes","ggwaess","ggwaeng","ggwaej","ggwaec","ggwaek","ggwaet","ggwaep","ggwaeh","ggoe","ggoeg","ggoegg","ggoegs","ggoen","ggoenj","ggoenh","ggoed","ggoel","ggoelg","ggoelm","ggoelb","ggoels","ggoelt","ggoelp","ggoelh","ggoem","ggoeb","ggoebs","ggoes","ggoess","ggoeng","ggoej","ggoec","ggoek","ggoet","ggoep","ggoeh","ggyo","ggyog","ggyogg","ggyogs","ggyon","ggyonj","ggyonh","ggyod","ggyol","ggyolg","ggyolm","ggyolb","ggyols","ggyolt","ggyolp","ggyolh","ggyom","ggyob","ggyobs","ggyos","ggyoss","ggyong","ggyoj","ggyoc","ggyok","ggyot","ggyop","ggyoh","ggu","ggug","ggugg","ggugs","ggun","ggunj","ggunh","ggud","ggul","ggulg","ggulm","ggulb","gguls","ggult","ggulp","ggulh","ggum","ggub","ggubs","ggus","gguss","ggung","gguj","gguc","gguk","ggut","ggup","gguh","ggweo","ggweog","ggweogg","ggweogs","ggweon","ggweonj","ggweonh","ggweod","ggweol","ggweolg","ggweolm","ggweolb","ggweols","ggweolt","ggweolp","ggweolh","ggweom","ggweob","ggweobs","ggweos","ggweoss","ggweong","ggweoj","ggweoc","ggweok","ggweot","ggweop","ggweoh","ggwe","ggweg","ggwegg","ggwegs","ggwen","ggwenj","ggwenh","ggwed","ggwel","ggwelg","ggwelm","ggwelb","ggwels","ggwelt","ggwelp","ggwelh"],["ggwem","ggweb","ggwebs","ggwes","ggwess","ggweng","ggwej","ggwec","ggwek","ggwet","ggwep","ggweh","ggwi","ggwig","ggwigg","ggwigs","ggwin","ggwinj","ggwinh","ggwid","ggwil","ggwilg","ggwilm","ggwilb","ggwils","ggwilt","ggwilp","ggwilh","ggwim","ggwib","ggwibs","ggwis","ggwiss","ggwing","ggwij","ggwic","ggwik","ggwit","ggwip","ggwih","ggyu","ggyug","ggyugg","ggyugs","ggyun","ggyunj","ggyunh","ggyud","ggyul","ggyulg","ggyulm","ggyulb","ggyuls","ggyult","ggyulp","ggyulh","ggyum","ggyub","ggyubs","ggyus","ggyuss","ggyung","ggyuj","ggyuc","ggyuk","ggyut","ggyup","ggyuh","ggeu","ggeug","ggeugg","ggeugs","ggeun","ggeunj","ggeunh","ggeud","ggeul","ggeulg","ggeulm","ggeulb","ggeuls","ggeult","ggeulp","ggeulh","ggeum","ggeub","ggeubs","ggeus","ggeuss","ggeung","ggeuj","ggeuc","ggeuk","ggeut","ggeup","ggeuh","ggyi","ggyig","ggyigg","ggyigs","ggyin","ggyinj","ggyinh","ggyid","ggyil","ggyilg","ggyilm","ggyilb","ggyils","ggyilt","ggyilp","ggyilh","ggyim","ggyib","ggyibs","ggyis","ggyiss","ggying","ggyij","ggyic","ggyik","ggyit","ggyip","ggyih","ggi","ggig","ggigg","ggigs","ggin","gginj","gginh","ggid","ggil","ggilg","ggilm","ggilb","ggils","ggilt","ggilp","ggilh","ggim","ggib","ggibs","ggis","ggiss","gging","ggij","ggic","ggik","ggit","ggip","ggih","na","nag","nagg","nags","nan","nanj","nanh","nad","nal","nalg","nalm","nalb","nals","nalt","nalp","nalh","nam","nab","nabs","nas","nass","nang","naj","nac","nak","nat","nap","nah","nae","naeg","naegg","naegs","naen","naenj","naenh","naed","nael","naelg","naelm","naelb","naels","naelt","naelp","naelh","naem","naeb","naebs","naes","naess","naeng","naej","naec","naek","naet","naep","naeh","nya","nyag","nyagg","nyags","nyan","nyanj","nyanh","nyad","nyal","nyalg","nyalm","nyalb","nyals","nyalt","nyalp","nyalh","nyam","nyab","nyabs","nyas","nyass","nyang","nyaj","nyac","nyak","nyat","nyap","nyah","nyae","nyaeg","nyaegg","nyaegs","nyaen","nyaenj","nyaenh","nyaed","nyael","nyaelg","nyaelm","nyaelb","nyaels","nyaelt","nyaelp","nyaelh","nyaem","nyaeb","nyaebs","nyaes"],["nyaess","nyaeng","nyaej","nyaec","nyaek","nyaet","nyaep","nyaeh","neo","neog","neogg","neogs","neon","neonj","neonh","neod","neol","neolg","neolm","neolb","neols","neolt","neolp","neolh","neom","neob","neobs","neos","neoss","neong","neoj","neoc","neok","neot","neop","neoh","ne","neg","negg","negs","nen","nenj","nenh","ned","nel","nelg","nelm","nelb","nels","nelt","nelp","nelh","nem","neb","nebs","nes","ness","neng","nej","nec","nek","net","nep","neh","nyeo","nyeog","nyeogg","nyeogs","nyeon","nyeonj","nyeonh","nyeod","nyeol","nyeolg","nyeolm","nyeolb","nyeols","nyeolt","nyeolp","nyeolh","nyeom","nyeob","nyeobs","nyeos","nyeoss","nyeong","nyeoj","nyeoc","nyeok","nyeot","nyeop","nyeoh","nye","nyeg","nyegg","nyegs","nyen","nyenj","nyenh","nyed","nyel","nyelg","nyelm","nyelb","nyels","nyelt","nyelp","nyelh","nyem","nyeb","nyebs","nyes","nyess","nyeng","nyej","nyec","nyek","nyet","nyep","nyeh","no","nog","nogg","nogs","non","nonj","nonh","nod","nol","nolg","nolm","nolb","nols","nolt","nolp","nolh","nom","nob","nobs","nos","noss","nong","noj","noc","nok","not","nop","noh","nwa","nwag","nwagg","nwags","nwan","nwanj","nwanh","nwad","nwal","nwalg","nwalm","nwalb","nwals","nwalt","nwalp","nwalh","nwam","nwab","nwabs","nwas","nwass","nwang","nwaj","nwac","nwak","nwat","nwap","nwah","nwae","nwaeg","nwaegg","nwaegs","nwaen","nwaenj","nwaenh","nwaed","nwael","nwaelg","nwaelm","nwaelb","nwaels","nwaelt","nwaelp","nwaelh","nwaem","nwaeb","nwaebs","nwaes","nwaess","nwaeng","nwaej","nwaec","nwaek","nwaet","nwaep","nwaeh","noe","noeg","noegg","noegs","noen","noenj","noenh","noed","noel","noelg","noelm","noelb","noels","noelt","noelp","noelh","noem","noeb","noebs","noes","noess","noeng","noej","noec","noek","noet","noep","noeh","nyo","nyog","nyogg","nyogs","nyon","nyonj","nyonh","nyod","nyol","nyolg","nyolm","nyolb","nyols","nyolt","nyolp","nyolh","nyom","nyob","nyobs","nyos","nyoss","nyong","nyoj","nyoc"],["nyok","nyot","nyop","nyoh","nu","nug","nugg","nugs","nun","nunj","nunh","nud","nul","nulg","nulm","nulb","nuls","nult","nulp","nulh","num","nub","nubs","nus","nuss","nung","nuj","nuc","nuk","nut","nup","nuh","nweo","nweog","nweogg","nweogs","nweon","nweonj","nweonh","nweod","nweol","nweolg","nweolm","nweolb","nweols","nweolt","nweolp","nweolh","nweom","nweob","nweobs","nweos","nweoss","nweong","nweoj","nweoc","nweok","nweot","nweop","nweoh","nwe","nweg","nwegg","nwegs","nwen","nwenj","nwenh","nwed","nwel","nwelg","nwelm","nwelb","nwels","nwelt","nwelp","nwelh","nwem","nweb","nwebs","nwes","nwess","nweng","nwej","nwec","nwek","nwet","nwep","nweh","nwi","nwig","nwigg","nwigs","nwin","nwinj","nwinh","nwid","nwil","nwilg","nwilm","nwilb","nwils","nwilt","nwilp","nwilh","nwim","nwib","nwibs","nwis","nwiss","nwing","nwij","nwic","nwik","nwit","nwip","nwih","nyu","nyug","nyugg","nyugs","nyun","nyunj","nyunh","nyud","nyul","nyulg","nyulm","nyulb","nyuls","nyult","nyulp","nyulh","nyum","nyub","nyubs","nyus","nyuss","nyung","nyuj","nyuc","nyuk","nyut","nyup","nyuh","neu","neug","neugg","neugs","neun","neunj","neunh","neud","neul","neulg","neulm","neulb","neuls","neult","neulp","neulh","neum","neub","neubs","neus","neuss","neung","neuj","neuc","neuk","neut","neup","neuh","nyi","nyig","nyigg","nyigs","nyin","nyinj","nyinh","nyid","nyil","nyilg","nyilm","nyilb","nyils","nyilt","nyilp","nyilh","nyim","nyib","nyibs","nyis","nyiss","nying","nyij","nyic","nyik","nyit","nyip","nyih","ni","nig","nigg","nigs","nin","ninj","ninh","nid","nil","nilg","nilm","nilb","nils","nilt","nilp","nilh","nim","nib","nibs","nis","niss","ning","nij","nic","nik","nit","nip","nih","da","dag","dagg","dags","dan","danj","danh","dad","dal","dalg","dalm","dalb","dals","dalt","dalp","dalh","dam","dab","dabs","das","dass","dang","daj","dac","dak","dat","dap","dah"],["dae","daeg","daegg","daegs","daen","daenj","daenh","daed","dael","daelg","daelm","daelb","daels","daelt","daelp","daelh","daem","daeb","daebs","daes","daess","daeng","daej","daec","daek","daet","daep","daeh","dya","dyag","dyagg","dyags","dyan","dyanj","dyanh","dyad","dyal","dyalg","dyalm","dyalb","dyals","dyalt","dyalp","dyalh","dyam","dyab","dyabs","dyas","dyass","dyang","dyaj","dyac","dyak","dyat","dyap","dyah","dyae","dyaeg","dyaegg","dyaegs","dyaen","dyaenj","dyaenh","dyaed","dyael","dyaelg","dyaelm","dyaelb","dyaels","dyaelt","dyaelp","dyaelh","dyaem","dyaeb","dyaebs","dyaes","dyaess","dyaeng","dyaej","dyaec","dyaek","dyaet","dyaep","dyaeh","deo","deog","deogg","deogs","deon","deonj","deonh","deod","deol","deolg","deolm","deolb","deols","deolt","deolp","deolh","deom","deob","deobs","deos","deoss","deong","deoj","deoc","deok","deot","deop","deoh","de","deg","degg","degs","den","denj","denh","ded","del","delg","delm","delb","dels","delt","delp","delh","dem","deb","debs","des","dess","deng","dej","dec","dek","det","dep","deh","dyeo","dyeog","dyeogg","dyeogs","dyeon","dyeonj","dyeonh","dyeod","dyeol","dyeolg","dyeolm","dyeolb","dyeols","dyeolt","dyeolp","dyeolh","dyeom","dyeob","dyeobs","dyeos","dyeoss","dyeong","dyeoj","dyeoc","dyeok","dyeot","dyeop","dyeoh","dye","dyeg","dyegg","dyegs","dyen","dyenj","dyenh","dyed","dyel","dyelg","dyelm","dyelb","dyels","dyelt","dyelp","dyelh","dyem","dyeb","dyebs","dyes","dyess","dyeng","dyej","dyec","dyek","dyet","dyep","dyeh","do","dog","dogg","dogs","don","donj","donh","dod","dol","dolg","dolm","dolb","dols","dolt","dolp","dolh","dom","dob","dobs","dos","doss","dong","doj","doc","dok","dot","dop","doh","dwa","dwag","dwagg","dwags","dwan","dwanj","dwanh","dwad","dwal","dwalg","dwalm","dwalb","dwals","dwalt","dwalp","dwalh","dwam","dwab","dwabs","dwas","dwass","dwang","dwaj","dwac","dwak","dwat","dwap","dwah","dwae","dwaeg","dwaegg","dwaegs"],["dwaen","dwaenj","dwaenh","dwaed","dwael","dwaelg","dwaelm","dwaelb","dwaels","dwaelt","dwaelp","dwaelh","dwaem","dwaeb","dwaebs","dwaes","dwaess","dwaeng","dwaej","dwaec","dwaek","dwaet","dwaep","dwaeh","doe","doeg","doegg","doegs","doen","doenj","doenh","doed","doel","doelg","doelm","doelb","doels","doelt","doelp","doelh","doem","doeb","doebs","does","doess","doeng","doej","doec","doek","doet","doep","doeh","dyo","dyog","dyogg","dyogs","dyon","dyonj","dyonh","dyod","dyol","dyolg","dyolm","dyolb","dyols","dyolt","dyolp","dyolh","dyom","dyob","dyobs","dyos","dyoss","dyong","dyoj","dyoc","dyok","dyot","dyop","dyoh","du","dug","dugg","dugs","dun","dunj","dunh","dud","dul","dulg","dulm","dulb","duls","dult","dulp","dulh","dum","dub","dubs","dus","duss","dung","duj","duc","duk","dut","dup","duh","dweo","dweog","dweogg","dweogs","dweon","dweonj","dweonh","dweod","dweol","dweolg","dweolm","dweolb","dweols","dweolt","dweolp","dweolh","dweom","dweob","dweobs","dweos","dweoss","dweong","dweoj","dweoc","dweok","dweot","dweop","dweoh","dwe","dweg","dwegg","dwegs","dwen","dwenj","dwenh","dwed","dwel","dwelg","dwelm","dwelb","dwels","dwelt","dwelp","dwelh","dwem","dweb","dwebs","dwes","dwess","dweng","dwej","dwec","dwek","dwet","dwep","dweh","dwi","dwig","dwigg","dwigs","dwin","dwinj","dwinh","dwid","dwil","dwilg","dwilm","dwilb","dwils","dwilt","dwilp","dwilh","dwim","dwib","dwibs","dwis","dwiss","dwing","dwij","dwic","dwik","dwit","dwip","dwih","dyu","dyug","dyugg","dyugs","dyun","dyunj","dyunh","dyud","dyul","dyulg","dyulm","dyulb","dyuls","dyult","dyulp","dyulh","dyum","dyub","dyubs","dyus","dyuss","dyung","dyuj","dyuc","dyuk","dyut","dyup","dyuh","deu","deug","deugg","deugs","deun","deunj","deunh","deud","deul","deulg","deulm","deulb","deuls","deult","deulp","deulh","deum","deub","deubs","deus","deuss","deung","deuj","deuc","deuk","deut","deup","deuh","dyi","dyig","dyigg","dyigs","dyin","dyinj","dyinh","dyid"],["dyil","dyilg","dyilm","dyilb","dyils","dyilt","dyilp","dyilh","dyim","dyib","dyibs","dyis","dyiss","dying","dyij","dyic","dyik","dyit","dyip","dyih","di","dig","digg","digs","din","dinj","dinh","did","dil","dilg","dilm","dilb","dils","dilt","dilp","dilh","dim","dib","dibs","dis","diss","ding","dij","dic","dik","dit","dip","dih","dda","ddag","ddagg","ddags","ddan","ddanj","ddanh","ddad","ddal","ddalg","ddalm","ddalb","ddals","ddalt","ddalp","ddalh","ddam","ddab","ddabs","ddas","ddass","ddang","ddaj","ddac","ddak","ddat","ddap","ddah","ddae","ddaeg","ddaegg","ddaegs","ddaen","ddaenj","ddaenh","ddaed","ddael","ddaelg","ddaelm","ddaelb","ddaels","ddaelt","ddaelp","ddaelh","ddaem","ddaeb","ddaebs","ddaes","ddaess","ddaeng","ddaej","ddaec","ddaek","ddaet","ddaep","ddaeh","ddya","ddyag","ddyagg","ddyags","ddyan","ddyanj","ddyanh","ddyad","ddyal","ddyalg","ddyalm","ddyalb","ddyals","ddyalt","ddyalp","ddyalh","ddyam","ddyab","ddyabs","ddyas","ddyass","ddyang","ddyaj","ddyac","ddyak","ddyat","ddyap","ddyah","ddyae","ddyaeg","ddyaegg","ddyaegs","ddyaen","ddyaenj","ddyaenh","ddyaed","ddyael","ddyaelg","ddyaelm","ddyaelb","ddyaels","ddyaelt","ddyaelp","ddyaelh","ddyaem","ddyaeb","ddyaebs","ddyaes","ddyaess","ddyaeng","ddyaej","ddyaec","ddyaek","ddyaet","ddyaep","ddyaeh","ddeo","ddeog","ddeogg","ddeogs","ddeon","ddeonj","ddeonh","ddeod","ddeol","ddeolg","ddeolm","ddeolb","ddeols","ddeolt","ddeolp","ddeolh","ddeom","ddeob","ddeobs","ddeos","ddeoss","ddeong","ddeoj","ddeoc","ddeok","ddeot","ddeop","ddeoh","dde","ddeg","ddegg","ddegs","dden","ddenj","ddenh","dded","ddel","ddelg","ddelm","ddelb","ddels","ddelt","ddelp","ddelh","ddem","ddeb","ddebs","ddes","ddess","ddeng","ddej","ddec","ddek","ddet","ddep","ddeh","ddyeo","ddyeog","ddyeogg","ddyeogs","ddyeon","ddyeonj","ddyeonh","ddyeod","ddyeol","ddyeolg","ddyeolm","ddyeolb","ddyeols","ddyeolt","ddyeolp","ddyeolh","ddyeom","ddyeob","ddyeobs","ddyeos","ddyeoss","ddyeong","ddyeoj","ddyeoc","ddyeok","ddyeot","ddyeop","ddyeoh","ddye","ddyeg","ddyegg","ddyegs","ddyen","ddyenj","ddyenh","ddyed","ddyel","ddyelg","ddyelm","ddyelb"],["ddyels","ddyelt","ddyelp","ddyelh","ddyem","ddyeb","ddyebs","ddyes","ddyess","ddyeng","ddyej","ddyec","ddyek","ddyet","ddyep","ddyeh","ddo","ddog","ddogg","ddogs","ddon","ddonj","ddonh","ddod","ddol","ddolg","ddolm","ddolb","ddols","ddolt","ddolp","ddolh","ddom","ddob","ddobs","ddos","ddoss","ddong","ddoj","ddoc","ddok","ddot","ddop","ddoh","ddwa","ddwag","ddwagg","ddwags","ddwan","ddwanj","ddwanh","ddwad","ddwal","ddwalg","ddwalm","ddwalb","ddwals","ddwalt","ddwalp","ddwalh","ddwam","ddwab","ddwabs","ddwas","ddwass","ddwang","ddwaj","ddwac","ddwak","ddwat","ddwap","ddwah","ddwae","ddwaeg","ddwaegg","ddwaegs","ddwaen","ddwaenj","ddwaenh","ddwaed","ddwael","ddwaelg","ddwaelm","ddwaelb","ddwaels","ddwaelt","ddwaelp","ddwaelh","ddwaem","ddwaeb","ddwaebs","ddwaes","ddwaess","ddwaeng","ddwaej","ddwaec","ddwaek","ddwaet","ddwaep","ddwaeh","ddoe","ddoeg","ddoegg","ddoegs","ddoen","ddoenj","ddoenh","ddoed","ddoel","ddoelg","ddoelm","ddoelb","ddoels","ddoelt","ddoelp","ddoelh","ddoem","ddoeb","ddoebs","ddoes","ddoess","ddoeng","ddoej","ddoec","ddoek","ddoet","ddoep","ddoeh","ddyo","ddyog","ddyogg","ddyogs","ddyon","ddyonj","ddyonh","ddyod","ddyol","ddyolg","ddyolm","ddyolb","ddyols","ddyolt","ddyolp","ddyolh","ddyom","ddyob","ddyobs","ddyos","ddyoss","ddyong","ddyoj","ddyoc","ddyok","ddyot","ddyop","ddyoh","ddu","ddug","ddugg","ddugs","ddun","ddunj","ddunh","ddud","ddul","ddulg","ddulm","ddulb","dduls","ddult","ddulp","ddulh","ddum","ddub","ddubs","ddus","dduss","ddung","dduj","dduc","dduk","ddut","ddup","dduh","ddweo","ddweog","ddweogg","ddweogs","ddweon","ddweonj","ddweonh","ddweod","ddweol","ddweolg","ddweolm","ddweolb","ddweols","ddweolt","ddweolp","ddweolh","ddweom","ddweob","ddweobs","ddweos","ddweoss","ddweong","ddweoj","ddweoc","ddweok","ddweot","ddweop","ddweoh","ddwe","ddweg","ddwegg","ddwegs","ddwen","ddwenj","ddwenh","ddwed","ddwel","ddwelg","ddwelm","ddwelb","ddwels","ddwelt","ddwelp","ddwelh","ddwem","ddweb","ddwebs","ddwes","ddwess","ddweng","ddwej","ddwec","ddwek","ddwet","ddwep","ddweh","ddwi","ddwig","ddwigg","ddwigs","ddwin","ddwinj","ddwinh","ddwid","ddwil","ddwilg","ddwilm","ddwilb","ddwils","ddwilt","ddwilp","ddwilh"],["ddwim","ddwib","ddwibs","ddwis","ddwiss","ddwing","ddwij","ddwic","ddwik","ddwit","ddwip","ddwih","ddyu","ddyug","ddyugg","ddyugs","ddyun","ddyunj","ddyunh","ddyud","ddyul","ddyulg","ddyulm","ddyulb","ddyuls","ddyult","ddyulp","ddyulh","ddyum","ddyub","ddyubs","ddyus","ddyuss","ddyung","ddyuj","ddyuc","ddyuk","ddyut","ddyup","ddyuh","ddeu","ddeug","ddeugg","ddeugs","ddeun","ddeunj","ddeunh","ddeud","ddeul","ddeulg","ddeulm","ddeulb","ddeuls","ddeult","ddeulp","ddeulh","ddeum","ddeub","ddeubs","ddeus","ddeuss","ddeung","ddeuj","ddeuc","ddeuk","ddeut","ddeup","ddeuh","ddyi","ddyig","ddyigg","ddyigs","ddyin","ddyinj","ddyinh","ddyid","ddyil","ddyilg","ddyilm","ddyilb","ddyils","ddyilt","ddyilp","ddyilh","ddyim","ddyib","ddyibs","ddyis","ddyiss","ddying","ddyij","ddyic","ddyik","ddyit","ddyip","ddyih","ddi","ddig","ddigg","ddigs","ddin","ddinj","ddinh","ddid","ddil","ddilg","ddilm","ddilb","ddils","ddilt","ddilp","ddilh","ddim","ddib","ddibs","ddis","ddiss","dding","ddij","ddic","ddik","ddit","ddip","ddih","ra","rag","ragg","rags","ran","ranj","ranh","rad","ral","ralg","ralm","ralb","rals","ralt","ralp","ralh","ram","rab","rabs","ras","rass","rang","raj","rac","rak","rat","rap","rah","rae","raeg","raegg","raegs","raen","raenj","raenh","raed","rael","raelg","raelm","raelb","raels","raelt","raelp","raelh","raem","raeb","raebs","raes","raess","raeng","raej","raec","raek","raet","raep","raeh","rya","ryag","ryagg","ryags","ryan","ryanj","ryanh","ryad","ryal","ryalg","ryalm","ryalb","ryals","ryalt","ryalp","ryalh","ryam","ryab","ryabs","ryas","ryass","ryang","ryaj","ryac","ryak","ryat","ryap","ryah","ryae","ryaeg","ryaegg","ryaegs","ryaen","ryaenj","ryaenh","ryaed","ryael","ryaelg","ryaelm","ryaelb","ryaels","ryaelt","ryaelp","ryaelh","ryaem","ryaeb","ryaebs","ryaes","ryaess","ryaeng","ryaej","ryaec","ryaek","ryaet","ryaep","ryaeh","reo","reog","reogg","reogs","reon","reonj","reonh","reod","reol","reolg","reolm","reolb","reols","reolt","reolp","reolh","reom","reob","reobs","reos"],["reoss","reong","reoj","reoc","reok","reot","reop","reoh","re","reg","regg","regs","ren","renj","renh","red","rel","relg","relm","relb","rels","relt","relp","relh","rem","reb","rebs","res","ress","reng","rej","rec","rek","ret","rep","reh","ryeo","ryeog","ryeogg","ryeogs","ryeon","ryeonj","ryeonh","ryeod","ryeol","ryeolg","ryeolm","ryeolb","ryeols","ryeolt","ryeolp","ryeolh","ryeom","ryeob","ryeobs","ryeos","ryeoss","ryeong","ryeoj","ryeoc","ryeok","ryeot","ryeop","ryeoh","rye","ryeg","ryegg","ryegs","ryen","ryenj","ryenh","ryed","ryel","ryelg","ryelm","ryelb","ryels","ryelt","ryelp","ryelh","ryem","ryeb","ryebs","ryes","ryess","ryeng","ryej","ryec","ryek","ryet","ryep","ryeh","ro","rog","rogg","rogs","ron","ronj","ronh","rod","rol","rolg","rolm","rolb","rols","rolt","rolp","rolh","rom","rob","robs","ros","ross","rong","roj","roc","rok","rot","rop","roh","rwa","rwag","rwagg","rwags","rwan","rwanj","rwanh","rwad","rwal","rwalg","rwalm","rwalb","rwals","rwalt","rwalp","rwalh","rwam","rwab","rwabs","rwas","rwass","rwang","rwaj","rwac","rwak","rwat","rwap","rwah","rwae","rwaeg","rwaegg","rwaegs","rwaen","rwaenj","rwaenh","rwaed","rwael","rwaelg","rwaelm","rwaelb","rwaels","rwaelt","rwaelp","rwaelh","rwaem","rwaeb","rwaebs","rwaes","rwaess","rwaeng","rwaej","rwaec","rwaek","rwaet","rwaep","rwaeh","roe","roeg","roegg","roegs","roen","roenj","roenh","roed","roel","roelg","roelm","roelb","roels","roelt","roelp","roelh","roem","roeb","roebs","roes","roess","roeng","roej","roec","roek","roet","roep","roeh","ryo","ryog","ryogg","ryogs","ryon","ryonj","ryonh","ryod","ryol","ryolg","ryolm","ryolb","ryols","ryolt","ryolp","ryolh","ryom","ryob","ryobs","ryos","ryoss","ryong","ryoj","ryoc","ryok","ryot","ryop","ryoh","ru","rug","rugg","rugs","run","runj","runh","rud","rul","rulg","rulm","rulb","ruls","rult","rulp","rulh","rum","rub","rubs","rus","russ","rung","ruj","ruc"],["ruk","rut","rup","ruh","rweo","rweog","rweogg","rweogs","rweon","rweonj","rweonh","rweod","rweol","rweolg","rweolm","rweolb","rweols","rweolt","rweolp","rweolh","rweom","rweob","rweobs","rweos","rweoss","rweong","rweoj","rweoc","rweok","rweot","rweop","rweoh","rwe","rweg","rwegg","rwegs","rwen","rwenj","rwenh","rwed","rwel","rwelg","rwelm","rwelb","rwels","rwelt","rwelp","rwelh","rwem","rweb","rwebs","rwes","rwess","rweng","rwej","rwec","rwek","rwet","rwep","rweh","rwi","rwig","rwigg","rwigs","rwin","rwinj","rwinh","rwid","rwil","rwilg","rwilm","rwilb","rwils","rwilt","rwilp","rwilh","rwim","rwib","rwibs","rwis","rwiss","rwing","rwij","rwic","rwik","rwit","rwip","rwih","ryu","ryug","ryugg","ryugs","ryun","ryunj","ryunh","ryud","ryul","ryulg","ryulm","ryulb","ryuls","ryult","ryulp","ryulh","ryum","ryub","ryubs","ryus","ryuss","ryung","ryuj","ryuc","ryuk","ryut","ryup","ryuh","reu","reug","reugg","reugs","reun","reunj","reunh","reud","reul","reulg","reulm","reulb","reuls","reult","reulp","reulh","reum","reub","reubs","reus","reuss","reung","reuj","reuc","reuk","reut","reup","reuh","ryi","ryig","ryigg","ryigs","ryin","ryinj","ryinh","ryid","ryil","ryilg","ryilm","ryilb","ryils","ryilt","ryilp","ryilh","ryim","ryib","ryibs","ryis","ryiss","rying","ryij","ryic","ryik","ryit","ryip","ryih","ri","rig","rigg","rigs","rin","rinj","rinh","rid","ril","rilg","rilm","rilb","rils","rilt","rilp","rilh","rim","rib","ribs","ris","riss","ring","rij","ric","rik","rit","rip","rih","ma","mag","magg","mags","man","manj","manh","mad","mal","malg","malm","malb","mals","malt","malp","malh","mam","mab","mabs","mas","mass","mang","maj","mac","mak","mat","map","mah","mae","maeg","maegg","maegs","maen","maenj","maenh","maed","mael","maelg","maelm","maelb","maels","maelt","maelp","maelh","maem","maeb","maebs","maes","maess","maeng","maej","maec","maek","maet","maep","maeh"],["mya","myag","myagg","myags","myan","myanj","myanh","myad","myal","myalg","myalm","myalb","myals","myalt","myalp","myalh","myam","myab","myabs","myas","myass","myang","myaj","myac","myak","myat","myap","myah","myae","myaeg","myaegg","myaegs","myaen","myaenj","myaenh","myaed","myael","myaelg","myaelm","myaelb","myaels","myaelt","myaelp","myaelh","myaem","myaeb","myaebs","myaes","myaess","myaeng","myaej","myaec","myaek","myaet","myaep","myaeh","meo","meog","meogg","meogs","meon","meonj","meonh","meod","meol","meolg","meolm","meolb","meols","meolt","meolp","meolh","meom","meob","meobs","meos","meoss","meong","meoj","meoc","meok","meot","meop","meoh","me","meg","megg","megs","men","menj","menh","med","mel","melg","melm","melb","mels","melt","melp","melh","mem","meb","mebs","mes","mess","meng","mej","mec","mek","met","mep","meh","myeo","myeog","myeogg","myeogs","myeon","myeonj","myeonh","myeod","myeol","myeolg","myeolm","myeolb","myeols","myeolt","myeolp","myeolh","myeom","myeob","myeobs","myeos","myeoss","myeong","myeoj","myeoc","myeok","myeot","myeop","myeoh","mye","myeg","myegg","myegs","myen","myenj","myenh","myed","myel","myelg","myelm","myelb","myels","myelt","myelp","myelh","myem","myeb","myebs","myes","myess","myeng","myej","myec","myek","myet","myep","myeh","mo","mog","mogg","mogs","mon","monj","monh","mod","mol","molg","molm","molb","mols","molt","molp","molh","mom","mob","mobs","mos","moss","mong","moj","moc","mok","mot","mop","moh","mwa","mwag","mwagg","mwags","mwan","mwanj","mwanh","mwad","mwal","mwalg","mwalm","mwalb","mwals","mwalt","mwalp","mwalh","mwam","mwab","mwabs","mwas","mwass","mwang","mwaj","mwac","mwak","mwat","mwap","mwah","mwae","mwaeg","mwaegg","mwaegs","mwaen","mwaenj","mwaenh","mwaed","mwael","mwaelg","mwaelm","mwaelb","mwaels","mwaelt","mwaelp","mwaelh","mwaem","mwaeb","mwaebs","mwaes","mwaess","mwaeng","mwaej","mwaec","mwaek","mwaet","mwaep","mwaeh","moe","moeg","moegg","moegs"],["moen","moenj","moenh","moed","moel","moelg","moelm","moelb","moels","moelt","moelp","moelh","moem","moeb","moebs","moes","moess","moeng","moej","moec","moek","moet","moep","moeh","myo","myog","myogg","myogs","myon","myonj","myonh","myod","myol","myolg","myolm","myolb","myols","myolt","myolp","myolh","myom","myob","myobs","myos","myoss","myong","myoj","myoc","myok","myot","myop","myoh","mu","mug","mugg","mugs","mun","munj","munh","mud","mul","mulg","mulm","mulb","muls","mult","mulp","mulh","mum","mub","mubs","mus","muss","mung","muj","muc","muk","mut","mup","muh","mweo","mweog","mweogg","mweogs","mweon","mweonj","mweonh","mweod","mweol","mweolg","mweolm","mweolb","mweols","mweolt","mweolp","mweolh","mweom","mweob","mweobs","mweos","mweoss","mweong","mweoj","mweoc","mweok","mweot","mweop","mweoh","mwe","mweg","mwegg","mwegs","mwen","mwenj","mwenh","mwed","mwel","mwelg","mwelm","mwelb","mwels","mwelt","mwelp","mwelh","mwem","mweb","mwebs","mwes","mwess","mweng","mwej","mwec","mwek","mwet","mwep","mweh","mwi","mwig","mwigg","mwigs","mwin","mwinj","mwinh","mwid","mwil","mwilg","mwilm","mwilb","mwils","mwilt","mwilp","mwilh","mwim","mwib","mwibs","mwis","mwiss","mwing","mwij","mwic","mwik","mwit","mwip","mwih","myu","myug","myugg","myugs","myun","myunj","myunh","myud","myul","myulg","myulm","myulb","myuls","myult","myulp","myulh","myum","myub","myubs","myus","myuss","myung","myuj","myuc","myuk","myut","myup","myuh","meu","meug","meugg","meugs","meun","meunj","meunh","meud","meul","meulg","meulm","meulb","meuls","meult","meulp","meulh","meum","meub","meubs","meus","meuss","meung","meuj","meuc","meuk","meut","meup","meuh","myi","myig","myigg","myigs","myin","myinj","myinh","myid","myil","myilg","myilm","myilb","myils","myilt","myilp","myilh","myim","myib","myibs","myis","myiss","mying","myij","myic","myik","myit","myip","myih","mi","mig","migg","migs","min","minj","minh","mid"],["mil","milg","milm","milb","mils","milt","milp","milh","mim","mib","mibs","mis","miss","ming","mij","mic","mik","mit","mip","mih","ba","bag","bagg","bags","ban","banj","banh","bad","bal","balg","balm","balb","bals","balt","balp","balh","bam","bab","babs","bas","bass","bang","baj","bac","bak","bat","bap","bah","bae","baeg","baegg","baegs","baen","baenj","baenh","baed","bael","baelg","baelm","baelb","baels","baelt","baelp","baelh","baem","baeb","baebs","baes","baess","baeng","baej","baec","baek","baet","baep","baeh","bya","byag","byagg","byags","byan","byanj","byanh","byad","byal","byalg","byalm","byalb","byals","byalt","byalp","byalh","byam","byab","byabs","byas","byass","byang","byaj","byac","byak","byat","byap","byah","byae","byaeg","byaegg","byaegs","byaen","byaenj","byaenh","byaed","byael","byaelg","byaelm","byaelb","byaels","byaelt","byaelp","byaelh","byaem","byaeb","byaebs","byaes","byaess","byaeng","byaej","byaec","byaek","byaet","byaep","byaeh","beo","beog","beogg","beogs","beon","beonj","beonh","beod","beol","beolg","beolm","beolb","beols","beolt","beolp","beolh","beom","beob","beobs","beos","beoss","beong","beoj","beoc","beok","beot","beop","beoh","be","beg","begg","begs","ben","benj","benh","bed","bel","belg","belm","belb","bels","belt","belp","belh","bem","beb","bebs","bes","bess","beng","bej","bec","bek","bet","bep","beh","byeo","byeog","byeogg","byeogs","byeon","byeonj","byeonh","byeod","byeol","byeolg","byeolm","byeolb","byeols","byeolt","byeolp","byeolh","byeom","byeob","byeobs","byeos","byeoss","byeong","byeoj","byeoc","byeok","byeot","byeop","byeoh","bye","byeg","byegg","byegs","byen","byenj","byenh","byed","byel","byelg","byelm","byelb","byels","byelt","byelp","byelh","byem","byeb","byebs","byes","byess","byeng","byej","byec","byek","byet","byep","byeh","bo","bog","bogg","bogs","bon","bonj","bonh","bod","bol","bolg","bolm","bolb"],["bols","bolt","bolp","bolh","bom","bob","bobs","bos","boss","bong","boj","boc","bok","bot","bop","boh","bwa","bwag","bwagg","bwags","bwan","bwanj","bwanh","bwad","bwal","bwalg","bwalm","bwalb","bwals","bwalt","bwalp","bwalh","bwam","bwab","bwabs","bwas","bwass","bwang","bwaj","bwac","bwak","bwat","bwap","bwah","bwae","bwaeg","bwaegg","bwaegs","bwaen","bwaenj","bwaenh","bwaed","bwael","bwaelg","bwaelm","bwaelb","bwaels","bwaelt","bwaelp","bwaelh","bwaem","bwaeb","bwaebs","bwaes","bwaess","bwaeng","bwaej","bwaec","bwaek","bwaet","bwaep","bwaeh","boe","boeg","boegg","boegs","boen","boenj","boenh","boed","boel","boelg","boelm","boelb","boels","boelt","boelp","boelh","boem","boeb","boebs","boes","boess","boeng","boej","boec","boek","boet","boep","boeh","byo","byog","byogg","byogs","byon","byonj","byonh","byod","byol","byolg","byolm","byolb","byols","byolt","byolp","byolh","byom","byob","byobs","byos","byoss","byong","byoj","byoc","byok","byot","byop","byoh","bu","bug","bugg","bugs","bun","bunj","bunh","bud","bul","bulg","bulm","bulb","buls","bult","bulp","bulh","bum","bub","bubs","bus","buss","bung","buj","buc","buk","but","bup","buh","bweo","bweog","bweogg","bweogs","bweon","bweonj","bweonh","bweod","bweol","bweolg","bweolm","bweolb","bweols","bweolt","bweolp","bweolh","bweom","bweob","bweobs","bweos","bweoss","bweong","bweoj","bweoc","bweok","bweot","bweop","bweoh","bwe","bweg","bwegg","bwegs","bwen","bwenj","bwenh","bwed","bwel","bwelg","bwelm","bwelb","bwels","bwelt","bwelp","bwelh","bwem","bweb","bwebs","bwes","bwess","bweng","bwej","bwec","bwek","bwet","bwep","bweh","bwi","bwig","bwigg","bwigs","bwin","bwinj","bwinh","bwid","bwil","bwilg","bwilm","bwilb","bwils","bwilt","bwilp","bwilh","bwim","bwib","bwibs","bwis","bwiss","bwing","bwij","bwic","bwik","bwit","bwip","bwih","byu","byug","byugg","byugs","byun","byunj","byunh","byud","byul","byulg","byulm","byulb","byuls","byult","byulp","byulh"],["byum","byub","byubs","byus","byuss","byung","byuj","byuc","byuk","byut","byup","byuh","beu","beug","beugg","beugs","beun","beunj","beunh","beud","beul","beulg","beulm","beulb","beuls","beult","beulp","beulh","beum","beub","beubs","beus","beuss","beung","beuj","beuc","beuk","beut","beup","beuh","byi","byig","byigg","byigs","byin","byinj","byinh","byid","byil","byilg","byilm","byilb","byils","byilt","byilp","byilh","byim","byib","byibs","byis","byiss","bying","byij","byic","byik","byit","byip","byih","bi","big","bigg","bigs","bin","binj","binh","bid","bil","bilg","bilm","bilb","bils","bilt","bilp","bilh","bim","bib","bibs","bis","biss","bing","bij","bic","bik","bit","bip","bih","bba","bbag","bbagg","bbags","bban","bbanj","bbanh","bbad","bbal","bbalg","bbalm","bbalb","bbals","bbalt","bbalp","bbalh","bbam","bbab","bbabs","bbas","bbass","bbang","bbaj","bbac","bbak","bbat","bbap","bbah","bbae","bbaeg","bbaegg","bbaegs","bbaen","bbaenj","bbaenh","bbaed","bbael","bbaelg","bbaelm","bbaelb","bbaels","bbaelt","bbaelp","bbaelh","bbaem","bbaeb","bbaebs","bbaes","bbaess","bbaeng","bbaej","bbaec","bbaek","bbaet","bbaep","bbaeh","bbya","bbyag","bbyagg","bbyags","bbyan","bbyanj","bbyanh","bbyad","bbyal","bbyalg","bbyalm","bbyalb","bbyals","bbyalt","bbyalp","bbyalh","bbyam","bbyab","bbyabs","bbyas","bbyass","bbyang","bbyaj","bbyac","bbyak","bbyat","bbyap","bbyah","bbyae","bbyaeg","bbyaegg","bbyaegs","bbyaen","bbyaenj","bbyaenh","bbyaed","bbyael","bbyaelg","bbyaelm","bbyaelb","bbyaels","bbyaelt","bbyaelp","bbyaelh","bbyaem","bbyaeb","bbyaebs","bbyaes","bbyaess","bbyaeng","bbyaej","bbyaec","bbyaek","bbyaet","bbyaep","bbyaeh","bbeo","bbeog","bbeogg","bbeogs","bbeon","bbeonj","bbeonh","bbeod","bbeol","bbeolg","bbeolm","bbeolb","bbeols","bbeolt","bbeolp","bbeolh","bbeom","bbeob","bbeobs","bbeos","bbeoss","bbeong","bbeoj","bbeoc","bbeok","bbeot","bbeop","bbeoh","bbe","bbeg","bbegg","bbegs","bben","bbenj","bbenh","bbed","bbel","bbelg","bbelm","bbelb","bbels","bbelt","bbelp","bbelh","bbem","bbeb","bbebs","bbes"],["bbess","bbeng","bbej","bbec","bbek","bbet","bbep","bbeh","bbyeo","bbyeog","bbyeogg","bbyeogs","bbyeon","bbyeonj","bbyeonh","bbyeod","bbyeol","bbyeolg","bbyeolm","bbyeolb","bbyeols","bbyeolt","bbyeolp","bbyeolh","bbyeom","bbyeob","bbyeobs","bbyeos","bbyeoss","bbyeong","bbyeoj","bbyeoc","bbyeok","bbyeot","bbyeop","bbyeoh","bbye","bbyeg","bbyegg","bbyegs","bbyen","bbyenj","bbyenh","bbyed","bbyel","bbyelg","bbyelm","bbyelb","bbyels","bbyelt","bbyelp","bbyelh","bbyem","bbyeb","bbyebs","bbyes","bbyess","bbyeng","bbyej","bbyec","bbyek","bbyet","bbyep","bbyeh","bbo","bbog","bbogg","bbogs","bbon","bbonj","bbonh","bbod","bbol","bbolg","bbolm","bbolb","bbols","bbolt","bbolp","bbolh","bbom","bbob","bbobs","bbos","bboss","bbong","bboj","bboc","bbok","bbot","bbop","bboh","bbwa","bbwag","bbwagg","bbwags","bbwan","bbwanj","bbwanh","bbwad","bbwal","bbwalg","bbwalm","bbwalb","bbwals","bbwalt","bbwalp","bbwalh","bbwam","bbwab","bbwabs","bbwas","bbwass","bbwang","bbwaj","bbwac","bbwak","bbwat","bbwap","bbwah","bbwae","bbwaeg","bbwaegg","bbwaegs","bbwaen","bbwaenj","bbwaenh","bbwaed","bbwael","bbwaelg","bbwaelm","bbwaelb","bbwaels","bbwaelt","bbwaelp","bbwaelh","bbwaem","bbwaeb","bbwaebs","bbwaes","bbwaess","bbwaeng","bbwaej","bbwaec","bbwaek","bbwaet","bbwaep","bbwaeh","bboe","bboeg","bboegg","bboegs","bboen","bboenj","bboenh","bboed","bboel","bboelg","bboelm","bboelb","bboels","bboelt","bboelp","bboelh","bboem","bboeb","bboebs","bboes","bboess","bboeng","bboej","bboec","bboek","bboet","bboep","bboeh","bbyo","bbyog","bbyogg","bbyogs","bbyon","bbyonj","bbyonh","bbyod","bbyol","bbyolg","bbyolm","bbyolb","bbyols","bbyolt","bbyolp","bbyolh","bbyom","bbyob","bbyobs","bbyos","bbyoss","bbyong","bbyoj","bbyoc","bbyok","bbyot","bbyop","bbyoh","bbu","bbug","bbugg","bbugs","bbun","bbunj","bbunh","bbud","bbul","bbulg","bbulm","bbulb","bbuls","bbult","bbulp","bbulh","bbum","bbub","bbubs","bbus","bbuss","bbung","bbuj","bbuc","bbuk","bbut","bbup","bbuh","bbweo","bbweog","bbweogg","bbweogs","bbweon","bbweonj","bbweonh","bbweod","bbweol","bbweolg","bbweolm","bbweolb","bbweols","bbweolt","bbweolp","bbweolh","bbweom","bbweob","bbweobs","bbweos","bbweoss","bbweong","bbweoj","bbweoc"],["bbweok","bbweot","bbweop","bbweoh","bbwe","bbweg","bbwegg","bbwegs","bbwen","bbwenj","bbwenh","bbwed","bbwel","bbwelg","bbwelm","bbwelb","bbwels","bbwelt","bbwelp","bbwelh","bbwem","bbweb","bbwebs","bbwes","bbwess","bbweng","bbwej","bbwec","bbwek","bbwet","bbwep","bbweh","bbwi","bbwig","bbwigg","bbwigs","bbwin","bbwinj","bbwinh","bbwid","bbwil","bbwilg","bbwilm","bbwilb","bbwils","bbwilt","bbwilp","bbwilh","bbwim","bbwib","bbwibs","bbwis","bbwiss","bbwing","bbwij","bbwic","bbwik","bbwit","bbwip","bbwih","bbyu","bbyug","bbyugg","bbyugs","bbyun","bbyunj","bbyunh","bbyud","bbyul","bbyulg","bbyulm","bbyulb","bbyuls","bbyult","bbyulp","bbyulh","bbyum","bbyub","bbyubs","bbyus","bbyuss","bbyung","bbyuj","bbyuc","bbyuk","bbyut","bbyup","bbyuh","bbeu","bbeug","bbeugg","bbeugs","bbeun","bbeunj","bbeunh","bbeud","bbeul","bbeulg","bbeulm","bbeulb","bbeuls","bbeult","bbeulp","bbeulh","bbeum","bbeub","bbeubs","bbeus","bbeuss","bbeung","bbeuj","bbeuc","bbeuk","bbeut","bbeup","bbeuh","bbyi","bbyig","bbyigg","bbyigs","bbyin","bbyinj","bbyinh","bbyid","bbyil","bbyilg","bbyilm","bbyilb","bbyils","bbyilt","bbyilp","bbyilh","bbyim","bbyib","bbyibs","bbyis","bbyiss","bbying","bbyij","bbyic","bbyik","bbyit","bbyip","bbyih","bbi","bbig","bbigg","bbigs","bbin","bbinj","bbinh","bbid","bbil","bbilg","bbilm","bbilb","bbils","bbilt","bbilp","bbilh","bbim","bbib","bbibs","bbis","bbiss","bbing","bbij","bbic","bbik","bbit","bbip","bbih","sa","sag","sagg","sags","san","sanj","sanh","sad","sal","salg","salm","salb","sals","salt","salp","salh","sam","sab","sabs","sas","sass","sang","saj","sac","sak","sat","sap","sah","sae","saeg","saegg","saegs","saen","saenj","saenh","saed","sael","saelg","saelm","saelb","saels","saelt","saelp","saelh","saem","saeb","saebs","saes","saess","saeng","saej","saec","saek","saet","saep","saeh","sya","syag","syagg","syags","syan","syanj","syanh","syad","syal","syalg","syalm","syalb","syals","syalt","syalp","syalh","syam","syab","syabs","syas","syass","syang","syaj","syac","syak","syat","syap","syah"],["syae","syaeg","syaegg","syaegs","syaen","syaenj","syaenh","syaed","syael","syaelg","syaelm","syaelb","syaels","syaelt","syaelp","syaelh","syaem","syaeb","syaebs","syaes","syaess","syaeng","syaej","syaec","syaek","syaet","syaep","syaeh","seo","seog","seogg","seogs","seon","seonj","seonh","seod","seol","seolg","seolm","seolb","seols","seolt","seolp","seolh","seom","seob","seobs","seos","seoss","seong","seoj","seoc","seok","seot","seop","seoh","se","seg","segg","segs","sen","senj","senh","sed","sel","selg","selm","selb","sels","selt","selp","selh","sem","seb","sebs","ses","sess","seng","sej","sec","sek","set","sep","seh","syeo","syeog","syeogg","syeogs","syeon","syeonj","syeonh","syeod","syeol","syeolg","syeolm","syeolb","syeols","syeolt","syeolp","syeolh","syeom","syeob","syeobs","syeos","syeoss","syeong","syeoj","syeoc","syeok","syeot","syeop","syeoh","sye","syeg","syegg","syegs","syen","syenj","syenh","syed","syel","syelg","syelm","syelb","syels","syelt","syelp","syelh","syem","syeb","syebs","syes","syess","syeng","syej","syec","syek","syet","syep","syeh","so","sog","sogg","sogs","son","sonj","sonh","sod","sol","solg","solm","solb","sols","solt","solp","solh","som","sob","sobs","sos","soss","song","soj","soc","sok","sot","sop","soh","swa","swag","swagg","swags","swan","swanj","swanh","swad","swal","swalg","swalm","swalb","swals","swalt","swalp","swalh","swam","swab","swabs","swas","swass","swang","swaj","swac","swak","swat","swap","swah","swae","swaeg","swaegg","swaegs","swaen","swaenj","swaenh","swaed","swael","swaelg","swaelm","swaelb","swaels","swaelt","swaelp","swaelh","swaem","swaeb","swaebs","swaes","swaess","swaeng","swaej","swaec","swaek","swaet","swaep","swaeh","soe","soeg","soegg","soegs","soen","soenj","soenh","soed","soel","soelg","soelm","soelb","soels","soelt","soelp","soelh","soem","soeb","soebs","soes","soess","soeng","soej","soec","soek","soet","soep","soeh","syo","syog","syogg","syogs"],["syon","syonj","syonh","syod","syol","syolg","syolm","syolb","syols","syolt","syolp","syolh","syom","syob","syobs","syos","syoss","syong","syoj","syoc","syok","syot","syop","syoh","su","sug","sugg","sugs","sun","sunj","sunh","sud","sul","sulg","sulm","sulb","suls","sult","sulp","sulh","sum","sub","subs","sus","suss","sung","suj","suc","suk","sut","sup","suh","sweo","sweog","sweogg","sweogs","sweon","sweonj","sweonh","sweod","sweol","sweolg","sweolm","sweolb","sweols","sweolt","sweolp","sweolh","sweom","sweob","sweobs","sweos","sweoss","sweong","sweoj","sweoc","sweok","sweot","sweop","sweoh","swe","sweg","swegg","swegs","swen","swenj","swenh","swed","swel","swelg","swelm","swelb","swels","swelt","swelp","swelh","swem","sweb","swebs","swes","swess","sweng","swej","swec","swek","swet","swep","sweh","swi","swig","swigg","swigs","swin","swinj","swinh","swid","swil","swilg","swilm","swilb","swils","swilt","swilp","swilh","swim","swib","swibs","swis","swiss","swing","swij","swic","swik","swit","swip","swih","syu","syug","syugg","syugs","syun","syunj","syunh","syud","syul","syulg","syulm","syulb","syuls","syult","syulp","syulh","syum","syub","syubs","syus","syuss","syung","syuj","syuc","syuk","syut","syup","syuh","seu","seug","seugg","seugs","seun","seunj","seunh","seud","seul","seulg","seulm","seulb","seuls","seult","seulp","seulh","seum","seub","seubs","seus","seuss","seung","seuj","seuc","seuk","seut","seup","seuh","syi","syig","syigg","syigs","syin","syinj","syinh","syid","syil","syilg","syilm","syilb","syils","syilt","syilp","syilh","syim","syib","syibs","syis","syiss","sying","syij","syic","syik","syit","syip","syih","si","sig","sigg","sigs","sin","sinj","sinh","sid","sil","silg","silm","silb","sils","silt","silp","silh","sim","sib","sibs","sis","siss","sing","sij","sic","sik","sit","sip","sih","ssa","ssag","ssagg","ssags","ssan","ssanj","ssanh","ssad"],["ssal","ssalg","ssalm","ssalb","ssals","ssalt","ssalp","ssalh","ssam","ssab","ssabs","ssas","ssass","ssang","ssaj","ssac","ssak","ssat","ssap","ssah","ssae","ssaeg","ssaegg","ssaegs","ssaen","ssaenj","ssaenh","ssaed","ssael","ssaelg","ssaelm","ssaelb","ssaels","ssaelt","ssaelp","ssaelh","ssaem","ssaeb","ssaebs","ssaes","ssaess","ssaeng","ssaej","ssaec","ssaek","ssaet","ssaep","ssaeh","ssya","ssyag","ssyagg","ssyags","ssyan","ssyanj","ssyanh","ssyad","ssyal","ssyalg","ssyalm","ssyalb","ssyals","ssyalt","ssyalp","ssyalh","ssyam","ssyab","ssyabs","ssyas","ssyass","ssyang","ssyaj","ssyac","ssyak","ssyat","ssyap","ssyah","ssyae","ssyaeg","ssyaegg","ssyaegs","ssyaen","ssyaenj","ssyaenh","ssyaed","ssyael","ssyaelg","ssyaelm","ssyaelb","ssyaels","ssyaelt","ssyaelp","ssyaelh","ssyaem","ssyaeb","ssyaebs","ssyaes","ssyaess","ssyaeng","ssyaej","ssyaec","ssyaek","ssyaet","ssyaep","ssyaeh","sseo","sseog","sseogg","sseogs","sseon","sseonj","sseonh","sseod","sseol","sseolg","sseolm","sseolb","sseols","sseolt","sseolp","sseolh","sseom","sseob","sseobs","sseos","sseoss","sseong","sseoj","sseoc","sseok","sseot","sseop","sseoh","sse","sseg","ssegg","ssegs","ssen","ssenj","ssenh","ssed","ssel","sselg","sselm","sselb","ssels","sselt","sselp","sselh","ssem","sseb","ssebs","sses","ssess","sseng","ssej","ssec","ssek","sset","ssep","sseh","ssyeo","ssyeog","ssyeogg","ssyeogs","ssyeon","ssyeonj","ssyeonh","ssyeod","ssyeol","ssyeolg","ssyeolm","ssyeolb","ssyeols","ssyeolt","ssyeolp","ssyeolh","ssyeom","ssyeob","ssyeobs","ssyeos","ssyeoss","ssyeong","ssyeoj","ssyeoc","ssyeok","ssyeot","ssyeop","ssyeoh","ssye","ssyeg","ssyegg","ssyegs","ssyen","ssyenj","ssyenh","ssyed","ssyel","ssyelg","ssyelm","ssyelb","ssyels","ssyelt","ssyelp","ssyelh","ssyem","ssyeb","ssyebs","ssyes","ssyess","ssyeng","ssyej","ssyec","ssyek","ssyet","ssyep","ssyeh","sso","ssog","ssogg","ssogs","sson","ssonj","ssonh","ssod","ssol","ssolg","ssolm","ssolb","ssols","ssolt","ssolp","ssolh","ssom","ssob","ssobs","ssos","ssoss","ssong","ssoj","ssoc","ssok","ssot","ssop","ssoh","sswa","sswag","sswagg","sswags","sswan","sswanj","sswanh","sswad","sswal","sswalg","sswalm","sswalb"],["sswals","sswalt","sswalp","sswalh","sswam","sswab","sswabs","sswas","sswass","sswang","sswaj","sswac","sswak","sswat","sswap","sswah","sswae","sswaeg","sswaegg","sswaegs","sswaen","sswaenj","sswaenh","sswaed","sswael","sswaelg","sswaelm","sswaelb","sswaels","sswaelt","sswaelp","sswaelh","sswaem","sswaeb","sswaebs","sswaes","sswaess","sswaeng","sswaej","sswaec","sswaek","sswaet","sswaep","sswaeh","ssoe","ssoeg","ssoegg","ssoegs","ssoen","ssoenj","ssoenh","ssoed","ssoel","ssoelg","ssoelm","ssoelb","ssoels","ssoelt","ssoelp","ssoelh","ssoem","ssoeb","ssoebs","ssoes","ssoess","ssoeng","ssoej","ssoec","ssoek","ssoet","ssoep","ssoeh","ssyo","ssyog","ssyogg","ssyogs","ssyon","ssyonj","ssyonh","ssyod","ssyol","ssyolg","ssyolm","ssyolb","ssyols","ssyolt","ssyolp","ssyolh","ssyom","ssyob","ssyobs","ssyos","ssyoss","ssyong","ssyoj","ssyoc","ssyok","ssyot","ssyop","ssyoh","ssu","ssug","ssugg","ssugs","ssun","ssunj","ssunh","ssud","ssul","ssulg","ssulm","ssulb","ssuls","ssult","ssulp","ssulh","ssum","ssub","ssubs","ssus","ssuss","ssung","ssuj","ssuc","ssuk","ssut","ssup","ssuh","ssweo","ssweog","ssweogg","ssweogs","ssweon","ssweonj","ssweonh","ssweod","ssweol","ssweolg","ssweolm","ssweolb","ssweols","ssweolt","ssweolp","ssweolh","ssweom","ssweob","ssweobs","ssweos","ssweoss","ssweong","ssweoj","ssweoc","ssweok","ssweot","ssweop","ssweoh","sswe","ssweg","sswegg","sswegs","sswen","sswenj","sswenh","sswed","sswel","sswelg","sswelm","sswelb","sswels","sswelt","sswelp","sswelh","sswem","ssweb","sswebs","sswes","sswess","ssweng","sswej","sswec","sswek","sswet","sswep","ssweh","sswi","sswig","sswigg","sswigs","sswin","sswinj","sswinh","sswid","sswil","sswilg","sswilm","sswilb","sswils","sswilt","sswilp","sswilh","sswim","sswib","sswibs","sswis","sswiss","sswing","sswij","sswic","sswik","sswit","sswip","sswih","ssyu","ssyug","ssyugg","ssyugs","ssyun","ssyunj","ssyunh","ssyud","ssyul","ssyulg","ssyulm","ssyulb","ssyuls","ssyult","ssyulp","ssyulh","ssyum","ssyub","ssyubs","ssyus","ssyuss","ssyung","ssyuj","ssyuc","ssyuk","ssyut","ssyup","ssyuh","sseu","sseug","sseugg","sseugs","sseun","sseunj","sseunh","sseud","sseul","sseulg","sseulm","sseulb","sseuls","sseult","sseulp","sseulh"],["sseum","sseub","sseubs","sseus","sseuss","sseung","sseuj","sseuc","sseuk","sseut","sseup","sseuh","ssyi","ssyig","ssyigg","ssyigs","ssyin","ssyinj","ssyinh","ssyid","ssyil","ssyilg","ssyilm","ssyilb","ssyils","ssyilt","ssyilp","ssyilh","ssyim","ssyib","ssyibs","ssyis","ssyiss","ssying","ssyij","ssyic","ssyik","ssyit","ssyip","ssyih","ssi","ssig","ssigg","ssigs","ssin","ssinj","ssinh","ssid","ssil","ssilg","ssilm","ssilb","ssils","ssilt","ssilp","ssilh","ssim","ssib","ssibs","ssis","ssiss","ssing","ssij","ssic","ssik","ssit","ssip","ssih","a","ag","agg","ags","an","anj","anh","ad","al","alg","alm","alb","als","alt","alp","alh","am","ab","abs","as","ass","ang","aj","ac","ak","at","ap","ah","ae","aeg","aegg","aegs","aen","aenj","aenh","aed","ael","aelg","aelm","aelb","aels","aelt","aelp","aelh","aem","aeb","aebs","aes","aess","aeng","aej","aec","aek","aet","aep","aeh","ya","yag","yagg","yags","yan","yanj","yanh","yad","yal","yalg","yalm","yalb","yals","yalt","yalp","yalh","yam","yab","yabs","yas","yass","yang","yaj","yac","yak","yat","yap","yah","yae","yaeg","yaegg","yaegs","yaen","yaenj","yaenh","yaed","yael","yaelg","yaelm","yaelb","yaels","yaelt","yaelp","yaelh","yaem","yaeb","yaebs","yaes","yaess","yaeng","yaej","yaec","yaek","yaet","yaep","yaeh","eo","eog","eogg","eogs","eon","eonj","eonh","eod","eol","eolg","eolm","eolb","eols","eolt","eolp","eolh","eom","eob","eobs","eos","eoss","eong","eoj","eoc","eok","eot","eop","eoh","e","eg","egg","egs","en","enj","enh","ed","el","elg","elm","elb","els","elt","elp","elh","em","eb","ebs","es","ess","eng","ej","ec","ek","et","ep","eh","yeo","yeog","yeogg","yeogs","yeon","yeonj","yeonh","yeod","yeol","yeolg","yeolm","yeolb","yeols","yeolt","yeolp","yeolh","yeom","yeob","yeobs","yeos"],["yeoss","yeong","yeoj","yeoc","yeok","yeot","yeop","yeoh","ye","yeg","yegg","yegs","yen","yenj","yenh","yed","yel","yelg","yelm","yelb","yels","yelt","yelp","yelh","yem","yeb","yebs","yes","yess","yeng","yej","yec","yek","yet","yep","yeh","o","og","ogg","ogs","on","onj","onh","od","ol","olg","olm","olb","ols","olt","olp","olh","om","ob","obs","os","oss","ong","oj","oc","ok","ot","op","oh","wa","wag","wagg","wags","wan","wanj","wanh","wad","wal","walg","walm","walb","wals","walt","walp","walh","wam","wab","wabs","was","wass","wang","waj","wac","wak","wat","wap","wah","wae","waeg","waegg","waegs","waen","waenj","waenh","waed","wael","waelg","waelm","waelb","waels","waelt","waelp","waelh","waem","waeb","waebs","waes","waess","waeng","waej","waec","waek","waet","waep","waeh","oe","oeg","oegg","oegs","oen","oenj","oenh","oed","oel","oelg","oelm","oelb","oels","oelt","oelp","oelh","oem","oeb","oebs","oes","oess","oeng","oej","oec","oek","oet","oep","oeh","yo","yog","yogg","yogs","yon","yonj","yonh","yod","yol","yolg","yolm","yolb","yols","yolt","yolp","yolh","yom","yob","yobs","yos","yoss","yong","yoj","yoc","yok","yot","yop","yoh","u","ug","ugg","ugs","un","unj","unh","ud","ul","ulg","ulm","ulb","uls","ult","ulp","ulh","um","ub","ubs","us","uss","ung","uj","uc","uk","ut","up","uh","weo","weog","weogg","weogs","weon","weonj","weonh","weod","weol","weolg","weolm","weolb","weols","weolt","weolp","weolh","weom","weob","weobs","weos","weoss","weong","weoj","weoc","weok","weot","weop","weoh","we","weg","wegg","wegs","wen","wenj","wenh","wed","wel","welg","welm","welb","wels","welt","welp","welh","wem","web","webs","wes","wess","weng","wej","wec"],["wek","wet","wep","weh","wi","wig","wigg","wigs","win","winj","winh","wid","wil","wilg","wilm","wilb","wils","wilt","wilp","wilh","wim","wib","wibs","wis","wiss","wing","wij","wic","wik","wit","wip","wih","yu","yug","yugg","yugs","yun","yunj","yunh","yud","yul","yulg","yulm","yulb","yuls","yult","yulp","yulh","yum","yub","yubs","yus","yuss","yung","yuj","yuc","yuk","yut","yup","yuh","eu","eug","eugg","eugs","eun","eunj","eunh","eud","eul","eulg","eulm","eulb","euls","eult","eulp","eulh","eum","eub","eubs","eus","euss","eung","euj","euc","euk","eut","eup","euh","yi","yig","yigg","yigs","yin","yinj","yinh","yid","yil","yilg","yilm","yilb","yils","yilt","yilp","yilh","yim","yib","yibs","yis","yiss","ying","yij","yic","yik","yit","yip","yih","i","ig","igg","igs","in","inj","inh","id","il","ilg","ilm","ilb","ils","ilt","ilp","ilh","im","ib","ibs","is","iss","ing","ij","ic","ik","it","ip","ih","ja","jag","jagg","jags","jan","janj","janh","jad","jal","jalg","jalm","jalb","jals","jalt","jalp","jalh","jam","jab","jabs","jas","jass","jang","jaj","jac","jak","jat","jap","jah","jae","jaeg","jaegg","jaegs","jaen","jaenj","jaenh","jaed","jael","jaelg","jaelm","jaelb","jaels","jaelt","jaelp","jaelh","jaem","jaeb","jaebs","jaes","jaess","jaeng","jaej","jaec","jaek","jaet","jaep","jaeh","jya","jyag","jyagg","jyags","jyan","jyanj","jyanh","jyad","jyal","jyalg","jyalm","jyalb","jyals","jyalt","jyalp","jyalh","jyam","jyab","jyabs","jyas","jyass","jyang","jyaj","jyac","jyak","jyat","jyap","jyah","jyae","jyaeg","jyaegg","jyaegs","jyaen","jyaenj","jyaenh","jyaed","jyael","jyaelg","jyaelm","jyaelb","jyaels","jyaelt","jyaelp","jyaelh","jyaem","jyaeb","jyaebs","jyaes","jyaess","jyaeng","jyaej","jyaec","jyaek","jyaet","jyaep","jyaeh"],["jeo","jeog","jeogg","jeogs","jeon","jeonj","jeonh","jeod","jeol","jeolg","jeolm","jeolb","jeols","jeolt","jeolp","jeolh","jeom","jeob","jeobs","jeos","jeoss","jeong","jeoj","jeoc","jeok","jeot","jeop","jeoh","je","jeg","jegg","jegs","jen","jenj","jenh","jed","jel","jelg","jelm","jelb","jels","jelt","jelp","jelh","jem","jeb","jebs","jes","jess","jeng","jej","jec","jek","jet","jep","jeh","jyeo","jyeog","jyeogg","jyeogs","jyeon","jyeonj","jyeonh","jyeod","jyeol","jyeolg","jyeolm","jyeolb","jyeols","jyeolt","jyeolp","jyeolh","jyeom","jyeob","jyeobs","jyeos","jyeoss","jyeong","jyeoj","jyeoc","jyeok","jyeot","jyeop","jyeoh","jye","jyeg","jyegg","jyegs","jyen","jyenj","jyenh","jyed","jyel","jyelg","jyelm","jyelb","jyels","jyelt","jyelp","jyelh","jyem","jyeb","jyebs","jyes","jyess","jyeng","jyej","jyec","jyek","jyet","jyep","jyeh","jo","jog","jogg","jogs","jon","jonj","jonh","jod","jol","jolg","jolm","jolb","jols","jolt","jolp","jolh","jom","job","jobs","jos","joss","jong","joj","joc","jok","jot","jop","joh","jwa","jwag","jwagg","jwags","jwan","jwanj","jwanh","jwad","jwal","jwalg","jwalm","jwalb","jwals","jwalt","jwalp","jwalh","jwam","jwab","jwabs","jwas","jwass","jwang","jwaj","jwac","jwak","jwat","jwap","jwah","jwae","jwaeg","jwaegg","jwaegs","jwaen","jwaenj","jwaenh","jwaed","jwael","jwaelg","jwaelm","jwaelb","jwaels","jwaelt","jwaelp","jwaelh","jwaem","jwaeb","jwaebs","jwaes","jwaess","jwaeng","jwaej","jwaec","jwaek","jwaet","jwaep","jwaeh","joe","joeg","joegg","joegs","joen","joenj","joenh","joed","joel","joelg","joelm","joelb","joels","joelt","joelp","joelh","joem","joeb","joebs","joes","joess","joeng","joej","joec","joek","joet","joep","joeh","jyo","jyog","jyogg","jyogs","jyon","jyonj","jyonh","jyod","jyol","jyolg","jyolm","jyolb","jyols","jyolt","jyolp","jyolh","jyom","jyob","jyobs","jyos","jyoss","jyong","jyoj","jyoc","jyok","jyot","jyop","jyoh","ju","jug","jugg","jugs"],["jun","junj","junh","jud","jul","julg","julm","julb","juls","jult","julp","julh","jum","jub","jubs","jus","juss","jung","juj","juc","juk","jut","jup","juh","jweo","jweog","jweogg","jweogs","jweon","jweonj","jweonh","jweod","jweol","jweolg","jweolm","jweolb","jweols","jweolt","jweolp","jweolh","jweom","jweob","jweobs","jweos","jweoss","jweong","jweoj","jweoc","jweok","jweot","jweop","jweoh","jwe","jweg","jwegg","jwegs","jwen","jwenj","jwenh","jwed","jwel","jwelg","jwelm","jwelb","jwels","jwelt","jwelp","jwelh","jwem","jweb","jwebs","jwes","jwess","jweng","jwej","jwec","jwek","jwet","jwep","jweh","jwi","jwig","jwigg","jwigs","jwin","jwinj","jwinh","jwid","jwil","jwilg","jwilm","jwilb","jwils","jwilt","jwilp","jwilh","jwim","jwib","jwibs","jwis","jwiss","jwing","jwij","jwic","jwik","jwit","jwip","jwih","jyu","jyug","jyugg","jyugs","jyun","jyunj","jyunh","jyud","jyul","jyulg","jyulm","jyulb","jyuls","jyult","jyulp","jyulh","jyum","jyub","jyubs","jyus","jyuss","jyung","jyuj","jyuc","jyuk","jyut","jyup","jyuh","jeu","jeug","jeugg","jeugs","jeun","jeunj","jeunh","jeud","jeul","jeulg","jeulm","jeulb","jeuls","jeult","jeulp","jeulh","jeum","jeub","jeubs","jeus","jeuss","jeung","jeuj","jeuc","jeuk","jeut","jeup","jeuh","jyi","jyig","jyigg","jyigs","jyin","jyinj","jyinh","jyid","jyil","jyilg","jyilm","jyilb","jyils","jyilt","jyilp","jyilh","jyim","jyib","jyibs","jyis","jyiss","jying","jyij","jyic","jyik","jyit","jyip","jyih","ji","jig","jigg","jigs","jin","jinj","jinh","jid","jil","jilg","jilm","jilb","jils","jilt","jilp","jilh","jim","jib","jibs","jis","jiss","jing","jij","jic","jik","jit","jip","jih","jja","jjag","jjagg","jjags","jjan","jjanj","jjanh","jjad","jjal","jjalg","jjalm","jjalb","jjals","jjalt","jjalp","jjalh","jjam","jjab","jjabs","jjas","jjass","jjang","jjaj","jjac","jjak","jjat","jjap","jjah","jjae","jjaeg","jjaegg","jjaegs","jjaen","jjaenj","jjaenh","jjaed"],["jjael","jjaelg","jjaelm","jjaelb","jjaels","jjaelt","jjaelp","jjaelh","jjaem","jjaeb","jjaebs","jjaes","jjaess","jjaeng","jjaej","jjaec","jjaek","jjaet","jjaep","jjaeh","jjya","jjyag","jjyagg","jjyags","jjyan","jjyanj","jjyanh","jjyad","jjyal","jjyalg","jjyalm","jjyalb","jjyals","jjyalt","jjyalp","jjyalh","jjyam","jjyab","jjyabs","jjyas","jjyass","jjyang","jjyaj","jjyac","jjyak","jjyat","jjyap","jjyah","jjyae","jjyaeg","jjyaegg","jjyaegs","jjyaen","jjyaenj","jjyaenh","jjyaed","jjyael","jjyaelg","jjyaelm","jjyaelb","jjyaels","jjyaelt","jjyaelp","jjyaelh","jjyaem","jjyaeb","jjyaebs","jjyaes","jjyaess","jjyaeng","jjyaej","jjyaec","jjyaek","jjyaet","jjyaep","jjyaeh","jjeo","jjeog","jjeogg","jjeogs","jjeon","jjeonj","jjeonh","jjeod","jjeol","jjeolg","jjeolm","jjeolb","jjeols","jjeolt","jjeolp","jjeolh","jjeom","jjeob","jjeobs","jjeos","jjeoss","jjeong","jjeoj","jjeoc","jjeok","jjeot","jjeop","jjeoh","jje","jjeg","jjegg","jjegs","jjen","jjenj","jjenh","jjed","jjel","jjelg","jjelm","jjelb","jjels","jjelt","jjelp","jjelh","jjem","jjeb","jjebs","jjes","jjess","jjeng","jjej","jjec","jjek","jjet","jjep","jjeh","jjyeo","jjyeog","jjyeogg","jjyeogs","jjyeon","jjyeonj","jjyeonh","jjyeod","jjyeol","jjyeolg","jjyeolm","jjyeolb","jjyeols","jjyeolt","jjyeolp","jjyeolh","jjyeom","jjyeob","jjyeobs","jjyeos","jjyeoss","jjyeong","jjyeoj","jjyeoc","jjyeok","jjyeot","jjyeop","jjyeoh","jjye","jjyeg","jjyegg","jjyegs","jjyen","jjyenj","jjyenh","jjyed","jjyel","jjyelg","jjyelm","jjyelb","jjyels","jjyelt","jjyelp","jjyelh","jjyem","jjyeb","jjyebs","jjyes","jjyess","jjyeng","jjyej","jjyec","jjyek","jjyet","jjyep","jjyeh","jjo","jjog","jjogg","jjogs","jjon","jjonj","jjonh","jjod","jjol","jjolg","jjolm","jjolb","jjols","jjolt","jjolp","jjolh","jjom","jjob","jjobs","jjos","jjoss","jjong","jjoj","jjoc","jjok","jjot","jjop","jjoh","jjwa","jjwag","jjwagg","jjwags","jjwan","jjwanj","jjwanh","jjwad","jjwal","jjwalg","jjwalm","jjwalb","jjwals","jjwalt","jjwalp","jjwalh","jjwam","jjwab","jjwabs","jjwas","jjwass","jjwang","jjwaj","jjwac","jjwak","jjwat","jjwap","jjwah","jjwae","jjwaeg","jjwaegg","jjwaegs","jjwaen","jjwaenj","jjwaenh","jjwaed","jjwael","jjwaelg","jjwaelm","jjwaelb"],["jjwaels","jjwaelt","jjwaelp","jjwaelh","jjwaem","jjwaeb","jjwaebs","jjwaes","jjwaess","jjwaeng","jjwaej","jjwaec","jjwaek","jjwaet","jjwaep","jjwaeh","jjoe","jjoeg","jjoegg","jjoegs","jjoen","jjoenj","jjoenh","jjoed","jjoel","jjoelg","jjoelm","jjoelb","jjoels","jjoelt","jjoelp","jjoelh","jjoem","jjoeb","jjoebs","jjoes","jjoess","jjoeng","jjoej","jjoec","jjoek","jjoet","jjoep","jjoeh","jjyo","jjyog","jjyogg","jjyogs","jjyon","jjyonj","jjyonh","jjyod","jjyol","jjyolg","jjyolm","jjyolb","jjyols","jjyolt","jjyolp","jjyolh","jjyom","jjyob","jjyobs","jjyos","jjyoss","jjyong","jjyoj","jjyoc","jjyok","jjyot","jjyop","jjyoh","jju","jjug","jjugg","jjugs","jjun","jjunj","jjunh","jjud","jjul","jjulg","jjulm","jjulb","jjuls","jjult","jjulp","jjulh","jjum","jjub","jjubs","jjus","jjuss","jjung","jjuj","jjuc","jjuk","jjut","jjup","jjuh","jjweo","jjweog","jjweogg","jjweogs","jjweon","jjweonj","jjweonh","jjweod","jjweol","jjweolg","jjweolm","jjweolb","jjweols","jjweolt","jjweolp","jjweolh","jjweom","jjweob","jjweobs","jjweos","jjweoss","jjweong","jjweoj","jjweoc","jjweok","jjweot","jjweop","jjweoh","jjwe","jjweg","jjwegg","jjwegs","jjwen","jjwenj","jjwenh","jjwed","jjwel","jjwelg","jjwelm","jjwelb","jjwels","jjwelt","jjwelp","jjwelh","jjwem","jjweb","jjwebs","jjwes","jjwess","jjweng","jjwej","jjwec","jjwek","jjwet","jjwep","jjweh","jjwi","jjwig","jjwigg","jjwigs","jjwin","jjwinj","jjwinh","jjwid","jjwil","jjwilg","jjwilm","jjwilb","jjwils","jjwilt","jjwilp","jjwilh","jjwim","jjwib","jjwibs","jjwis","jjwiss","jjwing","jjwij","jjwic","jjwik","jjwit","jjwip","jjwih","jjyu","jjyug","jjyugg","jjyugs","jjyun","jjyunj","jjyunh","jjyud","jjyul","jjyulg","jjyulm","jjyulb","jjyuls","jjyult","jjyulp","jjyulh","jjyum","jjyub","jjyubs","jjyus","jjyuss","jjyung","jjyuj","jjyuc","jjyuk","jjyut","jjyup","jjyuh","jjeu","jjeug","jjeugg","jjeugs","jjeun","jjeunj","jjeunh","jjeud","jjeul","jjeulg","jjeulm","jjeulb","jjeuls","jjeult","jjeulp","jjeulh","jjeum","jjeub","jjeubs","jjeus","jjeuss","jjeung","jjeuj","jjeuc","jjeuk","jjeut","jjeup","jjeuh","jjyi","jjyig","jjyigg","jjyigs","jjyin","jjyinj","jjyinh","jjyid","jjyil","jjyilg","jjyilm","jjyilb","jjyils","jjyilt","jjyilp","jjyilh"],["jjyim","jjyib","jjyibs","jjyis","jjyiss","jjying","jjyij","jjyic","jjyik","jjyit","jjyip","jjyih","jji","jjig","jjigg","jjigs","jjin","jjinj","jjinh","jjid","jjil","jjilg","jjilm","jjilb","jjils","jjilt","jjilp","jjilh","jjim","jjib","jjibs","jjis","jjiss","jjing","jjij","jjic","jjik","jjit","jjip","jjih","ca","cag","cagg","cags","can","canj","canh","cad","cal","calg","calm","calb","cals","calt","calp","calh","cam","cab","cabs","cas","cass","cang","caj","cac","cak","cat","cap","cah","cae","caeg","caegg","caegs","caen","caenj","caenh","caed","cael","caelg","caelm","caelb","caels","caelt","caelp","caelh","caem","caeb","caebs","caes","caess","caeng","caej","caec","caek","caet","caep","caeh","cya","cyag","cyagg","cyags","cyan","cyanj","cyanh","cyad","cyal","cyalg","cyalm","cyalb","cyals","cyalt","cyalp","cyalh","cyam","cyab","cyabs","cyas","cyass","cyang","cyaj","cyac","cyak","cyat","cyap","cyah","cyae","cyaeg","cyaegg","cyaegs","cyaen","cyaenj","cyaenh","cyaed","cyael","cyaelg","cyaelm","cyaelb","cyaels","cyaelt","cyaelp","cyaelh","cyaem","cyaeb","cyaebs","cyaes","cyaess","cyaeng","cyaej","cyaec","cyaek","cyaet","cyaep","cyaeh","ceo","ceog","ceogg","ceogs","ceon","ceonj","ceonh","ceod","ceol","ceolg","ceolm","ceolb","ceols","ceolt","ceolp","ceolh","ceom","ceob","ceobs","ceos","ceoss","ceong","ceoj","ceoc","ceok","ceot","ceop","ceoh","ce","ceg","cegg","cegs","cen","cenj","cenh","ced","cel","celg","celm","celb","cels","celt","celp","celh","cem","ceb","cebs","ces","cess","ceng","cej","cec","cek","cet","cep","ceh","cyeo","cyeog","cyeogg","cyeogs","cyeon","cyeonj","cyeonh","cyeod","cyeol","cyeolg","cyeolm","cyeolb","cyeols","cyeolt","cyeolp","cyeolh","cyeom","cyeob","cyeobs","cyeos","cyeoss","cyeong","cyeoj","cyeoc","cyeok","cyeot","cyeop","cyeoh","cye","cyeg","cyegg","cyegs","cyen","cyenj","cyenh","cyed","cyel","cyelg","cyelm","cyelb","cyels","cyelt","cyelp","cyelh","cyem","cyeb","cyebs","cyes"],["cyess","cyeng","cyej","cyec","cyek","cyet","cyep","cyeh","co","cog","cogg","cogs","con","conj","conh","cod","col","colg","colm","colb","cols","colt","colp","colh","com","cob","cobs","cos","coss","cong","coj","coc","cok","cot","cop","coh","cwa","cwag","cwagg","cwags","cwan","cwanj","cwanh","cwad","cwal","cwalg","cwalm","cwalb","cwals","cwalt","cwalp","cwalh","cwam","cwab","cwabs","cwas","cwass","cwang","cwaj","cwac","cwak","cwat","cwap","cwah","cwae","cwaeg","cwaegg","cwaegs","cwaen","cwaenj","cwaenh","cwaed","cwael","cwaelg","cwaelm","cwaelb","cwaels","cwaelt","cwaelp","cwaelh","cwaem","cwaeb","cwaebs","cwaes","cwaess","cwaeng","cwaej","cwaec","cwaek","cwaet","cwaep","cwaeh","coe","coeg","coegg","coegs","coen","coenj","coenh","coed","coel","coelg","coelm","coelb","coels","coelt","coelp","coelh","coem","coeb","coebs","coes","coess","coeng","coej","coec","coek","coet","coep","coeh","cyo","cyog","cyogg","cyogs","cyon","cyonj","cyonh","cyod","cyol","cyolg","cyolm","cyolb","cyols","cyolt","cyolp","cyolh","cyom","cyob","cyobs","cyos","cyoss","cyong","cyoj","cyoc","cyok","cyot","cyop","cyoh","cu","cug","cugg","cugs","cun","cunj","cunh","cud","cul","culg","culm","culb","culs","cult","culp","culh","cum","cub","cubs","cus","cuss","cung","cuj","cuc","cuk","cut","cup","cuh","cweo","cweog","cweogg","cweogs","cweon","cweonj","cweonh","cweod","cweol","cweolg","cweolm","cweolb","cweols","cweolt","cweolp","cweolh","cweom","cweob","cweobs","cweos","cweoss","cweong","cweoj","cweoc","cweok","cweot","cweop","cweoh","cwe","cweg","cwegg","cwegs","cwen","cwenj","cwenh","cwed","cwel","cwelg","cwelm","cwelb","cwels","cwelt","cwelp","cwelh","cwem","cweb","cwebs","cwes","cwess","cweng","cwej","cwec","cwek","cwet","cwep","cweh","cwi","cwig","cwigg","cwigs","cwin","cwinj","cwinh","cwid","cwil","cwilg","cwilm","cwilb","cwils","cwilt","cwilp","cwilh","cwim","cwib","cwibs","cwis","cwiss","cwing","cwij","cwic"],["cwik","cwit","cwip","cwih","cyu","cyug","cyugg","cyugs","cyun","cyunj","cyunh","cyud","cyul","cyulg","cyulm","cyulb","cyuls","cyult","cyulp","cyulh","cyum","cyub","cyubs","cyus","cyuss","cyung","cyuj","cyuc","cyuk","cyut","cyup","cyuh","ceu","ceug","ceugg","ceugs","ceun","ceunj","ceunh","ceud","ceul","ceulg","ceulm","ceulb","ceuls","ceult","ceulp","ceulh","ceum","ceub","ceubs","ceus","ceuss","ceung","ceuj","ceuc","ceuk","ceut","ceup","ceuh","cyi","cyig","cyigg","cyigs","cyin","cyinj","cyinh","cyid","cyil","cyilg","cyilm","cyilb","cyils","cyilt","cyilp","cyilh","cyim","cyib","cyibs","cyis","cyiss","cying","cyij","cyic","cyik","cyit","cyip","cyih","ci","cig","cigg","cigs","cin","cinj","cinh","cid","cil","cilg","cilm","cilb","cils","cilt","cilp","cilh","cim","cib","cibs","cis","ciss","cing","cij","cic","cik","cit","cip","cih","ka","kag","kagg","kags","kan","kanj","kanh","kad","kal","kalg","kalm","kalb","kals","kalt","kalp","kalh","kam","kab","kabs","kas","kass","kang","kaj","kac","kak","kat","kap","kah","kae","kaeg","kaegg","kaegs","kaen","kaenj","kaenh","kaed","kael","kaelg","kaelm","kaelb","kaels","kaelt","kaelp","kaelh","kaem","kaeb","kaebs","kaes","kaess","kaeng","kaej","kaec","kaek","kaet","kaep","kaeh","kya","kyag","kyagg","kyags","kyan","kyanj","kyanh","kyad","kyal","kyalg","kyalm","kyalb","kyals","kyalt","kyalp","kyalh","kyam","kyab","kyabs","kyas","kyass","kyang","kyaj","kyac","kyak","kyat","kyap","kyah","kyae","kyaeg","kyaegg","kyaegs","kyaen","kyaenj","kyaenh","kyaed","kyael","kyaelg","kyaelm","kyaelb","kyaels","kyaelt","kyaelp","kyaelh","kyaem","kyaeb","kyaebs","kyaes","kyaess","kyaeng","kyaej","kyaec","kyaek","kyaet","kyaep","kyaeh","keo","keog","keogg","keogs","keon","keonj","keonh","keod","keol","keolg","keolm","keolb","keols","keolt","keolp","keolh","keom","keob","keobs","keos","keoss","keong","keoj","keoc","keok","keot","keop","keoh"],["ke","keg","kegg","kegs","ken","kenj","kenh","ked","kel","kelg","kelm","kelb","kels","kelt","kelp","kelh","kem","keb","kebs","kes","kess","keng","kej","kec","kek","ket","kep","keh","kyeo","kyeog","kyeogg","kyeogs","kyeon","kyeonj","kyeonh","kyeod","kyeol","kyeolg","kyeolm","kyeolb","kyeols","kyeolt","kyeolp","kyeolh","kyeom","kyeob","kyeobs","kyeos","kyeoss","kyeong","kyeoj","kyeoc","kyeok","kyeot","kyeop","kyeoh","kye","kyeg","kyegg","kyegs","kyen","kyenj","kyenh","kyed","kyel","kyelg","kyelm","kyelb","kyels","kyelt","kyelp","kyelh","kyem","kyeb","kyebs","kyes","kyess","kyeng","kyej","kyec","kyek","kyet","kyep","kyeh","ko","kog","kogg","kogs","kon","konj","konh","kod","kol","kolg","kolm","kolb","kols","kolt","kolp","kolh","kom","kob","kobs","kos","koss","kong","koj","koc","kok","kot","kop","koh","kwa","kwag","kwagg","kwags","kwan","kwanj","kwanh","kwad","kwal","kwalg","kwalm","kwalb","kwals","kwalt","kwalp","kwalh","kwam","kwab","kwabs","kwas","kwass","kwang","kwaj","kwac","kwak","kwat","kwap","kwah","kwae","kwaeg","kwaegg","kwaegs","kwaen","kwaenj","kwaenh","kwaed","kwael","kwaelg","kwaelm","kwaelb","kwaels","kwaelt","kwaelp","kwaelh","kwaem","kwaeb","kwaebs","kwaes","kwaess","kwaeng","kwaej","kwaec","kwaek","kwaet","kwaep","kwaeh","koe","koeg","koegg","koegs","koen","koenj","koenh","koed","koel","koelg","koelm","koelb","koels","koelt","koelp","koelh","koem","koeb","koebs","koes","koess","koeng","koej","koec","koek","koet","koep","koeh","kyo","kyog","kyogg","kyogs","kyon","kyonj","kyonh","kyod","kyol","kyolg","kyolm","kyolb","kyols","kyolt","kyolp","kyolh","kyom","kyob","kyobs","kyos","kyoss","kyong","kyoj","kyoc","kyok","kyot","kyop","kyoh","ku","kug","kugg","kugs","kun","kunj","kunh","kud","kul","kulg","kulm","kulb","kuls","kult","kulp","kulh","kum","kub","kubs","kus","kuss","kung","kuj","kuc","kuk","kut","kup","kuh","kweo","kweog","kweogg","kweogs"],["kweon","kweonj","kweonh","kweod","kweol","kweolg","kweolm","kweolb","kweols","kweolt","kweolp","kweolh","kweom","kweob","kweobs","kweos","kweoss","kweong","kweoj","kweoc","kweok","kweot","kweop","kweoh","kwe","kweg","kwegg","kwegs","kwen","kwenj","kwenh","kwed","kwel","kwelg","kwelm","kwelb","kwels","kwelt","kwelp","kwelh","kwem","kweb","kwebs","kwes","kwess","kweng","kwej","kwec","kwek","kwet","kwep","kweh","kwi","kwig","kwigg","kwigs","kwin","kwinj","kwinh","kwid","kwil","kwilg","kwilm","kwilb","kwils","kwilt","kwilp","kwilh","kwim","kwib","kwibs","kwis","kwiss","kwing","kwij","kwic","kwik","kwit","kwip","kwih","kyu","kyug","kyugg","kyugs","kyun","kyunj","kyunh","kyud","kyul","kyulg","kyulm","kyulb","kyuls","kyult","kyulp","kyulh","kyum","kyub","kyubs","kyus","kyuss","kyung","kyuj","kyuc","kyuk","kyut","kyup","kyuh","keu","keug","keugg","keugs","keun","keunj","keunh","keud","keul","keulg","keulm","keulb","keuls","keult","keulp","keulh","keum","keub","keubs","keus","keuss","keung","keuj","keuc","keuk","keut","keup","keuh","kyi","kyig","kyigg","kyigs","kyin","kyinj","kyinh","kyid","kyil","kyilg","kyilm","kyilb","kyils","kyilt","kyilp","kyilh","kyim","kyib","kyibs","kyis","kyiss","kying","kyij","kyic","kyik","kyit","kyip","kyih","ki","kig","kigg","kigs","kin","kinj","kinh","kid","kil","kilg","kilm","kilb","kils","kilt","kilp","kilh","kim","kib","kibs","kis","kiss","king","kij","kic","kik","kit","kip","kih","ta","tag","tagg","tags","tan","tanj","tanh","tad","tal","talg","talm","talb","tals","talt","talp","talh","tam","tab","tabs","tas","tass","tang","taj","tac","tak","tat","tap","tah","tae","taeg","taegg","taegs","taen","taenj","taenh","taed","tael","taelg","taelm","taelb","taels","taelt","taelp","taelh","taem","taeb","taebs","taes","taess","taeng","taej","taec","taek","taet","taep","taeh","tya","tyag","tyagg","tyags","tyan","tyanj","tyanh","tyad"],["tyal","tyalg","tyalm","tyalb","tyals","tyalt","tyalp","tyalh","tyam","tyab","tyabs","tyas","tyass","tyang","tyaj","tyac","tyak","tyat","tyap","tyah","tyae","tyaeg","tyaegg","tyaegs","tyaen","tyaenj","tyaenh","tyaed","tyael","tyaelg","tyaelm","tyaelb","tyaels","tyaelt","tyaelp","tyaelh","tyaem","tyaeb","tyaebs","tyaes","tyaess","tyaeng","tyaej","tyaec","tyaek","tyaet","tyaep","tyaeh","teo","teog","teogg","teogs","teon","teonj","teonh","teod","teol","teolg","teolm","teolb","teols","teolt","teolp","teolh","teom","teob","teobs","teos","teoss","teong","teoj","teoc","teok","teot","teop","teoh","te","teg","tegg","tegs","ten","tenj","tenh","ted","tel","telg","telm","telb","tels","telt","telp","telh","tem","teb","tebs","tes","tess","teng","tej","tec","tek","tet","tep","teh","tyeo","tyeog","tyeogg","tyeogs","tyeon","tyeonj","tyeonh","tyeod","tyeol","tyeolg","tyeolm","tyeolb","tyeols","tyeolt","tyeolp","tyeolh","tyeom","tyeob","tyeobs","tyeos","tyeoss","tyeong","tyeoj","tyeoc","tyeok","tyeot","tyeop","tyeoh","tye","tyeg","tyegg","tyegs","tyen","tyenj","tyenh","tyed","tyel","tyelg","tyelm","tyelb","tyels","tyelt","tyelp","tyelh","tyem","tyeb","tyebs","tyes","tyess","tyeng","tyej","tyec","tyek","tyet","tyep","tyeh","to","tog","togg","togs","ton","tonj","tonh","tod","tol","tolg","tolm","tolb","tols","tolt","tolp","tolh","tom","tob","tobs","tos","toss","tong","toj","toc","tok","tot","top","toh","twa","twag","twagg","twags","twan","twanj","twanh","twad","twal","twalg","twalm","twalb","twals","twalt","twalp","twalh","twam","twab","twabs","twas","twass","twang","twaj","twac","twak","twat","twap","twah","twae","twaeg","twaegg","twaegs","twaen","twaenj","twaenh","twaed","twael","twaelg","twaelm","twaelb","twaels","twaelt","twaelp","twaelh","twaem","twaeb","twaebs","twaes","twaess","twaeng","twaej","twaec","twaek","twaet","twaep","twaeh","toe","toeg","toegg","toegs","toen","toenj","toenh","toed","toel","toelg","toelm","toelb"],["toels","toelt","toelp","toelh","toem","toeb","toebs","toes","toess","toeng","toej","toec","toek","toet","toep","toeh","tyo","tyog","tyogg","tyogs","tyon","tyonj","tyonh","tyod","tyol","tyolg","tyolm","tyolb","tyols","tyolt","tyolp","tyolh","tyom","tyob","tyobs","tyos","tyoss","tyong","tyoj","tyoc","tyok","tyot","tyop","tyoh","tu","tug","tugg","tugs","tun","tunj","tunh","tud","tul","tulg","tulm","tulb","tuls","tult","tulp","tulh","tum","tub","tubs","tus","tuss","tung","tuj","tuc","tuk","tut","tup","tuh","tweo","tweog","tweogg","tweogs","tweon","tweonj","tweonh","tweod","tweol","tweolg","tweolm","tweolb","tweols","tweolt","tweolp","tweolh","tweom","tweob","tweobs","tweos","tweoss","tweong","tweoj","tweoc","tweok","tweot","tweop","tweoh","twe","tweg","twegg","twegs","twen","twenj","twenh","twed","twel","twelg","twelm","twelb","twels","twelt","twelp","twelh","twem","tweb","twebs","twes","twess","tweng","twej","twec","twek","twet","twep","tweh","twi","twig","twigg","twigs","twin","twinj","twinh","twid","twil","twilg","twilm","twilb","twils","twilt","twilp","twilh","twim","twib","twibs","twis","twiss","twing","twij","twic","twik","twit","twip","twih","tyu","tyug","tyugg","tyugs","tyun","tyunj","tyunh","tyud","tyul","tyulg","tyulm","tyulb","tyuls","tyult","tyulp","tyulh","tyum","tyub","tyubs","tyus","tyuss","tyung","tyuj","tyuc","tyuk","tyut","tyup","tyuh","teu","teug","teugg","teugs","teun","teunj","teunh","teud","teul","teulg","teulm","teulb","teuls","teult","teulp","teulh","teum","teub","teubs","teus","teuss","teung","teuj","teuc","teuk","teut","teup","teuh","tyi","tyig","tyigg","tyigs","tyin","tyinj","tyinh","tyid","tyil","tyilg","tyilm","tyilb","tyils","tyilt","tyilp","tyilh","tyim","tyib","tyibs","tyis","tyiss","tying","tyij","tyic","tyik","tyit","tyip","tyih","ti","tig","tigg","tigs","tin","tinj","tinh","tid","til","tilg","tilm","tilb","tils","tilt","tilp","tilh"],["tim","tib","tibs","tis","tiss","ting","tij","tic","tik","tit","tip","tih","pa","pag","pagg","pags","pan","panj","panh","pad","pal","palg","palm","palb","pals","palt","palp","palh","pam","pab","pabs","pas","pass","pang","paj","pac","pak","pat","pap","pah","pae","paeg","paegg","paegs","paen","paenj","paenh","paed","pael","paelg","paelm","paelb","paels","paelt","paelp","paelh","paem","paeb","paebs","paes","paess","paeng","paej","paec","paek","paet","paep","paeh","pya","pyag","pyagg","pyags","pyan","pyanj","pyanh","pyad","pyal","pyalg","pyalm","pyalb","pyals","pyalt","pyalp","pyalh","pyam","pyab","pyabs","pyas","pyass","pyang","pyaj","pyac","pyak","pyat","pyap","pyah","pyae","pyaeg","pyaegg","pyaegs","pyaen","pyaenj","pyaenh","pyaed","pyael","pyaelg","pyaelm","pyaelb","pyaels","pyaelt","pyaelp","pyaelh","pyaem","pyaeb","pyaebs","pyaes","pyaess","pyaeng","pyaej","pyaec","pyaek","pyaet","pyaep","pyaeh","peo","peog","peogg","peogs","peon","peonj","peonh","peod","peol","peolg","peolm","peolb","peols","peolt","peolp","peolh","peom","peob","peobs","peos","peoss","peong","peoj","peoc","peok","peot","peop","peoh","pe","peg","pegg","pegs","pen","penj","penh","ped","pel","pelg","pelm","pelb","pels","pelt","pelp","pelh","pem","peb","pebs","pes","pess","peng","pej","pec","pek","pet","pep","peh","pyeo","pyeog","pyeogg","pyeogs","pyeon","pyeonj","pyeonh","pyeod","pyeol","pyeolg","pyeolm","pyeolb","pyeols","pyeolt","pyeolp","pyeolh","pyeom","pyeob","pyeobs","pyeos","pyeoss","pyeong","pyeoj","pyeoc","pyeok","pyeot","pyeop","pyeoh","pye","pyeg","pyegg","pyegs","pyen","pyenj","pyenh","pyed","pyel","pyelg","pyelm","pyelb","pyels","pyelt","pyelp","pyelh","pyem","pyeb","pyebs","pyes","pyess","pyeng","pyej","pyec","pyek","pyet","pyep","pyeh","po","pog","pogg","pogs","pon","ponj","ponh","pod","pol","polg","polm","polb","pols","polt","polp","polh","pom","pob","pobs","pos"],["poss","pong","poj","poc","pok","pot","pop","poh","pwa","pwag","pwagg","pwags","pwan","pwanj","pwanh","pwad","pwal","pwalg","pwalm","pwalb","pwals","pwalt","pwalp","pwalh","pwam","pwab","pwabs","pwas","pwass","pwang","pwaj","pwac","pwak","pwat","pwap","pwah","pwae","pwaeg","pwaegg","pwaegs","pwaen","pwaenj","pwaenh","pwaed","pwael","pwaelg","pwaelm","pwaelb","pwaels","pwaelt","pwaelp","pwaelh","pwaem","pwaeb","pwaebs","pwaes","pwaess","pwaeng","pwaej","pwaec","pwaek","pwaet","pwaep","pwaeh","poe","poeg","poegg","poegs","poen","poenj","poenh","poed","poel","poelg","poelm","poelb","poels","poelt","poelp","poelh","poem","poeb","poebs","poes","poess","poeng","poej","poec","poek","poet","poep","poeh","pyo","pyog","pyogg","pyogs","pyon","pyonj","pyonh","pyod","pyol","pyolg","pyolm","pyolb","pyols","pyolt","pyolp","pyolh","pyom","pyob","pyobs","pyos","pyoss","pyong","pyoj","pyoc","pyok","pyot","pyop","pyoh","pu","pug","pugg","pugs","pun","punj","punh","pud","pul","pulg","pulm","pulb","puls","pult","pulp","pulh","pum","pub","pubs","pus","puss","pung","puj","puc","puk","put","pup","puh","pweo","pweog","pweogg","pweogs","pweon","pweonj","pweonh","pweod","pweol","pweolg","pweolm","pweolb","pweols","pweolt","pweolp","pweolh","pweom","pweob","pweobs","pweos","pweoss","pweong","pweoj","pweoc","pweok","pweot","pweop","pweoh","pwe","pweg","pwegg","pwegs","pwen","pwenj","pwenh","pwed","pwel","pwelg","pwelm","pwelb","pwels","pwelt","pwelp","pwelh","pwem","pweb","pwebs","pwes","pwess","pweng","pwej","pwec","pwek","pwet","pwep","pweh","pwi","pwig","pwigg","pwigs","pwin","pwinj","pwinh","pwid","pwil","pwilg","pwilm","pwilb","pwils","pwilt","pwilp","pwilh","pwim","pwib","pwibs","pwis","pwiss","pwing","pwij","pwic","pwik","pwit","pwip","pwih","pyu","pyug","pyugg","pyugs","pyun","pyunj","pyunh","pyud","pyul","pyulg","pyulm","pyulb","pyuls","pyult","pyulp","pyulh","pyum","pyub","pyubs","pyus","pyuss","pyung","pyuj","pyuc"],["pyuk","pyut","pyup","pyuh","peu","peug","peugg","peugs","peun","peunj","peunh","peud","peul","peulg","peulm","peulb","peuls","peult","peulp","peulh","peum","peub","peubs","peus","peuss","peung","peuj","peuc","peuk","peut","peup","peuh","pyi","pyig","pyigg","pyigs","pyin","pyinj","pyinh","pyid","pyil","pyilg","pyilm","pyilb","pyils","pyilt","pyilp","pyilh","pyim","pyib","pyibs","pyis","pyiss","pying","pyij","pyic","pyik","pyit","pyip","pyih","pi","pig","pigg","pigs","pin","pinj","pinh","pid","pil","pilg","pilm","pilb","pils","pilt","pilp","pilh","pim","pib","pibs","pis","piss","ping","pij","pic","pik","pit","pip","pih","ha","hag","hagg","hags","han","hanj","hanh","had","hal","halg","halm","halb","hals","halt","halp","halh","ham","hab","habs","has","hass","hang","haj","hac","hak","hat","hap","hah","hae","haeg","haegg","haegs","haen","haenj","haenh","haed","hael","haelg","haelm","haelb","haels","haelt","haelp","haelh","haem","haeb","haebs","haes","haess","haeng","haej","haec","haek","haet","haep","haeh","hya","hyag","hyagg","hyags","hyan","hyanj","hyanh","hyad","hyal","hyalg","hyalm","hyalb","hyals","hyalt","hyalp","hyalh","hyam","hyab","hyabs","hyas","hyass","hyang","hyaj","hyac","hyak","hyat","hyap","hyah","hyae","hyaeg","hyaegg","hyaegs","hyaen","hyaenj","hyaenh","hyaed","hyael","hyaelg","hyaelm","hyaelb","hyaels","hyaelt","hyaelp","hyaelh","hyaem","hyaeb","hyaebs","hyaes","hyaess","hyaeng","hyaej","hyaec","hyaek","hyaet","hyaep","hyaeh","heo","heog","heogg","heogs","heon","heonj","heonh","heod","heol","heolg","heolm","heolb","heols","heolt","heolp","heolh","heom","heob","heobs","heos","heoss","heong","heoj","heoc","heok","heot","heop","heoh","he","heg","hegg","hegs","hen","henj","henh","hed","hel","helg","helm","helb","hels","helt","help","helh","hem","heb","hebs","hes","hess","heng","hej","hec","hek","het","hep","heh"],["hyeo","hyeog","hyeogg","hyeogs","hyeon","hyeonj","hyeonh","hyeod","hyeol","hyeolg","hyeolm","hyeolb","hyeols","hyeolt","hyeolp","hyeolh","hyeom","hyeob","hyeobs","hyeos","hyeoss","hyeong","hyeoj","hyeoc","hyeok","hyeot","hyeop","hyeoh","hye","hyeg","hyegg","hyegs","hyen","hyenj","hyenh","hyed","hyel","hyelg","hyelm","hyelb","hyels","hyelt","hyelp","hyelh","hyem","hyeb","hyebs","hyes","hyess","hyeng","hyej","hyec","hyek","hyet","hyep","hyeh","ho","hog","hogg","hogs","hon","honj","honh","hod","hol","holg","holm","holb","hols","holt","holp","holh","hom","hob","hobs","hos","hoss","hong","hoj","hoc","hok","hot","hop","hoh","hwa","hwag","hwagg","hwags","hwan","hwanj","hwanh","hwad","hwal","hwalg","hwalm","hwalb","hwals","hwalt","hwalp","hwalh","hwam","hwab","hwabs","hwas","hwass","hwang","hwaj","hwac","hwak","hwat","hwap","hwah","hwae","hwaeg","hwaegg","hwaegs","hwaen","hwaenj","hwaenh","hwaed","hwael","hwaelg","hwaelm","hwaelb","hwaels","hwaelt","hwaelp","hwaelh","hwaem","hwaeb","hwaebs","hwaes","hwaess","hwaeng","hwaej","hwaec","hwaek","hwaet","hwaep","hwaeh","hoe","hoeg","hoegg","hoegs","hoen","hoenj","hoenh","hoed","hoel","hoelg","hoelm","hoelb","hoels","hoelt","hoelp","hoelh","hoem","hoeb","hoebs","hoes","hoess","hoeng","hoej","hoec","hoek","hoet","hoep","hoeh","hyo","hyog","hyogg","hyogs","hyon","hyonj","hyonh","hyod","hyol","hyolg","hyolm","hyolb","hyols","hyolt","hyolp","hyolh","hyom","hyob","hyobs","hyos","hyoss","hyong","hyoj","hyoc","hyok","hyot","hyop","hyoh","hu","hug","hugg","hugs","hun","hunj","hunh","hud","hul","hulg","hulm","hulb","huls","hult","hulp","hulh","hum","hub","hubs","hus","huss","hung","huj","huc","huk","hut","hup","huh","hweo","hweog","hweogg","hweogs","hweon","hweonj","hweonh","hweod","hweol","hweolg","hweolm","hweolb","hweols","hweolt","hweolp","hweolh","hweom","hweob","hweobs","hweos","hweoss","hweong","hweoj","hweoc","hweok","hweot","hweop","hweoh","hwe","hweg","hwegg","hwegs"],["hwen","hwenj","hwenh","hwed","hwel","hwelg","hwelm","hwelb","hwels","hwelt","hwelp","hwelh","hwem","hweb","hwebs","hwes","hwess","hweng","hwej","hwec","hwek","hwet","hwep","hweh","hwi","hwig","hwigg","hwigs","hwin","hwinj","hwinh","hwid","hwil","hwilg","hwilm","hwilb","hwils","hwilt","hwilp","hwilh","hwim","hwib","hwibs","hwis","hwiss","hwing","hwij","hwic","hwik","hwit","hwip","hwih","hyu","hyug","hyugg","hyugs","hyun","hyunj","hyunh","hyud","hyul","hyulg","hyulm","hyulb","hyuls","hyult","hyulp","hyulh","hyum","hyub","hyubs","hyus","hyuss","hyung","hyuj","hyuc","hyuk","hyut","hyup","hyuh","heu","heug","heugg","heugs","heun","heunj","heunh","heud","heul","heulg","heulm","heulb","heuls","heult","heulp","heulh","heum","heub","heubs","heus","heuss","heung","heuj","heuc","heuk","heut","heup","heuh","hyi","hyig","hyigg","hyigs","hyin","hyinj","hyinh","hyid","hyil","hyilg","hyilm","hyilb","hyils","hyilt","hyilp","hyilh","hyim","hyib","hyibs","hyis","hyiss","hying","hyij","hyic","hyik","hyit","hyip","hyih","hi","hig","higg","higs","hin","hinj","hinh","hid","hil","hilg","hilm","hilb","hils","hilt","hilp","hilh","him","hib","hibs","his","hiss","hing","hij","hic","hik","hit","hip","hih"],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],["Kay","Kayng","Ke","Ko","Kol","Koc","Kwi","Kwi","Kyun","Kul","Kum","Na","Na","Na","La","Na","Na","Na","Na","Na","Nak","Nak","Nak","Nak","Nak","Nak","Nak","Nan","Nan","Nan","Nan","Nan","Nan","Nam","Nam","Nam","Nam","Nap","Nap","Nap","Nang","Nang","Nang","Nang","Nang","Nay","Nayng","No","No","No","No","No","No","No","No","No","No","No","No","Nok","Nok","Nok","Nok","Nok","Nok","Non","Nong","Nong","Nong","Nong","Noy","Noy","Noy","Noy","Nwu","Nwu","Nwu","Nwu","Nwu","Nwu","Nwu","Nwu","Nuk","Nuk","Num","Nung","Nung","Nung","Nung","Nung","Twu","La","Lak","Lak","Lan","Lyeng","Lo","Lyul","Li","Pey","Pen","Pyen","Pwu","Pwul","Pi","Sak","Sak","Sam","Sayk","Sayng","Sep","Sey","Sway","Sin","Sim","Sip","Ya","Yak","Yak","Yang","Yang","Yang","Yang","Yang","Yang","Yang","Yang","Ye","Ye","Ye","Ye","Ye","Ye","Ye","Ye","Ye","Ye","Ye","Yek","Yek","Yek","Yek","Yen","Yen","Yen","Yen","Yen","Yen","Yen","Yen","Yen","Yen","Yen","Yen","Yen","Yen","Yel","Yel","Yel","Yel","Yel","Yel","Yem","Yem","Yem","Yem","Yem","Yep","Yeng","Yeng","Yeng","Yeng","Yeng","Yeng","Yeng","Yeng","Yeng","Yeng","Yeng","Yeng","Yeng","Yey","Yey","Yey","Yey","O","Yo","Yo","Yo","Yo","Yo","Yo","Yo","Yo","Yo","Yo","Yong","Wun","Wen","Yu","Yu","Yu","Yu","Yu","Yu","Yu","Yu","Yu","Yu","Yuk","Yuk","Yuk","Yun","Yun","Yun","Yun","Yul","Yul","Yul","Yul","Yung","I","I","I","I","I","I","I","I","I","I","I","I","I","I","Ik","Ik","In","In","In","In","In","In","In","Im","Im","Im","Ip","Ip","Ip","Cang","Cek","Ci","Cip","Cha","Chek"],["Chey","Thak","Thak","Thang","Thayk","Thong","Pho","Phok","Hang","Hang","Hyen","Hwak","Wu","Huo",,,"Zhong",,"Qing",,,"Xi","Zhu","Yi","Li","Shen","Xiang","Fu","Jing","Jing","Yu",,"Hagi",,"Zhu",,,"Yi","Du",,,,"Fan","Si","Guan"],["ff","fi","fl","ffi","ffl","st","st",,,,,,,,,,,,,"mn","me","mi","vn","mkh",,,,,,"yi",,"ay","`",,"d","h","k","l","m","m","t","+","sh","s","sh","s","a","a",,"b","g","d","h","v","z",,"t","y","k","k","l",,"l",,"n","n",,"p","p",,"ts","ts","r","sh","t","vo","b","k","p","l"],[],[],[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"~",,,,,,,,,,,,,"..","--","-","_","_","(",") ","{","} ","[","] ","[(",")] ","<<",">> ","<","> ","[","] ","{","}",,,,,,,,,,,,",",",",".",,";",":","?","!","-","(",")","{","}","{","}","#","&","*","+","-","<",">","=",,"\\","$","%","@"],[,"!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~",,,".","[","]",",","*","wo","a","i","u","e","o","ya","yu","yo","tu","+","a","i","u","e","o","ka","ki","ku","ke","ko","sa","si","su","se","so","ta","ti","tu","te","to","na","ni","nu","ne","no","ha","hi","hu","he","ho","ma","mi","mu","me","mo","ya","yu","yo","ra","ri","ru","re","ro","wa","n",":",";",,"g","gg","gs","n","nj","nh","d","dd","r","lg","lm","lb","ls","lt","lp","rh","m","b","bb","bs","s","ss",,"j","jj","c","k","t","p","h",,,,"a","ae","ya","yae","eo","e",,,"yeo","ye","o","wa","wae","oe",,,"yo","u","weo","we","wi","yu",,,"eu","yi","i",,,,"/C","PS","!","-","|","Y=","W=",,"|","-","|","-","|","#","O",,,,,,,,,,,"{","|","}"]],ei={},ui=0;ui<ii.length;ui++)for(var oi=0;oi<ii[ui].length;oi++){var gi=ii[ui][oi];if("string"==typeof gi&&gi.length){var hi=String.fromCharCode((ui<<8)+oi);ei[hi]=gi}}ii=void 0;var si=function(a,n){var i=[][a];return!i||!o((function(){i.call(null,n||function(){throw 1},1)}))},yi=Wn.forEach,li=si("forEach")?function(a){return yi(this,a,arguments.length>1?arguments[1]:void 0)}:[].forEach;Qa({target:"Array",proto:!0,forced:[].forEach!=li},{forEach:li});var bi=ta.indexOf,ti=[].indexOf,wi=!!ti&&1/[1].indexOf(1,-0)<0,di=si("indexOf");Qa({target:"Array",proto:!0,forced:wi||di},{indexOf:function(a){return wi?ti.apply(this,arguments)||0:bi(this,a,arguments.length>1?arguments[1]:void 0)}});var ji=[].join,pi=d!=Object,ri=si("join",",");Qa({target:"Array",proto:!0,forced:pi||ri},{join:function(a){return ji.call(p(this),void 0===a?",":a)}});var Yi=function(a,n,i){var e=Y(n);e in a?H.f(a,e,l(0,i)):a[e]=i},mi=xa("species"),ci=[].slice,Zi=Math.max;Qa({target:"Array",proto:!0,forced:!An("slice")},{slice:function(a,n){var i,e,u,o=p(this),g=ha(o.length),h=la(a,g),s=la(void 0===n?g:n,g);if(Mn(o)&&("function"!=typeof(i=o.constructor)||i!==Array&&!Mn(i.prototype)?r(i)&&null===(i=i[mi])&&(i=void 0):i=void 0,i===Array||void 0===i))return ci.call(o,h,s);for(e=new(void 0===i?Array:i)(Zi(s-h,0)),u=0;h<s;h++,u++)h in o&&Yi(e,u,o[h]);return e.length=u,e}});var Li=[],Ji=Li.sort,Si=o((function(){Li.sort(void 0)})),Ci=o((function(){Li.sort(null)})),ki=si("sort");Qa({target:"Array",proto:!0,forced:Si||!Ci||ki},{sort:function(a){return void 0===a?Ji.call(Da(this)):Ji.call(Da(this),Dn(a))}});for(var Xi in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Hi=u[Xi],Qi=Hi&&Hi.prototype;if(Qi&&Qi.forEach!==li)try{Q(Qi,"forEach",li)}catch(a){Qi.forEach=li}}function Ti(a){return(a||"").replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function Di(a){var n=a.charCodeAt(0);return n>=19968&&n<=40959||n>=63744&&n<=64255}function Mi(a){switch(!0){case a instanceof Array:for(var n=[],i=0;i<a.length;i++)n[i]=Mi(a[i]);return n;case a instanceof RegExp:return new RegExp(a.source,a.flags);case a instanceof Object:var e={};for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(e[u]=Mi(a[u]));return e;default:return a}}function Gi(a,n){if(0===n.length)return!1;var i=Math.floor(n.length/2);switch(function(a,n){switch(!0){case a<n[0]:return-1;case a>n[1]:return 1}return 0}(a,n[i])){case-1:return Gi(a,n.slice(0,i));case 1:return Gi(a,n.slice(i+1))}return!0}function Bi(a,n,i,e){void 0===e&&(e=[]);for(var u=e.length?RegExp(e.map(Ti).join("|"),"g"):null,o=RegExp(n.source,n.flags.replace("g","")+"g"),g="",h=0;;){var s=o.exec(a),y="",l=0;if(!s){g+=a.substring(h,a.length);break}for(;;){var b=u?u.exec(s[0]):null;if(!b){y+=s[0].length>l?i:"";break}y+=b.index>l?i:"",y+=b[0],l=u.lastIndex}g+=a.substring(h,s.index)+y,h=o.lastIndex}return g}var Pi={ignore:[],replace:[],replaceAfter:[],trim:!1,unknown:""},Ni=function(){function a(a,n){void 0===a&&(a=Mi(Pi)),void 0===n&&(n=ei),this.confOptions=a,this.map=n}var n=a.prototype;return n.config=function(a,n){return void 0===n&&(n=!1),n&&(this.confOptions={}),a&&"object"==typeof a&&(this.confOptions=Mi(a)),this.confOptions},n.codeMapReplace=function(a,n,i){for(var e=0,u="",o=0;o<a.length;o++){var g=/[\uD800-\uDBFF]/.test(a[o])&&/[\uDC00-\uDFFF]/.test(a[o+1])?a[o]+a[o+1]:a[o],h=void 0;switch(!0){case Gi(e,n):case 2===g.length&&Gi(e+1,n):h=g;break;default:h=this.map[g]||i}Di(g)&&this.map[g]&&(!a[e-1]||Di(h)||/\s/.test(u[u.length-1])||(h=" "+h)),u+=h,e+=g.length,o+=g.length-1}return u},n.formatReplaceOption=function(a){if(a instanceof Array)return Mi(a);var n=[];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&n.push([i,a[i]]);return n},n.replaceString=function(a,n,i){void 0===i&&(i=[]);for(var e=Mi(n),u=a,o=0;o<e.length;o++){var g=e[o];switch(!0){case g[0]instanceof RegExp:g[0]=RegExp(g[0].source,g[0].flags.replace("g","")+"g");break;case"string"==typeof g[0]&&g[0].length>0:g[0]=RegExp(Ti(g[0]),"g");break;default:g[0]=/[^\s\S]/}u=Bi(u,g[0],g[1],i)}return u},n.setData=function(a,n){if(void 0===n&&(n=!1),n&&(this.map=Mi(ei)),a&&"object"==typeof a&&Object.keys(a).length)for(var i in this.map=Mi(this.map),a)Object.prototype.hasOwnProperty.call(a,i)&&i.length<3&&i<="􏿿"&&(this.map[i]=a[i]);return this.map},n.transliterate=function(a,n){n="object"==typeof n?n:{};var i=Mi(Object.assign(Object.assign({},this.options),n)),e="string"==typeof a?a:String(a),u=this.formatReplaceOption(i.replace);u.length&&(e=this.replaceString(e,u,i.ignore));var o=[];i.ignore&&i.ignore.length>0&&(o=function(a,n){for(var i=this,e=[],u=0;u<n.length;u++)for(var o=n[u],g=-1;(g=a.indexOf(o,g+1))>-1;)e.push([g,g+o.length-1]);var h,s=e.sort(function(a,n){return Hn(this,i),a[0]-n[0]||a[1]-n[1]}.bind(this));return e=[],s.forEach(function(a){return Hn(this,i),!h||a[0]>h[1]+1?e.push(h=a):a[1]>h[1]&&(h[1]=a[1])}.bind(this)),e}(a,i.ignore)),e=this.codeMapReplace(e,o,i.unknown),i.trim&&(e=e.trim());var g=this.formatReplaceOption(i.replaceAfter);return g.length&&(e=this.replaceString(e,g)),e},Xn(a,[{key:"options",get:function(){return Mi(Object.assign(Object.assign({},Pi),this.confOptions))}}]),a}(),Wi=Object.assign(Object.assign({},Mi(Pi)),{allowedChars:"a-zA-Z0-9-_.~",lowercase:!0,separator:"-",uppercase:!1}),Fi=function(a){var n,i;function e(){return a.apply(this,arguments)||this}i=a,(n=e).prototype=Object.create(i.prototype),n.prototype.constructor=n,n.__proto__=i;var u=e.prototype;return u.config=function(a,n){return void 0===n&&(n=!1),n&&(this.confOptions={}),a&&"object"==typeof a&&(this.confOptions=Mi(a)),this.confOptions},u.slugify=function(a,n){n="object"==typeof n?n:{};var i=Mi(Object.assign(Object.assign({},this.options),n)),e=Ti(i.separator),u=this.transliterate(a,i);return u=(u=Bi(u,RegExp("[^"+i.allowedChars+"]+","g"),i.separator,i.ignore)).replace(RegExp("^"+e+"+|"+e+"$","g"),""),i.lowercase&&(u=u.toLowerCase()),i.uppercase&&(u=u.toUpperCase()),u},Xn(e,[{key:"options",get:function(){return Mi(Object.assign(Object.assign({},Wi),this.confOptions))}}]),e}(Ni),Ki=new Ni,fi=Ki.transliterate.bind(Ki);fi.config=Ki.config.bind(Ki),fi.setData=Ki.setData.bind(Ki);var xi=new Fi,Ri=xi.slugify.bind(xi);Ri.config=xi.config.bind(xi),Ri.setData=xi.setData.bind(xi),a.slugify=Ri,a.transl=fi,a.transliterate=fi,Object.defineProperty(a,"__esModule",{value:!0})}));
//# sourceMappingURL=bundle.umd.min.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./assets/img/cart2-sm.png":
/*!*********************************!*\
  !*** ./assets/img/cart2-sm.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/cart2-sm.png");

/***/ }),

/***/ "./assets/img/oak-sm.png":
/*!*******************************!*\
  !*** ./assets/img/oak-sm.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/oak-sm.png");

/***/ }),

/***/ "./assets/img/opera_2019-12-04_21-59-08.png":
/*!**************************************************!*\
  !*** ./assets/img/opera_2019-12-04_21-59-08.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/opera_2019-12-04_21-59-08.png");

/***/ }),

/***/ "./assets/img/products/buzina.jpg":
/*!****************************************!*\
  !*** ./assets/img/products/buzina.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/buzina.jpg");

/***/ }),

/***/ "./assets/img/products/cashtany.jpg":
/*!******************************************!*\
  !*** ./assets/img/products/cashtany.jpg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/cashtany.jpg");

/***/ }),

/***/ "./assets/img/products/chaga.jpg":
/*!***************************************!*\
  !*** ./assets/img/products/chaga.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/chaga.jpg");

/***/ }),

/***/ "./assets/img/products/cherjomuha.jpg":
/*!********************************************!*\
  !*** ./assets/img/products/cherjomuha.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/cherjomuha.jpg");

/***/ }),

/***/ "./assets/img/products/chistotel.jpg":
/*!*******************************************!*\
  !*** ./assets/img/products/chistotel.jpg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/chistotel.jpg");

/***/ }),

/***/ "./assets/img/products/cones-of-alder.jpg":
/*!************************************************!*\
  !*** ./assets/img/products/cones-of-alder.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/cones-of-alder.jpg");

/***/ }),

/***/ "./assets/img/products/dushitsa.jpg":
/*!******************************************!*\
  !*** ./assets/img/products/dushitsa.jpg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/dushitsa.jpg");

/***/ }),

/***/ "./assets/img/products/fir-cones.jpg":
/*!*******************************************!*\
  !*** ./assets/img/products/fir-cones.jpg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/fir-cones.jpg");

/***/ }),

/***/ "./assets/img/products/hop-cones.jpg":
/*!*******************************************!*\
  !*** ./assets/img/products/hop-cones.jpg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/hop-cones.jpg");

/***/ }),

/***/ "./assets/img/products/ivan.jpg":
/*!**************************************!*\
  !*** ./assets/img/products/ivan.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/ivan.jpg");

/***/ }),

/***/ "./assets/img/products/lavanda.jpg":
/*!*****************************************!*\
  !*** ./assets/img/products/lavanda.jpg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/lavanda.jpg");

/***/ }),

/***/ "./assets/img/products/melissa.jpg":
/*!*****************************************!*\
  !*** ./assets/img/products/melissa.jpg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/melissa.jpg");

/***/ }),

/***/ "./assets/img/products/mint.jpg":
/*!**************************************!*\
  !*** ./assets/img/products/mint.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/mint.jpg");

/***/ }),

/***/ "./assets/img/products/mozhzhevel.jpg":
/*!********************************************!*\
  !*** ./assets/img/products/mozhzhevel.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/mozhzhevel.jpg");

/***/ }),

/***/ "./assets/img/products/pine-cones.jpg":
/*!********************************************!*\
  !*** ./assets/img/products/pine-cones.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/pine-cones.jpg");

/***/ }),

/***/ "./assets/img/products/pizhma.jpg":
/*!****************************************!*\
  !*** ./assets/img/products/pizhma.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/pizhma.jpg");

/***/ }),

/***/ "./assets/img/products/polyn.jpg":
/*!***************************************!*\
  !*** ./assets/img/products/polyn.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/polyn.jpg");

/***/ }),

/***/ "./assets/img/products/sfagnum.jpg":
/*!*****************************************!*\
  !*** ./assets/img/products/sfagnum.jpg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/sfagnum.jpg");

/***/ }),

/***/ "./assets/img/products/shalfej.jpg":
/*!*****************************************!*\
  !*** ./assets/img/products/shalfej.jpg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/shalfej.jpg");

/***/ }),

/***/ "./assets/img/products/strugka-elka.jpg":
/*!**********************************************!*\
  !*** ./assets/img/products/strugka-elka.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/strugka-elka.jpg");

/***/ }),

/***/ "./assets/img/products/strugka-lipa.jpg":
/*!**********************************************!*\
  !*** ./assets/img/products/strugka-lipa.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/strugka-lipa.jpg");

/***/ }),

/***/ "./assets/img/products/strugka-olha.jpg":
/*!**********************************************!*\
  !*** ./assets/img/products/strugka-olha.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/strugka-olha.jpg");

/***/ }),

/***/ "./assets/img/products/strugka-osina.jpg":
/*!***********************************************!*\
  !*** ./assets/img/products/strugka-osina.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/strugka-osina.jpg");

/***/ }),

/***/ "./assets/img/products/strugka-sosna.jpg":
/*!***********************************************!*\
  !*** ./assets/img/products/strugka-sosna.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/strugka-sosna.jpg");

/***/ }),

/***/ "./assets/img/products/torc-akacia.jpg":
/*!*********************************************!*\
  !*** ./assets/img/products/torc-akacia.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/torc-akacia.jpg");

/***/ }),

/***/ "./assets/img/products/torc-bereza.jpg":
/*!*********************************************!*\
  !*** ./assets/img/products/torc-bereza.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/torc-bereza.jpg");

/***/ }),

/***/ "./assets/img/products/torc-dub.jpg":
/*!******************************************!*\
  !*** ./assets/img/products/torc-dub.jpg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/torc-dub.jpg");

/***/ }),

/***/ "./assets/img/products/torc-viaz.jpg":
/*!*******************************************!*\
  !*** ./assets/img/products/torc-viaz.jpg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/torc-viaz.jpg");

/***/ }),

/***/ "./assets/img/products/torc-yasen.jpg":
/*!********************************************!*\
  !*** ./assets/img/products/torc-yasen.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/torc-yasen.jpg");

/***/ }),

/***/ "./assets/img/products/tysiachelistnik.jpg":
/*!*************************************************!*\
  !*** ./assets/img/products/tysiachelistnik.jpg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/tysiachelistnik.jpg");

/***/ }),

/***/ "./assets/img/products/yagel.jpg":
/*!***************************************!*\
  !*** ./assets/img/products/yagel.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/yagel.jpg");

/***/ }),

/***/ "./assets/img/products/zhyoludi.jpg":
/*!******************************************!*\
  !*** ./assets/img/products/zhyoludi.jpg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/zhyoludi.jpg");

/***/ }),

/***/ "./assets/img/products/zveroboj.jpg":
/*!******************************************!*\
  !*** ./assets/img/products/zveroboj.jpg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/zveroboj.jpg");

/***/ }),

/***/ "./assets/img/sunlight-forest-nature.jpg":
/*!***********************************************!*\
  !*** ./assets/img/sunlight-forest-nature.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/sunlight-forest-nature.jpg");

/***/ }),

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! bootstrap */ "../node_modules/bootstrap/dist/js/bootstrap.js");

__webpack_require__(/*! @css/style.scss */ "./css/style.scss");

__webpack_require__(/*! @assets/img/oak-sm.png */ "./assets/img/oak-sm.png");

__webpack_require__(/*! @assets/img/cart2-sm.png */ "./assets/img/cart2-sm.png");

__webpack_require__(/*! @assets/img/sunlight-forest-nature.jpg */ "./assets/img/sunlight-forest-nature.jpg");

__webpack_require__(/*! @assets/img/opera_2019-12-04_21-59-08.png */ "./assets/img/opera_2019-12-04_21-59-08.png");

__webpack_require__(/*! @assets/img/products/cones-of-alder.jpg */ "./assets/img/products/cones-of-alder.jpg");

__webpack_require__(/*! @assets/img/products/fir-cones.jpg */ "./assets/img/products/fir-cones.jpg");

__webpack_require__(/*! @assets/img/products/pine-cones.jpg */ "./assets/img/products/pine-cones.jpg");

__webpack_require__(/*! @assets/img/products/hop-cones.jpg */ "./assets/img/products/hop-cones.jpg");

__webpack_require__(/*! @assets/img/products/zhyoludi.jpg */ "./assets/img/products/zhyoludi.jpg");

__webpack_require__(/*! @assets/img/products/cashtany.jpg */ "./assets/img/products/cashtany.jpg");

__webpack_require__(/*! @assets/img/products/cherjomuha.jpg */ "./assets/img/products/cherjomuha.jpg");

__webpack_require__(/*! @assets/img/products/buzina.jpg */ "./assets/img/products/buzina.jpg");

__webpack_require__(/*! @assets/img/products/mozhzhevel.jpg */ "./assets/img/products/mozhzhevel.jpg");

__webpack_require__(/*! @assets/img/products/shalfej.jpg */ "./assets/img/products/shalfej.jpg");

__webpack_require__(/*! @assets/img/products/mint.jpg */ "./assets/img/products/mint.jpg");

__webpack_require__(/*! @assets/img/products/dushitsa.jpg */ "./assets/img/products/dushitsa.jpg");

__webpack_require__(/*! @assets/img/products/melissa.jpg */ "./assets/img/products/melissa.jpg");

__webpack_require__(/*! @assets/img/products/chistotel.jpg */ "./assets/img/products/chistotel.jpg");

__webpack_require__(/*! @assets/img/products/lavanda.jpg */ "./assets/img/products/lavanda.jpg");

__webpack_require__(/*! @assets/img/products/zveroboj.jpg */ "./assets/img/products/zveroboj.jpg");

__webpack_require__(/*! @assets/img/products/polyn.jpg */ "./assets/img/products/polyn.jpg");

__webpack_require__(/*! @assets/img/products/tysiachelistnik.jpg */ "./assets/img/products/tysiachelistnik.jpg");

__webpack_require__(/*! @assets/img/products/pizhma.jpg */ "./assets/img/products/pizhma.jpg");

__webpack_require__(/*! @assets/img/products/ivan.jpg */ "./assets/img/products/ivan.jpg");

__webpack_require__(/*! @assets/img/products/strugka-lipa.jpg */ "./assets/img/products/strugka-lipa.jpg");

__webpack_require__(/*! @assets/img/products/strugka-osina.jpg */ "./assets/img/products/strugka-osina.jpg");

__webpack_require__(/*! @assets/img/products/strugka-elka.jpg */ "./assets/img/products/strugka-elka.jpg");

__webpack_require__(/*! @assets/img/products/strugka-olha.jpg */ "./assets/img/products/strugka-olha.jpg");

__webpack_require__(/*! @assets/img/products/strugka-sosna.jpg */ "./assets/img/products/strugka-sosna.jpg");

__webpack_require__(/*! @assets/img/products/torc-dub.jpg */ "./assets/img/products/torc-dub.jpg");

__webpack_require__(/*! @assets/img/products/torc-yasen.jpg */ "./assets/img/products/torc-yasen.jpg");

__webpack_require__(/*! @assets/img/products/torc-bereza.jpg */ "./assets/img/products/torc-bereza.jpg");

__webpack_require__(/*! @assets/img/products/torc-akacia.jpg */ "./assets/img/products/torc-akacia.jpg");

__webpack_require__(/*! @assets/img/products/torc-viaz.jpg */ "./assets/img/products/torc-viaz.jpg");

__webpack_require__(/*! @assets/img/products/sfagnum.jpg */ "./assets/img/products/sfagnum.jpg");

__webpack_require__(/*! @assets/img/products/yagel.jpg */ "./assets/img/products/yagel.jpg");

__webpack_require__(/*! @assets/img/products/chaga.jpg */ "./assets/img/products/chaga.jpg");

var _model = __webpack_require__(/*! @/js/model */ "./js/model.js");

var _ui = __webpack_require__(/*! @/js/ui */ "./js/ui.js");

var _config = __webpack_require__(/*! @/js/config */ "./js/config.js");

var _router = __webpack_require__(/*! @/js/router */ "./js/router.js");

var _controller = __webpack_require__(/*! @/js/controller */ "./js/controller.js");

__webpack_require__(/*! transliteration */ "../node_modules/transliteration/dist/browser/bundle.umd.min.js");

// MVC model

// import JS

// import 'bootstrap/dist/css/bootstrap.min.css';
document.addEventListener('DOMContentLoaded', function () {

  var router = new _router.Router();
  var model = new _model.Model(router);
  var ui = new _ui.Ui(model, router);
  var controller = new _controller.Controller(model, ui, router);
});

// /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/

// import jquery-ui library
// import "../node_modules/jquery-ui/themes/base/all.css";
// import "../node_modules/jquery-ui/themes/base/theme.css";
// import 'jquery-ui/ui/widgets/dialog';
// import 'jquery-ui/ui/widgets/button';
// import 'jquery-ui/ui/widgets/tabs';
//
// import '@popperjs/core';
// import { transliterate as tr, slugify } from 'transliteration';

// import images
// bootstrap & css

/***/ }),

/***/ "./js/config.js":
/*!**********************!*\
  !*** ./js/config.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CONFIG = exports.CONFIG = {
  api: 'https://my-json-server.typicode.com/SergeySalimov/FE2-project',
  dNone: 'd-none',
  active: 'active',
  elements: {
    productsPlace: document.getElementById('product-place'),
    homePage: document.getElementById('home'),
    errorPage: document.getElementById('error-page'),
    howToBuyPage: document.getElementById('how-to-buy'),
    catalogPage: document.getElementById('catalog'),
    deliveryPage: document.getElementById('delivery'),
    paymentPage: document.getElementById('payment'),
    contactPage: document.getElementById('contact'),
    navBtnCatalog: document.querySelector('.btn-nav-catalog'),
    navBtnHowToBuy: document.querySelector('.btn-nav-how-to-buy'),
    navBtnDelivery: document.querySelector('.btn-nav-delivery'),
    navBtnPayment: document.querySelector('.btn-nav-payment'),
    navBtnContact: document.querySelector('.btn-nav-contact'),
    nav2: document.getElementById('nav2'),
    nav2Home: document.getElementById('nav2-home'),
    errorBack: document.getElementById('error-to-home'),
    catBtn: document.getElementById('catalog-navigation'),
    catBtnHome: document.getElementById('btn-catalog')
  }

};

/***/ }),

/***/ "./js/controller.js":
/*!**************************!*\
  !*** ./js/controller.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = exports.Controller = function () {
  function Controller(model, ui, router) {
    var _this = this;

    _classCallCheck(this, Controller);

    this._model = model;
    this._ui = ui;
    this.router = router;
    this.initRouter();

    this._ui.on('navClick', function (url) {
      return _this.onNavigationClick(url);
    });
    this._ui.on('catClick', function (url) {
      return _this.onCatalogClick(url);
    });
    // this._model.on('productsLoaded', () => this.initCatalogRoutes())
  }

  _createClass(Controller, [{
    key: 'onCatalogClick',
    value: function onCatalogClick(url) {
      var newCatalogState = url;
      if (newCatalogState !== this._model.catalogState) {
        this._model.catalogState = newCatalogState;
        window.history.pushState(null, null, newCatalogState);
        this.router.render('catalog');
      }
    }
  }, {
    key: 'onNavigationClick',
    value: function onNavigationClick(url) {
      // console.log(url);
      var newState = url.split('/')[1];
      if (newState !== this._model.current) {
        this._model.current = newState;
        if (newState === 'catalog') {
          window.history.pushState(null, null, this._model.catalogState);
        } else {
          window.history.pushState(null, null, url);
        }
        this.router.render(newState);
      }
    }
  }, {
    key: 'initRouter',
    value: function initRouter() {
      console.log('Router initialization');
      this.router.addRoute('', this._ui.emit.bind(this._ui, 'pageChange', ''));
      this.router.addRoute('404', this._ui.emit.bind(this._ui, 'pageChange', '404'));
      this.router.addRoute('catalog', this._ui.emit.bind(this._ui, 'pageChange', 'catalog'));
      this.router.addRoute('how-to-buy', this._ui.emit.bind(this._ui, 'pageChange', 'how-to-buy'));
      this.router.addRoute('delivery', this._ui.emit.bind(this._ui, 'pageChange', 'delivery'));
      this.router.addRoute('payment', this._ui.emit.bind(this._ui, 'pageChange', 'payment'));
      this.router.addRoute('contact', this._ui.emit.bind(this._ui, 'pageChange', 'contact'));
    }
  }, {
    key: 'initCatalogRoutes',
    value: function initCatalogRoutes() {
      console.log('Catalog router initialization');
      var catalogRoutes = this._model.catalogRoutes;
      for (var catPrd in catalogRoutes) {
        if (catPrd !== '') {
          this.router.addRoute(catPrd, this._ui.emit.bind(this._ui, 'catalogChange', catalogRoutes[catPrd]));
        }
      }
    }
  }]);

  return Controller;
}();

/***/ }),

/***/ "./js/event-emitter.js":
/*!*****************************!*\
  !*** ./js/event-emitter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = exports.EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this._events = {};
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(event, listener) {
      (this._events[event] || (this._events[event] = [])).push(listener);
    }
  }, {
    key: "emit",
    value: function emit(event, arg1, arg2) {
      (this._events[event] || []).forEach(function (listener) {
        return listener(arg1, arg2);
      });
    }
  }]);

  return EventEmitter;
}();

/***/ }),

/***/ "./js/model.js":
/*!*********************!*\
  !*** ./js/model.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Model = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(/*! @/js/config */ "./js/config.js");

var _eventEmitter = __webpack_require__(/*! @/js/event-emitter */ "./js/event-emitter.js");

var _transliteration = __webpack_require__(/*! transliteration */ "../node_modules/transliteration/dist/browser/bundle.umd.min.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Model = exports.Model = function (_EventEmitter) {
  _inherits(Model, _EventEmitter);

  function Model(router) {
    _classCallCheck(this, Model);

    var _this = _possibleConstructorReturn(this, (Model.__proto__ || Object.getPrototypeOf(Model)).call(this));

    _this.router = router;
    _this.allProducts = [];
    _this.productsToDisplay = [];
    _this.init();
    _this.current = decodeURI(window.location.pathname).split('/')[1];
    _this.catalogState = '/catalog';
    _this.catalogRoutes = {};
    _this.catalogNames = {};
    return _this;
  }

  _createClass(Model, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      console.log('init');
      fetch(_config.CONFIG.api + "/products", {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        _this2.allProducts = data;
        _this2.productsToDisplay = _this2.initProducts(_this2.allProducts);
        _this2.catalogRoutes['/catalog'] = _this2.productsToDisplay;
        _this2.catalogNames[''] = '/catalog';
        _this2.addCatalogRoutes(_this2.allProducts);
        _this2.addCatalogNames(_this2.allProducts);
        _this2.emit('productsLoaded', _this2.productsToDisplay);
        // console.log(this.catalogRoutes);
        // console.log(this.catalogNames);
        _this2.initTooltipForAuth();
        var curPage = decodeURI(window.location.pathname).split('/')[1];
        _this2.router.render(curPage);
        _this2.current = curPage;

        // $('#exampleModal').modal();
      });
    }
  }, {
    key: "initTooltipForAuth",
    value: function initTooltipForAuth() {
      var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (on) {
        $(function () {
          $('[data-toggle="tooltip"]').tooltip();
        });
      } else {
        $(function () {
          $('[data-toggle="tooltip"]').tooltip('disable');
        });
      }
    }
  }, {
    key: "initProducts",
    value: function initProducts(data) {
      var productsAccumulate = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          if (item.subitems) {
            productsAccumulate = this.initProducts(item.content);
          } else {
            item.content.forEach(function (obj) {
              return productsAccumulate.push(obj);
            });
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

      return productsAccumulate;
    }
  }, {
    key: "addCatalogRoutes",
    value: function addCatalogRoutes(data) {
      var addedRoutes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;

          var routes = addedRoutes;
          if (item.subitems) {
            routes = routes + "/" + (0, _transliteration.slugify)(item.name);
            this.catalogRoutes["/catalog" + routes] = this.initProducts(item.content);

            this.addCatalogRoutes(item.content, routes);
          } else {

            this.catalogRoutes["/catalog" + routes + "/" + (0, _transliteration.slugify)(item.name)] = item.content;
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
    key: "addCatalogNames",
    value: function addCatalogNames(data) {
      var addedRoutes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var item = _step3.value;

          var routes = addedRoutes;
          if (item.subitems) {
            routes = routes + "/" + (0, _transliteration.slugify)(item.name);
            this.catalogNames[item.name] = "/catalog" + routes;
            this.addCatalogNames(item.content, routes);
          } else {
            this.catalogNames[item.name] = "/catalog" + routes + "/" + (0, _transliteration.slugify)(item.name);
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
  }, {
    key: "addCatalogBreadcrum",
    value: function addCatalogBreadcrum(data) {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = data[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var item = _step4.value;

          var routes = addedRoutes;
          if (item.subitems) {
            routes = routes + "/" + (0, _transliteration.slugify)(item.name);
            this.catalogNames[item.name] = "/catalog" + routes;
            this.addCatalogNames(item.content, routes);
          } else {
            this.catalogNames[item.name] = "/catalog" + routes + "/" + (0, _transliteration.slugify)(item.name);
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }]);

  return Model;
}(_eventEmitter.EventEmitter);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./js/router.js":
/*!**********************!*\
  !*** ./js/router.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = exports.Router = function () {
  function Router() {
    var _this = this;

    _classCallCheck(this, Router);

    this.routes = {
      '404': function _() {
        return console.log('Nothing found');
      }
    };

    window.addEventListener('popstate', function () {
      var temp = decodeURI(window.location.pathname).split('/')[1];
      _this.render(temp);
    });
  }

  _createClass(Router, [{
    key: 'addRoute',
    value: function addRoute(route, action) {
      this.routes[route] = action;
    }
  }, {
    key: 'render',
    value: function render(temp) {
      // const temp = url.split('/')[1];
      this.routes[temp] ? this.routes[temp]() : this.routes['404']();
    }
  }]);

  return Router;
}();

/***/ }),

/***/ "./js/template.handlebars":
/*!********************************!*\
  !*** ./js/template.handlebars ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "../node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"col-sm-6 col-md-4 col-xl-3 my-2\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"uniqueId") || (depth0 != null ? lookupProperty(depth0,"uniqueId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uniqueId","hash":{},"data":data,"loc":{"start":{"line":2,"column":56},"end":{"line":2,"column":68}}}) : helper)))
    + "\">\r\n    <div class=\"card\">\r\n      <!--              <i class=\"icon-heart like\"></i>-->\r\n      <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"img") || (depth0 != null ? lookupProperty(depth0,"img") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data,"loc":{"start":{"line":5,"column":16},"end":{"line":5,"column":23}}}) : helper)))
    + "\" class=\"card-img-top\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"header") || (depth0 != null ? lookupProperty(depth0,"header") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data,"loc":{"start":{"line":5,"column":51},"end":{"line":5,"column":61}}}) : helper)))
    + "\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"header") || (depth0 != null ? lookupProperty(depth0,"header") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data,"loc":{"start":{"line":7,"column":31},"end":{"line":7,"column":41}}}) : helper)))
    + "</h5>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button type=\"button\"\r\n                class=\"btn btn-sm btn-outline-success\"\r\n                id=\"product-btn-"
    + alias4(((helper = (helper = lookupProperty(helpers,"uniqueId") || (depth0 != null ? lookupProperty(depth0,"uniqueId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uniqueId","hash":{},"data":data,"loc":{"start":{"line":12,"column":32},"end":{"line":12,"column":44}}}) : helper)))
    + "\"\r\n                data-toggle=\"tooltip\"\r\n                data-placement=\"top\"\r\n                title=\"Необходима регистрация\">\r\n          В корзину\r\n          <i class=\"icon-shopping-basket\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":22,"column":9}}})) != null ? stack1 : "");
},"useData":true});

/***/ }),

/***/ "./js/ui.js":
/*!******************!*\
  !*** ./js/ui.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ui = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(/*! @/js/config */ "./js/config.js");

var _eventEmitter = __webpack_require__(/*! @/js/event-emitter */ "./js/event-emitter.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var compiledTemplate = __webpack_require__(/*! ./template.handlebars */ "./js/template.handlebars");

var Ui = exports.Ui = function (_EventEmitter) {
  _inherits(Ui, _EventEmitter);

  function Ui(model, router) {
    _classCallCheck(this, Ui);

    var _this = _possibleConstructorReturn(this, (Ui.__proto__ || Object.getPrototypeOf(Ui)).call(this));

    _this._model = model;
    _this.router = router;
    _this.templateScript = compiledTemplate;
    _this.initNavBtn();
    _this.initCatBtn();
    // display routes functions
    _this.renderPath = {
      '': _this.displayHomePage.bind(_this),
      '404': _this.displayErrorPage.bind(_this),
      'catalog': _this.displayCatalogPage.bind(_this),
      'how-to-buy': _this.displayHowToBuyPage.bind(_this),
      'delivery': _this.displayDeliveryPage.bind(_this),
      'payment': _this.displayPaymentPage.bind(_this),
      'contact': _this.displayContactPage.bind(_this)
    };

    _this._model.on('productsLoaded', function (data) {
      return _this.renderProductsToDisplay(data);
    });
    _this.on('pageChange', function (page) {
      _this.hideAll();
      $(_config.CONFIG.elements.nav2).children().slice(1).remove();
      _this.renderPath[page]();
    });

    return _this;
  }

  _createClass(Ui, [{
    key: "isRouteOfCatalog",
    value: function isRouteOfCatalog(route) {
      return Object.keys(this._model.catalogRoutes).includes(route);
    }

    // output block

  }, {
    key: "displayCatalogPage",
    value: function displayCatalogPage() {
      var productToDisplay = window.location.pathname.trim();
      if (this.isRouteOfCatalog(productToDisplay)) {
        this.clearActiveCatalogNavigation();
        if (productToDisplay === '/catalog') {
          _config.CONFIG.elements.catBtnHome.classList.add(_config.CONFIG.active);
        } else {
          console.log('find of name');
          var name = '';
          for (var key in this._model.catalogNames) {
            if (this._model.catalogNames[key] === productToDisplay) name = key;
          }
          _config.CONFIG.elements.catBtn.querySelectorAll('.list-group-item').forEach(function (e) {
            if (e.innerText === name) e.classList.add(_config.CONFIG.active);
          });
        }
        // rerender Products
        this.renderProductsToDisplay(this._model.catalogRoutes[productToDisplay]);
        _config.CONFIG.elements.nav2Home.after(this.createHtmlForBreadcrump('Каталог'));
        _config.CONFIG.elements.catalogPage.classList.remove(_config.CONFIG.dNone);
        _config.CONFIG.elements.navBtnCatalog.classList.add(_config.CONFIG.active);
      } else {
        this.render404();
      }
    }
  }, {
    key: "displayHomePage",
    value: function displayHomePage() {
      _config.CONFIG.elements.homePage.classList.remove(_config.CONFIG.dNone);
    }
  }, {
    key: "displayErrorPage",
    value: function displayErrorPage() {
      _config.CONFIG.elements.nav2Home.after(this.createHtmlForBreadcrump('Указанная страница не найдена'));
      _config.CONFIG.elements.errorPage.classList.remove(_config.CONFIG.dNone);
    }
  }, {
    key: "displayHowToBuyPage",
    value: function displayHowToBuyPage() {
      _config.CONFIG.elements.nav2Home.after(this.createHtmlForBreadcrump('Как купить'));
      _config.CONFIG.elements.howToBuyPage.classList.remove(_config.CONFIG.dNone);
      _config.CONFIG.elements.navBtnHowToBuy.classList.add(_config.CONFIG.active);
    }
  }, {
    key: "displayDeliveryPage",
    value: function displayDeliveryPage() {
      _config.CONFIG.elements.nav2Home.after(this.createHtmlForBreadcrump('Доставка'));
      _config.CONFIG.elements.deliveryPage.classList.remove(_config.CONFIG.dNone);
      _config.CONFIG.elements.navBtnDelivery.classList.add(_config.CONFIG.active);
    }
  }, {
    key: "displayPaymentPage",
    value: function displayPaymentPage() {
      _config.CONFIG.elements.nav2Home.after(this.createHtmlForBreadcrump('Оплата'));
      _config.CONFIG.elements.paymentPage.classList.remove(_config.CONFIG.dNone);
      _config.CONFIG.elements.navBtnPayment.classList.add(_config.CONFIG.active);
    }
  }, {
    key: "displayContactPage",
    value: function displayContactPage() {
      _config.CONFIG.elements.nav2Home.after(this.createHtmlForBreadcrump('Контакты'));
      _config.CONFIG.elements.contactPage.classList.remove(_config.CONFIG.dNone);
      _config.CONFIG.elements.navBtnContact.classList.add(_config.CONFIG.active);
    }
  }, {
    key: "createHtmlForBreadcrump",
    value: function createHtmlForBreadcrump(description) {
      var active = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var li = document.createElement('li');
      li.className = 'breadcrumb-item';
      if (active) {
        li.classList.add(_config.CONFIG.active);
        li.innerText = description;
      } else {
        li.innerHTML = "<a href=\"#\">" + description + "</a>";
      }
      return li;
    }
  }, {
    key: "hideAll",
    value: function hideAll() {
      _config.CONFIG.elements.homePage.classList.add(_config.CONFIG.dNone);
      _config.CONFIG.elements.errorPage.classList.add(_config.CONFIG.dNone);
      _config.CONFIG.elements.catalogPage.classList.add(_config.CONFIG.dNone);
      _config.CONFIG.elements.howToBuyPage.classList.add(_config.CONFIG.dNone);
      _config.CONFIG.elements.deliveryPage.classList.add(_config.CONFIG.dNone);
      _config.CONFIG.elements.paymentPage.classList.add(_config.CONFIG.dNone);
      _config.CONFIG.elements.contactPage.classList.add(_config.CONFIG.dNone);
      _config.CONFIG.elements.navBtnCatalog.classList.remove(_config.CONFIG.active);
      _config.CONFIG.elements.navBtnHowToBuy.classList.remove(_config.CONFIG.active);
      _config.CONFIG.elements.navBtnDelivery.classList.remove(_config.CONFIG.active);
      _config.CONFIG.elements.navBtnPayment.classList.remove(_config.CONFIG.active);
      _config.CONFIG.elements.navBtnContact.classList.remove(_config.CONFIG.active);
    }
  }, {
    key: "render404",
    value: function render404() {
      window.history.pushState(null, null, '/404');
      this.router.render(decodeURI(window.location.pathname));
    }
    // initialization block

  }, {
    key: "initCatBtn",
    value: function initCatBtn() {
      var _this2 = this;

      _config.CONFIG.elements.catBtnHome.addEventListener('click', function (event) {
        _this2.emit('catClick', '/catalog');
      });
      _config.CONFIG.elements.catBtn.addEventListener('click', function (event) {
        if (event.target !== _config.CONFIG.elements.catBtn && event.target !== _config.CONFIG.elements.catBtnHome) {
          _this2.emit('catClick', _this2._model.catalogNames[event.target.innerText]);
        }
      });
    }
  }, {
    key: "clearActiveCatalogNavigation",
    value: function clearActiveCatalogNavigation() {
      _config.CONFIG.elements.catBtn.querySelectorAll('.active').forEach(function (el) {
        return el.classList.remove('active');
      });
    }
  }, {
    key: "initNavBtn",
    value: function initNavBtn() {
      var _this3 = this;

      _config.CONFIG.elements.navBtnCatalog.addEventListener('click', function (event) {
        event.preventDefault();
        _this3.emit('navClick', '/catalog');
      });
      _config.CONFIG.elements.navBtnHowToBuy.addEventListener('click', function (event) {
        event.preventDefault();
        _this3.emit('navClick', '/how-to-buy');
      });
      _config.CONFIG.elements.navBtnDelivery.addEventListener('click', function (event) {
        event.preventDefault();
        _this3.emit('navClick', '/delivery');
      });
      _config.CONFIG.elements.navBtnPayment.addEventListener('click', function (event) {
        event.preventDefault();
        _this3.emit('navClick', '/payment');
      });
      _config.CONFIG.elements.navBtnContact.addEventListener('click', function (event) {
        event.preventDefault();
        _this3.emit('navClick', '/contact');
      });
      _config.CONFIG.elements.nav2Home.addEventListener('click', function (event) {
        event.preventDefault();
        _this3.emit('navClick', '/');
      });
      _config.CONFIG.elements.errorBack.addEventListener('click', function (event) {
        event.preventDefault();
        _this3.emit('navClick', '/');
      });
    }
    // rendering templates

  }, {
    key: "renderProductsToDisplay",
    value: function renderProductsToDisplay(data) {
      // compile with handlebars
      _config.CONFIG.elements.productsPlace.innerHTML = this.templateScript(data);
    }
  }]);

  return Ui;
}(_eventEmitter.EventEmitter);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ })

/******/ });