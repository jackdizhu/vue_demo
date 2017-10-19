webpackJsonpjs_index10__name__js([0],{

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index3_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index3_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index3_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b59afd6_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_index3_vue__ = __webpack_require__(62);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(57)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1b59afd6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index3_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b59afd6_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_index3_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "public\\src\\pages\\index\\index3.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index3.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b59afd6", Component.options)
  } else {
    hotAPI.reload("data-v-1b59afd6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("722bf98b", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b59afd6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index3.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b59afd6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index3.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.login-msg[data-v-1b59afd6] {\n  padding: 1rem .2rem;\n  text-align: center;\n}\n.msg[data-v-1b59afd6] {\n  padding: 1rem .2rem;\n  text-align: center;\n  font-size: .6rem;\n  color: red;\n}\n.indexBtn[data-v-1b59afd6] {\n  padding: .2rem;\n  color: #fff;\n  background: url(" + __webpack_require__(59) + ") center center no-repeat;\n}\n.con[data-v-1b59afd6] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 1.4rem;\n  bottom: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/logo.e1ea82cb.png";

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var _vuex = __webpack_require__(7);

var _index_bg = __webpack_require__(61);

var _index_bg2 = _interopRequireDefault(_index_bg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	data: function data() {
		return {
			logo: _index_bg2.default
		};
	},

	computed: _extends({}, (0, _vuex.mapState)(['user']))
};

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/index_bg.c4c4af66.jpg";

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-header",
        { attrs: { title: "首页" } },
        [
          _c(
            "router-link",
            {
              staticClass: "indexBtn",
              attrs: { slot: "left", to: "/" },
              slot: "left"
            },
            [_vm._v("首页")]
          ),
          _vm._v(" "),
          _vm.user.id
            ? _c(
                "router-link",
                { attrs: { slot: "right", to: "/signout" }, slot: "right" },
                [_vm._v("退出")]
              )
            : _c(
                "router-link",
                { attrs: { slot: "right", to: "/login" }, slot: "right" },
                [_vm._v("未登录,立即登录")]
              )
        ],
        1
      ),
      _vm._v(" "),
      !_vm.user.id
        ? _c("div", { staticClass: "login-msg" }, [
            _c("div", [_vm._v("\n\t\t\t\tindex 首页\n\t\t")])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.user.id
        ? _c("div", { staticClass: "msg" }, [
            _c("div", [
              _c("img", { attrs: { width: "50", src: _vm.logo, alt: "" } }),
              _vm._v(" "),
              _c("br"),
              _vm._v(
                "\n\t\t\t\tVue2 欢迎: " +
                  _vm._s(_vm.user.name) +
                  " id: " +
                  _vm._s(_vm.user.id) +
                  "\n\t\t"
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "con" }, [_c("v-index_list")], 1)
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1b59afd6", esExports)
  }
}

/***/ })

});