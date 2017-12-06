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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 5:
/***/ (function(module, exports) {


// Get all of the images that are marked up to lazy load
var images = document.querySelectorAll('img[srcset]');
var config = {
    // If the image gets within 50px in the Y axis, start the download.
    rootMargin: '50px 0px',
    threshold: 0.01
};

// The observer for the images on the page
var observer = new IntersectionObserver(onIntersection, config);

images.forEach(function (image) {
    observer.observe(image);
});

function onIntersection(entries) {
    // Loop through the entries
    entries.forEach(function (entry) {
        // Are we in viewport?
        if (entry.intersectionRatio > 0) {

            // Stop watching and load the image
            observer.unobserve(entry.target);
            srcSetSize(entry.target);
        }
    });
}

function srcSetSize(image) {
    image.setAttribute('sizes', Math.ceil(image.getBoundingClientRect().width) + 'px');
    image.classList.add('js-sized');
}

// On resize: only loaded
var resizeTimer = void 0;

window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(function () {
        var sizedImages = document.querySelectorAll('.js-sized');
        sizedImages.forEach(function (image) {
            srcSetSize(image);
        });
    }, 250);
});

/***/ })

/******/ });